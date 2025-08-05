import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Tag,
  Star,
  GitBranch,
} from 'lucide-react';
import { projectData } from '../data/projectContent';
import { Project } from '../types/project';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectList = Object.values(projectData).sort((a, b) => a.id - b.id);
  const currentIndex = projectList.findIndex((p) => String(p.id) === id);
  const prevProject = projectList[currentIndex - 1];
  const nextProject = projectList[currentIndex + 1];
  
  // Find project by numeric ID
  const project: Project | undefined = Object.values(projectData).find(
    (p) => String(p.id) === id
  );

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold text-gray-700">Project not found</h1>
        <Link
          to="/portfolio/projects"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to Projects
        </Link>
      </div>
    );
  }


  return (
    <motion.div
      className="min-h-[80vh] pt-20 pb-8"
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
            to="/portfolio/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{project.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{project.team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{project.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 font-semibold">{project.status}</span>
                </div>
              </div>
            </div>


          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">TECHNOLOGY STACK</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
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
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {/* Overview */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{project.overview}</p>
          </motion.section>

          {/* Problem & Solution */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">{project.problem}</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{result.improvement}</div>
                  <p className="text-gray-600 text-sm">{result.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Architecture */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">System Architecture</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
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

          {/* Challenges */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Challenges</h2>
            <div className="space-y-6">
              {project.challenges.map((item, index) => (
                <div key={index} className="border-l-4 border-orange-400 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.challenge}</h3>
                  <p className="text-gray-700">{item.solution}</p>
                </div>
              ))}
            </div>
          </motion.section>
          <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4">
  {prevProject ? (
    <Link
      to={`/portfolio/projects/${prevProject.id}`}
      className="group w-full sm:w-auto flex items-center justify-start gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-sm text-gray-800"
    >
      <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
      <div className="flex flex-col items-start text-left max-w-full">
        <span className="text-xs text-gray-400 group-hover:text-blue-500">Previous</span>
        <span className="font-medium truncate group-hover:text-blue-600">{prevProject.title}</span>
      </div>
    </Link>
  ) : (
    <div className="hidden sm:block" />
  )}

  {nextProject ? (
    <Link
      to={`/portfolio/projects/${nextProject.id}`}
      className="group w-full sm:w-auto flex items-center justify-end gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-sm text-gray-800"
    >
      <div className="flex flex-col items-end text-right max-w-full">
        <span className="text-xs text-gray-400 group-hover:text-blue-500">Next</span>
        <span className="font-medium truncate group-hover:text-blue-600">{nextProject.title}</span>
      </div>
      <ArrowLeft className="w-4 h-4 rotate-180 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
    </Link>
  ) : (
    <div className="hidden sm:block" />
  )}
</div>


          {/* CTA */}
          <motion.div
            className="mt-12 pt-6 border-t text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to discuss a similar solution?</h2>
            <p className="text-gray-600 mb-6 text-lg">
              I’m always open to connecting, sharing insights, or tackling new product challenges together.
            </p>
            <Link
  to="/contact"
  className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg no-underline transform hover:scale-105 transition-transform duration-200 will-change-transform preserve-3d"
>
  <span className="block will-change-auto">Let’s Connect</span>
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
