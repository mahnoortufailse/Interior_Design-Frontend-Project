import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-300 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-60">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:w-[1000px]">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-gray-100">Interno</span>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-white dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5 me-1"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`relative hidden md:block ${isOpen ? 'block' : 'hidden'}`}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className={`items-end w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-search">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black rounded   md:hover:text-[#CDA274] md:p-0 dark:text-white dark:hover:text-[#CDA274]  font-normal transition-colors duration-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-black rounded   md:hover:text-[#CDA274] md:p-0 dark:text-white dark:hover:text-[#CDA274] md:dark:hover:bg-transparent font-normal transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 px-3 text-black rounded   md:hover:text-[#CDA274] md:p-0 dark:text-white dark:hover:text-[#CDA274] md:dark:hover:bg-transparent font-normal transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/projects/*"
                className="block py-2 px-3 text-black rounded   md:hover:text-[#CDA274] md:p-0 dark:text-white dark:hover:text-[#CDA274] md:dark:hover:bg-transparent font-normal transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded   md:hover:text-[#CDA274] md:p-0 dark:text-white dark:hover:text-[#CDA274] md:dark:hover:bg-transparent font-normal transition-colors duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black rounded   md:hover:text-[#CDA274] md:p-0 dark:text-white dark:hover:text-[#CDA274] md:dark:hover:bg-transparent font-normal transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
