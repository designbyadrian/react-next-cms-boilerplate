import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

export default function MenuItem({ children, href = '/' }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={cx(
          'group flex items-center px-2 py-2 text-base font-medium rounded-md',
          {
            'text-gray-600 hover:bg-gray-50 hover:text-gray-900':
              router.asPath !== href,
            'bg-gray-100 text-gray-900': router.asPath === href,
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
}
