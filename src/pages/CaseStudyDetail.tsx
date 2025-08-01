import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Users, TrendingUp, Target, Lightbulb, Cog, BarChart3 } from 'lucide-react';

const CaseStudyDetail = () => {
  const { category, id } = useParams();
  
  // Mock data - in a real app, this would come from an API or database
  const caseStudy = {
    title: 'AI Platform Architecture',
    subtitle: 'Scaling ML Infrastructure for 100+ Global Sites',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    duration: '6 months',
    team: '15 engineers',
    impact: '90% faster processing',
    tags: ['Microservices', 'Kubernetes', 'ML Pipeline', 'Real-time Processing'],
    
    overview: 'This case study explores the design and implementation of a distributed AI platform that processes millions of data points daily across 100+ global manufacturing sites. The challenge was to create a scalable, fault-tolerant system that could handle varying workloads while maintaining consistent performance and reliability.',
    
    challenge: 'The existing monolithic system was struggling to handle the increasing data volume and global distribution requirements. Processing times were exceeding acceptable thresholds, and the system frequently experienced downtime during peak loads. The manufacturing sites needed real-time insights for critical decision-making, but the current architecture couldn\'t deliver.',
    
    solution: 'I architected a cloud-native, microservices-based platform using Kubernetes for orchestration and Apache Kafka for real-time data streaming. The solution included automated ML model deployment pipelines, edge computing nodes for local processing, and a centralized dashboard for monitoring and analytics.',
    
    implementation: [
      {
        phase: 'Discovery & Planning',
        duration: '4 weeks',
        description: 'Conducted stakeholder interviews, analyzed current system bottlenecks, and designed the target architecture.'
      },
      {
        phase: 'Infrastructure Setup',
        duration: '8 weeks',
        description: 'Set up Kubernetes clusters, implemented CI/CD pipelines, and established monitoring systems.'
      },
      {
        phase: 'Core Platform Development',
        duration: '12 weeks',
        description: 'Built microservices for data processing, ML model serving, and real-time analytics.'
      },
      {
        phase: 'Migration & Testing',
        duration: '8 weeks',
        description: 'Gradually migrated sites to the new platform with comprehensive testing and validation.'
      }
    ],
    
    results: [
      { metric: 'Processing Speed', improvement: '90% faster', description: 'Reduced average processing time from 45 minutes to 4 minutes' },
      { metric: 'System Uptime', improvement: '99.9%', description: 'Achieved enterprise-grade reliability with automated failover' },
      { metric: 'Scalability', improvement: '10x capacity', description: 'Platform now handles 10x more concurrent processing jobs' },
      { metric: 'Cost Efficiency', improvement: '40% reduction', description: 'Optimized resource utilization reduced infrastructure costs' }
    ],
    
    technologies: ['Kubernetes', 'Apache Kafka', 'TensorFlow Serving', 'PostgreSQL', 'Redis', 'Prometheus', 'Grafana', 'Docker', 'AWS'],
    
    lessons: [
      'Start with a comprehensive assessment of existing bottlenecks before designing solutions',
      'Implement gradual migration strategies to minimize disruption to critical business operations',
      'Invest in robust monitoring and observability from day one',
      'Design for failure - assume components will fail and build resilience into the system'
    ]
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
            to={`/case-studies/${category}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category === 'system-design' ? 'System Design' : 'Product Thinking'}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-6">{caseStudy.subtitle}</p>
          
          {/* Metrics */}
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
          
          {/* Tags */}
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

        {/* Hero Image */}
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

        {/* Content Sections */}
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

          {/* Implementation Timeline */}
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
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">{phase.duration}</span>
                    </div>
                    <p className="text-gray-700">{phase.description}</p>
                  </div>
                </div>
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

          {/* Key Lessons */}
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
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyDetail;