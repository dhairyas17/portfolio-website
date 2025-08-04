import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
// import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import CaseStudyCategory from './pages/CaseStudyCategory';
import CaseStudyDetail from './pages/CaseStudyDetail';
import SystemProduct from './pages/SystemProduct';
import SystemProductCategory from './pages/SystemProductCategory';
import SystemProductDetails from './pages/SystemProductDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/projects/:id" element={<ProjectDetail />} />
        <Route path="/portfolio/case-studies" element={<CaseStudyCategory />} />
        <Route path="/portfolio/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="/system-product-design" element={<SystemProduct />} />
        <Route path="/system-product-design/:category" element={<SystemProductCategory />} />
        <Route path="/system-product-design/:category/:id" element={<SystemProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
