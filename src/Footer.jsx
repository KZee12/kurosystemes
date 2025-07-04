import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "./assets/KuroLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-10">
        {/* Main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <img
              src={Logo}
              alt="Kuro Logo"
              className="mx-auto sm:mx-0 mb-1 sm:mb-2"
              style={{
                width: "100%",
                maxWidth: "260px",
                height: "auto",
              }}
            />
            <p className="text-gray-400 text-xs sm:text-sm">
              . . . striving for non‑stopping production
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-1 sm:gap-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                to="/aboutus"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/offering"
                className="hover:text-white transition-colors"
              >
                Offering
              </Link>
              <Link
                to="/successtories"
                className="hover:text-white transition-colors"
              >
                Success Stories
              </Link>
              <Link
                to="/careers"
                className="hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/contactus"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 md:mb-4">
              Social
            </h3>
            <div className="flex justify-center sm:justify-start items-center space-x-4 sm:space-x-6">
              <a
                href="https://www.linkedin.com/company/kurosystems/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-lg sm:text-xl transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@KUROSystems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-lg sm:text-xl transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="mailto:kunal.z@kurosystems.net"
                className="text-gray-400 hover:text-white text-lg sm:text-xl transition-colors"
                aria-label="Email"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-2 sm:pt-3 md:pt-4 space-y-2 sm:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; 2025 KURO Systemes LLP. All rights reserved.
          </p>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
