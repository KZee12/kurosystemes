import React, { useState, useEffect } from "react";
import {
  FaProjectDiagram,
  FaNetworkWired,
  FaStream,
  FaCloud,
  FaCogs,
  FaCubes,
  FaEye,
} from "react-icons/fa";
import Offer from "../assets/offerban.jpg";
import CloudAndEdge from "../assets/cloudandEdge.jpg";
import DigitalTwin from "../assets/DigitalTwin.jpg";
import ITOT from "../assets/IT-OT-Integration-2.png";
import Trace from "../assets/Traceability.jpg";
import Gantry2D from "../assets/2d.jpg";
import Gantry3D from "../assets/3d.jpg";
import vision2 from "../assets/visioninspection.jpg";

const Offerings = () => {
  const [hoveredOffering, setHoveredOffering] = useState(null);

  const offerings = [
    {
      title: "End-to-End traceability",
      id: "end-to-end-traceability",
      icon: <FaStream className="inline mr-2 text-blue-600/80 text-2xl" />,
      shortInfo: "Full supply chain visibility and tracking.",
      summary:
        "Achieve complete traceability across your supply chain with our advanced tracking systems, ensuring transparency, compliance, and product quality.",
      image: Trace,
    },
    {
      title: "IT-OT Integration",
      id: "it-ot-integration",
      icon: (
        <FaNetworkWired className="inline mr-2 text-blue-600/80 text-2xl" />
      ),
      shortInfo: "Bridging IT and Operational Tech seamlessly.",
      summary:
        "Seamlessly bridge the gap between Information Technology and Operational Technology for unified, smart manufacturing processes and efficient data flow.",
      image: ITOT,
    },
    {
      title: "Digital Twin",
      id: "digital-twin",
      icon: (
        <FaProjectDiagram className="inline mr-2 text-blue-600/80 text-2xl" />
      ),
      shortInfo: "Real-time replicas for predictive maintenance.",
      summary:
        "Our Digital Twin solutions offer real-time replicas of your physical systems, enabling predictive maintenance, simulation, and smarter decision-making.",
      image: DigitalTwin,
    },
    {
      title: "Cloud & Edge",
      id: "cloud-edge",
      icon: <FaCloud className="inline mr-2 text-blue-600/80 text-2xl" />,
      shortInfo: "Power of cloud + speed of edge.",
      summary:
        "Harness the combined power of cloud scalability and edge computing for real-time analytics, reduced latency, and decentralized operations.",
      image: CloudAndEdge,
    },
  ];

  const robotics = [
    {
      title: "2D-Gantry",
      id: "2d-gantry",
      icon: <FaCogs className="inline mr-2 text-blue-600/80 text-2xl" />,
      shortInfo: "Precision motion in two dimensions.",
      summary:
        "Our 2D-Gantry systems offer accurate and reliable movement across two axes, ideal for tasks like pick-and-place, inspection, and material handling.",
      image: Gantry2D,
    },
    {
      title: "3D-Gantry",
      id: "3d-gantry",
      icon: <FaCubes className="inline mr-2 text-blue-600/80 text-2xl" />,
      shortInfo: "Full 3-axis motion for advanced automation.",
      summary:
        "3D-Gantry solutions provide comprehensive motion in three dimensions, perfect for complex assembly lines and high-precision manufacturing.",
      image: Gantry3D,
    },
  ];

  const vision = [
    {
      title: "Vision Inspection",
      id: "vision-inspection",
      icon: <FaEye className="inline mr-2 text-blue-600/80 text-2xl" />,
      shortInfo: "Advanced visual quality control.",
      summary:
        "Our vision inspection systems provide high-precision quality control, detecting defects and ensuring product consistency with advanced imaging technology.",
      image: vision2,
    },
  ];

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            document.querySelectorAll(".highlighted-card").forEach((el) => {
              el.classList.remove("highlighted-card");
            });

            element.classList.add("highlighted-card");

            const yOffset = -100;
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;

            window.scrollTo({
              top: y,
              behavior: "smooth",
            });

            setTimeout(() => {
              element.classList.remove("highlighted-card");
            }, 3000);
          }
        }, 300);
      }
    };

    handleHashNavigation();

    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

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
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      .circle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        mix-blend-mode: screen;
        background-image: radial-gradient(
          hsl(180, 100%, 80%),
          hsl(180, 100%, 80%) 10%,
          hsla(180, 100%, 80%, 0) 56%
        );
        animation: fade-frames 200ms infinite, scale-frames 2s infinite;
      }
      @keyframes fade-frames {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
      }
      @keyframes scale-frames {
        0% { transform: scale3d(0.4, 0.4, 1); }
        50% { transform: scale3d(2.2, 2.2, 1); }
        100% { transform: scale3d(0.4, 0.4, 1); }
      }
      @keyframes pulseOnce {
        0% { transform: scale(0.95); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      .animate-pulse-once {
        animation: pulseOnce 0.5s ease-in-out;
      }
      @keyframes highlight {
        0% { 
          transform: scale(1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        25% { 
          transform: scale(1.05);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.6), 0 25px 50px -12px rgba(59, 130, 246, 0.4);
        }
        50% { 
          transform: scale(1.02);
          box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.4), 0 25px 50px -12px rgba(59, 130, 246, 0.3);
        }
        75% { 
          transform: scale(1.05);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.6), 0 25px 50px -12px rgba(59, 130, 246, 0.4);
        }
        100% { 
          transform: scale(1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
      }
      .highlighted-card {
        animation: highlight 3s ease-in-out;
        z-index: 50 !important;
        position: relative;
      }
      @keyframes smoothExpand {
        0% { transform: scale(1); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .smooth-expand {
        animation: smoothExpand 0.5s ease-in-out;
      }
      @keyframes lineAppear {
        0% { transform: translateY(10px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      .line-appear {
        display: inline-block;
        opacity: 0;
        animation: lineAppear 0.3s ease-out forwards;
      }
      .line-appear:nth-child(1) { animation-delay: 0.1s; }
      .line-appear:nth-child(2) { animation-delay: 0.2s; }
      .line-appear:nth-child(3) { animation-delay: 0.3s; }
      .line-appear:nth-child(4) { animation-delay: 0.4s; }
      .section-heading {
        padding: 1rem 2rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: inline-block;
        background-clip: text;
      }
      @font-face {
        font-family: 'Cursive';
        src: url('https://fonts.cdnfonts.com/s/17863/GreatVibes-Regular.woff') format('woff');
      }
      @font-face {
        font-family: 'Handwriting';
        src: url('https://fonts.cdnfonts.com/s/17863/DancingScript-Regular.woff') format('woff');
      }
      .font-cursive {
        font-family: 'Cursive', cursive;
      }
      .font-handwriting {
        font-family: 'Handwriting', cursive;
      }
      ${Array.from({ length: 50 }, (_, i) => {
        const circleSize = Math.random() * 10;
        const startPositionY = Math.random() * 10 + 100;
        const moveDuration = 7000 + Math.random() * 4000;
        const moveDelay = Math.random() * 11000;
        const circleDelay = Math.random() * 4000;
        return `
          .circle-container:nth-child(${i + 1}) {
            width: ${circleSize}px;
            height: ${circleSize}px;
            animation: move-frames-${i} ${moveDuration}ms linear ${moveDelay}ms infinite;
          }
          .circle-container:nth-child(${i + 1}) .circle {
            animation-delay: ${circleDelay}ms;
          }
          @keyframes move-frames-${i} {
            from {
              transform: translate3d(${
                Math.random() * 100
              }vw, ${startPositionY}vh, 0);
            }
            to {
              transform: translate3d(${Math.random() * 100}vw, ${
          -startPositionY - Math.random() * 30
        }vh, 0);
            }
          }
        `;
      }).join("")}
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const renderCards = (dataArray, sectionName) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {dataArray.map(
        ({ title, id, icon, summary, image, shortInfo }, index) => {
          const uniqueId = `${sectionName}-${title}`;
          return (
            <div
              key={index}
              id={id}
              onMouseEnter={() => setHoveredOffering(uniqueId)}
              onMouseLeave={() => setHoveredOffering(null)}
              className={`transition-all duration-500 overflow-hidden cursor-pointer 
              bg-white/20 backdrop-blur-xl border border-white/30
              p-6 rounded-xl shadow-2xl hover:shadow-2xl hover:bg-white/25
              ${
                hoveredOffering === uniqueId ? "min-h-[250px]" : "min-h-[100px]"
              } mb-6
              transform hover:scale-[1.02] hover:-translate-y-1 scroll-mt-24 relative`}
              style={{
                transitionProperty:
                  "min-height, transform, opacity, background-color, box-shadow",
                transitionDuration: "0.5s",
                transitionTimingFunction: "ease-in-out",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              <h2 className="text-xl font-semibold text-white flex items-center mb-3 drop-shadow-lg">
                {icon}
                {title}
              </h2>
              {hoveredOffering !== uniqueId && (
                <p className="text-gray-300 text-lg transition-transform ease-linear font-medium drop-shadow-sm">
                  {shortInfo}
                </p>
              )}
              {hoveredOffering === uniqueId && (
                <div className="mt-4 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    {summary.split(". ").map(
                      (sentence, idx) =>
                        sentence && (
                          <p
                            key={idx}
                            className="text-gray-300 text-base leading-relaxed line-appear font-medium drop-shadow-sm mb-2"
                          >
                            {sentence}
                            {sentence.endsWith(".") ? "" : "."}
                          </p>
                        )
                    )}
                  </div>
                  <div className="w-full md:w-auto h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={`${title} Illustration`}
                      className="w-full h-full object-cover overflow-hidden rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative bg-cover object-cover bg-center min-h-[70vh] w-full flex items-center justify-start px-6 md:px-16"
        style={{ backgroundImage: `url(${Offer})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="pt-4 relative z-10 text-white max-w-4xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-6  ">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Offerings
            </span>
            <div className=" mt-2 ml-1  w-24 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-800 mx-auto rounded-full" />
          </h1>

          <p className="text-base md:text-xl drop-shadow-md">
            Explore our innovative solutions designed to elevate your business
            efficiency and performance.
          </p>
        </div>
      </div>
      <main className="flex-grow pt-8 px-4 md:px-0 relative">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="circle-container">
            <div className="circle" />
          </div>
        ))}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-bold text-4xl text-white mb-8 section-heading">
              Industry 4.0
              <div className="ml-0 mt-3 w-20 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </h2>
            {renderCards(offerings, "industry")}
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16">
            <h2 className="font-bold text-4xl text-white mb-8 section-heading">
              Robotics
              <div className="ml-0 mt-3 w-20 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </h2>
            {renderCards(robotics, "robotics")}
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16 pb-16">
            <h2 className="font-bold text-4xl text-white mb-8 section-heading">
              Factory Vision
              <div className="ml-0 mt-3 w-20 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </h2>
            {renderCards(vision, "vision")}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Offerings;
