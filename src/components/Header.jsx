import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="bg-sky-600 lg:py-8">
        <div className="px-4 mx-auto w-screen sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div className="flex-shrink-0">
              <a href="/" title="" className="flex">
                <img
                  className="w-auto h-24 lg:h-18"
                  src="https://cirrusnova.com/images/branding/fs-timetracker.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Features{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Solutions{" "}
              </a>
              <a
                href="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Resources{" "}
              </a>
              <Link
                to={`projects`}
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Projects
              </Link>{" "}
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link
                to="/signup"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Sign Up
              </Link>{" "}
              <Link
                to="/login"
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                Login
              </Link>{" "}
            </div>
          </nav>

          <nav className="flex flex-col py-4 space-y-2 lg:hidden">
            <a
              href="#"
              title=""
              className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Features{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Solutions{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Resources{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Pricing{" "}
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
