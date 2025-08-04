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
    { id: 'product-strategy', name: 'Product Strategy' },
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'tech-trends', name: 'Tech Trends' }
  ];

  const posts = [
    {
      id: 'ai-product-development-2024',
      title: 'The Future of AI in Product Development: Lessons from the Trenches',
      excerpt: 'After leading AI product initiatives across multiple companies, here are the key insights every product manager should know about building successful AI products.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'ai-ml',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['AI', 'Product Management', 'Strategy']
    },
    {
      id: 'scaling-product-teams',
      title: 'Scaling Product Teams: From 5 to 50 Without Losing Velocity',
      excerpt: 'A practical guide to scaling product teams while maintaining quality, speed, and team culture. Lessons learned from growing teams at multiple startups.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'leadership',
      date: '2024-01-08',
      readTime: '6 min read',
      tags: ['Team Building', 'Leadership', 'Scaling']
    },
    {
      id: 'data-driven-product-decisions',
      title: 'Beyond A/B Tests: Advanced Frameworks for Data-Driven Product Decisions',
      excerpt: 'While A/B testing is great, sophisticated product decisions require more nuanced approaches. Here\'s how to build a comprehensive data-driven decision framework.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'product-strategy',
      date: '2023-12-28',
      readTime: '10 min read',
      tags: ['Data Analytics', 'Product Strategy', 'Decision Making']
    },
    {
      id: 'microservices-product-architecture',
      title: 'Product Architecture Decisions: When Microservices Make Sense',
      excerpt: 'Microservices aren\'t always the answer. Here\'s a framework for product managers to evaluate architectural decisions and their business impact.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'tech-trends',
      date: '2023-12-20',
      readTime: '7 min read',
      tags: ['Architecture', 'Microservices', 'Technical Strategy']
    },
    {
      id: 'user-research-at-scale',
      title: 'User Research at Scale: Insights from 100+ Customer Interviews',
      excerpt: 'How to systematically gather, analyze, and act on user feedback when you\'re moving fast and serving millions of users.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'product-strategy',
      date: '2023-12-12',
      readTime: '9 min read',
      tags: ['User Research', 'Customer Development', 'Product Discovery']
    },
    {
      id: 'ai-ethics-product-management',
      title: 'AI Ethics in Product Management: A Practical Framework',
      excerpt: 'As AI becomes central to product experiences, product managers need practical frameworks for making ethical decisions. Here\'s what I\'ve learned.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'ai-ml',
      date: '2023-12-05',
      readTime: '11 min read',
      tags: ['AI Ethics', 'Product Strategy', 'Responsible AI']
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
      className="min-h-[80vh] pt-12 pb-8"
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
