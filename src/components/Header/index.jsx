import Link from 'next/link';
import UserMenu from 'components/UserMenu';

export default function Header() {
  return (
    <header className="h-12 leading-loose fixed w-full z-20 top-0 flex justify-items-start p-2 bg-white shadow">
      <Link href="/">
        <a className="inline-block">Next CMS</a>
      </Link>
      <div className="ml-auto">
        <UserMenu />
      </div>
    </header>
  );
}
