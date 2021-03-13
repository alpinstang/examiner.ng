import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import DropdownNav from "./dropdown";

export default function IndexPage() {
  const [active, setActive] = useState(false);
  const auth = useAuth();

  const handleClick = () => {
    console.log("click", active);
    if (active) {
      setTimeout(() => {
        setActive(!active);
      }, 400);
      return;
    }
    setActive(!active);
    return active;
  };

  return (
    <div className="fixed z-50 h-20 w-full bg-examiner-800 p-3 border-t-0 border-l-0 border-r-0 border-b border-gray-800 shadow-lg shadow-gray-800">
      <nav className="relative container flex items-center flex-wrap mx-auto">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 relative">
            <div className="absolute w-12 top-0 pt-1">
              <Image
                src="/static/examiner-logo-white.png"
                alt="examiner.ng"
                layout="responsive"
                width="50px"
                height="50px"
              />
            </div>
            <span className="ml-16 md:text-3xl text-2xl text-white font-bold uppercase tracking-wide">
              Examiner.ng
            </span>
          </a>
        </Link>
        <button
          type="button"
          className=" inline-flex p-3 hover:bg-examiner-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "block" : "hidden"
          } absolute top-14 mt-3 md:top-0 md:mt-0 md:relative shadow-md md:shadow-none md:bg-transparent bg-gray-100 w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div
            onClick={handleClick}
            className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
          >
            <Link href="/store">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 md:text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                Store
              </a>
            </Link>
            <Link href="/exams">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 md:text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Exams List
              </a>
            </Link>
            <div className="hidden md:block">
              <DropdownNav />
            </div>
            <div className="block md:hidden pt-2">
              <Link href="/about-us">
                <a
                  className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 md:text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
                  role="menuitem"
                >
                  About Us
                </a>
              </Link>

              <Link href="/blog">
                <a
                  role="menuitem"
                  className="w-36 block px-4 py-2 text-sm text-gray-700 hover:bg-examiner-200 hover:text-gray-900"
                >
                  Official Blog
                </a>
              </Link>
              <Link href="/help" as="/support">
                <a
                  role="menuitem"
                  className="w-36 block px-4 py-2 text-sm text-gray-700 hover:bg-examiner-200 hover:text-gray-900"
                >
                  Support
                </a>
              </Link>
              <Link href="/contact-us" as="/contact-us">
                <a
                  role="menuitem"
                  className="w-36 block px-4 py-2 text-sm text-gray-700 hover:bg-examiner-200 hover:text-gray-900"
                >
                  Contact Us
                </a>
              </Link>
            </div>

            {!auth.user ? (
              <Link href="/login">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 md:text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                  Log In
                </a>
              </Link>
            ) : (
              <Link href="/user/dashboard">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 md:text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                  Profile
                </a>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
