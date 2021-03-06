import { useEffect, useState } from 'react';
import Router from 'next/router';
import cx from 'classnames';

import { IDLE, PENDING, ERROR } from 'constants/states';

export default function PageLoader() {
  const [progress, setProgress] = useState(IDLE);
  let timer;

  useEffect(() => {
    Router.onRouteChangeStart = (url) => {
      /* Don't show loader if loading takes less than a second */
      timer = setTimeout(() => {
        setProgress(PENDING);
      }, 1000);
    };

    Router.onRouteChangeComplete = () => {
      clearTimeout(timer);
      setProgress(IDLE);
    };

    Router.onRouteChangeError = () => {
      clearTimeout(timer);
      setProgress(ERROR);
    };
  }, []);

  return (
    <div
      className={cx('absolute top-1/2 left-1/2 z-50', {
        hidden: progress !== PENDING,
        block: progress === PENDING,
      })}
    >
      LOADING
    </div>
  );
}
