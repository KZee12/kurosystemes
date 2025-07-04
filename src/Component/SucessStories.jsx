import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../assets/sucess stories.avif";
import Picture1 from "../assets/Picture1.png";
import honeyMamasImage from "../assets/2d.jpg";
import traditionalMedicinalsImage from "../assets/3d.jpg";

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const projects = [
    {
      id: "project1",
      title:
        "Driving Efficiency & Traceability for a Leading Vehicle Manufacturer",
      description:
        "A major vehicle manufacturer faced growing complexity on its production line.KURO deployed a complete End-to-End Traceability Platform that transformed the plant's operational backbone.",
      image: Picture1,
      color: "from-gray-900 to-gray-800",
    },
    {
      id: "project2",
      title:
        "Precision Maintenance and Utilization Tracking for a Global Components Manufacturer",
      description:
        "A leading Tier-1 supplier in the automotive sector faced frequent unplanned stoppages and inconsistencies in die-based moulding processes.KURO deployed a smart, edge-enabled maintenance and utilization traceability system, built with robust OPC-UA integration and intelligent user workflows.",
      image: honeyMamasImage,
      color: "from-gray-900 to-gray-800",
    },
    {
      id: "project3",
      title: "AI-Powered Traceability for an FMCG Nano-Factory",
      description:
        "A fast-scaling FMCG company operating a nano-factory model producing multiple SKUs onthe same line in small lots was struggling with visibility and consistency.KURO deployed a full-stack traceability solution powered by AI and manless data entry,custom-fit for dynamic FMCG manufacturing",
      image: traditionalMedicinalsImage,
      color: "from-gray-900 to-gray-800",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background: linear-gradient(135deg, #0a192f 0%, #000000 100%);
        min-height: 100vh;
      }

      .section-title {
        position: relative;
        padding-bottom: 0.5rem;
      }
      .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 4rem;
        height: 2px;
        background: linear-gradient(to right, #3b82f6, #9333ea);
        transition: width 0.3s ease;
      }
      .section-title:hover::after {
        width: 6rem;
      }
      .project-card {
        background: rgba(31, 41, 55, 0.7);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
      }
      .image-container {
        position: relative;
        overflow: hidden;
        border-radius: 1rem 1rem 0 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
      .view-button {
        background: linear-gradient(to right, #3b82f6, #9333ea);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        opacity: 0;
        transform: translateY(10px);
      }
      .project-card:hover .view-button {
        opacity: 1;
        transform: translateY(0);
      }
      @media (max-width: 639px) {
        .section-title {
          font-size: 1.5rem;
        }
        .view-button {
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .project-card, .view-button, .section-title::after {
          transition: none !important;
          transform: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const navigateToProject = (projectId) => {
    navigate(`/successtories/${projectId}`);
  };

  const PortfolioGrid = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 sm:py-16">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 section-title">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Work
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer project-card"
              onClick={() => navigateToProject(project.id)}
            >
              <div className="image-container w-full h-[300px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium view-button">
                  VIEW
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-950">
      <div className="relative w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] flex items-center justify-center sm:justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />
        <div
          className={`relative z-10 w-full max-w-9xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-white max-w-none sm:max-w-3xl md:max-w-6xl lg:max-w-7xl flex flex-col justify-center items-start text-left space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Success Stories
              </span>
              <div className=" mt-2 ml-1  w-24 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-800 mx-auto rounded-full" />
            </h1>
            <p className="text-lg xs:text-base sm:text-xl md:text-2xl lg:text-2xl leading-relaxed text-white/90 drop-shadow max-w-lg sm:max-w-xl md:max-w-4xl">
              Witness our solutions in action. Driving customer success through
              full end solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default SuccessStories;
