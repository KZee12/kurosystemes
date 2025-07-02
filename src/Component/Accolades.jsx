import React, { useEffect } from "react";
import certificate from "../assets/Accolades.jpg";
import indiaflag from "../assets/IndiaFlag.png";
import germanyflag from "../assets/germanyflag.png";

const Accolades = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-image: radial-gradient(#021027, #000000);
      }
      .circle-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
      }
      .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 600px;
        height: 600px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-image: radial-gradient(
          hsl(180, 100%, 80%),
          hsl(180, 100%, 80%) 10%,
          hsla(180, 100%, 80%, 0) 56%
        );
        mix-blend-mode: screen;
        animation: fade-frames 1.5s infinite, scale-frames 6s infinite;
      }
      @keyframes fade-frames {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      @keyframes scale-frames {
        0%, 100% { transform: translate(-50%, -50%) scale(0.6); }
        50% { transform: translate(-50%, -50%) scale(2.2); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <section className="hidden lg:block relative py-12 px-6 lg:px-20 mb-8">
        <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
              <span className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-white to-slate-500 animate-shine bg-[length:200%_auto]">
                Accolades
              </span>
            </h2>
            <div className="w-24 sm:w-32 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <img
              src={certificate}
              alt="Certificate"
              className="w-[240px] sm:w-[280px] md:w-[300px] lg:w-[360px] rounded-lg shadow-xl border border-white/30 transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
              <img
                src={indiaflag}
                alt="India Flag"
                className="w-[50px] sm:w-[70px] md:w-[80px] h-auto"
                loading="lazy"
              />
              <span className="text-white text-3xl sm:text-4xl md:text-5xl">
                🤝
              </span>
              <img
                src={germanyflag}
                alt="Germany Flag"
                className="w-[50px] sm:w-[70px] md:w-[80px] h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center mt-4">
              Fit for Partnership, GIZ, Germany
            </p>
          </div>
        </div>
      </section>

      <section className="lg:hidden relative py-6 px-4 sm:px-6 md:px-8 mb-6">
        <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-white to-slate-500 animate-shine bg-[length:200%_auto]">
                Accolades
              </span>
            </h2>
            <div className="w-24 sm:w-32 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <img
              src={certificate}
              alt="Certificate"
              className="w-[240px] sm:w-[280px] md:w-[300px] lg:w-[360px] rounded-lg shadow-xl border border-white/30 transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
              <img
                src={indiaflag}
                alt="India Flag"
                className="w-[50px] sm:w-[70px] md:w-[80px] h-auto"
                loading="lazy"
              />
              <span className="text-white text-3xl sm:text-4xl md:text-5xl">
                🤝
              </span>
              <img
                src={germanyflag}
                alt="Germany Flag"
                className="w-[50px] sm:w-[70px] md:w-[80px] h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center mt-4">
              Fit for Partnership, GIZ, Germany
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accolades;
