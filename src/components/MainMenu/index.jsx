import Link from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom,
  faBomb,
  faCoffee,
  faTable,
  faTachometerAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export default function MainMenu() {
  return (
    <>
      {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
      <div className="md:hidden">
        <div className="fixed inset-0 flex z-40">
          {/*
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      */}
          <div className="fixed inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          {/*
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Close sidebar</span>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center px-4">
              <h1>Next CMS</h1>
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2 space-y-1">
                <Link href="/">
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    fixedWidth
                    className="mr-1"
                  />{' '}
                  Dashboard
                </Link>

                <Link href="/article/1">
                  <FontAwesomeIcon icon={faAtom} fixedWidth className="mr-1" />{' '}
                  Article 1
                </Link>

                <Link href="/article/42">
                  <FontAwesomeIcon
                    icon={faCoffee}
                    fixedWidth
                    className="mr-1"
                  />{' '}
                  Article 42
                </Link>

                <Link href="/article/404">
                  <FontAwesomeIcon icon={faBomb} fixedWidth className="mr-1" />{' '}
                  Article 404
                </Link>

                <Link href="/table">
                  <FontAwesomeIcon icon={faTable} fixedWidth className="mr-1" />{' '}
                  Table
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div data-id="nav?" className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="font-mono text-lg font-bold">Next CMS</h1>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 bg-white space-y-1">
                <Link href="/">
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    fixedWidth
                    className="mr-1"
                  />{' '}
                  Dashboard
                </Link>

                <Link href="/article/1">
                  <FontAwesomeIcon icon={faAtom} fixedWidth className="mr-1" />{' '}
                  Article 1
                </Link>

                <Link href="/article/42">
                  <FontAwesomeIcon
                    icon={faCoffee}
                    fixedWidth
                    className="mr-1"
                  />{' '}
                  Article 42
                </Link>

                <Link href="/article/404">
                  <FontAwesomeIcon icon={faBomb} fixedWidth className="mr-1" />{' '}
                  Article 404
                </Link>

                <Link href="/table">
                  <FontAwesomeIcon icon={faTable} fixedWidth className="mr-1" />{' '}
                  Table
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
