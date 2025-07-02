import React from "react";
import industry from "../assets/Industry4.gif";

const Card = ({ img = industry, text = "Custom Development" }) => (
  <div className="w-1/2 sm:w-1/2 lg:w-1/4 px-2 mb-4">
    <div className="group  bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-[0_10px_15px_-3px_rgba(59,130,246,0.3)] hover:-translate-y-2">
      <div className="relative h-40 sm:h-48 w-full overflow-hidden mt-3">
        <img
          src={img}
          alt={text}
          className="w-full h-full object-contain object-center transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-3 sm:p-4 text-center h-16 sm:h-20 flex items-center justify-center">
        <p className="text-base sm:text-lg font-semibold text-gray-200">
          {text}
        </p>
      </div>
    </div>
  </div>
);

export default Card;
