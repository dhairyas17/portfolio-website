import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, this would come from an API
  const post = {
    title: 'The Future of AI in Product Development: Lessons from the Trenches',
    excerpt: 'After leading AI product initiatives across multiple companies, here are the key insights every product manager should know about building successful AI products.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    category: 'AI & ML',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['AI', 'Product Management', 'Strategy'],
    author: {
      name: 'Dhairya Sharma',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Product & Strategy Leader building scalable AI products'
    },
    
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Artificial Intelligence has moved from the realm of science fiction into the core of modern product development. 
        After spending the last three years leading AI product initiatives across multiple companies, I've learned that 
        building successful AI products requires a fundamentally different approach than traditional software products.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">The AI Product Paradox</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        The biggest misconception I see among product managers is treating AI as just another feature. AI products have 
        unique characteristics that traditional product management frameworks don't account for:
      </p>

      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>Probabilistic outcomes instead of deterministic results</li>
        <li>Model performance that degrades over time without maintenance</li>
        <li>Data quality issues that directly impact user experience</li>
        <li>Black box decision-making that users need to trust</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Five Key Lessons for AI Product Success</h2>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">1. Start with the Problem, Not the Technology</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        The most successful AI products I've built started with a clear user problem that AI was uniquely positioned 
        to solve. Don't fall into the trap of "AI for AI's sake." Instead, identify problems where traditional rule-based 
        systems fall short and where the probabilistic nature of AI adds value.
      </p>

      <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
        <p class="text-blue-800 italic">
          "At Evercam, we didn't set out to build an AI platform. We set out to solve the problem of manual 
          incident detection across manufacturing sites. AI became the obvious solution once we understood 
          the complexity and scale of the problem."
        </p>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">2. Design for Uncertainty</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Unlike traditional software that either works or doesn't, AI systems operate in shades of gray. 
        Your product design must account for this uncertainty. Show confidence scores, provide alternative 
        suggestions, and always give users a way to override AI decisions.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">3. Data is Your Product</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        In AI products, data quality directly translates to user experience quality. Invest heavily in data 
        collection, cleaning, and validation processes. Create feedback loops that allow your model to learn 
        from user corrections and improve over time.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">4. Build Explainability from Day One</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        Users need to understand why your AI made a particular decision, especially in high-stakes situations. 
        Design your system to provide clear explanations, not just predictions. This builds trust and allows 
        users to make informed decisions about when to rely on AI recommendations.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">5. Plan for Continuous Learning</h3>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        AI models aren't "set it and forget it" features. They need continuous monitoring, retraining, and 
        updating. Build monitoring dashboards that track model performance over time and alert you when 
        performance degrades.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">The Road Ahead</h2>
      
      <p class="text-gray-700 leading-relaxed mb-6">
        As AI capabilities continue to advance, the role of product managers in AI product development becomes 
        even more critical. We're the bridge between technical possibilities and user needs, between cutting-edge 
        research and practical applications.
      </p>

      <p class="text-gray-700 leading-relaxed mb-6">
        The future belongs to product managers who can navigate the unique challenges of AI products while 
        maintaining focus on solving real user problems. By embracing uncertainty, prioritizing data quality, 
        and designing for explainability, we can build AI products that truly enhance human capabilities 
        rather than replace them.
      </p>

      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-3">Key Takeaways</h4>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>Treat AI as a fundamentally different product category</li>
          <li>Design for probabilistic outcomes and user uncertainty</li>
          <li>Invest heavily in data quality and continuous learning</li>
          <li>Build explainability and trust into your core product experience</li>
          <li>Monitor model performance as a key product metric</li>
        </ul>
      </div>
    `
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      className="min-h-screen pt-20 pb-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <p className="text-gray-600 text-sm">{post.author.bio}</p>
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
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="prose prose-lg max-w-none mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <motion.div
          className="mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </article>
    </motion.div>
  );
};

export default BlogPost;