import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Picture1 from "../assets/pic1.png";

const Project1 = () => {
  const navigate = useNavigate();

  const project = {
    id: "project1",
    title:
      "Driving Efficiency & Traceability for a Leading Vehicle Manufacturer",
    problem: `A major vehicle manufacturer faced growing complexity on its production line. With
thousands of parts, dynamic production schedules from SAP, and the need for precision
coordination between human operators, robot arms, and machine controllers — the lack of
real-time visibility and integration was beginning to impact quality and efficiency.
Manual data entry for traceability was error-prone, process deviations often went unnoticed,
and downtime events were not tracked in a structured way. There was an urgent need for an
intelligent, integrated system to automate and unify operations.`,
    solution: `KURO deployed a complete End-to-End Traceability Platform that transformed the plant's
operational backbone.`,
    image: Picture1,
    color: "from-gray-900 to-gray-800",
  };

  const solutionPoints = [
    {
      title: "Smart Barcode Generation from SAP:",
      description:
        "KURO's system automatically encoded production schedule data into barcodes, ensuring every vehicle on the line was uniquely and accurately identified — without manual intervention.",
    },
    {
      title: "Integrated Process Data Capture:",
      description:
        "Application-level stations captured critical process variables — torque, temperature, alignment data — and relayed them in real-time to robot and machine controllers. This seamless data flow enabled machines to self-adjust, ensuring consistency and quality at every step.",
    },
    {
      title: "Live Monitoring & Intelligent Alerts:",
      description:
        "KURO's real-time dashboards gave plant managers live visibility into production KPIs. Any deviation from set thresholds immediately triggered smart notifications via email, enabling teams to intervene before small issues became major defects.",
    },
    {
      title: "Automated OEE and PM Reporting:",
      description:
        "Overall Equipment Effectiveness (OEE) was calculated and visualized automatically — no more Excel sheets or guesswork. KURO's system also issued Preventive Maintenance (PM) notifications based on machine behavior, reducing unplanned breakdowns and ensuring smoother operations.",
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
          className="flex w-auto items-center gap-2 text-gray-100 hover:text-white back-button"
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
              className="w-auto  md:h-96 overflow-hidden rounded-xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Text content below the image */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
            <div className="content-card">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                Client Problem
                <div className="ml-0 mt-1 w-20 xs:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </h3>
              <p className="text-gray-300 leading-relaxed text-md sm:text-lg">
                {project.problem}
              </p>
            </div>
            <div className="content-card">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 ">
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
                This transformation positioned KURO not just as a technology
                provider, but as a true manufacturing intelligence partner. By
                bridging ERP data, shopfloor automation, and user-centric
                alerts, KURO enabled the client to confidently scale operations
                while maintaining world-class standards in quality and
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
