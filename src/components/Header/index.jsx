import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import Search from 'components/GlobalSearch';
import UserMenu from 'components/UserMenu';

export default function Header() {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
        <span className="sr-only">Open sidebar</span>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <Search />
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">View notifications</span>
            <FontAwesomeIcon icon={faBell} />
          </button>

          {/* Profile dropdown */}
          <div className="ml-3 relative">
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
