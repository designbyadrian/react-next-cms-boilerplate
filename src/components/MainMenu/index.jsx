import Link from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom,
  faBomb,
  faCoffee,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function MainMenu() {
  return (
    <aside className="fixed bottom-0 pt-12 md:h-screen z-10 w-full md:w-48 bg-white">
      <Link href="/">
        <FontAwesomeIcon icon={faTachometerAlt} fixedWidth /> Dashboard
      </Link>
      <Link href="/article/1">
        <FontAwesomeIcon icon={faAtom} fixedWidth /> Article 1
      </Link>
      <Link href="/article/42">
        <FontAwesomeIcon icon={faCoffee} fixedWidth /> Article 42
      </Link>
      <Link href="/article/1001">
        <FontAwesomeIcon icon={faBomb} fixedWidth /> Article 1001
      </Link>
    </aside>
  );
}
