import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Target,
  AlertCircle,
  ClipboardList,
  Settings,
  Users,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Calendar,
  Tag,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

// ----------------------
// Type Definitions
// ----------------------
interface TableData {
  table: string[][];
  context?: string;
  image?: string;  // Add this line
}

interface TableSectionProps {
  title: string;
  data: TableData;
}

interface Action {
  heading: string;
  details: string;
}

interface ChallengeMitigation {
  challenge: string;
  mitigation: string;
}

interface CaseStudy {
  title: string;
  category: string;
  role: string;
  team: string;
  duration: string;
  stack: string;
  deployment: string;
  summary: string;
  situation: string[];
  roleDescription: string;
  task: string[];
  actions: Action[];
  crossFunctionalCollaboration: string[];
  systemThinking: TableData;
  productThinking: TableData;
  tradeoffs: TableData;
  challenges: ChallengeMitigation[];
  results: TableData;
  outcomes: string;
  customerFeedback: string[];
  takeaways: string[];
}

// ----------------------
// Data
// ----------------------
const caseStudy: CaseStudy[] = [
  {
    // your case study data as before...
    title: "Case Study: Redesigning Evercam’s Gate Report",
    category: "Product Design, System Design, Edge AI",
    role: "TPM (Product + Program Leadership)",
    team: "6 Engineers, 2 AI Researchers, 2 DevOps, 1 Designer, 1 CS Manager, 3 QA",
    duration: "6 months",
    stack: "Jetson, YOLOv5, RabbitMQ, PostgreSQL, Ansible, RTSP, REST APIs",
    deployment: "100+ Construction Sites",
    summary: `Redesigned a high-latency, high-cost video analytics system into a scalable, edge-first product for construction site monitoring. 
    Delivered a 99.98% latency reduction, 94% lower bandwidth usage, 4.5x MRR growth, and 71-point NPS increase. Led full product and 
    technical transformation across a 14-person cross-functional team.`,
    roleDescription: "Led the full product and technical transformation as Technical Program Manager, owning the end-to-end roadmap, cross-functional execution, and architecture redesign. Coordinated engineering, AI, DevOps, design, QA, and customer success teams to deliver a scalable, reliable edge-first solution that dramatically improved latency, cost, and user experience.",
    situation: [
      "Evercam’s Gate Report is a vehicle monitoring system used at enterprise and construction site gates. It originally relied on uploading full video footage to the cloud for inference and processing.",
      "As deployments grew, customers faced:",
      "7–8 hour delays in event availability",
      "Massive bandwidth usage (3TB+/site/month)",
      "Low reliability due to poor network connectivity",
      "Poor user experience due to raw detections and no offline support",
      "As a result, the product had low adoption and a 7% NPS. It was over-engineered, hard to support, and failing in the field.",
    ],
    task: [
      "As TPM, I led a full product and architecture redesign to:",
      "Eliminate latency and bandwidth bottlenecks",
      "Improve reliability and offline support on unstable networks",
      "Simplify the tech stack to reduce cost and ops overhead",
      "Make the UX actionable for non-technical site managers",
      "Drive adoption, improve satisfaction, and grow recurring revenue",
    ],
    actions: [
      {
        heading: "Built Edge-First System for Fast Inference",
        details: `Migrated from cloud to on-device YOLOv5 on Jetson, cutting latency from 7+ hours to under 5 seconds. Added RabbitMQ for reliable offline queuing and reduced bandwidth by 94% by sending metadata instead of video.`,
      },
      {
        heading: "Optimized AI Stack for Performance",
        details: `Removed underused FaceNet re-ID to focus on vehicle detection, improving inference speed and system stability.`,
      },
      {
        heading: "Developed Scalable OTA Update Pipeline",
        details: `Created Ansible + AWX pipeline with safe rollbacks, enabling DevOps and CS teams to deploy updates independently with minimal downtime.`,
      },
      {
        heading: "Simplified UX for Non-Technical Users",
        details: `Collaborated on dashboard redesign to add clear sync status and event-focused views, making the tool intuitive for site managers.`,
      },
      {
        heading: "Established Weekly Customer Feedback Loops",
        details: `Led sessions with customers and CS to align features with user needs and pain points.`,
      },
    ],
    
    crossFunctionalCollaboration: [
      "Facilitated alignment between engineering, AI, DevOps, design, and CS teams through weekly syncs and transparent roadmap sharing.",
      "Resolved blockers across functions by establishing shared OKRs and priorities.",
      "Enabled rapid, coordinated execution across 14-person cross-functional team.",
    ],
    systemThinking: {
      table: [
        [
          "Hardware Constraints",
          "Optimized YOLOv5 model to run efficiently on Jetson Nano devices",
          "Achieved <5 second real-time detection despite limited compute power"
        ],
        [
          "Network Variability",
          "Implemented RabbitMQ event queue with offline persistence and automatic resync",
          "Ensured >99% reliable event delivery under unstable, low-bandwidth networks"
        ],
        [
          "User Context",
          "Built for rugged construction sites with intermittent connectivity and power",
          "Created fault-tolerant architecture that operates autonomously and resyncs data"
        ],
        [
          "Cross-team Input",
          "Aligned Engineering, AI, DevOps, Design, QA, and CS teams via regular syncs",
          "Ensured coordinated architecture decisions and timely, user-driven delivery"
        ],
      ],
      image: '/assets/case-studies/gr-d2.png',
    },
    
    productThinking: {
      table: [
        [
          "User Needs",
          "Focused on vehicle entry/exit detection only, removing extraneous AI features",
          "Simplified product to core Jobs-to-be-Done, reducing complexity and cost"
        ],
        [
          "UX Design",
          "Developed event-driven dashboard with filtering, search, and sync status indicators",
          "Enabled users to quickly find actionable events and monitor system health"
        ],
        [
          "Feedback Loop",
          "Held weekly feedback sessions with end users and Customer Success team",
          "Used Agile and Lean Startup cycles to iterate rapidly based on real user data"
        ],
        [
          "Outcome Focus",
          "Set and tracked OKRs for adoption, latency, reliability, and revenue impact",
          "Delivered measurable business growth: NPS +71 pts, MRR 4.5×, latency ↓ 99.98%"
        ],
      ],
      image: '/assets/case-studies/gate-report-ui.png',
    },
    
    tradeoffs: {
      table: [
        ["AI Complexity vs Reliability", "Removed FaceNet and complex ML", "Improved compute performance and stability"],
        ["Feature Scope vs Performance", "Narrowed focus to essential insights", "Faster inference, reduced cost"],
        ["Edge Complexity vs Network Dependency", "Edge-first with offline sync", "Resilient on poor networks, near real-time data"],
        ["Scalability vs Customization", "Standardized OTA update pipeline", "Fast rollout to 100+ sites with low ops overhead"],
      ],
    },
    challenges: [
      {
        challenge: "Unstable site network connectivity",
        mitigation: "RabbitMQ buffering with auto-resync ensured zero event loss and smooth offline/online sync."
      },
      {
        challenge: "Low compute on NVIDIA Jetson",
        mitigation: "Optimized inference pipeline, pruned classifiers, cut load 40% with no accuracy loss."
      },
      {
        challenge: "Risky OTA firmware updates",
        mitigation: "Built rollback-capable OTA system via Ansible + AWX for safe, autonomous updates."
      },
      {
        challenge: "Raw data unusable for non-technical users",
        mitigation: "Revamped UI to show high-signal, actionable events, boosting decision speed 60%."
      }
    ],
    results: {
      table: [
        ["NPS", "7%", "78%", "+71 pts"],
        ["MRR", "1×", "4.5×", "+450%"],
        ["Latency", "7–8 hours", "<5 seconds", "↓ 99.98%"],
        ["Data Usage/Site", "3TB+/month", "<200GB/month", "↓ 94%"],
        ["Event Reliability", "70%", "99.3%", "+29%"],
      ],
    },
    outcomes: `The redesign transformed a high-latency, high-cost system into a fast, scalable, and user-friendly product. Latency dropped by 99.98%, bandwidth usage was cut by 94%, and reliability rose to over 99%. These improvements led to a 4.5x increase in monthly recurring revenue and an NPS surge from 7% to 78%. The system now supports 100+ active deployments with minimal operational load.`,
    customerFeedback: [
      `"Before this, we had to wait and guess. Now we get the data in real time. It's exactly what we needed." – Skanska Site Manager`,
      `"This is a product we can sell and scale." – Head of Sales, Evercam`,
    ],
    takeaways: [
      "📌 Customer-First, Not AI-First: Focused on delivering reliable, usable event data over novelty in ML.",
      "🚀 Edge AI at Scale: On-device inference with offline support cut latency and bandwidth dramatically.",
      "🤝 Cross-Functional Execution: Weekly iteration across CS, DevOps, AI, and design ensured delivery and adoption.",
      "📈 Impact-Driven Decisions: Every tradeoff aligned with adoption, usability, and revenue growth.",
    ],
  },
];

