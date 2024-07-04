import React from "react";
import Button from "../Button";
import logo from "../../assets/logo.svg";

const MainHeader = () => {
  return (
    <div className="bg-white z-40 shadow-xl border-b px-4 py-2">
      <header className="container mx-auto  flex items-center justify-between">
        {/* Logo */}
        <div className="w-10 h-10">
          <img src={logo} alt="" srcset="" />
        </div>

        {/* Search Bar */}
        <div className="hidden md:block">
          <div className="flex  gap-16 mx-4 ">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search for Products"
                className="w-[440px]  max-w-3xl py-2 pl-10 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex items-center space-x-4 ">
              <button className="text-gray-600 hover:text-gray-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
              <Button size={"w-[153px]"}>Get Start</Button>
            </div>
          </div>
        </div>

        {/* Right Side Icons */}
      </header>
    </div>
  );
};

export default MainHeader;
