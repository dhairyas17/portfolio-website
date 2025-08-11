// src/pages/CaseStudyDetails.tsx
import { useEffect, useState } from 'react';
import { ChevronUp, TagIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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

const CaseStudyDetailHome1 = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  // inside your component
  const location = useLocation();
  
  // Extract current query params or default
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page') || '1';
  const filter = searchParams.get('filter') || '';
  
  const goBack = () => {
    // Build query string preserving filter and page
    const query = new URLSearchParams();
    if (filter) query.set('filter', filter);
    if (page) query.set('page', page);
  
    // Navigate to /case-studies with query and hash
    navigate(`/case-studies?${query.toString()}#case-study`);
  };
  
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

        {/* Back Button */}
        <motion.button
  className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 mb-8 transition"
  onClick={goBack}
  {...fadeIn}
>
  <ArrowLeft className="w-4 h-4 mr-2" />
  Back to case studies
</motion.button>

      
      {/* Header */}
      <motion.h1 className="text-4xl font-bold mb-6 leading-snug" {...fadeIn}>
        Redesigning Evercam's Gate Report
      </motion.h1>

      {/* Summary */}
      <motion.div
  className="flex justify-between text-sm text-gray-700 mb-10"
  {...fadeIn}
>
  {/* Left Column */}
  <div className="flex flex-col gap-2">
    <div className="flex items-start gap-2">
      <Brain className="mt-1" size={16} />
      <span>
        <strong>Category:</strong> Product Design, System Design, AI/Edge Architecture
      </span>
    </div>
    <div className="flex items-start gap-2">
      <Users className="mt-1" size={16} />
      <span>
        <strong>Team:</strong> 1 TPM (myself), 6 Engineers, 2 AI Researchers, 2 DevOps,
        1 Designer, 1 CS Manager, 3 Annotation + QA
      </span>
    </div>
    <div className="flex items-start gap-2">
      <Hammer className="mt-1" size={16} />
      <span>
        <strong>Stack:</strong> Jetson, YOLOv5, RabbitMQ, PostgreSQL, Ansible, RTSP, REST APIs
      </span>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-2 items-end text-right">
    <div className="flex items-start gap-2">
      <CalendarDays className="mt-1" size={16} />
      <span>
        <strong>Duration:</strong> 6 months
      </span>
    </div>
    <div className="flex items-start gap-2">
      <Globe className="mt-1" size={16} />
      <span>
        <strong>Deployment:</strong> 100+ Construction Sites
      </span>
    </div>
  </div>
</motion.div>


      {/* Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Overview</h2>
        <p className="text-gray-700 text-lg text-justify leading-relaxed">
          Gate Report is Evercam’s flagship product designed for vehicle monitoring at enterprise and construction site gates. 
          Initially a cloud-based solution, it suffered from high latency, huge data costs, and poor reliability under variable 
          network conditions, resulting in low adoption and poor NPS.
        </p>
        <p className="mt-4 text-gray-700 text-lg text-justify leading-relaxed">
          As TPM, I led a product and system redesign, transforming Gate Report into an edge-based, event-driven solution. We 
          removed technical noise like FaceNet re-identification that did not serve core customer needs and focused instead on 
          real-time, reliable event delivery. The result was a resilient, scalable product with a massive improvement in user 
          satisfaction and revenue.
        </p>
      </motion.section>

      {/* The Problem */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} />The Problem</h2>
        <h3 className="font-semibold mb-1 text-lg">Cloud-Centric Pain Points:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-lg mb-4 space-y-1">
          <li>Entire video footage was uploaded to cloud for processing</li>
          <li>High latency (7-8 hours delay)</li>
          <li>Expensive bandwidth (~3TB/month per site)</li>
          <li>Failed frequently in areas with poor network</li>
          <li>Low NPS (~7%), due to unreliability and user frustration</li>
        </ul>

        <h3 className="font-semibold mb-1 text-lg">Over-Engineered Tech Stack:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li>Included FaceNet-based face re-identification, advanced classifiers, and full-frame object detection pipelines</li>
          <li>These were technically impressive but added cost, complexity, and little customer value</li>
          <li>No clear product prioritization, built like an AI research project, not a user-facing product</li>
        </ul>
      </motion.section>

      {/* Role as TPM */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />My Role as TPM</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
          <li>Redefined the product direction from “tech-first” to “customer-first”</li>
          <li>Prioritized real-time, reliable detection over full-frame processing</li>
          <li>Worked closely with AI/ML, DevOps, Design, QA, and CS to align vision and execution</li>
          <li>Balanced technical feasibility, business impact, and user feedback</li>
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
                ['Core Value', 'Full footage reprocessing + FaceNet re-ID', 'Real-time event detection (in/out with object type)'],
                ['Inference Location', 'Cloud only', 'On-device (Edge)'],
                ['Data Sync', 'Video-heavy sync, often failed', 'Lightweight metadata with sync queues'],
                ['Offline Support', 'None', 'Yes, with local RabbitMQ + re-sync'],
                ['Tech Prioritization', 'Included advanced but unused AI modules', 'Removed non-critical ML (e.g., FaceNet) to simplify, reduce cost'],
                ['UX Goals', 'Engineer-focused, raw detections', 'Event-focused, actionable, filterable by time/type'],
                ['Customer Feedback Integration', 'Missing', 'Weekly feedback loops with CS and key clients'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-lg italic text-gray-600">Key Prioritization Principle: Deliver valuable, reliable, real-time events, not “cool AI”.</p>
      </motion.section>

      {/* Architecture Before vs After */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><ServerCog className="inline mr-2 mb-1 text-cyan-600" size={18} />Architecture (Before vs After)</h2>
        <div className="grid grid-cols-1 gap-6 text-lg">
          <div className="bg-red-50 p-4 border rounded">
            <h3 className="font-bold mb-2">Legacy Cloud Architecture</h3>
            <p>
              →  Single point of failure (network/cloud)<br />
              → Video-heavy sync<br />
              → Complex and costly
            </p>
          </div>
          <motion.div className="mt-6" {...fadeIn}>
          <img
            src="/assets/case-studies/gr-d1.png"
            alt="Key Product Decisions Diagram"
            className="rounded-lg shadow-lg border border-gray-200 w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Cloud based Gate Report
          </p>
          <hr className="my-6 border-t border-gray-300" /> {/* Divider line */}
        </motion.div>
                <div className="bg-green-50 p-4 border rounded">
                  <h3 className="font-bold mb-2">New Edge-First Architecture</h3>
                  <p>
                  → Real-time detection<br />
                  → Works offline and resyncs later<br />
                  → Low bandwidth footprint<br />
                  → Scalable and OTA-deployable
                  </p>
                </div>
                <motion.div className="mt-6" {...fadeIn}>
          <img
            src="/assets/case-studies/gr-d2.png"
            alt="Key Product Decisions Diagram"
            className="rounded-lg shadow-lg border border-gray-200 w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Edge based Gate Report
          </p>
        </motion.div>
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
                ['Removed FaceNet + complex classifiers', 'Not aligned with actual customer use cases', 'Reduced "AI novelty" but improved speed & simplicity'],
                ['Real-time detection on Jetson devices', 'Reduced latency, better reliability', 'Required careful model optimization for edge'],
                ['Event-level sync via RabbitMQ + Sync Service', 'Resilience in poor networks', 'Increased local system complexity'],
                ['Rebuilt UX for actionability (events, filters)', 'Focus on what users need to act on', 'Dropped advanced debug views used internally'],
                ['Ansible + AWX for OTA deployments', 'Empowered non-dev teams to push updates', 'Needed training and access control setup'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
      <motion.div className="mt-6" {...fadeIn}>
          <img
            src="/assets/case-studies/gate-report-ui.png"
            alt="Key Product Decisions Diagram"
            className="rounded-lg shadow-lg border border-gray-200 w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Gate Report Dashboard
          </p>
          </motion.div>
            {/* Outcomes */}
            <motion.section className="mb-10" {...fadeIn}>
              <h2 className="text-2xl font-semibold mb-3"><TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} />Outcomes & Impact</h2>
              <div className="overflow-x-auto text-lg">
                <table className="w-full border border-gray-300 rounded shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className={tableRowStyles}>Metric</th>
                      <th className={tableRowStyles}>Before</th>
                      <th className={tableRowStyles}>After</th>
                      <th className={tableRowStyles}>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['NPS', '7%', '78%', '+71 pts'],
                      ['Monthly Recurring Revenue (MRR)', '1×', '4.5×', '+450%'],
                      ['Latency', '7-8 hours', '<5 sec', '↓ 99.98%'],
                      ['Data usage per site', '3TB+/month', '<200GB/month', '↓ 94%'],
                      ['Event reliability', '70%', '99.3%', '↑ 29%'],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>
      
            {/* Cross Functional */}
            <motion.section className="mb-10" {...fadeIn}>
              <h2 className="text-2xl font-semibold mb-3"><Users className="inline mr-2 mb-1 text-violet-600" size={18} />Cross-Functional Collaboration</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
                <li>AI/ML Team: Pruned unnecessary models, optimized YOLO for Jetson</li>
                <li>DevOps: Built AWX-based OTA rollout pipeline</li>
                <li>CS Team: Weekly syncs to prioritize UX improvements</li>
                <li>QA & Annotation: Helped validate detection quality across deployments</li>
                <li>Design: Created new event-centric UI with filters, search, and sync indicators</li>
              </ul>
            </motion.section>

            {/* Feedback */}
            <motion.section className="mb-10" {...fadeIn}>
              <h2 className="text-2xl font-semibold mb-3"><MessageCircle className="inline mr-2 mb-1 text-blue-600" size={18} />Customer Feedback</h2>
              <blockquote className="border-l-4 pl-4 italic text-gray-700 mb-3">
                "Before this, we had to wait and guess. Now we get the data in real time. It's exactly what we needed."
                <br /> - Construction Site Manager, Skanska USA
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic text-gray-700">
                "This is a product we can sell and scale."
                <br /> - Head of Sales, Evercam
              </blockquote>
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

      {/* Key Takeaways */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3">
        <TrendingUp  className="inline mr-2 mb-1 text-green-500" size={18} />Key Takeaways
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
          <li>
            <strong>Customer-first over tech novelty</strong>: Dropping low-value features like FaceNet simplified the stack and boosted adoption.
          </li>
          <li>
            <strong>Edge-first design slashes latency</strong>: Moving inference to Jetson cut delays from hours to seconds while adding offline resilience.
          </li>
          <li>
            <strong>Data-light sync cuts costs</strong>: Switching from full video to metadata-only reduced bandwidth by over 90%.
          </li>
          <li>
            <strong>Cross-functional loops</strong>: Weekly syncs with CS, Sales, and Engineering ensured the product stayed aligned with user needs.
          </li>
          <li>
            <strong>Deployment tooling matters</strong>: Ansible + AWX gave non-devs the ability to update devices safely at scale.
          </li>
          <li>
            <strong>Track & show results</strong>: NPS jump (+71 pts) and MRR growth (4.5×) built strong internal and client confidence.
          </li>
        </ul>
      </motion.section>


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

export default CaseStudyDetailHome1;