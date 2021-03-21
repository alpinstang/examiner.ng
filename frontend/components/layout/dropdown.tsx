import Link from "next/link";
import React from "react";
import { useState } from "react";

const DropdownNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
        className="relative inline-block text-left"
      >
        <div>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className={`${
              open ? "bg-gray-200 text-gray-800" : "text-white"
            } rounded-lg rounded-b-none rounded-br-0 inline-flex justify-center w-full px-3 py-2 font-bold hover:text-gray-800 hover:rounded-lg`}
            id="options-menu"
            aria-haspopup="true"
          >
            Learn More
            <svg
              className="-mr-1 ml-2 mt-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={open ? "absolute top-9 right-0" : "hidden"}
          aria-labelledby="options-menu"
        >
          <div className="bg-gray-100 rounded-md top-rounded-lg">
            <div className="py-1 min-w-full">
              <Link href="/about-us">
                <a
                  role="menuitem"
                  className="w-36 block px-4 py-2 text-sm text-gray-700 hover:bg-examiner-200 hover:text-gray-900"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownNav;
