

import React, { useState } from "react";
import mainLogo from "../../assets/logo.png";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const ContributeButton = (
    <a
      href="https://github.com/zahidulhasansakib"
      target="_blank"
      rel="noopener noreferrer"
      className="btn text-lg font-normal md:font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-none px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto">
      <FaGithub />
      Contribute
    </a>
  );

  const navbarLink = (
    <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-2 py-1 text-lg font-normal md:font-semibold transition-colors ${
            isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
          }`
        }>
        Home
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `px-2 py-1 text-lg font-normal md:font-semibold transition-colors ${
            isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
          }`
        }>
        Apps
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          `px-2 py-1 text-lg font-normal md:font-semibold transition-colors ${
            isActive ? "text-[#632EE3] font-bold" : "hover:text-[#632EE3]"
          }`
        }>
        Installation
      </NavLink>
    </div>
  );

  return (
    <div className="shadow-sm bg-white">
      <Container>
        <div className="navbar py-3 sm:py-4 px-4 sm:px-6 lg:px-8 relative">
          {/* Logo */}
          <div className="navbar-start">
            <NavLink
              to="/"
              className="cursor-pointer text-xl flex items-center gap-2">
              <figure className="w-10 h-10">
                <img
                  className="w-full h-full object-contain"
                  src={mainLogo}
                  alt="Website Main logo"
                />
              </figure>
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                AppVibe
              </span>
            </NavLink>
          </div>

          {/* Desktop menu */}
          <div className="navbar-center hidden lg:flex">{navbarLink}</div>

          {/* Right Side */}
          <div className="navbar-end flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex">{ContributeButton}</div>

            {/* Hamburger Icon for Mobile/Tablet */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden text-2xl focus:outline-none">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border shadow-md py-4 px-4 flex flex-col sm:hidden z-50">
              {navbarLink}
              <div className="mt-3">{ContributeButton}</div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
