import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cyan-800 rounded-lg shadow-md m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center font-light">
          © 2024 <span className="hover:text-teal-500 duration-100">Belidong Market™</span>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/">
              <h1 className="text-sm text-center font-light text-white hover:text-teal-500 duration-100 me-4 md:me-6">Catalog</h1>
            </Link>
          </li>
          <li>
            <Link href="/weather">
              <h1 className="text-sm text-center font-light text-white hover:text-teal-500 duration-100 me-4 md:me-6">Weather</h1>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
