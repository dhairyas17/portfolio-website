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
  Globe,
  Hammer,
  LayoutDashboard,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  ServerCog,
  MessageCircle,
  Tags
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const tableRowStyles = "border px-3 py-2 text-lg text-gray-700";

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
    className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 mb-8 transition"
    onClick={() => navigate(-1)}
    {...fadeIn}
  >
    <ArrowLeft size={16} />
    Back to Case Studies
  </motion.button>

      {/* Header */}
      <motion.h1 className="text-4xl font-bold mb-6 leading-snug" {...fadeIn}>
       Designing a Scalable AI-Driven Video Intelligence API Platform
      </motion.h1>

      {/* Subtitle */}
      {/* <motion.div className="mb-10 text-lg text-gray-700" {...fadeIn}>
        <strong>Subtitle:</strong> A self-initiated platform offering a suite of AI-powered video processing capabilities through unified APIs, including object detection, subclassification using FaceNet, segmentation via SAM, inpainting using LaMa, and motion tracking.
      </motion.div> */}

      {/* Summary */}
      <motion.div
  className="flex flex-col md:flex-row justify-between text-sm text-gray-700 mb-10"
  {...fadeIn}
>
  {/* Left Column */}
  <div className="flex flex-col gap-2 md:w-1/2">
    <div className="flex items-start gap-2">
      <Brain className="mt-1" size={16} />
      <span>
        <strong>Category:</strong> API Architecture, Video Intelligence, AI Integration
      </span>
    </div>
    <div className="flex items-start gap-2">
      <Users className="mt-1" size={16} />
      <span>
        <strong>Team:</strong> 1 TPM, 2 ML Engineers, 1 Backend Engineer
      </span>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-2 md:w-1/2 md:items-end md:text-right mt-4 md:mt-0">
    <div className="flex items-start gap-2">
      <CalendarDays className="mt-1" size={16} />
      <span>
        <strong>Duration:</strong> 7 Months
      </span>
    </div>
  </div>
