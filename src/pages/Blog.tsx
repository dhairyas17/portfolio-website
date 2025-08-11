import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Clock, Search } from 'lucide-react';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Read params from URL
  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(queryParams.get('page') || '1', 10);
  const filterFromUrl = queryParams.get('filter') || 'all';
  const searchFromUrl = queryParams.get('search') || '';

  // State initialized from URL params
  const [activeFilter, setActiveFilter] = useState(filterFromUrl);
  const [searchQuery, setSearchQuery] = useState(searchFromUrl);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  const postsPerPage = 6;
  const isInitialMount = useRef(true);

  // Filters list
  const filters = [
    { id: 'all', name: 'All Posts' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'product-strategy', name: 'Product' },
    { id: 'system-design', name: 'System Design' },
    { id: 'edge-infra', name: 'Edge Infra' },
    { id: 'ai-ml', name: 'AI/ML' }
  ];

  // Keep previous filter/search to reset page when either changes
  const prevFilter = useRef(activeFilter);
  const prevSearch = useRef(searchQuery);

  // Reset page to 1 if filter or search changed (except on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (prevFilter.current !== activeFilter || prevSearch.current !== searchQuery) {
      setCurrentPage(1);
    }
    prevFilter.current = activeFilter;
    prevSearch.current = searchQuery;
  }, [activeFilter, searchQuery]);

  // Sync URL whenever activeFilter, searchQuery, or currentPage changes
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeFilter && activeFilter !== 'all') params.set('filter', activeFilter);
    if (searchQuery) params.set('search', searchQuery);
    if (currentPage && currentPage !== 1) params.set('page', currentPage.toString());

    const url = params.toString() ? `/blog?${params.toString()}` : '/blog';

    navigate(url, { replace: true });
  }, [activeFilter, searchQuery, currentPage, navigate]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Date formatting helper
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };


  const posts = [
    {
      id: '1',
      title: 'From Engineer to TPM: Influencing Without Authority',
      excerpt: 'A personal story of transitioning from CV engineer to product owner to TPM, and how communication, trust, and alignment became my real tools.',
      image: '/assets/blogs/6.png',
      category: 'leadership',
      date: '2025-08-06',
      readTime: '5 min read',
      tags: ['Career', 'TPM', 'Leadership']
    },
    {
      id: '2',
      title: 'Feature Prioritization in Technical Products',
      excerpt: 'How I used RICE, MoSCoW and Productboard to manage priorities across firmware, DevOps and user experience in AI product development.',
      image: '/assets/blogs/2.png',
      category: 'product-strategy',
      date: '2025-02-02',
      readTime: '5 min read',
      tags: ['Prioritization', 'AI Products', 'TPM']
    },
    {
      id: '3',
      title: 'Stakeholder Management for TPMs – From Chaos to Clarity',
      excerpt: 'Tips, rituals, and lessons from aligning firmware, DevOps, data science and business teams while scaling AI/edge products as a TPM.',
      image: '/assets/blogs/7.png',
      category: 'leadership',
      date: '2025-07-17',
      readTime: '6 min read',
      tags: ['Stakeholders', 'TPM', 'Execution']
    },
    {
      id: '4',
      title: 'Cost-Effective System Design: Balancing Performance & Budget',
      excerpt: 'This is my playbook for designing systems that scale without burning money, with real-world trade-offs, metrics, and lessons for PMs and engineers.',
      image: '/assets/blogs/13.png',
      category: 'system-design',
      date: '2025-04-13',
      readTime: '6 min read',
      tags: ['System Design', 'Cost Optimization', 'Performance', 'Cloud Architecture']
    },
    {
      id: '5',
      title: 'Leading AI Teams Without Being the Smartest Engineer',
      excerpt: 'Lessons on leading machine learning teams as a TPM/APM, from alignment to feasibility to trust-building without being the deepest technical expert.',
      category: 'leadership',
      image: '/assets/blogs/3.png',
      date: '2025-08-03',
      readTime: '6 min read',
      tags: ['Leadership', 'AI Teams', 'TPM']
    },
    {
      id: '6',
      title: 'The Future of MLOps: From Research to Real-Time Alerts',
      excerpt: 'From MLflow to Airflow to TensorRT – how tools and workflows evolve in the world of real-time inference, versioning, and deployment at scale.',
      image: '/assets/blogs/4.png',
      category: 'ai-ml',
      date: '2025-04-10',
      readTime: '7 min read',
      tags: ['MLOps', 'AI Infra', 'Model Deployment']
    },
    {
      id: '7',
      title: 'Why Edge AI is Eating the Cloud – 5 Predictions from the Field',
      excerpt: 'Drawing from Edge/OTA experience, this post explores why Edge AI is beating the cloud in real-world scenarios, and where things are heading.',
      image: '/assets/blogs/5.png',
      category: 'edge-infra',
      date: '2024-12-29',
      readTime: '5 min read',
      tags: ['Edge AI', 'Predictions', 'Cloud']
    },
    {
      id: '8',
      title: 'Scaling Edge Deployments: 100 to 1,200+',
      excerpt: 'Real stories and strategy from scaling AI infrastructure in the field, covering deployment challenges, observability, and cross-functional alignment.',
      image: '/assets/blogs/1.png',
      category: 'edge-infra',
      date: '2025-08-06',
      readTime: '6 min read',
      tags: ['Edge AI', 'TPM', 'Product Strategy']
    },
    {
      id: '9',
      title: 'How GenAI Will Reshape the TPM Role',
      excerpt: 'Beyond prompting, how GenAI is transforming technical PM workflows, from customer discovery to engineering velocity.',
      image: '/assets/blogs/8.png',
      category: 'ai-ml',
      date: '2025-08-11',
      readTime: '5 min read',
      tags: ['GenAI', 'Future of Work', 'TPM']
    },
    {
      id: '10',
      title: 'A SaaS Mindset for Scaling Edge Infrastructure',
      excerpt: 'A deep dive into how we built firmware OTA, telemetry, and observability for distributed edge AI, and how a SaaS mindset helped.',
      image: '/assets/blogs/9.png',
      category: 'edge-infra',
      date: '2025-06-09',
      readTime: '7 min read',
      tags: ['Edge Infra', 'SaaS', 'TPM']
    },
    {
      id: '11',
      title: 'Choosing the Right Database for Your Product',
      excerpt: 'Relational or NoSQL? Postgres or DynamoDB? Here’s how I choose the right database for every product phase, with real trade-offs and mistakes made.',
      image: '/assets/blogs/11.png',
      category: 'system-design',
      date: '2025-03-11',
      readTime: '6 min read',
      tags: ['System Design', 'Databases', 'Product Decisions']
    },
    {
      id: '12',
      title: 'Designing Clean API Integrations - from TPM point of view',
      excerpt: 'From naming conventions to auth flows, these are the principles I follow when designing APIs that scale, evolve, and don’t break clients.',
      image: '/assets/blogs/12.png',
      category: 'system-design',
      date: '2024-05-12',
      readTime: '5 min read',
      tags: ['API Design', 'Integration', 'Engineering Collaboration']
    }
  ];
   

  // Filter, search and paginate posts
  const filteredData = useMemo(() => {
    const filtered = posts.filter(
      (post) => activeFilter === 'all' || post.category === activeFilter
    ).filter((post) => {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });

    const featured = (activeFilter === 'all' && !searchQuery) ? filtered[0] : null;
    const rest = (activeFilter === 'all' && !searchQuery) ? filtered.slice(1) : filtered;

    let paginatedPosts = [];

    if (currentPage === 1) {
      paginatedPosts = rest.slice(0, 3); // page 1: 3 posts after featured
    } else {
      const start = 3 + (currentPage - 2) * postsPerPage;
      const end = start + postsPerPage;
      paginatedPosts = rest.slice(start, end);
    }

    const totalPages = Math.ceil((rest.length - 3) / postsPerPage) + 1;

    return {
      featured,
      paginatedPosts,
      totalPages
    };
  }, [activeFilter, searchQuery, currentPage, posts]);

  const { featured, paginatedPosts, totalPages } = filteredData;

  const handleCardClick = (postId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(`/blog/${postId}`, { state: { fromPage: currentPage, fromFilter: activeFilter } });
    };

return (
    <motion.div
      className="min-h-[120vh] pt-20 pb-8"
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
        {currentPage === 1 && featured && (
          <motion.div
            className="mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => handleCardClick(featured.id)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6 lg:p-8 text-white">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-3">
                    Featured Post
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-blue-100 text-base mb-4 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-blue-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(featured.date)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{featured.readTime}</span>
                    </div>
                  </div>
                  <span className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-50 transition-colors">
                    Read Full Post
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-auto object-cover lg:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent lg:bg-gradient-to-r lg:from-blue-600/20 lg:to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {paginatedPosts.map((post, index) => (
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
                        <div className="flex justify-end pt-4 border-t border-gray-100">
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
        ) : (
          <p className="text-center text-gray-500">No posts found.</p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <div className="inline-flex gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-12 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Blog;