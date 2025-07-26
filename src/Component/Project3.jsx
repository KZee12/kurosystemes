import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Picture3 from "../assets/pic3.png"; // Update with actual image path
import { useEffect } from "react";

const Project3 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const project = {
    id: "project3",
    title: "AI-Powered Traceability for Fast-Scaling FMCG Nano-Factory",
    problem: `A fast-scaling FMCG company operating a nano-factory model — producing multiple SKUs on the same line in small lots — was struggling with visibility and consistency. The key issues: Frequent changeovers made manual traceability chaotic. Operators had to log production data manually, leading to errors. Regulatory and recall compliance required airtight batch-level traceability. There was no integrated system linking raw material usage to finished goods in real-time.`,
    solution: `KURO deployed a full-stack traceability solution powered by AI and manless data entry, custom-fit for dynamic FMCG manufacturing.`,
    image: Picture3,
    color: "from-gray-900 to-gray-800",
  };

  const solutionPoints = [
    {
      title: "Raw Material to End-of-Line Traceability:",
      description:
        "Each raw material batch was digitally linked to the production lot from the moment it entered the line. The system tracked every transformation stage — blending, filling, sealing, packing — without human input.",
    },
    {
      title: "Designed for Nano-Factory Complexity:",
      description:
        "With the ability to switch SKUs frequently, KURO's platform seamlessly adapted to production changeovers. No reconfiguration or intervention needed, ensuring continuous operations across diverse product types.",
    },
    {
      title: "Purely Manless Data Entry via AI:",
      description:
        "Leveraging AI vision systems and edge sensors, KURO automated the capture of operational data like line speed, product counts, material usage, and inspection flags. This eliminated human dependency, reduced workload, and ensured consistency.",
    },
    {
      title: "Operator-Friendly Interactions:",
      description:
        "Supervisors could quickly add product notes, production instructions, or corrective actions through a simplified interface — without disrupting the flow or requiring technical knowledge.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${project.color} p-6 xs:p-8 sm:p-10 lg:p-12 text-gray-100`}
    >
      <style>
        {`
          .back-button {
            background: linear-gradient(to right, #3b82f6, #9333ea);
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }
          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }
          .section-title {
            position: relative;
            padding-bottom: 0.5rem;
            font-weight: 600;
            color: #d1d5db;
          }
          .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 3rem;
            height: 2px;
            background: linear-gradient(to right, #3b82f6, #9333ea);
            transition: width 0.3s ease;
          }
          .section-title:hover::after {
            width: 5rem;
          }
          .content-card {
            background: rgba(31, 41, 55, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(55, 65, 81, 0.5);
            border-radius: 1rem;
            padding: 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            color: #e5e7eb;
          }
       
          .solution-list {
            list-style: none;
            padding: 0;
            margin: 0;
            margin-top: 1rem;
          }
          .solution-item {
            margin-bottom: 1rem;
            padding: 0;
          }
          .solution-title {
            font-weight: bold;
            color: #60a5fa;
            margin-bottom: 0.25rem;
          }
          .solution-description {
            color: #d1d5db;
            line-height: 1.6;
            margin: 0;
          }
      
    
          @media (max-width: 639px) {
            .back-button {
              padding: 0.4rem 0.8rem;
              font-size: 0.875rem;
            }
            .section-title {
              font-size: 1.25rem;
            }
            .solution-item {
              font-size: 0.875rem;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .back-button, .content-card, .image-container, .solution-item, .section-title::after {
              transition: none !important;
              transform: none !important;
            }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/successtories")}
          className="flex items-center gap-2 text-gray-100 hover:text-white back-button"
          aria-label="Back to Success Stories"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-xl sm:text-base">Back</span>
        </button>
        <div className="grid grid-cols-1 gap-8 sm:gap-12 mt-8 sm:mt-10">
          <div className="image-container flex justify-center items-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-auto md:h-96 overflow-hidden rounded-xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Text content below the image */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
            <div className="content-card">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Client Challenge
                <div className="ml-0 mt-1 w-20 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </h3>
              <p className="text-gray-300 leading-relaxed text-md sm:text-lg">
                {project.problem}
              </p>
            </div>
            <div className="content-card">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                KURO Solution
                <div className="ml-0 mt-1 w-20 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </h3>
              <p className="text-gray-300 leading-relaxed text-md sm:text-lg">
                {project.solution}
              </p>
              <div className="solution-list">
                {solutionPoints.map((point, index) => (
                  <div key={index} className="solution-item">
                    <div className=" text-lg sm:text-xl font-semibold text-blue-400">
                      {point.title}
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="content-card">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Conclusion
                <div className="ml-0 mt-1 w-20 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </h3>
              <p className="text-gray-300 leading-relaxed text-md sm:text-lg">
                KURO enabled the FMCG client to scale with confidence, ensuring
                SKU-level traceability, error-free production, and regulatory
                readiness — all in a plug-and-play system optimized for modern,
                agile factories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
