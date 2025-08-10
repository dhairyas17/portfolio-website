import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Users,
  Tag,
  GitBranch,
  ChevronUp,
  Star,
  Brain,
  Hammer,
  CalendarDays,
  Globe,
} from 'lucide-react';
import { projectData } from '../data/projectContent';
import { Project } from '../types/project';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom ?? 0, ease: 'easeOut' },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract page and filter from current URL query params
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page') || '1';
  const filter = searchParams.get('filter') || 'all';

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

  const projectList = Object.values(projectData).sort((a, b) => a.id - b.id);
  const currentIndex = projectList.findIndex((p) => String(p.id) === id);
  const prevProject = projectList[currentIndex - 1];
  const nextProject = projectList[currentIndex + 1];

  const project: Project | undefined = projectList.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold text-gray-700">Project not found</h1>
        <Link
          to={`/portfolio/projects?filter=${filter}&page=${page}`}
          className="mt-4 inline-block text-blue-600 hover:underline transition-colors duration-200"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-[80vh] pt-[100px] md:pt-[90px] pb-8 bg-gradient-to-b from-white via-gray-50 to-gray-100"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Link
              to={`/portfolio/projects?filter=${filter}&page=${page}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.1} className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 text-justify italic mb-6">
  {project.description}
</p>

            {/* Summary */}
            <motion.div
              className="flex flex-col md:flex-row justify-between text-sm text-gray-700 mb-6 gap-6"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {/* Left Column */}
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Brain className="mt-1" size={16} />
                  <span>
                    <strong>Category:</strong> {project.category || 'Product Design, System Design, AI/Edge Architecture'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="mt-1" size={16} />
                  <span>
                    <strong>Team:</strong> {project.team || '1 TPM (myself), 6 Engineers, 2 AI Researchers, 2 DevOps, 1 Designer, 1 CS Manager, 3 Annotation + QA'}
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-2 items-start md:items-end text-left md:text-right">
                <div className="flex items-start gap-2">
                  <CalendarDays className="mt-1" size={16} />
                  <span>
                    <strong>Duration:</strong> {project.duration || '6 months'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="mt-1" size={16} />
                  <span>
                    <strong>Deployment:</strong> {project.deployment || '100+ industrial sites'}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeUp} custom={0.4} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">TECHNOLOGY STACK</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.04 }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {/* Overview */}
          <motion.section variants={fadeUp} custom={0.5}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed text-justify text-lg">{project.overview}</p>
          </motion.section>

          <motion.section variants={fadeUp} custom={0.6} className="space-y-8">
          {/* Problem */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 text-justify rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">{project.problem}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-6 text-justify rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </motion.section>



          {/* Key Features */}
          <motion.section variants={fadeUp} custom={0.7}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border-2 border-gray-100 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

        {/* Architecture */}
        <motion.section variants={fadeUp} custom={0.9} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mt-2">System Architecture</h2>
          <div className="bg-gray-50 p-5 rounded-lg">
            <ul className="space-y-3">
              {project.architecture.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <GitBranch className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

          {/* Results */}
          <motion.section variants={fadeUp} custom={0.8}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{result.improvement}</div>
                  <p className="text-gray-600 text-sm">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>


        {/* Challenges */}
        <motion.section variants={fadeUp} custom={1.0} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Technical Challenges</h2>
          <div className="space-y-5">
            {project.challenges.map((item, index) => (
              <div key={index} className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.challenge}</h3>
                <p className="text-gray-700">{item.solution}</p>
              </div>
            ))}
          </div>
        </motion.section>


        {/* Key Takeaways */}
        <motion.section variants={fadeUp} custom={1.1}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-4">
            {project.keyTakeaways.map((takeaway, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400"
              >
                <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{takeaway}</span>
              </li>
            ))}
          </ul>
        </motion.section>

          {/* Prev / Next Navigation */}
          <motion.div
            variants={fadeUp}
            custom={1.05}
            className="mt-10 flex flex-col sm:flex-row justify-between gap-4"
          >
            {/* Previous Button */}
            {prevProject ? (
              <Link
                to={`/portfolio/projects/${prevProject.id}`}
                className="no-underline group w-full sm:w-auto flex items-center justify-start gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-base font-medium text-gray-800"
              >
                <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
                <span className="text-base font-medium text-gray-600 group-hover:text-blue-600">
                  Previous
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {/* Next Button */}
            {nextProject ? (
              <Link
                to={`/portfolio/projects/${nextProject.id}`}
                className="no-underline group w-full sm:w-auto flex items-center justify-end gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-base font-medium text-gray-800"
              >
                <span className="text-base font-medium text-gray-600 group-hover:text-blue-600">
                  Next
                </span>
                <ArrowLeft className="w-5 h-5 rotate-180 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </motion.div>

          {/* Scroll to Top */}
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </motion.button>
          )}

          {/* CTA */}
          <motion.div
            className="mt-12 pt-6 border-t text-center"
            variants={fadeUp}
            custom={1.15}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to discuss a similar solution?</h2>
            <p className="text-gray-600 mb-6 text-lg">
              I’m always open to connecting, sharing insights, or tackling new product challenges together.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg no-underline transform hover:scale-105 transition-transform duration-200"
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

export default ProjectDetail;
