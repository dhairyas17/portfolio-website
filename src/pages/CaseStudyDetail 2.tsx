// src/pages/CaseStudyDetails.tsx
import { useEffect, useState } from 'react';
import { ChevronUp, TagIcon } from 'lucide-react';
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

const CaseStudyDetail2 = () => {
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
    className="max-w-4xl mx-auto px-6 py-24 text-gray-900"
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
        Standardizing Edge Setup at Evercam for Scalable Video Deployment
      </motion.h1>

      {/* Summary */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-10" {...fadeIn}>
        <div className="flex items-start gap-2">
          <Brain className="mt-1" size={16} />
          <span><strong>Category:</strong> System Design, Infrastructure Optimization, Product Operations</span>
        </div>
        <div className="flex items-start gap-2">
          <CalendarDays className="mt-1" size={16} />
          <span><strong>Duration:</strong> 4 months</span>
        </div>
        <div className="flex items-start gap-2">
          <Users className="mt-1" size={16} />
          <span><strong>Team:</strong> 1 TPM (myself), 3 Firmware Engineers, 2 DevOps, 5 Developers, 2 Support Engineers</span>
        </div>
        <div className="flex items-start gap-2">
          <Globe className="mt-1" size={16} />
          <span><strong>Scope:</strong> 100+ enterprise sites, scaling to 1000+</span>
        </div>
        <div className="flex items-start gap-2">
          <Hammer className="mt-1" size={16} />
          <span><strong>Stack:</strong> SBCs (Jetson/Nano), RTSP, Ansible, AWX, Docker, Custom Firmware, YAML Configs</span>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Evercam’s video analytics platform relies heavily on edge devices deployed across industrial and construction sites. Initially, each site used custom hardware setups and camera configurations, resulting in inconsistent performance, high support overhead, and deployment delays.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          As TPM, I initiated and led the Edge Standardization Program, moving the architecture from camera-based deployment to a kit-based modular system. I defined a unified spec across hardware, firmware, and software layers, and built a scalable configuration rollout using Ansible for devs and AWX for non-technical support staff — significantly improving speed, reliability, and manageability of edge deployments.
        </p>
      </motion.section>

      {/* The Problem */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} />The Problem</h2>
        <h3 className="font-semibold mb-1 text-sm">❌ Pre-Standardization Chaos:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm mb-4 space-y-1">
          <li>No two sites had the same hardware or firmware version</li>
          <li>Inconsistent camera models, lenses, bitrates, and resolutions</li>
          <li>Manual setup led to configuration errors and tech debt</li>
          <li>Devs had to assist in each deployment → poor scalability</li>
          <li>Support team couldn’t troubleshoot or reset edge devices independently</li>
        </ul>
      </motion.section>

      {/* Role as TPM */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />My Role as TPM</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Initiated the Edge Standardization effort</li>
          <li>Aligned hardware, firmware, DevOps, and Support teams</li>
          <li>Designed the modular kit-based architecture</li>
          <li>Rolled out automation tooling for OTA software updates</li>
          <li>Built a configuration delivery pipeline for non-engineering teams</li>
          <li>Championed documentation + self-serve tools to empower field ops</li>
        </ul>
      </motion.section>

      {/* Product & Infrastructure Design Decisions */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Product & Infrastructure Design Decisions</h2>
        <div className="overflow-x-auto text-sm">
          <table className="w-full border border-gray-300 rounded shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className={tableRowStyles}>Area</th>
                <th className={tableRowStyles}>Before</th>
                <th className={tableRowStyles}>After</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Hardware Setup', 'Ad-hoc camera models & cables', 'Pre-defined “Evercam Edge Kit” with validated SBC + camera + storage'],
                ['Camera Configs', 'Manual resolution/stream tuning', 'YAML-based config profiles auto-pushed via OTA'],
                ['Deployment Workflow', 'Manual SSH into each device', 'Ansible playbooks for OTA + AWX UI for non-devs'],
                ['Support Tools', 'Devs required for reset/troubleshooting', 'Support team trained to push configs via UI'],
                ['Version Control', 'Untracked, undocumented versions', 'Firmware + software versions tracked centrally'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Architecture Shift */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><ServerCog className="inline mr-2 mb-1 text-cyan-600" size={18} />Architecture Shift: From Camera-Based to Kit-Based</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="bg-gray-50 p-4 border rounded">
            <h3 className="font-bold mb-2">❌ Old Model (Camera-Centric)</h3>
            <p>
              Each site → Custom camera → Custom config → Manual install & setup → No version control
            </p>
          </div>
          <div className="bg-green-50 p-4 border rounded">
            <h3 className="font-bold mb-2">✅ New Model (Kit-Centric)</h3>
            <p>
              Pre-approved Edge Kit (Jetson + Camera) → Standard firmware → Auto-config (Ansible) → UI-driven OTA (AWX)<br />
              1-click config deployment via web UI<br />
              No dev needed for pushing updates or resets<br />
              Full reproducibility of hardware setup across clients
            </p>
          </div>
        </div>
      </motion.section>

      {/* Cross-Functional Collaboration */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Users className="inline mr-2 mb-1 text-purple-600" size={18} />Cross-Functional Collaboration</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li><strong>Firmware Team:</strong> Helped define baseline image and upgrade strategy</li>
          <li><strong>DevOps:</strong> Built Ansible and AWX stack, managed CI/CD</li>
          <li><strong>Developers:</strong> Created modular components for containerized deployment</li>
          <li><strong>Support/Field Ops:</strong> Trained to use UI to deploy and reset devices</li>
          <li><strong>QA:</strong> Validated kit stability across diverse site conditions</li>
        </ul>
      </motion.section>

      {/* Internal Feedback */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><MessageCircle className="inline mr-2 mb-1 text-indigo-600" size={18} />Internal Feedback</h2>
        <blockquote className="italic text-gray-700 mb-4">
          “Standardizing the kits was a game-changer — we can now ship, install, and forget.”<br />
          <span className="text-sm">— Deployment Ops Lead</span>
        </blockquote>
        <blockquote className="italic text-gray-700 mb-4">
          “AWX made it possible for support to handle edge resets and push updates — no more dev bottleneck.”<br />
          <span className="text-sm">— Support Engineer</span>
        </blockquote>
      </motion.section>

      {/* Key Learnings */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><TrendingUp className="inline mr-2 mb-1 text-green-500" size={18} />Key Learnings</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Standardization unlocks scale — what worked for 10 sites failed at 100+</li>
          <li>TPMs need to drive operational architecture, not just features</li>
          <li>Empowering non-engineers is a major force multiplier</li>
          <li>Investing in infra as product pays off in speed, quality, and developer bandwidth</li>
        </ul>
      </motion.section>

      {/* Tags */}
      <motion.section {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><TagIcon className="inline mr-2 mb-1 text-indigo-600" size={18} />Tags</h2>
        <div className="flex flex-wrap gap-2 text-sm text-gray-700">
          {[
            "Edge Infrastructure", "Ansible", "AWX", "SBC", "TPM", "OTA", "Hardware Standardization", 
            "DevOps", "Support Enablement", "Kit-Based Architecture", "Process Optimization"
          ].map((tag, idx) => (
            <span key={idx} className="bg-gray-200 px-3 py-1 rounded-lg">{tag}</span>
          ))}
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

export default CaseStudyDetail2;
