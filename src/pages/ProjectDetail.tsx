import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Tag, Star, GitBranch } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, this would come from an API
  const project = {
    title: 'AI Recommendation Engine',
    description: 'Machine learning platform providing personalized recommendations for e-commerce, increasing conversion rates by 35%.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    year: '2024',
    team: '8 people',
    status: 'Live',
    category: 'AI & Machine Learning',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis', 'Apache Kafka'],
    
    overview: 'This AI-powered recommendation engine transforms how e-commerce platforms connect customers with products they love. Built using advanced machine learning algorithms, the system analyzes user behavior, purchase history, and product characteristics to deliver highly personalized recommendations in real-time.',
    
    problem: 'Traditional e-commerce platforms struggle with low conversion rates and poor user engagement due to generic product recommendations. Customers often abandon their shopping sessions when they can\'t find relevant products quickly, leading to significant revenue loss.',
    
    solution: 'I architected and led the development of a sophisticated recommendation system that combines collaborative filtering, content-based filtering, and deep learning techniques. The platform processes user interactions in real-time and adapts recommendations based on current browsing behavior.',
    
    features: [
      {
        name: 'Real-time Personalization',
        description: 'Instant adaptation to user behavior with sub-100ms response times'
      },
      {
        name: 'Multi-Algorithm Approach',
        description: 'Hybrid system combining collaborative filtering, content-based, and deep learning models'
      },
      {
        name: 'A/B Testing Framework',
        description: 'Built-in experimentation platform for testing different recommendation strategies'
      },
      {
        name: 'Scalable Architecture',
        description: 'Microservices-based design handling millions of recommendations daily'
      },
      {
        name: 'Analytics Dashboard',
        description: 'Comprehensive monitoring and performance tracking for business stakeholders'
      },
      {
        name: 'API-First Design',
        description: 'RESTful APIs enabling easy integration with existing e-commerce platforms'
      }
    ],
    
    results: [
      { metric: 'Conversion Rate', improvement: '+35%', description: 'Increased from 2.1% to 2.8% average conversion rate' },
      { metric: 'User Engagement', improvement: '+45%', description: 'Users spend 45% more time browsing recommended products' },
      { metric: 'Revenue Impact', improvement: '+$2.3M', description: 'Additional annual revenue attributed to improved recommendations' },
      { metric: 'Click-through Rate', improvement: '+28%', description: 'More users clicking on recommended products' }
    ],
    
    architecture: [
      'Data ingestion pipeline using Apache Kafka for real-time user events',
      'Feature engineering and model training pipeline using Apache Airflow',
      'Model serving infrastructure with TensorFlow Serving and FastAPI',
      'Caching layer with Redis for sub-100ms response times',
      'Monitoring and alerting with Prometheus and Grafana'
    ],
    
    challenges: [
      {
        challenge: 'Cold Start Problem',
        solution: 'Implemented content-based recommendations for new users and popularity-based fallbacks'
      },
      {
        challenge: 'Real-time Processing',
        solution: 'Built streaming architecture with Kafka and maintained pre-computed recommendations'
      },
      {
        challenge: 'Scalability',
        solution: 'Designed microservices architecture with auto-scaling capabilities on Kubernetes'
      }
    ],
    
    links: {
      github: 'https://github.com/dhairya/ai-recommendation',
      demo: 'https://recommendation-demo.com',
      documentation: 'https://docs-recommendation.com'
    }
  };

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
            to="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="flex items-start justify-between mb-6">
            <div className="flex-grow">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{project.description}</p>
              
              {/* Project Info */}
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
            
            {/* Action Buttons */}
            <div className="flex gap-3 ml-6">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
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

        {/* Content Sections */}
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
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;