</motion.div>


      {/* Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Overview</h2>
        <p className="text-gray-700 text-lg text-justify leading-relaxed">
          AI pipelines for video intelligence are often fragmented, unscalable, and tightly coupled. They also lack developer-friendly APIs and flexible deployment options. The goal of this project was to build a modular and scalable system for real-time video analysis, featuring production-ready APIs for various video intelligence tasks like object detection, segmentation, inpainting, and motion tracking.
        </p>
        <p className="mt-4 text-gray-700 text-lg text-justify leading-relaxed">
          Designed with modularity, scalability, and real-time performance in mind, this platform enables AI tasks such as object detection, face embedding (FaceNet), segmentation using SAM, and inpainting with LaMa, all through easy-to-use REST APIs. It currently powers Evercam AI-API, serving clients worldwide.
        </p>
      </motion.section>

      {/* Problem Statement */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} />Problem Statement</h2>
        <h3 className="font-semibold mb-1 text-lg">Key Challenges:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-lg mb-4 space-y-1">
          <li>Fragmented AI pipelines with no clear integration across video intelligence tasks</li>
          <li>Lack of modular, scalable, and production-ready APIs for real-time video analysis</li>
          <li>Difficulty in providing flexible deployment options (edge vs. cloud)</li>
        </ul>
      </motion.section>

      {/* Product Thinking */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />Product Thinking</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li>User-first design: Abstracted AI complexities behind clean, intuitive APIs.</li>
          <li>Modularity: Enabled developers to plug in individual features (e.g., only SAM or object detection).</li>
          <li>Speed & Scalability: Optimized for real-time inference over RESTful APIs.</li>
          <li>Deploy Anywhere: System built to support both edge and cloud deployments.</li>
        </ul>
      </motion.section>

      {/* Key Features */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Hammer className="inline mr-2 mb-1 text-cyan-600" size={18} />Key Features</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li><strong>/detect:</strong> Object detection using YOLOv8</li>
          <li><strong>/facenet:</strong> Face embedding + similarity matching</li>
          <li><strong>/segment:</strong> Segment anything with Meta’s SAM</li>
          <li><strong>/inpaint:</strong> Remove objects or correct occlusions with LaMa</li>
          <li><strong>/motion:</strong> Detect camera panning, tilt, and zoom</li>
          <li><strong>/auth:</strong> JWT-based user authentication</li>
          <li><strong>/integrations:</strong> Webhooks for third-party apps</li>
        </ul>
      </motion.section>

      {/* System Architecture */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><ServerCog className="inline mr-2 mb-1 text-cyan-600" size={18} />System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div className="bg-gray-50 p-4 border rounded">
            <h3 className="font-bold mb-2">Components</h3>
            <p>
            →  <strong> Frontend :</strong> Swagger UI for interactive API testing<br />
            →  <strong>Backend (FastAPI + Python):</strong> REST endpoints calling containerized ML services<br />
            →  <strong>Model Services:</strong> Dockerized microservices with shared gRPC protocol<br />
            →  <strong>Queue (RabbitMQ / Kafka):</strong> For async processing of large jobs<br />
            →  <strong>Database (PostgreSQL + Redis):</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;PostgreSQL: User auth, metadata, job tracking<br />
              &nbsp;&nbsp;&nbsp;&nbsp;Redis: Caching frequent queries, session management
            </p>
          </div>

          <div className="bg-gray-50 p-4 border rounded">
            <h3 className="font-bold mb-2">Infrastructure</h3>
            <p>
            →  <strong>Inference at scale:</strong> Load-balanced using Gunicorn + Uvicorn<br />
            →  <strong>Container orchestration:</strong> Docker Compose (local), Kubernetes (cloud)<br />
            →  <strong>CI/CD:</strong> GitHub Actions for tests, Docker builds, and push to registry<br />
            →  <strong>Monitoring:</strong> Prometheus + Grafana for API latency, inference time, and system health
            </p>
          </div>
        </div>
      </motion.section>
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
      {/* API Gateway */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-blue-600" size={18} />API Gateway</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg">
          <li>Rate limiting, request logging, and load balancing</li>
          <li>JWT-based authentication</li>
          <li>Retry logic and fallback handlers for long jobs</li>
        </ul>
      </motion.section>
      <motion.div className="mt-6" {...fadeIn}>
    <img
      src="/assets/case-studies/counting.png"
      alt="Key Product Decisions Diagram"
      className="rounded-lg shadow-lg border border-gray-200 w-full"
    />
    <p className="text-sm text-gray-500 mt-2 text-center">
      Dashboard UI
    </p>
  </motion.div>
      {/* Impact */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} />Impact</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg">
          <li>Built fully functional API-first platform for AI video features</li>
          <li>Achieved 300ms average latency on /detect and /motion endpoints</li>
          <li>Scalable to 100+ concurrent API calls with "1"s response time</li>
          <li>Deployed both locally and to AWS EC2 + EKS</li>
          <li>Designed with future plug-and-play ML models in mind</li>
        </ul>
      </motion.section>

      {/* Cross-Functional Touch */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Users className="inline mr-2 mb-1 text-teal-600" size={18} />Cross-Functional Touch</h2>
        <p className="text-lg text-gray-700">Collaborated with:</p>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li>Designers to define an intuitive Swagger UI</li>
          <li>Backend Devs (peer reviewers) to optimize DB schema</li>
          <li>ML experts to validate SAM and LaMa performance</li>
          <li>Ops for scalable deployment and observability</li>
        </ul>
      </motion.section>
{/* Key Takeaways */}
<motion.section className="mb-10" {...fadeIn}>
  <h2 className="text-2xl font-semibold mb-3">
    <TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} />Key Takeaways
  </h2>
  <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
    <li>Successfully unified multiple AI video intelligence tasks behind clean, developer-friendly APIs.</li>
    <li>Achieved real-time inference (Less than "300ms" latency) for critical endpoints like /detect and /motion.</li>
    <li>Designed platform to support both edge and cloud deployments for maximum flexibility.</li>
    <li>Built modular architecture to easily integrate future ML models without major refactoring.</li>
    <li>Established scalable, production-ready infrastructure with observability and CI/CD baked in.</li>
  </ul>
</motion.section>

      {showScrollTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300"
    aria-label="Scroll to top"
  >
    <ChevronUp size={20} />
  </button>
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
              className="inline-block rounded-lg no-underline transform transition-transform duration-200 hover:scale-105 will-change-transform preserve-3d"
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
