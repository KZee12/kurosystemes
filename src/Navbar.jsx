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

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (to) => {
    navigate(to);
    // this ensure when i change the page click on any other navlink to refresh page and start from top of page
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const commonBtnClasses =
    "px-5 py-2 rounded-full text-base font-bold flex items-center justify-start shadow-sm";

  return (
    <>
      <style jsx>{`
        .hamburgers {
          justify-content: center;
          align-items: center;
        }
        .hamburger {
          cursor: pointer;
          padding-bottom: 3px;
          position: relative;
        }
        .hamburger input {
          position: absolute;
          width: 100%;
          height: 100%;
          margin: 0;
          cursor: pointer;
          opacity: 0;
          z-index: 2;
        }
        .bar {
          display: block;
          width: 30px;
          height: 3px;
          margin: 6px auto;
          border-radius: 40px;
          transition: all 0.3s cubic-bezier(0.37, -1.11, 0.79, 2.02);
          background-color: #ffffff;
        }
        .hamburger input:checked ~ .bar:nth-child(2) {
          transform: translateY(9.5px) rotate(45deg);
        }
        .hamburger input:checked ~ .bar:nth-child(3) {
          opacity: 0;
        }
        .hamburger input:checked ~ .bar:nth-child(4) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}</style>

      <nav className="w-full bg-gray-950 shadow-md fixed top-0 left-0 z-50">
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
                onClick={() => handleLinkClick(to)}
                className={({ isActive }) =>
                  isActive
                    ? `${commonBtnClasses} bg-[#d5d5d5] opacity-80 shadow-[inset_0_0_8px_rgba(200,200,255,1)] text-black`
                    : `px-4 py-2 rounded-full text-base font-bold text-gray-300 hover:text-[#ff2400] hover:font-bold`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden hamburgers">
            <label className="hamburger">
              <input
                type="checkbox"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
              />
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </label>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 py-4 bg-gray-900 shadow-inner space-y-3 rounded-b-lg">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => handleLinkClick(to)} // Handle click with scroll
                className={({ isActive }) =>
                  isActive
                    ? `${commonBtnClasses} block w-full bg-gray-800 text-red-400`
                    : `block text-base font-medium w-full px-4 py-2 rounded-full text-gray-300 hover:text-red-400 hover:bg-gray-800`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
