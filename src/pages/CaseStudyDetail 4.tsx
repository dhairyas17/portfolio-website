// src/pages/CaseStudyDetails.tsx
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Brain,
  CalendarDays,
  Users,
  LayoutDashboard,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  ServerCog,
  Hammer,
  Tags,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const tableRowStyles = 'border px-3 py-2 text-lg text-gray-700';

const keyFeaturesRows = [
  ['Endpoint', 'Description'],
  ['/detect', 'Object detection using YOLOv8'],
  ['/facenet', 'Face embedding + similarity matching'],
  ['/segment', 'Segment anything with Meta’s SAM'],
  ['/inpaint', 'Remove objects or correct occlusions with LaMa'],
  ['/motion', 'Detect camera panning, tilt, and zoom'],
  ['/auth', 'JWT-based user authentication'],
  ['/integrations', 'Webhooks for third-party apps'],
];

const CaseStudyDetail4 = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-24 text-gray-900"
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Back button */}
      <motion.button
        aria-label="Back to case studies"
        className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 mb-8 transition focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
        onClick={() => navigate(-1)}
        {...fadeIn}
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Case Studies
      </motion.button>

      {/* Header */}
      <motion.h1 className="text-4xl font-bold mb-6 leading-snug" {...fadeIn}>
        Designing a Scalable AI-Driven Video Intelligence API Platform
      </motion.h1>

      {/* Summary */}
      <motion.div
        className="flex flex-col md:flex-row justify-between text-sm text-gray-700 mb-10"
        {...fadeIn}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex items-start gap-2">
            <Brain className="mt-1" size={16} aria-hidden="true" />
            <span>
              <strong>Category:</strong> API Architecture, Video Intelligence, AI Integration
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Users className="mt-1" size={16} aria-hidden="true" />
            <span>
              <strong>Team:</strong> 1 TPM, 2 ML Engineers, 1 Backend Engineer
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 md:w-1/2 md:items-end md:text-right mt-4 md:mt-0">
          <div className="flex items-start gap-2">
            <CalendarDays className="mt-1" size={16} aria-hidden="true" />
            <span>
              <strong>Duration:</strong> 7 Months
            </span>
          </div>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section
        id="overview"
        aria-labelledby="overview-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2 id="overview-heading" className="text-2xl font-semibold mb-3">
          <LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} aria-hidden="true" />
          Overview
        </h2>
        <p className="text-gray-700 text-lg text-justify leading-relaxed">
          AI pipelines for video intelligence are often fragmented, unscalable, and tightly coupled. They lack developer-friendly APIs and flexible deployment options. This project built a modular, scalable system for real-time video analysis with production-ready APIs for object detection, segmentation, inpainting, and motion tracking.
        </p>
        <p className="mt-4 text-gray-700 text-lg text-justify leading-relaxed">
          Designed for modularity and real-time performance, the platform supports tasks such as YOLOv8 detection, FaceNet embeddings, SAM segmentation, and LaMa inpainting via REST APIs. It powers Evercam AI-API, serving clients globally.
        </p>
      </motion.section>

      {/* Problem Statement */}
      <motion.section
        id="problem"
        aria-labelledby="problem-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2 id="problem-heading" className="text-2xl font-semibold mb-3">
          <AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} aria-hidden="true" />
          Problem Statement
        </h2>
        <h3 className="font-semibold mb-1 text-lg">Key Challenges:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-lg mb-4 space-y-1">
          <li>Fragmented AI pipelines with poor integration across video intelligence tasks</li>
          <li>Absence of modular, scalable, production-ready APIs for real-time video analysis</li>
          <li>Challenges in providing flexible edge and cloud deployment options</li>
        </ul>
      </motion.section>

      {/* Product Thinking */}
      <motion.section
        id="product-thinking"
        aria-labelledby="product-thinking-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2 id="product-thinking-heading" className="text-2xl font-semibold mb-3">
          <Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} aria-hidden="true" />
          Product Thinking
        </h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li>User-first: Abstracted AI complexity behind clean, intuitive APIs.</li>
          <li>Modularity: Developers can plug individual features (e.g., SAM, object detection).</li>
          <li>Speed & Scalability: Optimized for real-time REST inference.</li>
          <li>Deploy Anywhere: Supports edge and cloud environments.</li>
        </ul>
      </motion.section>

      {/* Key Features Table */}
      <motion.section
        id="key-features"
        aria-labelledby="key-features-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2 id="key-features-heading" className="text-2xl font-semibold mb-3">
          <Hammer className="inline mr-2 mb-1 text-cyan-600" size={18} aria-hidden="true" />
          Key Features
        </h2>
        <div className="overflow-x-auto text-lg">
          <table className="w-full border border-gray-300 rounded shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                {keyFeaturesRows[0].map((header, i) => (
                  <th key={i} className={tableRowStyles}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {keyFeaturesRows.slice(1).map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className={tableRowStyles}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* System Architecture */}
      <motion.section
        id="system-architecture"
        aria-labelledby="system-architecture-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2
          id="system-architecture-heading"
          className="text-2xl font-semibold mb-3"
        >
          <ServerCog
            className="inline mr-2 mb-1 text-cyan-600"
            size={18}
            aria-hidden="true"
          />
          System Architecture
        </h2>
        <motion.div className="mt-6" {...fadeIn}>
          <img
            src="/assets/case-studies/api_diagram.svg"
            alt="Key Product Decisions Diagram"
            className="rounded-lg shadow-lg border border-gray-200 w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            System Architecture
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg mt-6">
          <div className="bg-yellow-50 p-4 border rounded">
            <h3 className="font-bold mb-2">Components</h3>
            <p>
              → <strong>Frontend :</strong> Swagger UI for interactive API testing<br />
              → <strong>Backend (FastAPI + Python):</strong> REST endpoints calling containerized ML services<br />
              → <strong>Model Services:</strong> Dockerized microservices with shared gRPC protocol<br />
              → <strong>Queue (RabbitMQ / Kafka):</strong> Async processing of large jobs<br />
              → <strong>Database (PostgreSQL + Redis):</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;PostgreSQL: User auth, metadata, job tracking<br />
              &nbsp;&nbsp;&nbsp;&nbsp;Redis: Caching frequent queries, session management
            </p>
          </div>

          <div className="bg-green-50 p-4 border rounded">
            <h3 className="font-bold mb-2">Infrastructure</h3>
            <p>
              → <strong>Inference at scale:</strong> Load-balanced with Gunicorn + Uvicorn<br />
              → <strong>Container orchestration:</strong> Docker Compose (local), Kubernetes (cloud)<br />
              → <strong>CI/CD:</strong> GitHub Actions for testing, Docker builds, and registry pushes<br />
              → <strong>Monitoring:</strong> Prometheus + Grafana for latency, inference time, system health
            </p>
          </div>
        </div>
      </motion.section>

      {/* API Gateway */}
      <motion.section
        id="api-gateway"
        aria-labelledby="api-gateway-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2
          id="api-gateway-heading"
          className="text-2xl font-semibold mb-3"
        >
          <Tags className="inline mr-2 mb-1 text-blue-600" size={18} aria-hidden="true" />
          API Gateway
        </h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg">
          <li>Rate limiting, request logging, and load balancing</li>
          <li>JWT-based authentication</li>
          <li>Retry logic and fallback handlers for long jobs</li>
        </ul>
      </motion.section>

      {/* Impact */}
      <motion.section
        id="impact"
        aria-labelledby="impact-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2
          id="impact-heading"
          className="text-2xl font-semibold mb-3"
        >
          <TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} aria-hidden="true" />
          Impact
        </h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg">
          <li>Built fully functional API-first platform for AI video features</li>
          <li>Achieved 300ms average latency on /detect and /motion endpoints</li>
          <li>Scalable to 100+ concurrent API calls with "1"s response time</li>
          <li>Deployed locally and on AWS EC2 + EKS</li>
          <li>Designed for future plug-and-play ML model integration</li>
        </ul>
      </motion.section>

      {/* Cross-Functional Collaboration */}
      <motion.section
        id="collaboration"
        aria-labelledby="collaboration-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2
          id="collaboration-heading"
          className="text-2xl font-semibold mb-3"
        >
          <Users className="inline mr-2 mb-1 text-teal-600" size={18} aria-hidden="true" />
          Cross-Functional Collaboration
        </h2>
        <p className="text-lg text-gray-700">Collaborated with:</p>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li>Designers to define an intuitive Swagger UI</li>
          <li>Backend developers to optimize database schema</li>
          <li>ML experts validating SAM and LaMa models</li>
          <li>Operations team for scalable deployment and monitoring</li>
        </ul>
      </motion.section>

      {/* Key Takeaways */}
      <motion.section
        id="key-takeaways"
        aria-labelledby="key-takeaways-heading"
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        {...fadeIn}
      >
        <h2
          id="key-takeaways-heading"
          className="text-2xl font-semibold mb-3"
        >
          <TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} aria-hidden="true" />
          Key Takeaways
        </h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li>Unified multiple AI video intelligence tasks behind clean, developer-friendly APIs.</li>
          <li>Achieved real-time inference with under 300ms latency for critical endpoints.</li>
          <li>Supported flexible edge and cloud deployments for scalability.</li>
          <li>Built modular architecture enabling future ML model plug-and-play.</li>
          <li>Established production-ready infrastructure with CI/CD and observability baked in.</li>
        </ul>
      </motion.section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Scroll to top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronUp size={20} aria-hidden="true" />
        </motion.button>
      )}

      <hr className="mt-10 border-t border-gray-200" />
      <motion.div
        className="mt-5 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Solving a similar challenge?</h2>
        <p className="text-gray-600 mb-6 text-lg">I’d love to exchange ideas or collaborate on building the next big thing.</p>
        <Link
          to="/contact"
          className="inline-block rounded-lg no-underline transform transition-transform duration-200 hover:scale-105 will-change-transform preserve-3d focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <div className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <span className="block will-change-auto">Let’s Connect</span>
          </div>
        </Link>

        <p className="text-xs text-center text-gray-400 mt-12 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyDetail4;
