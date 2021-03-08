import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function GlobalSearch() {
  return (
    <form className="w-full flex md:ml-0" action="#" method="GET">
      <label for="search_field" className="sr-only">
        Search
      </label>
      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          id="search_field"
          className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
          placeholder="Search"
          type="search"
          name="search"
        />
      </div>
    </form>
  );
}
