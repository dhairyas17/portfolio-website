import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Brain } from 'lucide-react';

const SystemProduct = () => {
  const categories = [
    {
      id: 'system-design',
      title: 'System Design',
      description:
        'Case studies focused on designing scalable systems that can handle complex technical challenges, ensuring reliability, performance, and efficiency at scale.',
      icon: Layers,
      color: 'from-blue-500 to-indigo-600',
      studies: 6,
      titles: [
        'Video Streaming Pipeline',
        'IoT Fleet Architecture',
        'Database Sharding Strategy',
      ],
    },
    {
      id: 'product-design',
      title: 'Product Design',
      description:
        'Strategic product decisions aimed at driving user growth, optimizing the user experience, and delivering measurable business outcomes across different product verticals',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      studies: 6,
      titles: [
        'Revamping Onboarding Flow',
        'Pricing Model Experiments',
        'Feature Adoption Metrics',
      ],
    },
  ];

  return (
    <div className="min-h-0 px-4 pt-1 pb-0">
      <motion.div
        className="flex-grow flex flex-col pt-20 pb-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-9">System & Product Design</h1>
            <p className="text-lg text-gray-500 max-w-7xl mx-auto">
              Deep dives into real-world challenges I've solved, showcasing both technical
              excellence and strategic product thinking.
            </p>
          </motion.div>

          <div className="flex items-start justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  <Link to={`/system-product-design/${category.id}`}>
                    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-[520px] flex flex-col">

                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* CARD CONTENT */}
                      <div className="p-8 flex flex-col flex-grow">
                        {/* ICON + HEADING CENTERED */}
                        <div className="flex flex-col items-center text-center mb-2">
                          <div
                              className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-6`}
                            >
                              <category.icon className="w-8 h-8 text-white" />
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            {category.title}
                          </h3>
                        </div>

                        {/* DESCRIPTION (LEFT ALIGNED) */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {category.description}
                        </p>

                        {/* CASE STUDY LIST */}
                        <ul className="text-sm text-gray-500 space-y-2 mb-6 list-disc list-inside text-left justify-between">
                          {category.titles.map((title, i) => (
                            <li key={i} className="truncate">{title}</li>
                          ))}
                        </ul>

                        {/* FOOTER: Explore button and case count */}
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {category.studies} case studies
                          </span>
                          <div className="flex items-center text-blue-600 group-hover:text-indigo-600 transition-colors justify-between">
                            <span className="text-sm font-semibold mr-2">Explore</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom line animation */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-400 transition-all duration-500" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-xs text-center text-gray-400 mt-16 pt-10 border-t border-gray-200">
            © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemProduct;
