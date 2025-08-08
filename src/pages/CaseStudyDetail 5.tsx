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

const tableRowStyles = "border px-3 py-2 text-sm text-gray-700";

const CaseStudyDetail5 = () => {
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
    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mb-8 transition"
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
      <motion.div className="mb-10 text-lg text-gray-700" {...fadeIn}>
        <strong>Subtitle:</strong> A self-initiated platform offering a suite of AI-powered video processing capabilities through unified APIs — including object detection, subclassification using FaceNet, segmentation via SAM, inpainting using LaMa, and motion tracking.
      </motion.div>

      {/* Summary */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-10" {...fadeIn}>
        <div className="flex items-start gap-2">
          <Brain className="mt-1" size={16} />
          <span><strong>Category:</strong> API Architecture, Video Intelligence, AI Integration</span>
        </div>
        <div className="flex items-start gap-2">
          <CalendarDays className="mt-1" size={16} />
          <span><strong>Duration:</strong> Self-Initiated Project (4 months)</span>
        </div>
        <div className="flex items-start gap-2">
          <Users className="mt-1" size={16} />
          <span><strong>Team:</strong> 1 (Solo Project)</span>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          AI pipelines for video intelligence are often fragmented, unscalable, and tightly coupled. They also lack developer-friendly APIs and flexible deployment options. The goal of this project was to build a modular and scalable system for real-time video analysis, featuring production-ready APIs for various video intelligence tasks like object detection, segmentation, inpainting, and motion tracking.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Designed with modularity, scalability, and real-time performance in mind, this platform enables AI tasks such as object detection, face embedding (FaceNet), segmentation using SAM, and inpainting with LaMa, all through easy-to-use REST APIs.
        </p>
      </motion.section>

      {/* Problem Statement */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} />Problem Statement</h2>
        <h3 className="font-semibold mb-1 text-sm">🚨 Key Challenges:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm mb-4 space-y-1">
          <li>Fragmented AI pipelines with no clear integration across video intelligence tasks</li>
          <li>Lack of modular, scalable, and production-ready APIs for real-time video analysis</li>
          <li>Difficulty in providing flexible deployment options (edge vs. cloud)</li>
        </ul>
      </motion.section>

      {/* Product Thinking */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />Product Thinking</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>User-first design: Abstracted AI complexities behind clean, intuitive APIs.</li>
          <li>Modularity: Enabled developers to plug in individual features (e.g., only SAM or object detection).</li>
          <li>Speed & Scalability: Optimized for real-time inference over RESTful APIs.</li>
          <li>Deploy Anywhere: System built to support both edge and cloud deployments.</li>
        </ul>
      </motion.section>

      {/* Key Features */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Hammer className="inline mr-2 mb-1 text-cyan-600" size={18} />Key Features</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li><strong>/detect:</strong> Object detection using YOLOv8</li>
          <li><strong>/facenet:</strong> Face embedding + similarity matching</li>
          <li><strong>/segment:</strong> Segment anything with Meta’s SAM</li>
          <li><strong>/inpaint:</strong> Remove objects or correct occlusions with LaMa</li>
          <li><strong>/motion:</strong> Detect camera panning, tilt, and zoom</li>
          <li><strong>/auth:</strong> JWT-based user authentication</li>
          <li><strong>/integrations:</strong> Webhooks for third-party apps (Slack, Telegram, etc.)</li>
        </ul>
      </motion.section>

      {/* System Architecture */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><ServerCog className="inline mr-2 mb-1 text-cyan-600" size={18} />System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="bg-gray-50 p-4 border rounded">
            <h3 className="font-bold mb-2">⚙️ Components</h3>
            <p>
              - <strong>Frontend (optional):</strong> Swagger UI for interactive API testing<br />
              - <strong>Backend (FastAPI + Python):</strong> REST endpoints calling containerized ML services<br />
              - <strong>Model Services:</strong> Dockerized microservices with shared gRPC protocol<br />
              - <strong>Queue (RabbitMQ / Kafka):</strong> For async processing of large jobs<br />
              - <strong>Database (PostgreSQL + Redis):</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;PostgreSQL: User auth, metadata, job tracking<br />
              &nbsp;&nbsp;&nbsp;&nbsp;Redis: Caching frequent queries, session management
            </p>
          </div>

          <div className="bg-gray-50 p-4 border rounded">
            <h3 className="font-bold mb-2">📦 Infrastructure</h3>
            <p>
              - <strong>Inference at scale:</strong> Load-balanced using Gunicorn + Uvicorn<br />
              - <strong>Container orchestration:</strong> Docker Compose (local), Kubernetes (cloud)<br />
              - <strong>CI/CD:</strong> GitHub Actions for tests, Docker builds, and push to registry<br />
              - <strong>Monitoring:</strong> Prometheus + Grafana for API latency, inference time, and system health
            </p>
          </div>
        </div>
      </motion.section>

      {/* API Gateway */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-blue-600" size={18} />API Gateway</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Rate limiting, request logging, and load balancing</li>
          <li>JWT-based authentication</li>
          <li>Retry logic and fallback handlers for long jobs</li>
        </ul>
      </motion.section>

      {/* Impact */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} />Impact</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
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
        <p className="text-sm text-gray-700">Collaborated with:</p>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Designers to define an intuitive Swagger UI</li>
          <li>Backend Devs (peer reviewers) to optimize DB schema</li>
          <li>ML experts to validate SAM and LaMa performance</li>
          <li>Ops for scalable deployment and observability</li>
        </ul>
      </motion.section>

      {/* Lessons Learned */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-yellow-400" size={18} />Lessons Learned</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>The importance of designing with extensibility and modularity in mind</li>
          <li>How clear API documentation and SDKs drastically improve developer experience</li>
          <li>The value of security and role-based access control in production APIs</li>
          <li>Challenges in balancing speed and quality of AI inference tasks</li>
        </ul>
      </motion.section>

      {/* Tags */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-yellow-400" size={18} />Tags</h2>
        <div className="flex gap-3">
          <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">AI</span>
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">API</span>
          <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">Security</span>
          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">Modularity</span>
          <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">Extensibility</span>
        </div>
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

export default CaseStudyDetail5;
