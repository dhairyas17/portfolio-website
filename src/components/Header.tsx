import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTarget: 'about' } });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg h-[60px]' : 'bg-transparent h-[108px]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Left: Name */}
          <div className="flex-shrink-0 text-xl font-bold">Dhairya Sharma</div>

          {/* Center: Navigation */}
          <div className="hidden md:flex space-x-6 justify-center flex-grow">
            <button
              onClick={handleHomeClick}
              className={`relative pb-1 transition-colors ${
                location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all`}
            >
              Home
            </button>
            <button
              onClick={handleAboutClick}
              className={`relative pb-1 transition-colors ${
                location.pathname === '/' && location.state?.scrollTarget === 'about'
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700'
              } hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all`}
            >
              About Me
            </button>
            <Link
              to="/portfolio"
              className={`relative pb-1 transition-colors ${
                isActive('/portfolio') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all`}
            >
              Product Portfolio
            </Link>
            <Link
              to="/system-product-design"
              className={`relative pb-1 transition-colors ${
                isActive('/system-product-design') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all`}
            >
              System & Product Design
            </Link>
            <Link
              to="/blog"
              className={`relative pb-1 transition-colors ${
                isActive('/blog') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all`}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className={`relative pb-1 transition-colors ${
                isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all`}
            >
              Contact
            </Link>
          </div>

          {/* Right: Resume Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={16} />
              Resume
            </a>
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-24 left-0 right-0 bg-white shadow-lg py-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  handleHomeClick();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  handleAboutClick();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Me
              </button>
              <Link
                to="/portfolio"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product Portfolio
              </Link>
              <Link
                to="/system-product-design"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                System & Product Design
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mx-4 mt-4"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
