import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Accolades from "./Accolades";

import a from "../assets/aerial-view-business-team_53876-124515.avif";
import ABB from "../assets/Client/ABB logo.png";
import Atlas from "../assets/Client/Atlas Logo.png";
import Bajaj from "../assets/Client/Bajaj Logo.png";
import Bosch from "../assets/Client/Bosch logo.png";
import Bridgestone from "../assets/Client/Bridgestone logo.png";
import Endurance from "../assets/Client/Endurancelogo.png";
import G from "../assets/Client/G logo.png";
import Gsk from "../assets/Client/Gsk Logo.png";
import Hindustan from "../assets/Client/Hindustan Logo.png";
import IAC from "../assets/Client/IAC logo.png";
import JBM from "../assets/Client/JBM Logo.png";
import Jindal from "../assets/Client/JindalLogo.png";
import Mahindra from "../assets/Client/1.png";
import Parle from "../assets/Client/Parle Logo.png";
import Regal from "../assets/Client/Regal Logo.png";
import Siemens from "../assets/Client/Siemens logo.png";
import Supermax from "../assets/Client/Supermax logo.png";
import TDK from "../assets/Client/TDK logo.png";
import ThyssenKrupp from "../assets/Client/thyssenkrup.png";
import UnitedSpirits from "../assets/Client/United Spirits Logo.png";
import Coreimg from "../assets/YourCore.png";

