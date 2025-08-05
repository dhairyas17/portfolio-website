import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';

const SystemProductCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  const isSystemDesign = category === 'system-design';
  const title = isSystemDesign ? 'System Design' : 'Product Design';

  const sp = isSystemDesign ? [
    {
      id: '1',
      title: 'AI Platform Architecture',
      subtitle: 'Scaling ML Infrastructure for 100+ Global Sites',
      description: 'Designed and implemented a distributed AI platform handling millions of data points daily across global manufacturing sites.',
      duration: '6 months',
      team: '15 engineers',
      impact: '90% faster processing',
      tags: ['Microservices', 'Kubernetes', 'ML Pipeline', 'Real-time Processing'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Distributed Data Pipeline',
      subtitle: 'Real-time Analytics at Petabyte Scale',
      description: 'Built a fault-tolerant data pipeline processing 10TB+ daily across multiple regions with 99.99% uptime.',
      duration: '4 months',
      team: '8 engineers',
      impact: '99.99% uptime',
      tags: ['Apache Kafka', 'Spark', 'Data Lakes', 'Stream Processing'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Microservices Migration',
      subtitle: 'From Monolith to Cloud-Native Architecture',
      description: 'Led the migration of a legacy monolithic system to microservices, improving scalability and deployment frequency.',
      duration: '8 months',
      team: '20 engineers',
      impact: '10x faster deployments',
      tags: ['Docker', 'Kubernetes', 'Service Mesh', 'CI/CD'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ] : [
    {
      id: '4',
      title: 'AI Product Strategy',
      subtitle: 'From Research to Production AI Products',
      description: 'Transformed experimental AI research into market-ready products, achieving 2M+ users and $5M ARR within 18 months.',
      duration: '18 months',
      team: '25 people',
      impact: '$5M ARR',
      tags: ['AI Strategy', 'Go-to-Market', 'User Research', 'Metrics'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '5',
      title: 'User Engagement Optimization',
      subtitle: 'Data-Driven sp to Product Growth',
      description: 'Increased user engagement by 150% through systematic A/B testing and behavioral analysis across mobile and web platforms.',
      duration: '12 months',
      team: '15 people',
      impact: '150% engagement boost',
      tags: ['A/B Testing', 'Analytics', 'User Research', 'Growth'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '6',
      title: 'Marketplace Platform Design',
      subtitle: 'Building Two-Sided Network Effects',
      description: 'Designed and launched a B2B marketplace connecting 10,000+ suppliers with enterprise buyers, achieving network effects.',
      duration: '15 months',
      team: '30 people',
      impact: '10K+ active suppliers',
      tags: ['Marketplace', 'Network Effects', 'B2B', 'Platform Strategy'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ];

  const handleCardClick = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/system-product-design/${category}/${id}`);
  };

  return (
    <motion.div
    className="min-h-[80vh] pt-[90px] md:pt-[90px] pb-8"

      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <motion.div
          className="mb-12 text-center flex flex-col items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            to="/system-product-design"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors self-start"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to menu
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-500 max-w-5xl">
            {isSystemDesign 
              ? 'Explore how I\'ve architected scalable systems to handle complex technical challenges and massive scale.'
              : 'Discover strategic product decisions that drove significant business growth and user value.'
            }
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sp.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onClick={() => handleCardClick(study.id)}
              className="cursor-pointer"
            >
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform scale-[0.88] hover:scale-100 h-[500px] flex flex-col mx-auto">
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-semibold mb-3">
                        {study.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {study.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-4 text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-500">{study.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-500">{study.team}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="text-green-600 font-semibold">{study.impact}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {study.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{study.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                  {/* Read More Link pinned to bottom */}
                  <div className="mt-auto flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                    <span className="text-sm font-semibold mr-2">Read Article</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="py-10"></div>

            </motion.div>
          ))}
        </div>
        <p className="text-xs text-center text-gray-400 mt-4 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default SystemProductCategory;
