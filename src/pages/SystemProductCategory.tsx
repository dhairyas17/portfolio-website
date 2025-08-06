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
      description: 'Designed and implemented a distributed AI platform handling millions of data points daily across global manufacturing sites. Leveraged Kubernetes, Kafka, and TensorFlow Serving to achieve real-time ML processing, zero-downtime deployments, and 90% faster system performance.',
      duration: '6 months',
      team: '15 engineers',
      impact: '90% faster processing',
      tags: ['Microservices', 'Kubernetes', 'ML Pipeline', 'Real-time Processing'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    
    {
      id: '2',
      title: 'Webhook Delivery Platform',
      subtitle: 'Designing a Scalable Webhook Architecture for 3rd-Party Integrations',
      description: 'Engineered a fault-tolerant, event-driven webhook platform ensuring 99.99% reliable delivery of millions of events per day to 3rd-party partners. Designed for tenant-level configuration, retries, and real-time observability across async pipelines.',
      duration: '5 months',
      team: '10 engineers',
      impact: '99.99% reliable delivery at scale',
      tags: ['Event-Driven', 'Webhooks', 'Queueing', 'Retries', 'Observability'],
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    
    {
      id: '3',
      title: 'Fault-Tolerant Design Patterns for Streaming Architectures',
      subtitle: 'Building Reliable Data Pipelines with Kafka and Stateful Recovery',
      description: 'Architected a resilient streaming system using Kafka, RocksDB, and circuit-breakers to ensure reliable, recoverable data processing. Downtime was reduced from 3 hours/month to under 10 minutes by implementing retries, DLQs, and self-healing components.',
      duration: '4 months',
      team: '8 engineers',
      impact: 'Reduced downtime from 3 hours/month to <10 min/month',
      tags: ['Kafka', 'Streaming', 'Resilience', 'Event-Driven Architecture'],
      image: 'https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  
  ] : [
    {
      id: '4',
      title: 'Driving Product-Led Growth through Self-Serve Onboarding',
      subtitle: 'Reducing Drop-Offs and Activating Users without Sales Involvement',
      description: 'Redesigned the onboarding experience into a dynamic, goal-based flow to help users reach value faster without human assistance. Achieved a 40% increase in Day-1 activation and an 18% uplift in free-to-paid conversions by implementing contextual guidance, progress tracking, and smart nudges.',
      duration: '6 weeks',
      team: '2 PMs, 1 designer, 3 engineers, 1 data analyst',
      impact: '40% increase in Day-1 activation rate, 18% uplift in free-to-paid conversion',
      tags: ['PLG', 'User Onboarding', 'Self-Serve', 'Activation', 'Funnel Optimization'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    
    {
      id: '5',
      title: 'Redesigning Feature Rollouts',
      subtitle: 'Minimizing Churn and Enabling A/B Testing at Scale',
      description: 'Revamped the feature rollout process with LaunchDarkly to support fine-grained user targeting, instant rollbacks, and integrated A/B testing. This led to a 30% reduction in churn from premature releases and enabled teams to run experiments 5x faster.',
      duration: '3 months',
      team: '4 engineers, 1 designer, 1 data analyst',
      impact: '30% reduction in churn from premature rollouts, 5x faster experiment cycles',
      tags: ['Feature Rollouts', 'A/B Testing', 'Growth', 'Experimentation', 'Churn Reduction'],
      image: 'https://images.pexels.com/photos/3182782/pexels-photo-3182782.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    
    {
      id: '6',
      title: 'Multi-Tenant SaaS Architecture',
      subtitle: 'Designing Isolation, Scale, and Customizability from Day One',
      description: 'Built a scalable multi-tenant SaaS platform with logical isolation, self-serve admin UX, and flexible role management. Partnered with design customers to shape the MVP, resulting in 60% faster onboarding and a 4x increase in tenant growth.',
      duration: '5 months',
      team: '1 PM, 2 Designers, 8 Engineers',
      impact: 'Launched MVP with 3 design partners; reduced onboarding time by 60%',
      tags: ['Multi-Tenant', 'SaaS', 'Onboarding', 'User Management', 'B2B Product'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
    
  ];

  const handleCardClick = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/system-product-design/${category}/${id}`);
  };

  return (
    <motion.div
    className="min-h-[110vh] pt-[90px] md:pt-[90px] pb-8"

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
