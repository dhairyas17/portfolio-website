import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';

const CaseStudyCategory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const caseStudies = [
    {
      id: '1',
      title: "Redesigning Evercam's Gate Report",
      subtitle: 'Real-Time Edge-Based Object Detection for 100+ Sites',
      description: 'Led a product and system redesign to transform Evercam’s Gate Report from a cloud-based system to a real-time edge-based solution, reducing latency and bandwidth while improving NPS and MRR.',
      duration: '6 months',
      team: '1 TPM, 6 Engineers, 2 AI Researchers, 2 DevOps, 1 Designer, 1 CS Manager, 3 QA/Annotation',
      impact: '750% MRR Growth · 94% Lower Data Usage · 71pt NPS Boost',
      tags: ['Edge AI', 'System Design', 'YOLOv5', 'Jetson', 'RabbitMQ', 'OTA Deployment'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '2',
      title: "Standardizing Edge Setup at Evercam",
      subtitle: 'Scalable Kit-Based Deployment Across 100+ Sites',
      description: 'Led an edge infrastructure transformation by moving from inconsistent camera setups to a standardized, kit-based deployment. Introduced OTA config delivery via Ansible and AWX, enabling non-engineers to deploy and manage edge devices at scale.',
      duration: '4 months',
      team: '1 TPM, 3 Firmware Engineers, 2 DevOps, 5 Developers, 2 Support Engineers',
      impact: 'Reduced deployment time by 70% · Enabled 1000+ site scalability · Empowered non-devs to manage edge ops',
      tags: ['Edge Infrastructure', 'Ansible', 'AWX', 'OTA', 'Kit-Based Architecture', 'TPM', 'DevOps'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Scaling ML Pipelines & MLOps Lifecycle',
      subtitle: 'Boosted Detection Accuracy from 67% to 96% Across 1000+ Edge Devices',
      description: 'Led a cross-functional ML lifecycle redesign—data collection, annotation, training, deployment—to scale detection models and increase accuracy by 29% using Airflow, CVAT, and MLflow.',
      duration: '6 months',
      team: '1 TPM, 5 Annotation Specialists, 2 ML Engineers, 2 DevOps Engineers',
      impact: '10× data scale · 29% accuracy lift · 60% faster annotation',
      tags: ['MLOps', 'Airflow', 'MLflow', 'Edge AI', 'CVAT', 'Data Pipeline'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'Real-Time Observability for OTA Edge Devices',
      subtitle: 'Built Scalable Monitoring for 1300+ Devices Using Prometheus & Grafana',
      description: 'Designed and launched a real-time observability system for Evercam’s global edge fleet, enabling proactive monitoring, reducing failures and support costs, and boosting NPS through Grafana dashboards and OTA updates.',
      duration: '4 months',
      team: '1 TPM, 3 DevOps Engineers, 2 Backend Engineers, 1 Embedded Engineer, Support Lead, QA Engineer',
      impact: '75% fewer device failures · 80% fewer site visits · +35% NPS increase',
      tags: ['Observability', 'Prometheus', 'Grafana', 'OTA Deployment', 'Edge Devices', 'DevOps', 'TPM'],
      image: 'https://images.pexels.com/photos/1581094/pexels-photo-1581094.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },    
    {
      "id": "5",
      "title": "Redesigning Evercam's Gate Report for Real-Time Edge-Based Object Detection",
      "subtitle": "Product Design, System Design, AI/Edge Architecture",
      "description": "Led a full-stack redesign and technical transformation of Evercam’s Gate Report feature to support real-time object detection and analytics at the edge.",
      "duration": "6 months",
      "team": "1 TPM (myself), 6 Engineers, 2 AI Researchers",
      "impact": "Improved gate detection accuracy from 65% to 96%, reduced processing time from 2 mins to 5 secs, improved client retention by 22%",
      "tags": ["Edge AI", "Object Detection", "Jetson Orin", "React", "Node.js", "Postgres", "MQTT"],
      "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    },
    {
      "id": "6",
      "title": "Redesigning Onboarding to Improve Activation by 35%",
      "subtitle": "User Experience, Onboarding, Product Strategy",
      "description": "Led the redesign of onboarding flow to increase user activation, reduce churn, and drive early product adoption through progressive flows, AI assistant, and behavior-driven nudges.",
      "duration": "4 months",
      "team": "1 PM (me), 1 Designer, 5 Engineers",
      "impact": "Activation rate improved from 20% to 55%, 28% reduction in support tickets",
      "tags": ["Onboarding", "User Experience", "GenAI", "React", "Amplitude", "Redis"],
      "image": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    }
    
  ];

  const handleCardClick = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/portfolio/case-studies/${id}`);
  };

  return (
    <motion.div
    className="min-h-[101vh] pt-[90px] md:pt-[90px] pb-8"

      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center flex flex-col items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors self-start"
          >
            <ArrowLeft className="w-4 h- mr-2" />
            Back to portfolio
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Case studies</h1>
          <p className="text-lg text-gray-500 max-w-6xl">
            Deep dives into real-world challenges I've solved, showcasing both technical
            excellence and strategic product thinking.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onClick={() => handleCardClick(study.id)}
              className="cursor-pointer"
            >
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 h-[500px] flex flex-col">
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
                    <span className="text-sm font-semibold mr-2">View Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom spacing once after the grid */}
        <div className="mt-20" />

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-10 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default CaseStudyCategory;
