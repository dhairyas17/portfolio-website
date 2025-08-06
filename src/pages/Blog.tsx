import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Heart, MessageCircle, Search } from 'lucide-react';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filters = [
    { id: 'all', name: 'All Posts' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'product-strategy', name: 'Product' },
    { id: 'system-design', name: 'System Design' },
    { id: 'edge-infra', name: 'Edge Infra' },
    { id: 'ai-ml', name: 'AI/ML' }
  ];  

  const posts = [
    {
      id: '1',
      title: 'Scaling Edge Deployments from 100 to 1,200+ – Lessons from the Trenches',
      excerpt: 'Real stories and strategy from scaling AI infrastructure in the field, covering deployment challenges, observability, and cross-functional alignment.',
      image: 'https://images.pexels.com/photos/24224672/pexels-photo-24224672.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'edge-infra',
      date: '2025-08-01',
      readTime: '6 min read',
      tags: ['Edge AI', 'TPM', 'Product Strategy']
    },
    {
      id: '2',
      title: 'Feature Prioritization in Technical Products – Balancing OKRs, Tech Debt & Customer Feedback',
      excerpt: 'How I used RICE, MoSCoW and Productboard to manage priorities across firmware, DevOps and user experience in AI product development.',
      image: 'https://images.pexels.com/photos/5842330/pexels-photo-5842330.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'product-strategy',
      date: '2025-08-02',
      readTime: '5 min read',
      tags: ['Prioritization', 'AI Products', 'TPM']
    },
    {
      id: '3',
      title: 'Leading AI Product Teams without Being the Smartest Engineer in the Room',
      excerpt: 'Lessons on leading machine learning teams as a TPM/APM — from alignment to feasibility to trust-building without being the deepest technical expert.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'leadership',
      date: '2025-08-03',
      readTime: '6 min read',
      tags: ['Leadership', 'AI Teams', 'TPM']
    },
    {
      id: '4',
      title: 'The Future of MLOps: From Research to Real-Time Alerts',
      excerpt: 'From MLflow to Airflow to TensorRT – how tools and workflows evolve in the world of real-time inference, versioning, and deployment at scale.',
      image: 'https://images.pexels.com/photos/2381188/pexels-photo-2381188.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'ai-ml',
      date: '2025-08-04',
      readTime: '7 min read',
      tags: ['MLOps', 'AI Infra', 'Model Deployment']
    },
    {
      id: '5',
      title: 'Why Edge AI is Eating the Cloud – 5 Predictions from the Field',
      excerpt: 'Drawing from Jetson/OTA experience — this post explores why Edge AI is beating the cloud in real-world scenarios, and where things are heading.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'edge-infra',
      date: '2025-08-05',
      readTime: '5 min read',
      tags: ['Edge AI', 'Predictions', 'Cloud']
    },
    {
      id: '6',
      title: 'From Engineer to TPM: How I Learned to Influence without Authority',
      excerpt: 'A personal story of transitioning from CV engineer to product owner to TPM — and how communication, trust, and alignment became my real tools.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'leadership',
      date: '2025-08-06',
      readTime: '5 min read',
      tags: ['Career', 'TPM', 'Leadership']
    },
    {
      id: '7',
      title: 'Stakeholder Management for Technical PMs – From Chaos to Clarity',
      excerpt: 'Tips, rituals, and lessons from aligning firmware, DevOps, data science and business teams while scaling AI/edge products as a TPM.',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'leadership',
      date: '2025-08-07',
      readTime: '6 min read',
      tags: ['Stakeholders', 'TPM', 'Execution']
    },
    {
      id: '8',
      title: 'How GenAI Will Reshape the Technical PM Role – Prompting is Just the Beginning',
      excerpt: 'Beyond prompting — how GenAI is transforming technical PM workflows, from customer discovery to engineering velocity.',
      image: 'https://images.pexels.com/photos/11035395/pexels-photo-11035395.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'ai-ml',
      date: '2025-08-08',
      readTime: '5 min read',
      tags: ['GenAI', 'Future of Work', 'TPM']
    },
    {
      id: '9',
      title: 'How We Built OTA & Observability for 1,200+ Jetson Devices – A SaaS Mindset for Edge Infra',
      excerpt: 'A deep dive into how we built firmware OTA, telemetry, and observability for distributed edge AI — and how a SaaS mindset helped.',
      image: 'https://images.pexels.com/photos/19713622/pexels-photo-19713622.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'edge-infra',
      date: '2025-08-09',
      readTime: '7 min read',
      tags: ['Edge Infra', 'SaaS', 'TPM']
    },
    {
      id: '10',
      title: '10 Tools I Can’t Live Without as a TPM in AI & Cloud',
      excerpt: 'From Productboard to Grafana, here are the tools I rely on daily to prioritize, ship, align, and measure success in fast-moving AI environments.',
      image: 'https://images.pexels.com/photos/6476267/pexels-photo-6476267.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'product-strategy',
      date: '2025-08-10',
      readTime: '4 min read',
      tags: ['Tools', 'TPM', 'Productivity']
    },
      {
        id: '11',
        title: 'Choosing the Right Database for Your Product',
        excerpt:
          'Relational or NoSQL? Postgres or DynamoDB? Here’s how I choose the right database for every product phase — with real trade-offs and mistakes made.',
        image:
          'https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=compress&cs=tinysrgb&w=1200',
        category: 'system-design',
        date: '2025-08-11',
        readTime: '6 min read',
        tags: ['System Design', 'Databases', 'Product Decisions']
      },
      {
        id: '12',
        title: 'Designing Clean API Integrations - from TPM point of view',
        excerpt:
          'From naming conventions to auth flows, these are the principles I follow when designing APIs that scale, evolve, and don’t break clients.',
        image:
          'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200',
        category: 'system-design',
        date: '2025-08-12',
        readTime: '5 min read',
        tags: ['API Design', 'Integration', 'Engineering Collaboration']
      },
      {
        id: '13',
        title: 'Cost-Effective System Design: Balancing Performance & Budget',
        excerpt:
          'This is the playbook I’ve used to design systems that scale without setting money on fire. Real-world trade-offs, metrics, and lessons for PMs and engineers.',
        image:
          'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
        category: 'system-design',
        date: '2025-08-13',
        readTime: '6 min read',
        tags: ['System Design', 'Cost Optimization', 'Performance', 'Cloud Architecture']
      }
    ];
    
  
  const filteredPosts = useMemo(() => {
    const filterByCategory = posts.filter(
      (post) => activeFilter === 'all' || post.category === activeFilter
    );

    const query = searchQuery.toLowerCase();
    const filterBySearch = filterByCategory.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    return activeFilter === 'all' && !searchQuery
      ? filterBySearch.slice(1)
      : filterBySearch;
  }, [activeFilter, searchQuery]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  const handleCardClick = (postId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/blog/${postId}`);
  };

  return (
    <motion.div
      className="min-h-[80vh] pt-20 pb-8"
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Blogs</h1>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-6"
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

        {/* Search Input */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts by title, excerpt, or tags..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Featured Post */}
        {activeFilter === 'all' && !searchQuery && (
          <motion.div
            className="mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => handleCardClick(posts[0].id)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 text-white">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                    Featured Post
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {posts[0].title}
                  </h2>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-6 text-blue-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(posts[0].date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{posts[0].readTime}</span>
                    </div>
                  </div>
                  <span className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Read Full Post
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent lg:bg-gradient-to-r lg:from-blue-600/20 lg:to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={`${activeFilter}-${searchQuery}-${post.id}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  onClick={() => handleCardClick(post.id)}
                  className="cursor-pointer"
                >
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
  
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          {filters.find((f) => f.id === post.category)?.name}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                        </div>
                        <span className="text-blue-600 text-sm font-semibold group-hover:text-blue-800 transition-colors">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        <p className="text-xs text-center text-gray-400 mt-12 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Blog;
