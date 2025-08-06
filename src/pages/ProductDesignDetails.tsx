import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Cog,
  BarChart3,
} from 'lucide-react';
import { productDesignCases } from '../data/ProductDesigncases';


const ProductDesignDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const filteredList = productDesignCases;
  const currentIndex = filteredList.findIndex((p) => p.id === id);
  const prevItem = currentIndex > 0 ? filteredList[currentIndex - 1] : null;
  const nextItem = currentIndex < filteredList.length - 1 ? filteredList[currentIndex + 1] : null;

  const pp = productDesignCases.find((p) => p.id === id);

  if (!pp) {
    return (
      <div className="min-h-screen pt-20 pb-16 text-center text-gray-600">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4">Please check the URL or return to the list.</p>
        <Link
          to="/system-product-design/product-design"
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Product Design
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-[80vh] pt-[100px] pb-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="mb-8" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Link to="/system-product-design/product-design" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Product Design
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{pp.title}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-6">{pp.subtitle}</p>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Metric icon={<Clock />} label="Duration" value={pp.duration} />
            <Metric icon={<Users />} label="Team Size" value={pp.team} />
            <Metric icon={<TrendingUp />} label="Impact" value={pp.impact} highlight />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {pp.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div className="mb-12" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <img src={pp.image} alt={pp.title} className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg" />
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          <Section title="Overview" icon={<Target className="text-blue-600" />} delay={0.6}>
            <p>{pp.overview}</p>
          </Section>

          <Section title="The Challenge" icon={<Lightbulb className="text-orange-500" />} delay={0.7}>
            <p>{pp.challenge}</p>
          </Section>

          <Section title="Solution" icon={<Cog className="text-green-600" />} delay={0.8}>
            <p>{pp.solution}</p>
          </Section>

          <Section title="Architecture" delay={0.85}>
            <p className="mb-4">{pp.architecture.description}</p>
            {pp.architecture.diagram && (
              <img src={pp.architecture.diagram} alt="Architecture Diagram" className="rounded-xl shadow-lg" />
            )}
          </Section>

          <Section title="Design Goals" delay={0.9}>
            <ul className="list-disc pl-6 space-y-2">
              {pp.designGoals.map((goal, idx) => (
                <li key={idx}>{goal}</li>
              ))}
            </ul>
          </Section>

          <Section title="Tech Decisions" delay={0.95}>
            <ul className="space-y-4">
              {pp.techDecisions.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.choice}:</strong> {item.reason}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Implementation Timeline" delay={1.0}>
            <ul className="space-y-6">
              {pp.implementation.map((phase, idx) => (
                <li key={idx}>
                  <h4 className="font-semibold text-gray-900">{phase.phase} ({phase.duration})</h4>
                  <p className="text-gray-700">{phase.description}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Results" icon={<BarChart3 className="text-purple-600" />} delay={1.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pp.results.map((result, idx) => (
                <div key={idx} className="bg-white border p-6 rounded-lg">
                  <h3 className="font-semibold text-lg">{result.metric}</h3>
                  <p className="text-purple-600 font-bold">{result.improvement}</p>
                  <p className="text-sm text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Technologies Used" delay={1.15}>
            <div className="flex flex-wrap gap-3">
              {pp.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-100 px-4 py-2 rounded-lg">{tech}</span>
              ))}
            </div>
          </Section>

          <Section title="Key Lessons" delay={1.2}>
            <ul className="list-disc pl-6 space-y-2">
              {pp.lessons.map((lesson, idx) => (
                <li key={idx}>{lesson}</li>
              ))}
            </ul>
          </Section>

          <Section title="Trade-offs" delay={1.25}>
            <ul className="space-y-4">
              {pp.tradeOffs.map((t, idx) => (
                <li key={idx}>
                  <strong>{t.decision}</strong>
                  <ul className="pl-4 mt-1">
                    <li><span className="font-medium text-green-600">Pros:</span> {t.pros}</li>
                    <li><span className="font-medium text-red-600">Cons:</span> {t.cons}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Future Work" delay={1.3}>
            <ul className="list-disc pl-6 space-y-2">
              {pp.futureWork.map((fw, idx) => (
                <li key={idx}>{fw}</li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Prev/Next Nav */}
        <div className="mt-20 flex flex-col sm:flex-row justify-between gap-4">
          {prevItem ? (
            <button onClick={() => navigate(`/system-product-design/product-design/${prevItem.id}`)} className="group flex items-center gap-3 px-4 py-3 border rounded-lg">
              <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
              <div className="flex flex-col items-start text-left">
                <span className="text-xs text-gray-400">Previous</span>
                <span className="font-medium">{prevItem.title}</span>
              </div>
            </button>
          ) : <div className="hidden sm:block" />}
          {nextItem ? (
            <button onClick={() => navigate(`/system-product-design/product-design/${nextItem.id}`)} className="group flex items-center gap-3 px-4 py-3 border rounded-lg">
              <div className="flex flex-col items-end text-right">
                <span className="text-xs text-gray-400">Next</span>
                <span className="font-medium">{nextItem.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
            </button>
          ) : <div className="hidden sm:block" />}
        </div>
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
          </motion.div>
          <p className="text-xs text-center text-gray-400 mt-12 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

const Section = ({
  title,
  icon,
  delay,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  delay: number;
  children: React.ReactNode;
}) => (
  <motion.section initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay }}>
    <div className="flex items-center gap-3 mb-4">{icon}<h2 className="text-2xl font-bold">{title}</h2></div>
    {children}
  </motion.section>
);

const Metric = ({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className={`flex items-center gap-3 p-4 rounded-lg ${highlight ? 'bg-green-50' : 'bg-gray-50'}`}>
    <div className={`w-5 h-5 ${highlight ? 'text-green-600' : 'text-gray-400'}`}>{icon}</div>
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  </div>
);

export default ProductDesignDetails;
