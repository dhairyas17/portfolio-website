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

const CaseStudyDetail3 = () => {
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
        Building Real-Time Observability for OTA on 1300+ Edge Devices
      </motion.h1>

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
        <strong>Category:</strong> System Design, Product Strategy, DevOps Enablement
      </span>
    </div>
    <div className="flex items-start gap-2">
      <Users className="mt-1" size={16} />
      <span>
        <strong>Team:</strong> 1 TPM, 3 DevOps Engineers, 2 Backend Engineers, 1 Embedded Engineer, Support Lead, QA Engineer
      </span>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-2 md:w-1/2 md:items-end md:text-right mt-4 md:mt-0">
    <div className="flex items-start gap-2">
      <CalendarDays className="mt-1" size={16} />
      <span>
        <strong>Duration:</strong> 4 months
      </span>
    </div>
  </div>
</motion.div>


      {/* Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The edge device fleet was operating without real-time observability, leading to several challenges. There was a lack of visibility into device health for SiteOps teams, high costs associated with site visits due to undetected failures, poor NPS from customers, and a reactive alert system that relied on customers to raise issues rather than the system notifying the team.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          As TPM, I led the design and implementation of a comprehensive observability system. The system was focused on providing real-time health monitoring, improving resolution times, and reducing the need for site visits, while minimizing manual intervention and increasing system transparency.
        </p>
      </motion.section>

      {/* The Problem */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} />The Problem</h2>
        <h3 className="font-semibold mb-1 text-lg">Observability Gaps:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-lg mb-4 space-y-1">
          <li>Lack of visibility into device health for SiteOps teams</li>
          <li>High costs associated with site visits due to undetected failures</li>
          <li>Poor NPS due to long resolution times</li>
          <li>Reactive alert system that relied on customers to raise issues</li>
          <li>Limited accountability and no historical data during outages</li>
        </ul>
      </motion.section>

      {/* Role as TPM */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />My Role as TPM</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li>Defined observability as a core product feature, focusing on both technical and user-centric requirements</li>
          <li>Led cross-functional collaboration to ensure alignment across firmware, DevOps, backend, support, and QA teams</li>
          <li>Spearheaded the system architecture using Prometheus, Grafana, and heartbeat daemon</li>
          <li>Managed phased rollout using Ansible & AWX for safe, scalable OTA deployment</li>
          <li>Ensured smooth stakeholder alignment and minimized friction through intuitive Grafana dashboards</li>
        </ul>
      </motion.section>

      {/* Product Design & Prioritization Table */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Product Design & Prioritization</h2>
        <div className="overflow-x-auto text-lg">
          <table className="w-full border border-gray-300 rounded shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className={tableRowStyles}>Focus Area</th>
                <th className={tableRowStyles}>Old Approach</th>
                <th className={tableRowStyles}>New Product-Driven Approach</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Core Value', 'Reactive alert system based on customer issues', 'Proactive real-time health monitoring for all devices'],
                ['Visibility', 'No real-time visibility for SiteOps', 'Complete transparency through Grafana dashboards'],
                ['Alerting', 'Customer-initiated alerting', 'Automated system alerts sent for critical failures'],
                ['UX Focus', 'Not tailored for non-technical teams', 'SiteOps-focused, user-friendly Grafana dashboard'],
                ['Deployment', 'Manual updates and deployments', 'OTA deployment with Ansible + AWX'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Architecture Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><ServerCog className="inline mr-2 mb-1 text-cyan-600" size={18} />Architecture Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div className="bg-gray-50 p-4 border rounded">
            <h3 className="font-bold mb-2">Legacy Approach</h3>
            <p>
              - No real-time observability.<br />
              - Reactive alerting system.<br />
              - High operational costs due to site visits.
            </p>
          </div>
          <div className="bg-green-50 p-4 border rounded">
            <h3 className="font-bold mb-2">New Observability System</h3>
            <p>
              - Real-time device health monitoring with Prometheus.<br />
              - Visualizations in Grafana.<br />
              - Automated alerts for failures.<br />
              - OTA deployment with Ansible & AWX for scaling.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Product Decisions */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Hammer className="inline mr-2 mb-1 text-orange-600" size={18} />Key Product & Technical Decisions</h2>
        <div className="overflow-x-auto text-lg">
          <table className="w-full border border-gray-300 rounded shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className={tableRowStyles}>Decision</th>
                <th className={tableRowStyles}>Reason</th>
                <th className={tableRowStyles}>Trade-off</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Prometheus for Metrics', 'Highly flexible and scalable for real-time metrics', 'Requires careful setup and resource management'],
                ['Grafana for Dashboards', 'Great for visualizing metrics in an intuitive way', 'Learning curve for non-technical users'],
                ['OTA Deployment with Ansible', 'Enables seamless updates for large-scale device fleets', 'Complexity in configuration and deployment pipeline setup'],
                ['Heartbeat Daemon', 'Low resource footprint for device-side health checks', 'Potential missed metrics in low-bandwidth situations'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Results & Impact */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} />Results & Impact</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg">
          <li>75% reduction in device failures due to real-time health checks</li>
          <li>80% reduction in field technician visits due to automated failure detection</li>
          <li>Improved NPS by 35% due to faster issue resolution</li>
          <li>Increased system transparency, enabling proactive management of the edge fleet</li>
        </ul>
      </motion.section>

      {/* Lessons Learned */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-yellow-400" size={18} />Lessons Learned</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg">
          <li>The importance of balancing technical feasibility with user-centric design</li>
          <li>How real-time monitoring can drastically improve operational efficiency</li>
          <li>Why collaboration with non-technical teams (e.g., SiteOps) is essential for product success</li>
          <li>Challenges in scaling observability systems across diverse device architectures</li>
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

export default CaseStudyDetail3;
