import { useState } from 'react';
import { useSession } from 'next-auth/client';
import cx from 'classnames';

export default function UserMenu() {
  const [session] = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return session ? (
    <>
      <div>
        <button
          type="button"
          className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="user-menu"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={session.user.image}
            alt=""
          />
        </button>
      </div>

      <div
        className={cx(
          'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
          { visible: menuOpen, hidden: !menuOpen }
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Your Profile
        </a>

        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Settings
        </a>

        <a
          href="/api/auth/signout"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Sign out
        </a>
      </div>
    </>
  ) : null;
}

// <a className="block" href="/api/auth/signout">
//   <img className="rounded-full h-8" src={session.user.image} />
// </a>