const AboutUs = () => {
  const navigate = useNavigate();

  const [historyProgress, setHistoryProgress] = useState(0);
  const [historyItemsVisibility, setHistoryItemsVisibility] = useState([]);
  const historyRef = useRef(null);
  const historyItemRefs = useRef([]);

  const { ref: clientsRef, inView: clientsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: philosophyRef, inView: philosophyInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const clientLogos = [
    Mahindra,
    Siemens,
    Bajaj,
    ABB,
    Bridgestone,
    Bosch,
    Atlas,
    IAC,
    Endurance,
    G,
    Hindustan,
    Parle,
    Regal,
    Gsk,
    TDK,
    Supermax,
    ThyssenKrupp,
    UnitedSpirits,
    JBM,
    Jindal,
  ];

  const sections = [
    {
      title: "2021 – KURO Systems Founded",
      content:
        "KURO Systems was born in 2021 with a clear purpose — to empower the Indian manufacturing ecosystem, starting with a bold step into the world of refurbished robots. As a value dealer catering to the Indian MSME market, KURO began by addressing a crucial need: making reliable and cost-effective automation accessible to manufacturers who demanded performance without compromising affordability.",
    },
    {
      title: "Launched Traceability with Automotive Client",
      content:
        "Driven by a mission to make production robust, seamless, and unstoppable, KURO soon transitioned into delivering cutting-edge End-to-End Traceability solutions, beginning with a major automobile manufacturer as its very first customer. This marked a pivotal moment — KURO was no longer just a provider, but a partner in productivity.",
    },
    {
      title: "Fit for Partnership with Germany Certified",
      content:
        "Our aspirations didn't stop there. As we delved deeper into the realm of Industry 4.0, an opportunity arose to collaborate with pioneers of automation — Germany, the global benchmark for advanced manufacturing. Seizing this, KURO earned the prestigious Fit for Partnership with Germany certification, solidifying our position among the select few equipped to adopt and adapt world-class Industry 4.0 practices",
    },
    {
      title: "Industry 4.0 Solutions for MSMEs",
      content:
        "Since then, KURO has continued to innovate with purpose — building reliable, scalable, and easy-to-implement Industry 4.0 solutions not just for large-scale manufacturers, but for MSMEs as well, ensuring that automation isn't just for the giants, but for every visionary maker out there.",
    },
  ];

  const philosophyCards = [
    {
      title: "Reliability",
      description:
        "We don't just build systems that work.we build systems that keep working,consistently and effortlessly. Our solutions are designed to be stress-free for our customers, minimizing downtime and maximizing trust.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "We don’t just deliver solutions  we deliver results. Every deployment is backed by real value, clear ROI, and our commitment to stay until success is undeniable",
    },
    {
      title: "Relentless Innovation",
      description:
        "At KURO, we don’t follow trends  we set them. While others play catch-up, we bring tomorrow’s tech to the factory floor today. Industry 4.0 made practical, for everyone.",
    },
    {
      title: "Mastery",
      description:
        "Excellence is not an act it's our habit. Every member of the KURO team is committed to the pursuit of mastery, refining skills and knowledge to deliver only the very best every time, without compromise.",
    },
  ];

  useEffect(() => {
    historyItemRefs.current = historyItemRefs.current.slice(0, sections.length);
  }, [sections.length]);

  useEffect(() => {
    const updateHistoryProgress = () => {
      const el = historyRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sectionTop = top + scrollTop;
      const scrollable = height;
      const scrolled = Math.max(
        0,
        scrollTop - sectionTop + window.innerHeight / 2
      );
      const percent = (scrolled / scrollable) * 100;
      setHistoryProgress(Math.min(100, Math.max(0, percent)));
    };

    const updateHistoryItemsVisibility = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const newVisibility = historyItemRefs.current.map((ref) => {
        if (!ref) return { opacity: 0, translateY: 50 };

        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        const elementBottom = elementTop + rect.height;
        const viewportTop = scrollTop;
        const viewportBottom = scrollTop + windowHeight;

        const visibleHeight = Math.max(
          0,
          Math.min(elementBottom, viewportBottom) -
            Math.max(elementTop, viewportTop)
        );
        const visibilityRatio = visibleHeight / rect.height;

        const centerPoint = elementTop + rect.height / 2;
        const viewportCenter = viewportTop + windowHeight / 2;
        const distanceFromCenter = Math.abs(centerPoint - viewportCenter);
        const maxDistance = windowHeight / 2 + rect.height / 2;

        let opacity = 0;
        let translateY = 50;
        let scale = 0.9;

        if (visibilityRatio > 0) {
          const normalizedDistance = Math.max(
            0,
            1 - distanceFromCenter / maxDistance
          );
          opacity = Math.min(1, normalizedDistance * 1.2);
          translateY = (1 - normalizedDistance) * 50;
          scale = 0.9 + normalizedDistance * 0.1;

          if (visibilityRatio > 0.3) {
            opacity = Math.min(1, opacity + 0.3);
            translateY = Math.max(0, translateY - 20);
          }
        }

        return {
          opacity: Math.max(0, Math.min(1, opacity)),
          translateY: Math.max(0, translateY),
          scale: Math.max(0.9, Math.min(1, scale)),
        };
      });

      setHistoryItemsVisibility(newVisibility);
    };

    const handleScroll = () => {
      updateHistoryProgress();
      updateHistoryItemsVisibility();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .timeline { position: relative; max-width: 1000px; margin: 0 auto; padding-left: 32px; }
      .history-progress-track { position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; }
      .history-progress-fill { position: absolute; left: 0; top: 0; width: 6px; background: #3b82f6; border-radius: 3px; transition: height 0.1s ease; }
      
      .history-item-animated {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      @keyframes movedown {
        0% {
          opacity: 0;
          transform: translateY(-30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }

      @keyframes moveline {
        0% {
          height: 0;
        }
        100% {
          Kaufheight: 100%;
        }
      }

      .animation-delay-0 {
        animation-delay: 0s;
      }
      .animation-delay-1 {
        animation-delay: 1s;
      }
      .animation-delay-2 {
        animation-delay: 2s;
      }
      .animation-delay-3 {
        animation-delay: 3s;
      }
      
      .flip-card {
        perspective: 1000px;
        height: 220px;
        width: 100%;
        cursor: pointer;
        margin-bottom: 1rem;
      }
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s ease-in-out;
        transform-style: preserve-3d;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }
      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }
      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
        box-sizing: border-box;
      }
      .flip-card-front {
        background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        border: 1px solid rgba(255,255,255,0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
      .flip-card-back {
        background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        color: white;
        transform: rotateY(180deg);
      }
      .hover-prompt {
        position: absolute;
        bottom: 12px;
        font-size: 0.7rem;
        color: rgba(255,255,255,0.7);
        opacity: 0;
        animation: fadeInOut 2s infinite;
      }
      @keyframes fadeInOut {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
      }
      @media (min-width: 1024px) {
        .flip-card {
          height: 240px;
        }
        .flip-card-front, .flip-card-back {
          padding: 24px;
        }
      }
      
      @media (min-width: 769px) and (max-width: 1023px) {
        .timeline-item { 
          width: 400px;
        }
        .timeline-item:nth-child(even) { 
          margin-left: calc(100% - 400px); 
        }
        .timeline-connector { 
          display: block;
        }
        .flip-card {
          height: 200px;
        }
        .flip-card-front, .flip-card-back {
          padding: 16px;
        }
      }
      
      @media (min-width: 641px) and (max-width: 768px) {
      .flip-card {
          height: 200px;
          margin-bottom: 1.5rem;
        }
        .flip-card-front, .flip-card-back {
          padding: 16px;
        }
        .flip-card:active .flip-card-inner {
          transform: rotateY(180deg);
        }

      }
      
      @media (max-width: 640px) {
      .flip-card {
          height: 180px;
        }
        .flip-card-front h4,
        .flip-card-back h4 {
          font-size: 0.8rem;
          margin-bottom: 8px;
        }
        .flip-card-back p {
          font-size: 0.8rem;
          line-height: 1.4;
        }
        .timeline-mobile {
          padding-left: 2rem;
        }
        
        .timeline-item-mobile {
          margin-left: 0 !important;
          margin-right: 0 !important;
          width: 100% !important;
        }
        
        .timeline-dot {
          position: absolute;
          left: -1.75rem;
          top: 1rem;
          width: 0.75rem;
          height: 0.75rem;
          background-color: #60a5fa;
          border-radius: 50%;
          border: 2px solid white;
        }
      }
      
      @media (max-width: 480px) {
        .timeline-mobile {
          padding-left: 1.5rem;
        }
        
        .flip-card { 
          height: 170px;
          margin-bottom: 1.75rem;
        }
        .flip-card-front, .flip-card-back {
          padding: 10px;
          height: 170px;
          min-height: 170px;
        }
        .flip-card-front h3,
        .flip-card-back h3 {
          font-size: 0.85rem;
          margin-bottom: 6px;
        }
        .flip-card-back p {
          font-size: 0.65rem;
          line-height: 1.25;
          max-height: calc(100% - 30px);
        }
      }
      
      @media (max-width: 360px) {
        .flip-card { 
          height: 160px;
          margin-bottom: 1.5rem;
        }
        .flip-card-front, .flip-card-back {
          padding: 8px;
          height: 160px;
          min-height: 160px;
        }
        .flip-card-front h3,
        .flip-card-back h3 {
          font-size: 0.8rem;
          margin-bottom: 4px;
        }
        .flip-card-back p {
          font-size: 0.6rem;
          line-height: 1.2;
          max-height: calc(100% - 28px);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="w-full max-w-full p-0 m-0 overflow-x-hidden">
      <div
        className="relative bg-cover bg-center min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[70vh] w-full flex items-center justify-center md:justify-end px-4 sm:px-6 md:px-16"
        style={{ backgroundImage: `url(${a})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl text-white text-center md:text-right space-y-4 md:space-y-6">
          <h1 className="text-xl sm:text-[24px] md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
            Empowering Your Business with{" "}
            <strong className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff2400] inline">
              KURO
            </strong>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90">
            We specialize in intelligent, scalable IT solutions that drive
            innovation and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3 sm:gap-4">
            <button
              className="border border-white/20 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 hover:bg-blue- text-sm sm:text-base w-full md:w-[200px]"
              onClick={() => navigate("/offering")}
            >
              Learn More →
            </button>
            <button
              className="border border-white/20 rounded-xl text-white px-6 py-2 hover:bg-white hover:text-blue-800 text-sm sm:text-base w-full md:w-[200px]"
              onClick={() => navigate("/contactus")}
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>
      <div className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-16 space-y-8 sm:space-y-12 md:space-y-16">
        <div
          ref={historyRef}
          className="relative max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="text-center mt-10 mb-6 sm:mb-8 md:mb-10 font-bold">
            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-3">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                History
              </span>
            </h2>
            <div className="mt-4 sm:mt-6 absolute w-1 md:w-1.5 h-full bg-[#00abf0] left-4 lg:left-1/2 transform lg:-translate-x-1/2 animate-[moveline_7s_linear_forwards] z-[-1]"></div>
            <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          {sections.map((section, idx) => (
            <div
              key={idx}
              ref={(el) => (historyItemRefs.current[idx] = el)}
              className={`
                history-item-animated
                relative 
                w-full
                pl-8 lg:pl-0
                lg:w-11/12 xl:w-3/4 2xl:w-1/2
                p-3 sm:p-4 md:p-6 lg:p-8 
                ${
                  idx % 2 === 0
                    ? "lg:mr-auto lg:pr-3 xl:pr-6 2xl:pr-8"
                    : "lg:ml-auto lg:pl-3 xl:pl-6 2xl:pl-8"
                } 
                mb-6 sm:mb-8
              `}
              style={{
                opacity: historyItemsVisibility[idx]?.opacity || 0,
                transform: `translateY(${
                  historyItemsVisibility[idx]?.translateY || 50
                }px) scale(${historyItemsVisibility[idx]?.scale || 0.9})`,
              }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 relative shadow-lg">
                <div className="mb-2 sm:mb-3 md:mb-4 font-semibold text-xl sm:text-xl md:text-xl lg:text-2xl text-center text-blue-400">
                  {section.title}
                </div>
                <p className="text-white text-md sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  {section.content}
                </p>
                <span
                  className={`
                    absolute top-4 sm:top-6 md:top-8 
                    border-t-[6px] border-b-[6px] sm:border-t-[8px] sm:border-b-[8px] md:border-t-[10px] md:border-b-[10px] lg:border-t-[12px] lg:border-b-[12px]
                    border-t-transparent border-b-transparent 
                    left-[-6px] border-r-[6px] border-r-white/20
                    lg:border-r-0 lg:left-auto lg:right-auto
                    ${
                      idx % 2 === 0
                        ? "lg:right-[-8px] xl:right-[-10px] 2xl:right-[-12px] lg:border-l-[8px] xl:border-l-[10px] 2xl:border-l-[12px] lg:border-l-white/20"
                        : "lg:left-[-8px] xl:left-[-10px] 2xl:left-[-12px] lg:border-r-[8px] xl:border-r-[10px] 2xl:border-r-[12px] lg:border-r-white/20"
                    }
                  `}
                ></span>
              </div>
            </div>
          ))}
        </div>
        {/* // core technology */}
        <div
          className="w-full max-w-full relative bg-cover bg-center min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[70vh] py-12 sm:py-16 md:py-20 "
          style={{
            backgroundImage:
              window.innerWidth >= 640 ? `url(${Coreimg})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div
            ref={philosophyRef}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 clients-section pt-3 sm:mb-8 text-center"
          >
            <div className="mt-5 text-center mb-8 sm:mb-10 font-bold">
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white mb-7 sm:mb-4 text-center section-heading">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Core Philosophy
                </span>
              </h2>
              <div className="w-40 sm:w-48 md:w-52 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>

            <motion.div
              className="max-w-8xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={philosophyInView ? "visible" : "hidden"}
            >
              {philosophyCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  className="flip-card"
                  custom={idx}
                  variants={itemVariants}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3">
                        {card.title}
                      </h3>
                      <div className="hover-prompt lg:hidden">Tap to flip</div>
                    </div>
                    <div className="flip-card-back">
                      <h3 className="text-lg sm:text-xl font-semibold text-violet-200 mb-3">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-gray-300 mt-12 sm:mt-8 md:mt-10 text-lg sm:text-base md:text-2xl max-w-8xl mx-auto mb-6 sm:mb-8 px-4 space-y-3">
              With these principles at our core,{" "}
              <span className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#ff2400]">
                KURO's
              </span>{" "}
              intent is clear: to build accessible, intelligent, and
              future-ready automation solutions that power the manufacturing
              industry both at scale and at the grassroots. We're here to ensure{" "}
              <span className="text-xl sm:text-xl md:text-2xl font-bold text-blue-400">
                INDUSTRY 4.0
              </span>{" "}
              isn't exclusive but inclusive, scalable, and transformative for
              all.
            </p>
          </div>
        </div>

        <Accolades />

        <div
          ref={clientsRef}
          className="flex justify-center flex-wrap clients-section pt-3"
        >
          <div className="mb-8 sm:mb-10 text-center font-bold w-full">
            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl text-white text-center mb-2 section-heading">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Clients
              </span>
            </h2>
            <div className="w-24 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-2" />
          </div>

          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="client-card flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg transition-transform"
                custom={idx}
                variants={itemVariants}
              >
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="w-full h-auto max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
