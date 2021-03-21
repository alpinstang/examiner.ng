import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white z-50 relative text-center md:text-left w-full">
        <div className="container mx-auto px-8 bg-white">
          <div className="w-full flex flex-col md:flex-row md:py-6">
            <div className="flex-1 mb-2 md:mb-6 text-black">
              <a
                className="text-examiner-700 no-underline hover:no-underline font-bold text-lg lg:text-2xl"
                href="#"
              >
                EXAMINER.NG
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Links</p>
              <ul className="list-reset mb-0 md:mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/faq">
                    <a className="no-underline hover:underline text-gray-800 hover:text-pink-500">
                      FAQ
                    </a>
                  </Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/about">
                    <a className="no-underline hover:underline text-gray-800 hover:text-pink-500">
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/faq">
                    <a className="no-underline hover:underline text-gray-800 hover:text-pink-500">
                      Support
                    </a>
                  </Link>
                </li>
                <li className="md:hidden mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Terms
                  </a>
                </li>
                <li className="md:hidden mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 hidden md:block">
              <p className="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul className="list-reset mb-2 md:mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="hidden md:block uppercase text-gray-500 mb-0 md:mb-6">
                Social
              </p>
              <ul className="list-reset mb-0 md:mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="hidden md:block uppercase text-gray-500 md:mb-6">
                Company
              </p>
              <ul className="list-reset mb-2 md:mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/blog">
                    <a className="no-underline hover:underline text-gray-800 hover:text-pink-500">
                      Official Blog
                    </a>
                  </Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/about">
                    <a className="no-underline hover:underline text-gray-800 hover:text-pink-500">
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="/about">
                    <a className="no-underline hover:underline text-gray-800 hover:text-pink-500">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-examiner-700 text-white w-full">
          <div className="container mx-auto text-center py-4 mt-4">
            <p>&copy; {currentYear} Examiner.ng | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
