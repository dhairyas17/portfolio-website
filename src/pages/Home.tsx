// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ExternalLink,
  Download,
  MapPin,
  Github,
  Linkedin,
  Mail,
  ChevronUp
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// ... (your experiences, tools, certifications, testimonials arrays remain unchanged)
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle navigation via location.state
    if (location.state?.scrollTarget) {
      const targetId = location.state.scrollTarget;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      }

      navigate(location.pathname, { replace: true, state: {} });
    }

    // Fallback: handle direct /#about hash
    if (location.hash) {
      const hashElement = document.querySelector(location.hash);
      if (hashElement) {
        requestAnimationFrame(() => {
          hashElement.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, [location, navigate]);


  const experiences = [
    {
      role: 'Technical Product Manager (edge)',
      company: 'Evercam',
      period: 'March 2024 – July 2025',
      description: 'Led Gate Report AI platform and scaled edge deployments across 1300+ global sites',
      metrics: [
        '60% reduction in manual reporting',
        '70% faster incident response',
        '1300+ edge deployments (up from 150)',
        '35% less on-site support'
      ],
      location: 'Dublin, Ireland'
    },
    {
      role: 'Product Owner (APM-Equivalent)',
      company: 'Evercam',
      period: 'July 2022 – March 2024',
      description: 'Led ML model and CV platform development for real-time edge deployments',
      metrics: [
        'lad OTA deployment for Gate report on 70+ sites',
        '980K+ frames labeled at 96% accuracy',
        '92% model performance, 50% faster training',
        'Stable ML releases with rollback & alerting'
      ],
      location: 'Dublin, Ireland'
    },
    {
      role: 'Computer Vision Engineer - R&D',
      company: 'Evercam',
      period: 'May 2021 – July 2022',
      description: 'Owned end-to-end R&D of CV infrastructure, delivering PoCs like DroneView and 360° view',
      metrics: [
        'Improved measuring accuracy by 79%',
        'NPS score increased by 55%',
        'DroneView & 360° PoCs deployed to production',
        'Adopted by enterprise clients across US, AU & EU'
      ],
      location: 'Dublin, Ireland'
    }
    
  ];
  

  const tools = [
    { name: 'Jira', logo: '/assets/logos/jira.png' },
    { name: 'Confluence', logo: '/assets/logos/confluence.png' },
    { name: 'Notion', logo: '/assets/logos/Notion.png' },
    { name: 'Google Analytics', logo: '/assets/logos/google_analytics.png' },
    { name: 'Mixpanel', logo: '/assets/logos/mixpanel.png' },
    { name: 'Amplitude', logo: '/assets/logos/amplitude.png' },
    { name: 'Aha!', logo: '/assets/logos/aha.png' },
    { name: 'Productboard', logo: '/assets/logos/productboard.png' },
    { name: 'Figma', logo: '/assets/logos/figma.png' },
    { name: 'Miro', logo: '/assets/logos/miro.png' },
    { name: 'GitHub', logo: '/assets/logos/github.png' },
    { name: 'Jenkins', logo: '/assets/logos/Jenkins.png' },
    { name: 'Docker', logo: '/assets/logos/docker.png' },
    { name: 'Kubernetes', logo: '/assets/logos/Kubernetes.png' },
    { name: 'AWS', logo: '/assets/logos/aws.png' },
    { name: 'Postman', logo: '/assets/logos/postman.png' },
    { name: 'Airflow', logo: '/assets/logos/airflow.png' },
    { name: 'Grafana', logo: '/assets/logos/Grafana.png' },
    { name: 'Prometheus', logo: '/assets/logos/prometheus.png' },
    { name: 'GitLab', logo: '/assets/logos/gitlab.png' }
  ];
  

  const certifications = [
    { name: 'Certified Scrum Master (CSM)', provider: 'Scrum Alliance', year: '2023', link: '#' },
    { name: 'AWS Cloud Practitioner', provider: 'AWS', year: '2022', link: '#' },
    { name: 'GCP Associate Cloud Engineer', provider: 'Google', year: '2022', link: '#' },
    { name: 'Product Strategy & Roadmap', provider: 'LinkedIn Learning', year: '2023', link: '#' },
    { name: 'Building RAG Agents with LLMs', provider: 'NVIDIA', year: '2024', link: '#' }
  ];

  const testimonials = [
    {
      quote: "Dhairya turned our product vision into a scalable edge solution. His leadership on Jetson deployments boosted compliance, cut manual work, and delivered real business impact.",
      name: "Marco Herbst",
      role: "CEO & Co-founder – Evercam",
      avatar: "/assets/people/marco.jpeg",
    },
    {
      quote: "Dhairya bridges ML engineering and product strategy seamlessly. His execution on model rollouts and data pipelines drove accuracy, speed, and real-world reliability.",
      name: "Dhia Moumeni",
      role: "AI Team Lead – Evercam",
      avatar: "/assets/people/dhia.jpeg",
    },
    {
      quote: "Dhairya’s work on edge AI scaled our global operations. He improved SLAs, automated compliance, and reduced on-site dependencies with clarity and precision.",
      name: "Michael La Bertew",
      role: "Operations Director (USA) – Evercam",
      avatar: "/assets/people/mike.jpeg",
    }
    
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      
{/* Hero Section */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 px-4"
>
  <div className="max-w-5xl w-full mx-auto text-center">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-3">
        Hi, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Dhairya
        </span>
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
        Technical Product Manager & Strategy Leader
      </h2>

      <p className="text-base md:text-lg text-gray-500 mb-1 max-w-6xl mx-auto leading-relaxed">
      Bridging business strategy and technical execution through data-driven product leadership.
      </p>

      <p className="text-base md:text-lg text-gray-500 mb-8 max-w-6xl mx-auto leading-relaxed">
      From vision to launch, I align stakeholders and systems thinking to deliver data-driven products with lasting impact.
      </p>
    </motion.div>

    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105 font-medium"
      >
        Let’s Connect
      </Link>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-transform transform hover:scale-105 font-medium"
      >
        <Download size={18} />
        Resume
      </a>
    </motion.div>

    <motion.div
      className="flex justify-center items-center gap-6 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <a
        href="https://github.com/dhairyas17"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
      >
        <Github size={26} />
      </a>
      <a
        href="https://www.linkedin.com/in/dhairya-sharma-5484231a9/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-700 transition-transform transform hover:scale-110"
      >
        <Linkedin size={26} />
      </a>
      <a
        href="mailto:dhairyasharma008@gmail.com"
        className="text-gray-700 hover:text-red-600 transition-transform transform hover:scale-110"
      >
        <Mail size={26} />
      </a>
    </motion.div>

    <motion.div
      className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={scrollToAbout}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <ArrowDown size={40} className="text-gray-700" />
    </motion.div>
  </div>
</section>



      {/* About Section */}
{/* About Section */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Top Heading */}
    <motion.div
      className="text-center mb-16"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-lg text-gray-500">
        A timeline of learning, building, and scaling impactful products.
      </p>
    </motion.div>

    {/* Main Section */}
    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
      {/* Left - Paragraph */}
      <motion.div
        className="lg:w-1/2 text-gray-700 text-lg space-y-6 text-justify"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          I’m Dhairya Sharma, a Product and Technical Product Manager with over 4 years of experience turning complex technologies into high-impact digital products.
          With a background in engineering and deep expertise in AI/ML, edge computing, cloud infrastructure, and system design, I specialize in building scalable solutions that drive measurable business outcomes.
        </p>
        <p>
          I have led end-to-end product development and global rollouts across 1,200+ sites in the US, EU, and APAC regions. 
          My work has delivered significant results, including a 60 percent reduction in manual effort, improved SLA compliance, and smoother deployment of machine learning models at the edge.
        </p>
        <p>
          I operate at the intersection of user needs, technical feasibility, and business goals.
          From shaping product strategy and aligning with OKRs to collaborating with engineering, DevOps, and operations teams, I ensure every product is built for impact and scale.
        </p>
        <p>
        If you're building complex products that need both strategic insight and technical depth, I’m your bridge.
        </p>
      </motion.div>

      {/* Right - Value Cards */}
      <motion.div
  className="lg:w-1/2 grid grid-rows-3 gap-4 h-full"
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {[
    {
      title: 'Strategic Vision',
      icon: '💡',
      desc: 'Crafting strategies that align business goals with actionable roadmaps. I bring clarity by connecting vision to execution.'
    },
    {
      title: 'Cross-functional Leadership',
      icon: '👥',
      desc: 'Bridging technical and non-technical teams to drive alignment and fast delivery. I excel at uniting design, engineering, and operations.'
    },
    {
      title: 'Data-Driven Decisions',
      icon: '📊',
      desc: 'Leveraging customer insights, experimentation, and usage metrics to inform every product decision. My approach turns data into real product impact.'
    },
    {
      title: 'User Obsession',
      icon: '🎯',
      desc: 'Rooted in real user problems, I translate needs into intuitive solutions that deliver value. Every feature starts and ends with the user.'
    }
  ].map((item, index) => (
    <div
      key={index}
      className="bg-gray-100 rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-md transition flex items-start gap-4"
    >
      <div className="text-2xl">{item.icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">{item.desc}</p>
      </div>
    </div>
  ))}
</motion.div>

    </div>

    {/* Bottom Stats with Buttons */}
    <motion.div
      className="mt-16 grid grid-cols-1 sm:grid-cols-5 gap-8 text-center"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white border border-gray-200 rounded-lg py-6 shadow-sm hover:shadow-md transition">
        <div className="text-indigo-600 text-4xl font-bold">4+</div>
        <div className="text-sm text-gray-600 mt-2">Years Experience</div>
      </div>      
      <div className="bg-white border border-gray-200 rounded-lg py-6 shadow-sm hover:shadow-md transition">
        <div className="text-indigo-600 text-4xl font-bold">10+</div>
        <div className="text-sm text-gray-600 mt-2">Products</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg py-6 shadow-sm hover:shadow-md transition">
        <div className="text-indigo-600 text-4xl font-bold">50+</div>
        <div className="text-sm text-gray-600 mt-2">Countries</div>
      </div>     
      <div className="bg-white border border-gray-200 rounded-lg py-6 shadow-sm hover:shadow-md transition">
        <div className="text-indigo-600 text-4xl font-bold">100+</div>
        <div className="text-sm text-gray-600 mt-2">Global Teams</div>
      </div> 
      <div className="bg-white border border-gray-200 rounded-lg py-6 shadow-sm hover:shadow-md transition">
        <div className="text-indigo-600 text-4xl font-bold">1300+</div>
        <div className="text-sm text-gray-600 mt-2">Global Deployments</div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Experience Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience</h2>
          </motion.div>
          <div className="relative">
            {/* Horizontal timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-blue-500 z-0 shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] animate-pulse"></div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experiences.map((exp, index) => (
                  <motion.div
  key={index}
  className="relative flex flex-col items-center"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
  <div className="hidden md:flex absolute top-[24px] z-10">
    {/* <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div> */}
    <div
  className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"
  style={{
    boxShadow: '0 0 0 rgba(59,130,246,0.4)',
    animation: 'glow 2s infinite ease-in-out',
  }}
></div>

  </div>

  <motion.div
  whileHover={{ scale: 1.05 }}
  className="mt-[50px] w-full h-[350px] bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col justify-between"
>
  <div className="text-sm text-blue-600 font-semibold mb-2">{exp.period}</div>

  <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.role}</h3>

  <div className="text-gray-600 mb-2 flex items-center gap-1">
    <span>{exp.company}</span>
  </div>

  <div className="text-sm text-gray-500 mb-3 flex items-center gap-1">
    <MapPin size={14} />
    <span>{exp.location}</span>
  </div>

  <p className="text-gray-700 text-sm mb-3 text-justify">{exp.description}</p>

  <div className="space-y-1">
    {exp.metrics.map((metric, idx) => (
      <div
        key={idx}
        className="text-xs text-green-700 bg-green-50 px-3 py-1 rounded text-left"
      >
        {metric}
      </div>
    ))}
  </div>
</motion.div>

</motion.div>

                
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tools & Platforms</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="group flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="h-10 w-10 mb-2 object-contain"
                />
                <div className="text-sm font-medium text-gray-700 text-center">
                  {tool.name}
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md p-6 rounded-xl flex flex-col justify-between h-full transition hover:shadow-xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-grow">
                  <div className="text-gray-700 mb-6 italic">"{testimonial.quote}"</div>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Certifications */}
<section className="pt-24 pb-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
    </motion.div>

    <motion.div
      className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 overflow-hidden"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 tracking-wider">Certification</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 tracking-wider">Provider</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700 tracking-wider">Link</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {certifications.map((cert, index) => (
              <motion.tr
                key={index}
                className="hover:bg-gray-50 transition"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{cert.name}</td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{cert.provider}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition inline-flex items-center gap-1"
                  >
                    View <ExternalLink size={14} />
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  </div>
</section>
{showScrollTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300"
    aria-label="Scroll to top"
  >
    <ChevronUp size={20} />
  </button>
)}
{/* Closing Section */}
<section className="pt-12 pb-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
        Bridging ambition and execution through product leadership
      </h2>
      <p className="text-base text-gray-600 mb-10 max-w-xl mx-auto">
        Let's connect if you're working on ambitious products or transformative ideas.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  <Link
    to="/portfolio"
    className="min-w-[150px] text-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-transform duration-200 hover:scale-105 text-sm font-medium shadow"
  >
    View Portfolio
  </Link>
  <Link
    to="/blog"
    className="min-w-[150px] text-center px-6 py-3 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-100 transition-transform duration-200 hover:scale-105 text-sm font-medium shadow"
  >
    Blogs
  </Link>
  <Link
    to="/contact"
    className="min-w-[150px] text-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-200 hover:scale-105 text-sm font-medium shadow"
  >
    Get in Touch
  </Link>
</div>

    </motion.div>
    <p className="text-xs text-center text-gray-400 mt-8 pt-4 border-t border-gray-200">
      © {new Date().getFullYear()} Dhairya Sharma. All rights reserved.
    </p>
  </div>
</section>


    </motion.div>
  );
};

export default Home;