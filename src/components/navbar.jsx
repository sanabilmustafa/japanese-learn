'use client'
import React, { useState } from 'react'

const Navbar = ({color}) => {
   const [drop, setDrop] = useState(false)
   const [navExpand, setNavExpand] = useState(false)
  return (
    <div className='w-full'>
        <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Japanese</span>
            </a>
            <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                    </li>
                    <li>
                    <button onClick={() => setDrop(() => !drop)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={`flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-${color}-400 md:p-0 md:w-auto`}>Dropdown <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></button>
                            {/* <!-- Dropdown menu --> */}
                              <div id="dropdownNavbar" className={`z-10 ${drop ? 'absolute' : 'hidden'}  hover:absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                  <li>
                                      <a href="#" className="block px-4 py-2 hover:bg-gray-100text-white hover:bg-gray-200">Dashboard</a>
                                  </li>
                                  <li>
                                      <a href="#" className="block px-4 py-2 hover:bg-gray-100text-white hover:bg-gray-200">Settings</a>
                                  </li>
                                  <li>
                                      <a href="#" className="block px-4 py-2 hover:bg-gray-100text-white hover:bg-gray-200">Earnings</a>
                                  </li>
                                  </ul>
                                  <div className="py-1">
                                  <a href="#" className={`block px-4 py-2 text-sm text-${color}-400 hover:bg-gray-100`}>Sign out</a>
                                  </div>
                              </div>
                          </li>
                          <li>
                          <a href="/writing" className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-${color}-400 md:p-0 `}>Write</a>
                          </li>
                          <li>
                          <a href="/flash-cards" className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-${color}-400 md:p-0 `}>Flash Cards</a>
                          </li>
                          <li>
                          <a href="/contact" className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-${color}-400 md:p-0`}>Contact</a>
                          </li>
        </ul>
        </div>
        </div>
        </nav>


    </div>
  )
}

export default Navbar

