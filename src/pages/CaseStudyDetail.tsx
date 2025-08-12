import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
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
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { caseStudies, CaseStudy, TableData } from "../data/caseStudyData";

// ----------------------
// Table Section Component
// ----------------------
interface TableSectionProps {
  title: string;
  data: TableData;
}

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
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
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
      <p className="text-gray-600 whitespace-pre-line text-lg mt-3">
        {data.context}
      </p>
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
// CardSection Component
// ----------------------
interface CardSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function CardSection({
  id,
  title,
  icon,
  children,
}: CardSectionProps & { id?: string }) {
  return (
    <motion.section
      id={id}
      className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
    >
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h2>
      <div>{children}</div>
    </motion.section>
  );
}

// ----------------------
// Main Component
// ----------------------
export default function CaseStudyComponent() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const caseId = Number(id);
  const cs = caseStudies.find((c) => c.id === caseId);

  if (!cs) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-600">
        Case Study Not Found
      </div>
    );
  }

  const currentIndex = caseStudies.findIndex((item) => item.id === cs.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < caseStudies.length - 1;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "my-role", label: "My Role" },
    { id: "situation", label: "Situation" },
    { id: "task", label: "Task" },
    { id: "actions", label: "Actions & System Thinking" },
    { id: "results", label: "Results & Outcomes" },
    { id: "takeaways", label: "Key Takeaways" },
  ];

  return (
    <>
      {/* Page Wrapper with enter animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Side Navigation */}
        <motion.nav
          initial={{ width: sidebarOpen ? 280 : 40 }}
          animate={{ width: sidebarOpen ? 280 : 40 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed top-24 right-8 z-50 rounded-xl bg-white shadow-xl flex flex-col items-center"
          style={{
            maxHeight: "70vh",
            overflowY: sidebarOpen ? "auto" : "visible",
            border: "1px solid #e2e8f0",
          }}
        >
          {/* Toggle Button */}
          <motion.button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            className="flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 focus:outline-none shadow"
            initial={false}
            animate={{
              width: sidebarOpen ? 30 : 34,
              height: sidebarOpen ? 30 : 34,
              margin: sidebarOpen ? "16px 0 8px 0" : "8px auto",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={{ scale: sidebarOpen ? 0.8 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {sidebarOpen ? <X size={14} /> : <Menu size={16} />}
            </motion.div>
          </motion.button>

          {/* Quick Access title */}
          {sidebarOpen && (
            <motion.h2
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-lg font-semibold text-gray-700 mb-4"
            >
              Quick Access
            </motion.h2>
          )}

          {/* Links */}
          {sidebarOpen && (
            <motion.ul
              key="links"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full space-y-4 text-base font-medium text-blue-600 px-4"
            >
              {sections.map(({ id, label }) => (
                <motion.li
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      setSidebarOpen(false);
                    }}
                    className="block px-2 py-1 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.nav>

        <div className="max-w-7xl mx-auto px-8 py-12 font-sans text-gray-900 space-y-10">
          <div key={cs.id} className="space-y-10">
            {/* Header */}
            <header className="space-y-2 border-b border-gray-300 mt-12 pb-8">
            <Link
              to="/portfolio/case-studies/"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 cursor-pointer mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </Link>
              <div className="flex justify-center">
  <h1 className="text-4xl font-bold text-gray-900 mb-9">
    {cs.title}
  </h1>
</div>
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
            <CardSection
              id="overview"
              title="Overview"
              icon={<Target className="w-8 h-8 text-gray-900" />}
            >
              <p className="text-gray-700 text-lg leading-relaxed">{cs.summary}</p>
            </CardSection>

            <CardSection
              id="my-role"
              title="My Role"
              icon={<Users className="w-8 h-8 text-teal-600" />}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                {cs.roleDescription || cs.role}
              </p>
            </CardSection>

            {/* Situation */}
            <CardSection
              id="situation"
              title="Situation"
              icon={<AlertCircle className="w-8 h-8 text-red-600" />}
            >
              <p className="leading-relaxed mb-2 text-lg">{cs.situation[0]}</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700 mb-4">
                {cs.situation.slice(1, 5).map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
              {cs.situation[5] && (
                <p className="leading-relaxed text-lg">{cs.situation[5]}</p>
              )}
            </CardSection>

            {/* Task */}
            <CardSection
              id="task"
              title="Task"
              icon={<ClipboardList className="w-8 h-8 text-yellow-600" />}
            >
              <p className="leading-relaxed mb-2 text-lg">{cs.task[0]}</p>
              <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700">
                {cs.task.slice(1).map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </CardSection>

            {/* Actions & System Thinking */}
            <CardSection
              id="actions"
              title="Actions & Thinking"
              icon={<Settings className="w-8 h-8 text-blue-600" />}
            >
              {/* Actions */}
              <div className="mb-8">
                {/* <h3 className="text-xl font-semibold mb-3">Actions</h3> */}
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                  {cs.actions.map((action, i) => (
                    <li key={i} className="leading-relaxed">
                      <strong className="font-semibold">{action.heading}:</strong>{" "}
                      {action.details}
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
                        <th className="border px-4 py-2 text-left font-semibold text-gray-700">
                          Challenge
                        </th>
                        <th className="border px-4 py-2 text-left font-semibold text-gray-700">
                          Mitigation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cs.challenges.map((item, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="border px-4 py-2 whitespace-pre-line">
                            {item.challenge}
                          </td>
                          <td className="border px-4 py-2 whitespace-pre-line">
                            {item.mitigation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardSection>

            {/* Results & Outcomes */}
            <CardSection
              id="results"
              title="Results & Outcomes"
              icon={<TrendingUp className="w-8 h-8 text-indigo-600" />}
            >
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
              id="collaboration"
              title="Cross-Functional Collaboration"
              icon={<Users className="w-8 h-8 text-teal-600" />}
            >
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                {cs.crossFunctionalCollaboration.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </CardSection>

            {/* Internal Feedback */}
            <motion.section
              id="feedback"
              className="mb-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageCircle className="text-indigo-600" size={24} />
                Internal Feedback
              </h2>

              <div className="flex flex-col gap-6"> {/* column layout */}
                {cs.customerFeedback.map(({ text, author }, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between p-6 rounded-lg shadow-md border border-gray-100 bg-indigo-50"
                    style={{ minHeight: '50px' }} // ensures card is tall enough
                  >
                    <blockquote className="italic text-gray-700 mb-4 text-lg leading-relaxed flex-grow">
                      "{text}"
                    </blockquote>
                    <p className="text-indigo-700 font-semibold text-right mt-auto">
                      — {author}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>



            {/* Key Takeaways */}
            <CardSection
              id="takeaways"
              title="Key Takeaways"
              icon={<Lightbulb className="w-8 h-8 text-green-600" />}
            >
              <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700">
                {cs.takeaways.map((takeaway, i) => (
                  <li key={i} className="leading-relaxed">
                    {takeaway}
                  </li>
                ))}
              </ul>
            </CardSection>

            {/* Prev/Next Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() =>
                  hasPrev && navigate(`/portfolio/case-studies/${caseStudies[currentIndex - 1].id}`)
                }
                disabled={!hasPrev}
                className={`px-6 py-3 rounded-md text-white font-semibold ${
                  hasPrev ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
                } transition-colors duration-300`}
              >
                ← Previous
              </button>

              <button
                onClick={() =>
                  hasNext && navigate(`/portfolio/case-studies/${caseStudies[currentIndex + 1].id}`)
                }
                disabled={!hasNext}
                className={`px-6 py-3 rounded-md text-white font-semibold ${
                  hasNext ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
                } transition-colors duration-300`}
              >
                Next →
              </button>
            </div>

            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300"
                aria-label="Scroll to top"
              >
                <ChevronUp size={20} />
              </button>
            )}

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
        </div>
      </motion.div>
    </>
  );
}