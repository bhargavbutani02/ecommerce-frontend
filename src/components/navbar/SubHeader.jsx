import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Best Sellers", href: "#" },
    { name: "Products", href: "#" },
    { name: "Brand", href: "#" },
    { name: "Outlet", href: "#" },
    { name: "Offers", href: "#" },
    { name: "Our Story", href: "#" },
  ];
  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="absolute z-10 w-full bg-white shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
