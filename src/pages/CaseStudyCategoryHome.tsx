import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';

const CaseStudyCategory = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const caseStudiesPerPage = 3;

  const categoryDisplayNames: { [key: string]: string } = {
    'ai-ml': 'AI & ML',
    'infra': 'Infrastructure',
    'mlops': 'MLOps',
    'api': 'API Platform'
  };

  const caseStudies = [
    {
      id: '1',
      title: "Redesigned Gate Report for Real-Time Edge-Based Object Detection",
      subtitle: 'Edge-powered detection for faster, leaner event reporting',
      category: 'ai-ml',
      description: 'Led product strategy to move Evercam’s Gate Report from cloud to edge, speeding up performance, cutting bandwidth, and boosting revenue.',
      duration: '6 months',
      team: '14',
      impact: ['350% MRR Growth', '94% Lower Data Usage', '71pt NPS Boost'],
      tags: ['Edge AI', 'System Design', 'YOLOv5', 'RabbitMQ', 'OTA Deployment'],
      image:  '/assets/case-studies/gate-report.png',

    },
    {
      id: "4",
      title: "Designing a Scalable AI-Driven  API Platform",
      subtitle: "Product Design, System Design, AI/Edge Architecture",
      category: 'api',
      description: "Unified APIs for AI video tasks like detection, FaceNet-based subclassification, SAM segmentation, LaMa inpainting, and motion tracking.",
      duration: "6 months",
      team: "5",
      impact: ["Improved gate detection accuracy from 65% to 96%", "reduced processing time from 2 mins to 5 secs", "improved client retention by 22%"],
      tags: ["Edge AI", "Object Detection", "Jetson Orin", "React", "Node.js", "Postgres", "MQTT"],
    image:  '/assets/case-studies/video-intelligence-api.png',
    },
    {
      id: '3',
      title: 'Real-Time Edge Fleet Observability: From Blind Spots to Instant Insights',
      subtitle: 'Fleet-wide observability to boost reliability and uptime',
      category: 'infra',
      description: "Delivered real-time observability with Grafana and OTA updates for Evercam’s edge fleet, reducing failures, support costs, and boosting NPS.",
      duration: '4 months',
      team: '7',
      impact: ['75% fewer device failures', '80% fewer site visits', '+35% NPS increase'],
      tags: ['Observability', 'Prometheus', 'Grafana', 'OTA Deployment', 'Edge Devices', 'DevOps', 'TPM'],
      image:  '/assets/case-studies/edge-monitoring-platform.png'
    },
    {
      id: '2',
      title: "Redesigned Evercam’s Edge Architecture to Scale Globally with Zero-Dev Onboarding",
      subtitle: 'Unified hardware, firmware, and configs for global rollout.',
      category: 'infra',
      description: 'Drove org-wide shift from camera to kit-based system and standardized edge deployments, enabling non-engineers to manage 1,200+ devices.',
      duration: '4 months',
      team: '10',
      impact: ['Reduced deployment time by 70%', 'Standardized 1,200+ kits, enabling 500+ site scalability.', 'Empowered non-devs to manage edge ops'],
      tags: ['Edge Infrastructure', 'Ansible', 'AWX', 'OTA', 'Kit-Based Architecture', 'TPM', 'DevOps'],
      image:  '/assets/case-studies/standardizing-edge.png'
    },
    {
      id: '5',
      title: 'Scaling ML Pipelines & MLOps Lifecycle',
      subtitle: 'Boosted Detection Accuracy from 67% to 96%',
      category: 'mlops',
      description: "Redesigned the ML pipeline using Airflow, CVAT, and MLflow to scale model training and boost accuracy by 29%.",
      duration: '6 months',
      team: '10',
      impact: ['10× data scale', '29% accuracy lift', '60% faster annotation'],
      tags: ['MLOps', 'Airflow', 'MLflow', 'Edge AI', 'CVAT', 'Data Pipeline'],
      image:  '/assets/case-studies/Scaling MLOps Pipeline in Blue.png',
    
    }

  ];
  const allCategories = Array.from(new Set(caseStudies.map((study) => study.category)));


  const filterFromUrl = searchParams.get('filter') || null;
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const initialPage = pageFromUrl > 0 ? pageFromUrl : 1;

  const [activeFilter, setActiveFilter] = useState<string | null>(filterFromUrl);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  useEffect(() => {
    const params: { [key: string]: string } = {};
    if (activeFilter) params.filter = activeFilter;
    if (currentPage && currentPage !== 1) params.page = currentPage.toString();

    const newSearch = new URLSearchParams(params).toString();
    if (newSearch !== searchParams.toString()) {
      setSearchParams(params);
    }
  }, [activeFilter, currentPage, searchParams, setSearchParams]);

  const onFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Filter and paginate case studies
  const filteredCaseStudies = activeFilter
    ? caseStudies.filter((study) => study.category === activeFilter)
    : caseStudies;

  const totalPages = Math.max(1, Math.ceil(filteredCaseStudies.length / caseStudiesPerPage));
  const startIndex = (currentPage - 1) * caseStudiesPerPage;
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, startIndex + caseStudiesPerPage);

  // Navigate to case study detail page, passing current filter & page in URL
  const handleCardClick = (id: string) => {
    navigate(`/case-studies/${id}?filter=${activeFilter || ''}&page=${currentPage}`);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <motion.div
      className="min-h-[101vh] pt-[90px] pb-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-10 text-center flex flex-col items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
<Link
  to="/#case-study"
  className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors self-start"
>
  <ArrowLeft className="w-4 h-4 mr-2" />
  Back to Home
</Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Case studies</h1>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onFilterChange(null)}
            className={`px-4 py-2 text-sm rounded-full font-semibold border ${
              activeFilter === null
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterChange(cat)}
              className={`px-4 py-2 text-sm rounded-full font-semibold border capitalize ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {categoryDisplayNames[cat] || cat}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCaseStudies.length > 0 ? (
            currentCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                onClick={() => handleCardClick(study.id)}
                className="cursor-pointer"
              >
                <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 h-[530px] flex flex-col">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold text-gray-900 mb-0 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-xs text-blue-600 font-semibold mb-2">{study.subtitle}</p>
                      <p className="text-gray-600 text-sm text-justify mb-2 line-clamp-3">{study.description}</p>

                      <div className="flex flex-col gap-1 mb-2 text-xs">
                        {study.impact.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                            <span className="text-green-600 font-semibold">{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="font-medium">Duration:</span> {study.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3 text-gray-500" />
                          <span className="font-medium">Team:</span> {study.team}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-2">
                        {study.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {study.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{study.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                      <span className="text-sm font-semibold mr-2">View Detailed Case Study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No case studies found.</p>
          )}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <div className="inline-flex gap-2">

              {/* Previous Button */}
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded font-semibold text-sm min-w-[64px] text-center transform transition-transform duration-200 will-change-transform ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:scale-105'
                }`}
              >
                ← Prev
              </button>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded font-semibold text-sm min-w-[64px] text-center transform transition-transform duration-200 will-change-transform ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white scale-105'
                      : 'bg-gray-100 text-gray-700 hover:scale-105'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded font-semibold text-sm min-w-[64px] text-center transform transition-transform duration-200 will-change-transform ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:scale-105'
                }`}
              >
                Next →
              </button>

            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-10 pt-4 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default CaseStudyCategory;
