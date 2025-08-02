import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users, Tag } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'web-apps', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'data', name: 'Data & Analytics' }
  ];

  const projects = [
    {
      id: 'ai-recommendation-engine',
      title: 'AI Recommendation Engine',
      description: 'Machine learning platform providing personalized recommendations for e-commerce, increasing conversion rates by 35%.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'ai-ml',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker'],
      year: '2024',
      team: '8 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/ai-recommendation',
        demo: 'https://recommendation-demo.com'
      }
    },
    {
      id: 'real-time-analytics-dashboard',
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard processing millions of events daily, providing actionable insights for business stakeholders.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'data',
      tech: ['React', 'D3.js', 'Apache Kafka', 'ClickHouse', 'WebSocket'],
      year: '2024',
      team: '6 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/analytics-dashboard',
        demo: 'https://analytics-demo.com'
      }
    },
    {
      id: 'mobile-productivity-app',
      title: 'Mobile Productivity App',
      description: 'Cross-platform mobile app helping users manage tasks and improve productivity, with 50K+ downloads.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'mobile',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Redux'],
      year: '2023',
      team: '5 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/productivity-app',
        demo: 'https://apps.apple.com/productivity-app'
      }
    },
    {
      id: 'microservices-platform',
      title: 'Microservices Platform',
      description: 'Scalable microservices architecture serving 1M+ requests daily with 99.9% uptime and automated deployment.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'web-apps',
      tech: ['Node.js', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis'],
      year: '2023',
      team: '12 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/microservices-platform'
      }
    },
    {
      id: 'ml-model-deployment',
      title: 'ML Model Deployment Pipeline',
      description: 'Automated pipeline for deploying machine learning models to production with A/B testing and monitoring.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'ai-ml',
      tech: ['Python', 'MLflow', 'Kubernetes', 'TensorFlow', 'Prometheus'],
      year: '2023',
      team: '10 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/ml-deployment'
      }
    },
    {
      id: 'data-visualization-tool',
      title: 'Interactive Data Visualization Tool',
      description: 'Web-based tool for creating interactive data visualizations and reports, used by 500+ analysts.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'data',
      tech: ['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL'],
      year: '2022',
      team: '7 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/data-viz-tool',
        demo: 'https://dataviz-demo.com'
      }
    }
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  const handleCardClick = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(`/projects/${id}`);
    }, 100); // small delay to let scroll happen before route change
  };

  return (
    <motion.div
      className="min-h-screen pt-20 pb-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Projects</h1>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex cursor-pointer"
              onClick={() => handleCardClick(project.id)}
            >
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full w-full">
  
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Live'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500">{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-500">{project.team}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Tag className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <span className="text-blue-600 text-sm font-semibold">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
