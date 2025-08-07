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

const CaseStudyDetail6 = () => {
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
        📌 Case Study: Redesigning Onboarding to Improve Activation by 35%
      </motion.h1>

      {/* Subtitle */}
      <motion.div className="mb-10 text-lg text-gray-700" {...fadeIn}>
        <strong>Subtitle:</strong> Streamlining the user journey for faster adoption and increased self-serve success
      </motion.div>

      {/* Summary */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-10" {...fadeIn}>
        <div className="flex items-start gap-2">
          <Brain className="mt-1" size={16} />
          <span><strong>Category:</strong> User Experience, Onboarding, Product Strategy</span>
        </div>
        <div className="flex items-start gap-2">
          <CalendarDays className="mt-1" size={16} />
          <span><strong>Duration:</strong> 4 months</span>
        </div>
        <div className="flex items-start gap-2">
          <Users className="mt-1" size={16} />
          <span><strong>Team:</strong> 1 PM (me), 1 Designer, 5 Engineers</span>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><LayoutDashboard className="inline mr-2 mb-1 text-indigo-600" size={18} />Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The product faced a significant drop-off in new user engagement, with only 20% of users completing onboarding. This led to poor feature adoption and low activation rates within the first 48 hours. The goal was to redesign the onboarding flow to increase user activation and help users reach their "aha moment" faster, all while reducing dependency on customer success teams.
        </p>
      </motion.section>

      {/* Problem Statement */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><AlertTriangle className="inline mr-2 mb-1 text-red-600" size={18} />Problem Statement</h2>
        <h3 className="font-semibold mb-1 text-sm">🚨 Key Challenges:</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm mb-4 space-y-1">
          <li>Low user engagement with only 20% completing onboarding</li>
          <li>Poor feature adoption and activation within the first 48 hours</li>
          <li>High churn rate due to unclear onboarding flow</li>
        </ul>
      </motion.section>

      {/* Product Thinking */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Lightbulb className="inline mr-2 mb-1 text-yellow-500" size={18} />Product Thinking</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Introduced progressive onboarding to engage users step-by-step</li>
          <li>Used goal-based templates to reduce cognitive load on users</li>
          <li>Built behavior-triggered tooltips and nudges to guide users through key actions</li>
          <li>Integrated an AI-powered onboarding assistant (GenAI chatbot) for real-time support</li>
        </ul>
      </motion.section>

      {/* Key Features */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Hammer className="inline mr-2 mb-1 text-cyan-600" size={18} />Key Features</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li><strong>Progressive Onboarding:</strong> Short initial setup with deeper tips as users engage</li>
          <li><strong>Goal-Based Templates:</strong> Pre-configured templates for faster setup</li>
          <li><strong>Behavior-Triggered Nudges:</strong> Context-aware tooltips and nudges</li>
          <li><strong>AI-Powered Assistant:</strong> GenAI chatbot for real-time support and FAQs</li>
        </ul>
      </motion.section>

      {/* System Architecture */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><ServerCog className="inline mr-2 mb-1 text-cyan-600" size={18} />System & Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="bg-gray-50 p-4 border rounded">
            <h3 className="font-bold mb-2">⚙️ Components</h3>
            <p>
              - <strong>OnboardingService (microservice):</strong> Responsible for handling onboarding flows<br />
              - <strong>/templates:</strong> Pre-configured onboarding templates<br />
              - <strong>/user-flow-config:</strong> Configuration for user flow and steps<br />
              - <strong>/event-tracker:</strong> Integration with Amplitude for behavior tracking<br />
              - <strong>/nudges-engine:</strong> In-house built nudges engine for behavior-driven nudges
            </p>
          </div>

          <div className="bg-gray-50 p-4 border rounded">
            <h3 className="font-bold mb-2">📦 Tech Stack</h3>
            <p>
              - <strong>Frontend:</strong> React (for the UI) <br />
              - <strong>Backend:</strong> Node.js (for microservices) <br />
              - <strong>State Management:</strong> Redis (for storing user state) <br />
              - <strong>Behavior Analysis:</strong> Amplitude <br />
              - <strong>AI Assistant:</strong> OpenAI API (for chatbot support)
            </p>
          </div>
        </div>
      </motion.section>

      {/* Trade-Offs and Decisions */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-blue-600" size={18} />Trade-Offs and Decisions</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li><strong>Custom UI Nudges vs 3rd-party Tools:</strong> Chose in-house nudges for full control over timing and logic</li>
          <li><strong>Generative AI Bot vs Static Help Center:</strong> Chose GenAI chatbot, reducing support tickets by 28%</li>
          <li><strong>A/B Rollout vs Full Redesign:</strong> Phased A/B testing to reduce risk and gather early feedback</li>
        </ul>
      </motion.section>

      {/* Results & Impact */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><TrendingUp className="inline mr-2 mb-1 text-green-600" size={18} />Results & Impact</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Activation rate increased from 20% → 55%</li>
          <li>Time-to-first-key-action reduced by 40%</li>
          <li>28% fewer support tickets in the first 14 days</li>
          <li>CSAT for onboarding improved from 3.2 → 4.4</li>
        </ul>
      </motion.section>

      {/* Team & Collaboration */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Users className="inline mr-2 mb-1 text-teal-600" size={18} />Team & Collaboration</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Collaborated with Support, Growth, and Analytics teams</li>
          <li>Worked closely with Design, Engineering, and Data teams</li>
          <li>Used Amplitude + Hotjar for behavior analysis</li>
          <li>Ran 3 cohort-based A/B tests</li>
        </ul>
      </motion.section>

      {/* KPIs Tracked */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-yellow-400" size={18} />KPIs Tracked</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className={tableRowStyles}>Metric</th>
              <th className={tableRowStyles}>Before</th>
              <th className={tableRowStyles}>After</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={tableRowStyles}>Activation (7d)</td>
              <td className={tableRowStyles}>20%</td>
              <td className={tableRowStyles}>55%</td>
            </tr>
            <tr>
              <td className={tableRowStyles}>Time-to-first-action</td>
              <td className={tableRowStyles}>15 min</td>
              <td className={tableRowStyles}>9 min</td>
            </tr>
            <tr>
              <td className={tableRowStyles}>Onboarding CSAT</td>
              <td className={tableRowStyles}>3.2/5</td>
              <td className={tableRowStyles}>4.4/5</td>
            </tr>
            <tr>
              <td className={tableRowStyles}>Setup Abandonment</td>
              <td className={tableRowStyles}>47%</td>
              <td className={tableRowStyles}>18%</td>
            </tr>
          </tbody>
        </table>
      </motion.section>

      {/* Learnings */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-yellow-400" size={18} />Learnings</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Personalization and relevance are more important than speed</li>
          <li>Nudges should be context-aware, not interruptive</li>
          <li>A/B testing onboarding is essential — one size doesn’t fit all</li>
        </ul>
      </motion.section>

      {/* What I'd Do Differently */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-yellow-400" size={18} />What I'd Do Differently</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm">
          <li>Explore more ML-driven segmentation to adapt onboarding flows dynamically</li>
          <li>Implement event-based lifecycle emails tied to onboarding stages</li>
          <li>Set up deeper integrations with CRM for sales-assisted onboarding if needed</li>
        </ul>
      </motion.section>

      {/* Tags */}
      <motion.section className="mb-10" {...fadeIn}>
        <h2 className="text-2xl font-semibold mb-3"><Tags className="inline mr-2 mb-1 text-yellow-400" size={18} />Tags</h2>
        <div className="flex gap-3">
          <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">Onboarding</span>
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Product Design</span>
          <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">Activation</span>
          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">AI</span>
          <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">Progressive</span>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CaseStudyDetail6;
