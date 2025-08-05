// src/pages/BlogPost.tsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogList } from '../data/blogList';
import { blogContentMap } from '../data/blogContent';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()

  const blog = blogList.find((item) => item.id === id);
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600 px-4 pt-24">
        <h1 className="text-3xl font-bold">Blog not found</h1>
        <p className="mt-4">Check the URL or go back to the blog list.</p>
        <button
          onClick={() => navigate('/blog')}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  const markdown = blogContentMap[`./blogs/${blog.slug}`] as string;

  return (
    <motion.div
      className="min-h-[80vh] pt-20 pb-8"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </button>

        {/* Title & Meta */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          <p className="text-lg text-blue-600 font-medium mb-6">{blog.subtitle}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Calendar size={16} /> {blog.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} /> {blog.readTime}
            </div>
            <div className="flex items-center gap-1">
              <User size={16} /> {blog.author.name}
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-[400px] object-cover rounded-xl shadow-md"
          />
        </motion.div>

        {/* Markdown Content */}
        <motion.article
          className="prose prose-lg prose-blue max-w-none text-gray-800"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>

          {/* Tags Section */}
          <motion.div
            className="mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
{/* Blog Navigation Buttons */}
<motion.div
  className="mt-10 flex flex-col sm:flex-row justify-between gap-4"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.75, duration: 0.6 }}
>
  {/* Previous Button */}
  {blogList.findIndex((item) => item.id === blog.id) > 0 ? (
    <Link
      to={`/blog/${blogList[blogList.findIndex((item) => item.id === blog.id) - 1].id}`}
      className="no-underline group w-full sm:w-auto flex items-center justify-start gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-base font-medium text-gray-800"
    >
      <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
      <span className="text-base font-medium text-gray-600 group-hover:text-blue-600">
        Previous
      </span>
    </Link>
  ) : (
    <div className="hidden sm:block" />
  )}

  {/* Next Button */}
  {blogList.findIndex((item) => item.id === blog.id) < blogList.length - 1 ? (
    <Link
      to={`/blog/${blogList[blogList.findIndex((item) => item.id === blog.id) + 1].id}`}
      className="no-underline group w-full sm:w-auto flex items-center justify-end gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-600 transition text-base font-medium text-gray-800"
    >
      <span className="text-base font-medium text-gray-600 group-hover:text-blue-600">
        Next
      </span>
      <ArrowLeft className="w-5 h-5 rotate-180 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
    </Link>
  ) : (
    <div className="hidden sm:block" />
  )}
</motion.div>

          {/* CTA Section */}
          <motion.div
  className="border-t pt-1 mt-8 text-center"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 1 }}
>
  <div className="mt-8 text-center"> {/* Reduced from mt-16 to mt-6 */}
    <h4 className="text-2xl font-semibold text-gray-800 mb-2">Enjoyed the read?</h4>
    <p className="text-gray-600 mb-8">
      Explore more insights or connect with me to discuss AI product thinking.
    </p>
    <div className="flex justify-center gap-4">
  <Link
    to="/blog"
    className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg no-underline transform hover:scale-105 transition-transform duration-200 will-change-transform preserve-3d"
  >
    <span className="block will-change-auto">View All Posts</span>
  </Link>
  <a
    href="https://www.linkedin.com/in/dhairya-sharma-5484231a9/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 border border-gray-300 text-gray-700 text-lg font-semibold rounded-lg no-underline transform hover:scale-105 transition-transform duration-200 will-change-transform preserve-3d"
  >
    <span className="block will-change-auto">Connect on LinkedIn</span>
  </a>
</div>





  </div>
</motion.div>
        </motion.article>

        {/* Footer */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-center text-gray-400 mt-12 pt-8 border-t border-gray-200">
            © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;
