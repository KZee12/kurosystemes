import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import kurologo from "./assets/KuroLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },

    { to: "/offering", label: "Offerings" },
    { to: "/successtories", label: "Success Stories" },
    { to: "/careers", label: "Careers" },
    { to: "/contactus", label: "Contact Us →" },
  ];

  const handleLogoClick = () => navigate("/");

  const commonBtnClasses =
    "px-5 py-2 rounded-full text-base font-bold flex items-center justify-center shadow-sm";

  return (
    <nav className="w-full bg-gray-950 shadow-md fixed top-0 left-0 z-50">
      {" "}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-4 md:px-10 relative">
        <div
          onClick={handleLogoClick}
          className="cursor-pointer absolute left-0 md:left-4"
        >
          <img
            src={kurologo}
            alt="Logo"
            className="h-[50px] w-auto object-contain"
          />
        </div>
        <div className="w-[90px] md:w-[100px]" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 bg-gray-950 px-6 py-2 rounded-full shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] opacity-90 ml-12">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? `${commonBtnClasses} bg-[#d5d5d5] opacity-80 shadow-[inset_0_0_8px_rgba(200,200,255,1)]  text-black `
                  : `px-4 py-2 rounded-full text-base font-bold text-gray-300 hover:text-red-400 hover:font-bold`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-gray-900 shadow-inner space-y-3 rounded-b-lg">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? `${commonBtnClasses} block w-full bg-blue-500 text-white hover:bg-blue-700`
                  : `block text-base font-medium w-full px-4 py-2 rounded-full text-gray-300 hover:text-red-400 hover:bg-gray-800`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
