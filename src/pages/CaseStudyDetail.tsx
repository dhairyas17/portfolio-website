// src/pages/CaseStudyDetail.tsx

import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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

import caseStudies from '../data/caseStudies'; // ✅ Import the data from your data file


const CaseStudyDetail = () => {
  const { id } = useParams();           // ✅ Move here
  const navigate = useNavigate();       // ✅ Move here

  const currentIndex = caseStudies.findIndex((cs) => cs.id === id);
  const prevCaseStudy = caseStudies[currentIndex - 1];
  const nextCaseStudy = caseStudies[currentIndex + 1];

  const caseStudy = caseStudies.find((cs) => cs.id === id);
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        Case Study Not Found
      </div>
    );
  }

  return (
    <motion.div
    className="min-h-[80vh] pt-[100px] md:pt-[90px] pb-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            to="/portfolio/case-studies"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-6">{caseStudy.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Duration</div>
                <div className="font-semibold">{caseStudy.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
              <Users className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Team Size</div>
                <div className="font-semibold">{caseStudy.team}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-sm text-gray-500">Key Impact</div>
                <div className="font-semibold text-green-600">{caseStudy.impact}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        <div className="space-y-12">
          {/* Overview */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{caseStudy.overview}</p>
          </motion.section>

          {/* Business Goal */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.25 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Goal</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.businessGoal}</p>
          </motion.section>

          {/* Role */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Role</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.role}</p>
          </motion.section>

          {/* Collaboration */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.35 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaboration Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {caseStudy.collaboration.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.section>

          {/* Challenge */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
            </div>
          </motion.section>

          {/* Key Decisions */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Decisions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {caseStudy.keyDecisions.map((decision, index) => (
                <li key={index}>{decision}</li>
              ))}
            </ul>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Cog className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Solution</h2>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
            </div>
          </motion.section>

          {/* Implementation */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            <div className="space-y-6">
              {caseStudy.implementation.map((phase, index) => (
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

          {/* Technologies */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Results */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Results & Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{result.improvement}</div>
                  <p className="text-gray-600 text-sm">{result.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Lessons Learned */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Lessons Learned</h2>
            <div className="space-y-4">
              {caseStudy.lessons.map((lesson, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{lesson}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Quote */}
          {/* {caseStudy.quote && (
            <motion.section
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.45 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What They Said</h2>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 text-lg">
                {caseStudy.quote}
              </blockquote>
            </motion.section>
          )} */}

          {/* Takeaways */}
          {/* <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {caseStudy.takeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </motion.section> */}
          <div className="mt-20 flex flex-col sm:flex-row justify-between gap-4">
            {prevCaseStudy ? (
              <button
                onClick={() => navigate(`/portfolio/case-studies/${prevCaseStudy.id}`)}
                className="group w-full sm:w-auto flex items-center justify-start gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-sm text-gray-800"
              >
                <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
                <div className="flex flex-col items-start text-left max-w-full">
                  <span className="text-xs text-gray-400 group-hover:text-blue-500">Previous</span>
                  <span className="font-medium truncate group-hover:text-blue-600">{prevCaseStudy.title}</span>
                </div>
              </button>
            ) : <div className="hidden sm:block" />}

            {nextCaseStudy ? (
              <button
                onClick={() => navigate(`/portfolio/case-studies/${nextCaseStudy.id}`)}
                className="group w-full sm:w-auto flex items-center justify-end gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-sm text-gray-800"
              >
                <div className="flex flex-col items-end text-right max-w-full">
                  <span className="text-xs text-gray-400 group-hover:text-blue-500">Next</span>
                  <span className="font-medium truncate group-hover:text-blue-600">{nextCaseStudy.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : <div className="hidden sm:block" />}
          </div>






          {/* Contact Footer */}
          <div className="mt-24 pt-8 border-t border-gray-200">
            <motion.div
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Solving a similar challenge?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                I’d love to exchange ideas or collaborate on building the next big thing.
              </p>
              <Link
  to="/contact"
  className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg no-underline transform hover:scale-105 hover:bg-blue-700 transition-transform duration-200 will-change-transform preserve-3d"
>
  <span className="block will-change-auto">Let’s Connect</span>
</Link>

            </motion.div>
          </div>
        </div>

        <p className="text-xs text-center text-gray-400 mt-12 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default CaseStudyDetail;