// ----------------------
// Table Section Component
// ----------------------
const TableSection: React.FC<TableSectionProps> = ({ title, data }) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
    <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
      <table className="min-w-full border-collapse text-base text-gray-800">
        <thead className="bg-gray-100">
          <tr>
            {data.table[0].map((_, i) => (
              <th
                key={i}
                className="border px-6 py-3 text-left font-semibold text-gray-700"
              >
                {title === "Results"
                  ? ["Metric", "Before", "After", "Change"][i]
                  : ["Focus Area", "Approach", "Outcome / Impact"][i]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.table.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="border px-6 py-3 whitespace-pre-line"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {data.context && (
      <p className="text-gray-600 whitespace-pre-line text-lg mt-3">{data.context}</p>
    )}
  </section>
);

// ----------------------
// Icon + Heading Helper
// ----------------------
const SectionHeading: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({
  icon,
  children,
}) => (
  <h2 className="flex items-center text-3xl font-bold space-x-3 mb-6 text-gray-900">
    {icon}
    <span>{children}</span>
  </h2>
);

// ----------------------
// CardSection Component (animated container for each major section)
// ----------------------
interface CardSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

// ----------------------
// Main Component
// ----------------------
export default function CaseStudyComponent() {
  const cardVariants: Variants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  function CardSection({ title, icon, children }: CardSectionProps) {
    return (
      <motion.section
        className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <div>{children}</div>
      </motion.section>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 font-sans text-gray-900 space-y-10">
      {caseStudy.map((cs, idx) => (
        <div key={idx} className="space-y-10">
          {/* Header */}
          <header className="space-y-2 border-b border-gray-300 mt-12 pb-8">
            <div className="flex items-center space-x-2 text-blue-600 hover:underline cursor-pointer mb-12">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{cs.title}</h1>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-14 text-sm text-gray-700">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <span>
                    <strong>Category:</strong> {cs.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>
                    <strong>Team:</strong> {cs.team}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>
                    <strong>Duration:</strong> {cs.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>
                    <strong>Deployments:</strong> {cs.deployment}
                  </span>
                </div>
              </div>
            </div>
          </header>
  
          {/* Overview */}
          <CardSection title="Overview" icon={<Target className="w-8 h-8 text-gray-900" />}>
            <p className="text-gray-700 text-lg leading-relaxed">{cs.summary}</p>
          </CardSection>
          <CardSection title="My Role" icon={<Users className="w-8 h-8 text-teal-600" />}>
            <p className="text-gray-700 text-lg leading-relaxed">{cs.roleDescription || cs.role}</p>
          </CardSection>
  
          {/* Situation */}
          <CardSection title="Situation" icon={<AlertCircle className="w-8 h-8 text-red-600" />}>
            <p className="leading-relaxed mb-2 text-lg">{cs.situation[0]}</p>
            <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700 mb-4">
              {cs.situation.slice(1, 5).map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </ul>
            {cs.situation[5] && (
              <p className="leading-relaxed text-lg">{cs.situation[5]}</p>
            )}
          </CardSection>
  
          {/* Task */}
          <CardSection title="Task" icon={<ClipboardList className="w-8 h-8 text-yellow-600" />}>
            <p className="leading-relaxed mb-2 text-lg">{cs.task[0]}</p>
            <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700">
              {cs.task.slice(1).map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </CardSection>
  
          {/* Combined Card for Actions + System Thinking + Product Thinking + Tradeoffs + Challenges & Mitigations */}
          <CardSection title="Actions & System Thinking" icon={<Settings className="w-8 h-8 text-blue-600" />}>
            {/* Actions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Actions</h3>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                {cs.actions.map((action, i) => (
                  <li key={i} className="leading-relaxed">
                    <strong className="font-semibold">{action.heading}:</strong> {action.details}
                  </li>
                ))}
              </ul>
            </div>
  
          {/* System Thinking */}
          <div className="mb-8">
            <TableSection title="System Thinking" data={cs.systemThinking} />
            {cs.systemThinking.image && (
              <img
                src={cs.systemThinking.image}
                alt="System Thinking Illustration"
                className="mt-4 rounded-lg shadow-md max-w-full h-auto"
              />
            )}
          </div>

          {/* Product Thinking */}
          <div className="mb-8">
            <TableSection title="Product Thinking" data={cs.productThinking} />
            {cs.productThinking.image && (
              <img
                src={cs.productThinking.image}
                alt="Product Thinking Illustration"
                className="mt-4 rounded-lg shadow-md max-w-full h-auto"
              />
            )}
          </div>
            {/* Tradeoffs */}
            <div className="mb-8">
              <TableSection title="Tradeoffs" data={cs.tradeoffs} />
            </div>
  
            {/* Challenges & Mitigations */}
            <div>
              <SectionHeading icon={<AlertTriangle className="w-8 h-8 text-orange-600" />}>
                Challenges & Mitigations
              </SectionHeading>
              <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm mt-4">
                <table className="min-w-full border-collapse text-base text-gray-800">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2 text-left font-semibold text-gray-700">Challenge</th>
                      <th className="border px-4 py-2 text-left font-semibold text-gray-700">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cs.challenges.map((item, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border px-4 py-2 whitespace-pre-line">{item.challenge}</td>
                        <td className="border px-4 py-2 whitespace-pre-line">{item.mitigation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardSection>
  
          {/* Combined Card for Results + Outcomes */}
          <CardSection title="Results & Outcomes" icon={<TrendingUp className="w-8 h-8 text-indigo-600" />}>
            <div className="mb-8">
              <TableSection title="Results" data={cs.results} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Outcomes</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{cs.outcomes}</p>
            </div>
          </CardSection>
  
          {/* Cross-Functional Collaboration */}
          <CardSection
            title="Cross-Functional Collaboration"
            icon={<Users className="w-8 h-8 text-teal-600" />}
          >
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              {cs.crossFunctionalCollaboration.map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </CardSection>
  
          {/* Internal Feedback */}
          <motion.section
            className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <MessageCircle className="text-indigo-600" size={24} />
              Internal Feedback
            </h2>
            <blockquote className="italic text-gray-700 mb-4">
              “Standardizing the kits was a game-changer, we can now ship, install, and forget.”
              <br />
              <span className="text-lg"> - Global Operation Lead, Evercam</span>
            </blockquote>
            <blockquote className="italic text-gray-700 mb-4">
              “AWX made it possible for support to handle edge resets and push updates, no more dev bottleneck.”
              <br />
              <span className="text-lg"> - Support Engineer, Evercam</span>
            </blockquote>
          </motion.section>
  
          {/* Key Takeaways */}
          <CardSection title="Key Takeaways" icon={<Lightbulb className="w-8 h-8 text-green-600" />}>
            <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700">
              {cs.takeaways.map((takeaway, i) => (
                <li key={i} className="leading-relaxed">{takeaway}</li>
              ))}
            </ul>
          </CardSection>
  
          {/* Final Call to Action */}
          <hr className="border-gray-300 mt-8" />
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold mb-3">Solving a similar challenge?</h2>
            <p className="text-lg text-gray-700 mb-6">
              I’d love to exchange ideas or collaborate on building the next big thing.
            </p>
            <button
              type="button"
              className="px-8 py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Let’s Connect
            </button>
            <p className="text-xs text-gray-400 mt-8 pt-4 border-t border-gray-200">
              © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  
  
}
