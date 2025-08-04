import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Cog,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { systemProductList } from '../data/systemProductList'; // adjust path if needed

const SystemProductdetails = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
const filteredList = systemProductList.filter((p) => p.category === category);
const currentIndex = filteredList.findIndex((p) => p.id === id);

const prevItem = currentIndex > 0 ? filteredList[currentIndex - 1] : null;
const nextItem = currentIndex < filteredList.length - 1 ? filteredList[currentIndex + 1] : null;

  const sp = systemProductList.find((p) => p.id === id && p.category === category);

  if (!sp) {
    return (
      <div className="min-h-screen pt-20 pb-16 text-center text-gray-600">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4">Please check the URL or return to the project list.</p>
        <Link
          to={`/system-product-design/${category}`}
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to {category === 'system-design' ? 'System Design' : 'Product Design'}
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen pt-20 pb-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            to={`/system-product-design/${category}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category === 'system-design' ? 'System Design' : 'Product Design'}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{sp.title}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-6">{sp.subtitle}</p>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Duration</div>
                <div className="font-semibold">{sp.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <Users className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Team Size</div>
                <div className="font-semibold">{sp.team}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-sm text-gray-500">Key Impact</div>
                <div className="font-semibold text-green-600">{sp.impact}</div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {sp.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={sp.image}
            alt={sp.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <Section icon={<Target className="text-blue-600" />} title="Overview" delay={0.6}>
            <p className="text-gray-700 leading-relaxed text-lg">{sp.overview}</p>
          </Section>

          {/* Challenge */}
          <Section icon={<Lightbulb className="text-orange-500" />} title="The Challenge" delay={0.7}>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">{sp.challenge}</p>
            </div>
          </Section>

          {/* Solution */}
          <Section icon={<Cog className="text-green-600" />} title="Solution" delay={0.8}>
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">{sp.solution}</p>
            </div>
          </Section>

          {/* Implementation */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            <div className="space-y-6">
              {sp.implementation.map((phase, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-700">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Results */}
          <Section icon={<BarChart3 className="text-purple-600" />} title="Results & Impact" delay={1.0}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sp.results.map((result, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{result.improvement}</div>
                  <p className="text-gray-600 text-sm">{result.description}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Technologies */}
          <Section title="Technologies Used" delay={1.1}>
            <div className="flex flex-wrap gap-3">
              {sp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Lessons */}
          <Section title="Key Lessons Learned" delay={1.2}>
            <div className="space-y-4">
              {sp.lessons.map((lesson, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{lesson}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="mt-20 flex flex-col sm:flex-row justify-between gap-4">
  {prevItem ? (
    <button
      onClick={() => navigate(`/system-product-design/${category}/${prevItem.id}`)}
      className="group w-full sm:w-auto flex items-center justify-start gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-sm text-gray-800"
    >
      <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
      <div className="flex flex-col items-start text-left max-w-full">
        <span className="text-xs text-gray-400 group-hover:text-blue-500">Previous</span>
        <span className="font-medium truncate group-hover:text-blue-600">{prevItem.title}</span>
      </div>
    </button>
  ) : <div className="hidden sm:block" />}

  {nextItem ? (
    <button
      onClick={() => navigate(`/system-product-design/${category}/${nextItem.id}`)}
      className="group w-full sm:w-auto flex items-center justify-end gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-sm text-gray-800"
    >
      <div className="flex flex-col items-end text-right max-w-full">
        <span className="text-xs text-gray-400 group-hover:text-blue-500">Next</span>
        <span className="font-medium truncate group-hover:text-blue-600">{nextItem.title}</span>
      </div>
      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
    </button>
  ) : <div className="hidden sm:block" />}
</div>

<hr className="mt-10 border-t border-gray-200" />

          {/* CTA */}
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
              className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Let’s Connect
            </Link>
          </motion.div>
        </div>

        <p className="text-xs text-center text-gray-400 mt-12 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

// Helper Section Component
const Section = ({
  icon,
  title,
  children,
  delay,
}: {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.section
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    {children}
  </motion.section>
);

export default SystemProductdetails;
