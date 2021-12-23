import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 bg-emerald-500 text-white">
      <nav className="w-11/12 mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <a>
              <h1 className="font-black text-2xl tracking-wide">pharmer</h1>
            </a>
          </Link>
        </div>
        <ul className="flex font-medium">
          <li className="mx-8">
            <Link href="/">
              <a className="tracking-wide hover:underline duration-500">
                Market
              </a>
            </Link>
          </li>
          <li className="mx-8">
            <Link href="/">
              <a className="tracking-wide hover:underline duration-500">
                Current Prices
              </a>
            </Link>
          </li>
          <li className="mx-8">
            <Link href="/">
              <a className="tracking-wide hover:underline duration-500">News</a>
            </Link>
          </li>
        </ul>

        <div className="inline-flex items-center">
          <form>
            {/* <input type="text" name="search-input" id="search-input" /> */}
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
