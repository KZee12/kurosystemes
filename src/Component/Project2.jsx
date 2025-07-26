import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Picture2 from "../assets/pic2.png"; // Update with actual image path
import { useEffect } from "react";

const Project2 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const project = {
    id: "project2",
    title:
      "Smart Die Maintenance & Traceability for Automotive Tier-1 Supplier",
    problem: `A leading Tier-1 supplier in the automotive sector faced frequent unplanned stoppages and inconsistencies in die-based moulding processes. Moulding dies, though critical, lacked traceability in terms of usage cycles, condition tracking, and maintenance accountability. There was no structured record of which die was used where, for how long, and in what condition — a major bottleneck in quality assurance and preventive maintenance.`,
    solution: `KURO deployed a smart, edge-enabled maintenance and utilization traceability system, built with robust OPC-UA integration and intelligent user workflows.`,
    image: Picture2,
    color: "from-gray-900 to-gray-800",
  };

  const solutionPoints = [
    {
      title: "Edge Computing with OPC-UA:",
      description:
        "By leveraging OPC-UA communication, KURO enabled reliable and real-time data capture directly from moulding machines and associated sensors. All die usage data was captured and processed at the edge for ultra-low-latency traceability and condition monitoring.",
    },
    {
      title: "Maintenance Checklist Verification:",
      description:
        "At dedicated maintenance cells, operators followed digitally guided checklists, verifying each critical maintenance step. No die was released into production unless all checklist parameters were fulfilled — ensuring accountability and traceability.",
    },
    {
      title: "Integrated Die Poka-Yoke System:",
      description:
        "KURO implemented a Poka-Yoke mechanism that interfaced with the moulding machine controller. The system prevented the start of a cycle if an unverified or damaged die was detected, thereby eliminating quality risks at source.",
    },
    {
      title: "User-Specific Dashboards & Access Control:",
      description:
        "A role-based dashboard allowed maintenance teams, production engineers, and managers to view what mattered most to them — from die lifecycle data to open maintenance actions and upcoming service alerts. Access control ensured auditability and secure data flows within the organization.",
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
            padding-bottom: 0.2rem;
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
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
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
                By integrating die-level intelligence into the moulding process,
                KURO empowered the client to shift from reactive to predictive
                maintenance, enforce discipline on the shop floor, and bring
                unprecedented clarity into the health and utilization of
                critical tooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
