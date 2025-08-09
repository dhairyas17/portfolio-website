import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, FolderKanban, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const categories = [
    {
      id: 'case-studies',
      title: 'Case Studies',
      description:
        'Detailed case studies demonstrating my end-to-end approach to technical and product challenge, from framing the problem, designing and iterating solutions, to delivering measurable outcomes.',
      icon: Layers,
      color: 'from-blue-500 to-indigo-600',
      items: [
        "Redesigning Evercam's Gate Report",
        'Standardizing Edge Setup at Evercam',
        'Real-Time Observability for Edge Devices',
        'Scaling ML Pipelines & MLOps Lifecycle',
        'Designing a Scalable AI-Driven API Platform'
      ],
      count: 5,
    },
    {
      id: 'projects',
      title: 'Projects',
      description:
        'Independent and collaborative projects showcasing real-world expertise in architecture, AI, edge computing, and workflow automation, delivering tangible results and measurable impact',
      icon: FolderKanban,
      color: 'from-purple-500 to-pink-600',
      items: [
        "OTA Firmware Updates with AWX & Ansible",
        "Edge Device Monitoring with Prometheus & Grafana",
        "Scalable AI-Driven Video Intelligence API Platform",
        "AI Chatbot using GenAI & LLMs",
        "Fisheye Distortion Correction on Wide Angle Cameras",
        "Optimized YOLOv4 Inference on Jetson using ONNX & TensorRT",
        'Interactive & Responsive Portfolio Website'
      ],
      count: 7,
    },
  ];

  return (
    <div className="min-h-[101vh] px-4 pt-2 pb-0">
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Portfolio</h1>
            <p className="text-lg text-gray-500 max-w-4xl text-center mx-auto">
              A curated collection of my most impactful case studies and projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mb-2 mx-auto w-full">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <Link to={`/portfolio/${category.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-[580px] flex flex-col">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex flex-col items-center text-center mb-2">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-6`}
                        >
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {category.title}
                        </h3>
                      </div>

                      <p
                        className="text-gray-600 leading-relaxed mb-6"
                        style={{ textAlign: "justify" }}
                      >
                        {category.description}
                      </p>

                      <ul className="text-sm text-gray-500 space-y-2 mb-6 list-disc list-inside text-left">
                        {category.items.map((item, i) => (
                          <li key={i} className="truncate">
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {category.count} {category.id.replace('-', ' ')}
                        </span>
                        <div className="flex items-center text-blue-600 group-hover:text-indigo-600 transition-colors">
                          <span className="text-sm font-semibold mr-2">Explore</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-400 transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-center text-gray-400 mt-12 pt-10 border-t border-gray-200">
    © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
  </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
