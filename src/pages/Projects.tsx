import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Tag,
  ArrowLeft,
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'infra', name: 'Infra' },
    { id: 'api', name: 'API Integration' },
  ];

  const projects = [
    {
      id: '101',
      title: 'OTA Firmware Updates with AWX & Ansible',
      description:
        'Automated OTA firmware updates for Jetson edge devices using Ansible and AWX, achieving 99.8% success rate and 85% less downtime.',
      image:
        'https://images.pexels.com/photos/8972715/pexels-photo-8972715.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'infra',
      tech: ['Ansible', 'AWX', 'Python', 'Shell Scripting', 'Jetson'],
      year: '2025',
      team: '3 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/ota-ansible-awx',
        demo: 'https://ota-demo.com',
      },
    },
    {
      id: '102',
      title: 'Edge Device Monitoring with Prometheus & Grafana',
      description:
        'Deployed lightweight monitoring on Jetson edge devices using Prometheus and Grafana, reducing downtime by 90% and enabling real-time alerts.',
      image:
        'https://images.pexels.com/photos/7793628/pexels-photo-7793628.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'infra',
      tech: ['Prometheus', 'Grafana', 'Node Exporter', 'Jetson', 'Python', 'Docker'],
      year: '2025',
      team: '2 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/edge-monitoring-prometheus',
        demo: 'https://monitoring-demo.com',
      },
    },
    {
      id: '103',
      title: 'Optimized YOLOv4 Inference on Jetson using ONNX & TensorRT',
      description:
        'Built and deployed real-time object detection pipeline on Jetson using YOLOv4 + TensorRT, achieving sub-50ms inference time and 60% smaller models.',
      image:
        'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'ai-ml',
      tech: ['YOLOv4', 'ONNX', 'TensorRT', 'Darknet', 'Jetson Xavier', 'OpenCV', 'Python', 'Docker'],
      year: '2025',
      team: '3 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/yolov4-jetson-tensorrt',
        demo: 'https://yolov4-jetson-demo.com',
      },
    },
    {
      id: '104',
      title: 'Fisheye Distortion Correction on Wide Angle Cameras',
      description:
        'Corrected fisheye distortion in real-time using OpenCV, improving object detection accuracy by 22% and reducing frame latency to <50ms.',
      image:
        'https://images.pexels.com/photos/5968376/pexels-photo-5968376.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'Computer Vision & Image Processing',
      tech: ['OpenCV', 'Python', 'Camera Calibration', 'NumPy', 'Docker'],
      year: '2025',
      team: '2 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/fisheye-correction-opencv',
        demo: 'https://fisheye-demo.com',
      },
    },
    {
      id: '105',
      title: 'AI Chatbot using GenAI & LLMs',
      description:
        'Built a domain-specific GenAI chatbot using LangChain and LLMs, with RAG pipeline and voice/text interaction — cutting query resolution time by 65%.',
      image:
        'https://images.pexels.com/photos/8386446/pexels-photo-8386446.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'ai-ml',
      tech: ['LLM', 'LangChain', 'Python', 'FastAPI', 'FAISS', 'Streamlit', 'HuggingFace', 'Docker'],
      year: '2025',
      team: '2 people',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/genai-chatbot',
        demo: 'https://genai-chatbot-demo.com',
      },
    },
    {
      id: '106',
      title: 'Scalable AI-Driven Video Intelligence API Platform',
      description:
        'Developed a modular FastAPI platform offering video AI features via REST APIs—YOLOv8, FaceNet, SAM, LaMa—running on cloud and edge.',
      image:
        'https://images.pexels.com/photos/8552306/pexels-photo-8552306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'api',
      tech: [
        'Python', 'FastAPI', 'YOLOv8', 'FaceNet', 'SAM', 'LaMa',
        'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'RabbitMQ', 'gRPC', 'Prometheus + Grafana',
      ],
      year: '2025',
      team: '1 person',
      status: 'Live',
      links: {
        github: 'https://github.com/dhairya/video-intelligence-api',
        demo: 'https://video-api-demo.com',
      },
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  const projectsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleCardClick = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(`/portfolio/projects/${id}`);
    }, 100);
  };

  return (
    <motion.div
      className="pt-[80px] md:pt-[90px] pb-32"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2 -mt-0.5" />
          Back to Portfolio
        </Link>

        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Projects</h1>
        </motion.div>

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

        <motion.div
          key={activeFilter + currentPage}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {paginatedProjects.map((project) => (
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

        {/* Pagination */}
        <div className="mt-10 flex justify-center items-center gap-4">
  <button
    onClick={goToPreviousPage}
    disabled={currentPage === 1}
    className={`min-w-[128px] inline-block px-4 py-2 text-sm font-semibold rounded-lg no-underline transform transition-transform duration-200 will-change-transform text-center ${
      currentPage === 1
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
        : 'bg-blue-600 text-white hover:scale-105'
    }`}
  >
    ← Prev
  </button>

  <span className="text-sm text-gray-600 font-medium">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={goToNextPage}
    disabled={currentPage === totalPages}
    className={`min-w-[128px] inline-block px-4 py-2 text-sm font-semibold rounded-lg no-underline transform transition-transform duration-200 will-change-transform text-center ${
      currentPage === totalPages
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
        : 'bg-blue-600 text-white hover:scale-105'
    }`}
  >
    Next →
  </button>
        </div>

        <div className="h-4" />
        <p className="text-xs text-center text-gray-400 mt-12 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Projects;
