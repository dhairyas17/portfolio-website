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

const CaseStudyDetail1 = () => {
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
       Redesigning Evercam's Gate Report for Real-Time Edge-Based Object Detection
      </motion.h1>

      {/* Summary */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-10" {...fadeIn}>
        <div className="flex items-start gap-2">
          <Brain className="mt-1" size={16} />
          <span><strong>Category:</strong> Product Design, System Design, AI/Edge Architecture</span>
        </div>
        <div className="flex items-start gap-2">
          <CalendarDays className="mt-1" size={16} />
          <span><strong>Duration:</strong> 6 months</span>
        </div>
        <div className="flex items-start gap-2">
          <Users className="mt-1" size={16} />
          <span><strong>Team:</strong> 1 TPM (myself), 6 Engineers, 2 AI Researchers, 2 DevOps, 1 Designer, 1 CS Manager, 3 Annotation + QA</span>
        </div>
        <div className="flex items-start gap-2">
          <Globe className="mt-1" size={16} />
          <span><strong>Deployment:</strong> 100+ industrial sites</span>
        </div>
        <div className="flex items-start gap-2">
          <Hammer className="mt-1" size={16} />
          <span><strong>Stack:</strong> Jetson, YOLOv5, RabbitMQ, PostgreSQL, Ansible, RTSP, REST APIs</span>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Gate Report is Evercam’s flagship product designed for vehicle monitoring at enterprise and construction site gates. 
          Initially a cloud-based solution, it suffered from high latency, huge data costs, and poor reliability under variable 
          network conditions — resulting in low adoption and poor NPS.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          As TPM, I led a product and system redesign, transforming Gate Report into an edge-based, event-driven solution. We 
          removed technical noise like FaceNet re-identification that did not serve core customer needs and focused instead on 
          real-time, reliable event delivery. The result was a resilient, scalable product with a massive improvement in user 
          satisfaction and revenue.
        </p>
      </motion.section>

      {/* The Problem */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} />The Problem</h2>
        <h3 className="font-semibold mb-1 text-sm">❌ Cloud-Centric Pain Points:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm mb-4 space-y-1">
          <li>Entire video footage was uploaded to cloud for processing</li>
          <li>High latency (2–10 min delay)</li>
          <li>Expensive bandwidth (~3TB/month per site)</li>
          <li>Failed frequently in areas with poor network</li>
          <li>Low NPS (~7%), due to unreliability and user frustration</li>
        </ul>

        <h3 className="font-semibold mb-1 text-sm">🤖 Over-Engineered Tech Stack:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Included FaceNet-based face re-identification, advanced classifiers, and full-frame object detection pipelines</li>
          <li>These were technically impressive but added cost, complexity, and little customer value</li>
          <li>No clear product prioritization — built like an AI research project, not a user-facing product</li>
        </ul>
      </motion.section>

      {/* Role as TPM */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />My Role as TPM</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Redefined the product direction from “tech-first” to “customer-first”</li>
          <li>Prioritized real-time, reliable detection over full-frame processing</li>
          <li>Worked closely with AI/ML, DevOps, Design, QA, and CS to align vision and execution</li>
          <li>Balanced technical feasibility, business impact, and user feedback</li>
        </ul>
      </motion.section>

      {/* Product Design & Prioritization Table */}
      {/* ... (existing sections remain unchanged) ... */}

      {/* Outcomes */}
      {/* ... existing outcomes table ... */}

      {/* Extra Metrics That Mattered */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3">📊 Metrics That Mattered</h2>
        <div className="overflow-x-auto text-sm">
          <table className="w-full border border-gray-300 rounded shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className={tableRowStyles}>Metric</th>
                <th className={tableRowStyles}>Before</th>
                <th className={tableRowStyles}>After</th>
                <th className={tableRowStyles}>Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Device Online Uptime', '~92%', '98.5%', 'Fewer customer complaints'],
                ['Time to Provision a Device', '~2.5 hrs', '<25 mins', 'Enabled rapid scaling'],
                ['Model Update Rollbacks', 'Frequent', 'Near-zero', 'Stable AI rollout'],
                ['Support Tickets (per site)', '~5/week', '<1/week', 'Saved ops team ~12 hrs/week'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* OTA Update Pipeline */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3">🔄 OTA Update Pipeline</h2>
        <div className="overflow-x-auto text-sm">
          <table className="w-full border border-gray-300 rounded shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className={tableRowStyles}>Component</th>
                <th className={tableRowStyles}>Tools / Stack</th>
                <th className={tableRowStyles}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Image Build', 'Docker, Yocto, JetPack', 'Custom base images per device class'],
                ['Update Server', 'Nginx, Airflow', 'Airflow DAGs controlled versioned rollouts'],
                ['Device Agent', 'Python Daemon (gRPC + OTA logic)', 'Pulled updates securely, handled reboots'],
                ['Fail-Safe Logic', 'A/B partitions, watchdog services', 'Rollbacks if update fails or hangs'],
                ['Monitoring', 'Device heartbeat to Cloud PubSub', 'Realtime liveness and diagnostics'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Observability Stack */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3">📈 Observability Stack</h2>
        <div className="overflow-x-auto text-sm">
          <table className="w-full border border-gray-300 rounded shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className={tableRowStyles}>Metric Type</th>
                <th className={tableRowStyles}>Source</th>
                <th className={tableRowStyles}>Tooling</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Device Health', 'CPU, temperature, storage, uptime', 'Telegraf → InfluxDB'],
                ['App Logs', 'CV app, firmware logs', 'Fluentd → Loki'],
                ['Model Metrics', 'FPS, inference latency', 'Embedded Prometheus exporter'],
                ['Alerts', 'Offline devices, overheating', 'Grafana Alerts, Slack'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Quick Reference */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3">🗂 Quick Reference — Databases</h2>
        <div className="overflow-x-auto text-sm">
          <table className="w-full border border-gray-300 rounded shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className={tableRowStyles}>Use Case</th>
                <th className={tableRowStyles}>Database</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Product logic and transactions', 'PostgreSQL, MySQL'],
                ['Flexible, unstructured data', 'MongoDB, Couchbase'],
                ['Real-time analytics', 'ClickHouse, Rockset'],
                ['Time-series data', 'TimescaleDB, InfluxDB'],
                ['Global scale, low ops', 'DynamoDB, PlanetScale'],
                ['Mobile apps or MVP speed', 'Firebase, Supabase'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, j) => <td key={j} className={tableRowStyles}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
{/* Metrics That Mattered */}
<motion.section className="mb-10" {...fadeIn}>
  <h2 className="text-2xl font-semibold mb-3">📊 Metrics That Mattered</h2>
  <div className="overflow-x-auto text-sm">
    <table className="w-full border border-gray-300 rounded shadow-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className={tableRowStyles}>Metric</th>
          <th className={tableRowStyles}>Before</th>
          <th className={tableRowStyles}>After</th>
          <th className={tableRowStyles}>Impact</th>
        </tr>
      </thead>
      <tbody>
        {[
          ['Device Online Uptime', '~92%', '98.5%', 'Fewer customer complaints'],
          ['Time to Provision a Device', '~2.5 hrs', '<25 mins', 'Enabled rapid scaling'],
          ['Model Update Rollbacks', 'Frequent', 'Near-zero', 'Stable AI rollout'],
          ['Support Tickets (per site)', '~5/week', '<1/week', 'Saved ops team about 12 hrs/week'],
        ].map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, j) => (
              <td key={j} className={tableRowStyles}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</motion.section>

{/* Tracks & Outcomes */}
<motion.section className="mb-10" {...fadeIn}>
  <h2 className="text-2xl font-semibold mb-3">🚀 Tracks & Outcomes</h2>
  <div className="overflow-x-auto text-sm">
    <table className="w-full border border-gray-300 rounded shadow-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className={tableRowStyles}>Track</th>
          <th className={tableRowStyles}>Objective</th>
          <th className={tableRowStyles}>Outcome</th>
        </tr>
      </thead>
      <tbody>
        {[
          [
            'Edge Infrastructure Platform',
            'Hardware selection, device OS, logging, OTA',
            'Standardized firmware and remote updates'
          ],
          [
            'Computer Vision SDK',
            'Modular AI models, plug-and-play integration',
            'Higher model performance, faster deployments'
          ],
          [
            'Observability Stack',
            'Health monitoring, logs, alerts',
            'Reduced downtime by 40%'
          ],
        ].map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, j) => (
              <td key={j} className={tableRowStyles}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</motion.section>
      {/* Cross Functional */}
      {/* ... existing cross functional, feedback, tags, scroll-to-top, footer remain unchanged ... */}
</motion.div>
  );
};

export default CaseStudyDetail1;
