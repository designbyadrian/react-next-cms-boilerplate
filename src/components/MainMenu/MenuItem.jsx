import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

export default function MenuItem({ children, href = '/' }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={cx('block p-3', {
          'text-blue-400': router.asPath === href,
        })}
      >
        {children}
      </a>
    </Link>
  );
}
