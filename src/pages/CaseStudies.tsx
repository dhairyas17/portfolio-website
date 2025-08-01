import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Brain } from 'lucide-react';

const CaseStudies = () => {
  const categories = [
    {
      id: 'system-design',
      title: 'System Design',
      description: 'Scalable architecture solutions for complex technical challenges',
      icon: Layers,
      color: 'from-blue-500 to-indigo-600',
      studies: 6
    },
    {
      id: 'product-thinking',
      title: 'Product Thinking',
      description: 'Strategic product decisions driving business growth and user value',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      studies: 6
    }
  ];

  return (
    <motion.div
      className="min-h-screen pt-20 pb-8 flex flex-col"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-9">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto">
            Deep dives into real-world challenges I've solved, showcasing both technical excellence and strategic product thinking.
          </p>
        </motion.div>

        <div className="flex items-start justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <Link to={`/case-studies/${category.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 min-h-[380px] flex flex-col justify-between">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-6`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                        {category.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm text-gray-500">
                          {category.studies} case studies
                        </span>
                        <div className="flex items-center text-blue-600 group-hover:text-indigo-600 transition-colors">
                          <span className="text-sm font-semibold mr-2">Explore</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-400 transition-all duration-500"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
