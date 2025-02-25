import { FiBookOpen } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { navItems } from "../../constants/navbarData";
import type { NavbarSchema } from "../../types/types";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // Get the current location

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Adding event listener on mount and removing on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 z-50 flex h-[8ch] w-full items-center justify-between px-4 backdrop-blur-sm transition-all duration-300 ease-in-out sm:px-10 md:px-16 ${
        isScrolled
          ? "border-b border-neutral-200 bg-sky-50/30"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 pr-0 md:pr-16">
        <Link
          to="/"
          className="flex items-center gap-x-2 text-lg font-semibold text-sky-700"
        >
          <FiBookOpen size={24} />
          LearnHub
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={toggleNavbar}
          className="text-neutral-600 focus:outline-none"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Navbar items and buttons */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-full flex-1 transform border-l border-neutral-300 bg-sky-50 shadow-lg transition-transform duration-300 ease-in-out md:static md:h-auto md:w-auto md:translate-x-0 md:border-none md:bg-transparent md:shadow-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo and close icon Inside Toggle Menu */}
        <div className="flex w-full items-center justify-between px-4 md:hidden">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-x-2 text-lg font-semibold text-sky-700"
          >
            <FiBookOpen size={24} />
            LearnHub
          </Link>

          {/* Close Icon */}
          <div className="flex justify-end py-6 md:hidden">
            <button
              type="button"
              onClick={toggleNavbar}
              className="text-red-600 focus:outline-none"
            >
              <IoMdClose size={28} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-300 md:hidden">
          {/* Divider */}
        </div>

        {/* Navbar items and Buttons */}
        <div className="flex flex-1 flex-col items-center justify-between gap-6 p-6 md:flex-row md:p-0">
          {/* Navbar items */}
          <ul className="flex flex-col items-center gap-4 text-lg font-medium text-neutral-700 md:flex-row md:gap-7 md:text-base md:font-normal">
            {navItems?.map((item: NavbarSchema) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={closeNavbar}
                  className={`duration-300 ease-in-out hover:text-sky-700 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-indigo-500 via-sky-700 to-purple-700 bg-clip-text font-semibold text-transparent"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Link
              to="/signin"
              className="w-fit cursor-pointer rounded-full bg-transparent from-indigo-500 via-sky-700 to-purple-700 px-6 py-2 text-xl font-medium text-neutral-800 transition-colors duration-200 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent md:text-base"
            >
              Sign In
            </Link>
            <button
              type="button"
              className="w-fit cursor-pointer rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-700 via-20% to-purple-700 px-6 py-2 text-base font-semibold text-neutral-50 duration-300 ease-in-out hover:bg-gradient-to-tl"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
