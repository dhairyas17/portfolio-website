// src/pages/CaseStudyDetails.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const CaseStudyDetail3 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-12 text-gray-900"
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Back button */}
      <motion.button
        className="flex items-center gap-2 text-sm text-blue-600 hover:underline mb-8"
        onClick={() => navigate(-1)}
        {...fadeIn}
      >
        <ArrowLeft size={16} /> Back to Case Studies
      </motion.button>

      {/* Header */}
      <motion.h1 className="text-4xl font-bold mb-6 leading-snug" {...fadeIn}>
        📌 Case Study: Scaling ML Data Pipelines & MLOps Lifecycle for Improved Detection Accuracy
      </motion.h1>

      {/* Subtitle */}
      <motion.h2 className="text-xl font-semibold text-gray-700 mb-6 leading-snug" {...fadeIn}>
        Redesigning the ML Training Lifecycle to Boost Detection Accuracy from 67% to 96%
      </motion.h2>

      {/* Summary */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-10" {...fadeIn}>
        <div className="flex items-start gap-2">
          <Brain className="mt-1" size={16} />
          <span><strong>Category:</strong> AI/ML Systems · MLOps · Edge AI</span>
        </div>
        <div className="flex items-start gap-2">
          <CalendarDays className="mt-1" size={16} />
          <span><strong>Duration:</strong> 6 months</span>
        </div>
        <div className="flex items-start gap-2">
          <Users className="mt-1" size={16} />
          <span><strong>Team:</strong> 1 TPM (me), 5 Annotation Specialists, 2 ML Engineers, 2 DevOps Engineers</span>
        </div>
        <div className="flex items-start gap-2">
          <Globe className="mt-1" size={16} />
          <span><strong>Scope:</strong> 1000+ global edge nodes</span>
        </div>
        <div className="flex items-start gap-2">
          <Hammer className="mt-1" size={16} />
          <span><strong>Stack:</strong> Apache Airflow, MLflow, Jetson, CVAT, Python, Docker</span>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          To support industrial-grade edge deployments for smart surveillance, the existing ML pipeline needed a complete redesign. The current training system was hitting performance and scalability bottlenecks, and detection accuracy had stagnated at 67%. As the TPM, I led the effort to overhaul the ML training lifecycle—from data collection to deployment—resulting in a model accuracy increase to 96% and significantly improving both the volume and quality of the training data.
        </p>
      </motion.section>

      {/* The Problem */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} />The Problem</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm mb-4 space-y-1">
          <li>Reliant on inconsistent and insufficient training data (~80k frames).</li>
          <li>Manually managed, causing annotation delays and inefficiencies.</li>
          <li>Siloed with fragmented tooling (CVAT, Airflow, local scripts).</li>
          <li>Lacked observability, leading to blind spots in model performance on edge devices.</li>
        </ul>
      </motion.section>

      {/* My Role as TPM */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />My Role as TPM</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Orchestrated the end-to-end redesign of the ML lifecycle.</li>
          <li>Coordinated cross-functionally with annotation, ML, DevOps, and edge deployment teams.</li>
          <li>Defined architecture, tooling choices, and delivery milestones.</li>
          <li>Led prioritization through data-driven trade-offs (e.g., annotation ROI vs model lift).</li>
        </ul>
      </motion.section>

      {/* Solution: ML Lifecycle Overhaul */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Solution: ML Lifecycle Overhaul</h2>
        <div className="space-y-6">
          <h3 className="font-semibold text-lg">🔁 Redesigned Training Loop</h3>
          <p className="text-gray-700 leading-relaxed">
            Scaled the dataset from 80k to 980k+ frames via automated scraping pipelines pulling data from live edge feeds. Prioritized high-signal segments for annotation using model confidence thresholds.
          </p>
          
          <h3 className="font-semibold text-lg">🧠 Data Annotation Strategy</h3>
          <p className="text-gray-700 leading-relaxed">
            Built custom CVAT workflows to improve annotator efficiency (pre-labeling, auto-suggest). Developed quality gates (QA sampling, reannotation pipeline) to maintain label accuracy.
          </p>

          <h3 className="font-semibold text-lg">⚙️ MLOps Integration</h3>
          <p className="text-gray-700 leading-relaxed">
            Re-architected the pipeline using Apache Airflow for reproducible DAGs: Data collection → Preprocessing → Training → Evaluation → Deployment. Introduced experiment tracking via MLflow, enabling versioned datasets and models.
          </p>

          <h3 className="font-semibold text-lg">📉 Noise Reduction</h3>
          <p className="text-gray-700 leading-relaxed">
            Removed noisy classes and false positives by eliminating low-confidence Facenet embeddings and redundant edge logs. Filtered high-bias data sources to reduce annotation debt.
          </p>
        </div>
      </motion.section>

      {/* Impact */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} />Impact</h2>
        <div className="overflow-x-auto text-sm">
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
                ['Detection Accuracy', '67%', '96%', '+29%'],
                ['Training Data Size', '80k frames', '980k+ frames', '↑ 10×'],
                ['Annotation Turnaround Time', 'High', '60% faster', '↓ 60%'],
                ['Model Retraining Cycles', 'Manual', 'Automated', '✅'],
                ['Deployment Reach', 'Limited', '1000+ edge nodes globally', '✅'],
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
        <h2 className="text-2xl font-semibold mb-3"><ServerCog className="inline mr-2 mb-1 text-indigo-600" size={18} />Architecture Overview</h2>
        <pre className="bg-gray-800 text-white p-6 rounded-lg">
        </pre>
      </motion.section>

      {/* Key Product Thinking & Trade-offs */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Hammer className="inline mr-2 mb-1 text-yellow-600" size={18} />Key Product Thinking & Trade-offs</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li><strong>Prioritization:</strong> Chose classes with the highest false-negative impact to annotate first.</li>
          <li><strong>Automation vs. Accuracy:</strong> Balanced automated data scraping and annotation speed with human QA to maintain precision.</li>
          <li><strong>Tooling:</strong> Evaluated between Kubeflow vs Airflow and selected Airflow for simplicity and better integration with our existing stack.</li>
        </ul>
      </motion.section>

      {/* Key Learnings & Takeaways */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />Key Learnings & Takeaways</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Scaling ML isn’t just about models—it’s about data, process, and systems working together.</li>
          <li>As a TPM, aligning annotation teams, ML engineers, and deployment ops toward a shared KPI (accuracy) enabled velocity.</li>
          <li>MLOps isn’t an engineering problem alone—product-led systems thinking delivers long-term value.</li>
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default CaseStudyDetail3;
