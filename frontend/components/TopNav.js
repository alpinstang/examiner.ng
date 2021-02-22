import React from "react";
import Link from "next/link";
// import ThemeToggle from "./themeToggle";

import { config } from "../config/config";
import ToggleNightMode from "./ToggleNightMode";

const NavigationBar = ({ title = config.appName, children }) => (
  <header className="text-white dark:text-gray-100 bg-green-700 dark:bg-green-900 body-font shadow w-full mb-6">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-5xl">
      <a className="flex order-first title-font font-medium items-center mb-4 md:mb-0">
        <img className="w-12 mt-2 mb-2" src="/favicon.png" alt="logo" />

        <span className="ml-3 text-xl">{title}</span>
      </a>
      <nav className="flex items-center text-base mx-auto">
        <a className="ml-2 mr-2 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
          Exams
        </a>
        <a className="ml-2 mr-2 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
          About
        </a>
        <a className="ml-2 mr-2 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
          Contact
        </a>
        <a className="md:hidden ml-2 mr-2 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
          Sign In
        </a>
        <ToggleNightMode>☀</ToggleNightMode>
      </nav>
      <div className="hidden md:block inline-flex md:ml-5 lg:ml-0">
        <Link href="/login">
          <button className="bg-green-800 hover:bg-green-500 text-white border border-green-900 mt-4 md:mt-0 md:ml-4 py-2 px-3 rounded-lg">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  </header>
);

export default NavigationBar;
