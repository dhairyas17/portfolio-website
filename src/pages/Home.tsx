// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import {
  motion,
  LazyMotion,
  domAnimation,
  MotionConfig,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import {
  ArrowDown,
  ExternalLink,
  Download,
  MapPin,
  Github,
  Linkedin,
  Mail,
  ChevronUp,
  TrendingUp,
  Clock,
  Users,
  ArrowRight,
  Calendar,
  Lightbulb,
  Target,
  BarChart3
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// -------------------- Animation presets (smooth & consistent) --------------------
const isMobile = window.innerWidth <= 768;

const viewportDefault = {
  once: true,
  amount: isMobile ? 0.3 : 0.5,  // Trigger animation when 30% visible on mobile, 50% on desktop
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = (stagger = 0.08, delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});

const staggerSettings = isMobile ? { stagger: 0.05, delayChildren: 0.05 } : { stagger: 0.08, delayChildren: 0.1 };

// -------------------- Content (unchanged) --------------------
const valueCards = [
  {
    title: "Strategic Vision",
    icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
    desc: "Build roadmaps that anticipate market shifts, align with goals, and drive category leadership and growth."
  },
  {
    title: "Data-Driven Execution",
    icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
    desc: "Leverage analytics and experimentation to prioritize features, measure outcomes, and maximize ROI."
  },
  {
    title: "Cross-Functional Leadership",
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    desc: "Align engineering, design, and business teams in delivering complex and high-impact products."
  },
  {
    title: "User Obsession",
    icon: <Target className="w-6 h-6 text-indigo-600" />,
    desc: "Turn user insights into scalable solutions that boost adoption, retention, and revenue."
  }
];


const posts = [
  {
    id: '1',
    title: 'From Engineer to TPM: Influencing Without Authority',
    excerpt: 'Aligned cross-functional teams to deliver AI/edge products at 500+ sites, building trust and driving execution without formal authority.',
    image: '/assets/blogs/6.png',
    category: 'leadership',
    date: '2025-08-06',
    readTime: '5 min read',
    tags: ['Career', 'TPM', 'Leadership']
  },
  {
    id: '2',
    title: 'Feature Prioritization in Complex Technical Products',
    excerpt: 'Cut prioritization time 40% by using RICE, MoSCoW, and Productboard across teams, accelerating AI product delivery and decisions.',
    image: '/assets/blogs/2.png',
    category: 'product-strategy',
    date: '2025-02-02',
    readTime: '5 min read',
    tags: ['Prioritization', 'AI Products', 'TPM']
  },
  {
    id: '3',
    title: 'Stakeholder Management for TPMs – From Chaos to Clarity',
    excerpt: 'Unified firmware, DevOps, and business teams into one roadmap, boosting delivery speed and cross-team trust for global rollouts.',
    image: '/assets/blogs/7.png',
    category: 'leadership',
    date: '2025-07-17',
    readTime: '6 min read',
    tags: ['Stakeholders', 'TPM', 'Execution']
  }
];

const caseStudies = [
  {
    id: '1',
    title: "Redesigned Gate Report for Real-Time Edge-Based Object Detection",
    subtitle: 'Edge-powered detection for faster, leaner event reporting',
    category: 'ai-ml',
    description: 'Led product strategy to move Evercam’s Gate Report from cloud to edge, speeding up performance, cutting bandwidth, and boosting revenue.',
    duration: '6 months',
    team: '14',
    impact: ['350% MRR Growth', '94% Lower Data Usage', '71pt NPS Boost'],
    tags: ['Edge AI', 'System Design', 'YOLOv5', 'RabbitMQ', 'OTA Deployment'],
    image:  '/assets/case-studies/gate-report.png',
    link: '/case-studies/1'
  },
  {
    id: "4",
    title: "Designing a Scalable AI-Driven  API Platform",
    subtitle: "Product Design, System Design, AI/Edge Architecture",
    category: 'api',
    description: "Unified APIs for AI video tasks like detection, FaceNet-based subclassification, SAM segmentation, LaMa inpainting, and motion tracking.",
    duration: "6 months",
    team: "5",
    impact: ["Improved gate detection accuracy from 65% to 96%", "reduced processing time from 2 mins to 5 secs", "improved client retention by 22%"],
    tags: ["Edge AI", "Object Detection", "Jetson Orin", "React", "Node.js", "Postgres", "MQTT"],
  image:  '/assets/case-studies/video-intelligence-api.png',
  link: '/case-studies/4'
  },
  {
    id: '3',
    title: 'Real-Time Edge Fleet Observability: From Blind Spots to Instant Insights',
    subtitle: 'Fleet-wide observability to boost reliability and uptime',
    category: 'infra',
    description: "Delivered real-time observability with Grafana and OTA updates for Evercam’s edge fleet, reducing failures, support costs, and boosting NPS.",
    duration: '4 months',
    team: '7',
    impact: ['75% fewer device failures', '80% fewer site visits', '+35% NPS increase'],
    tags: ['Observability', 'Prometheus', 'Grafana', 'OTA Deployment', 'Edge Devices', 'DevOps', 'TPM'],
    image:  '/assets/case-studies/edge-monitoring-platform.png',
    link: '/case-studies/3'
  }
];

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

  // Show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll if coming from a route with state.scrollTarget
  useEffect(() => {
    if ((location.state as any)?.scrollTarget) {
      const targetId = (location.state as any).scrollTarget as string;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Double rAF to ensure layout is ready before smooth scroll (prevents jank)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          });
        });
      }

      // Clear state so it doesn't scroll again
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, navigate]);

  // Scroll if URL contains a hash (#blogs, #about, etc.)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        requestAnimationFrame(() => {
          (element as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, [location]);

  const experiences = [
      {
      role: "Technical Product Manager",
      company: "Softtek",
      period: "September 2025 - Present",
      description:
        "Leading post-merger product integration and roadmap with First Advantage <> Sterling, aligning teams to deliver scalable solutions.",
        metrics: [
          "Leading product discovery and roadmap planning",
          "Facilitating cross-team collaboration and alignment",
          "Defining strategy for seamless product integration",
          "Ensuring scalable architecture and smooth migration",
        ],
      location: "Bengaluru, India",
    },
    {
      role: 'Technical Product Manager',
      company: 'Evercam',
      period: 'March 2024 – July 2025',
      description: "Led AI and edge product strategy from concept to scale, reaching 500+ global sites and reducing operational overhead.",
      metrics: [
        '60% reduction in manual reporting',
        '70% faster incident response',
        '1200+ edge deployments (up from 150)',
        '35% less on-site support'
      ],
      location: 'Dublin, Ireland'
    },
    {
      role: 'Product Owner (APM-Equivalent)',
      company: 'Evercam',
      period: 'July 2022 – March 2024',
      description: 'Drove ML and CV product strategy, delivering real-time Jetson deployments and cutting model training time by 50%.',
      metrics: [
        'led OTA deployment for Gate report on 100+ sites',
        '980K+ frames labeled at 96% accuracy',
        '92% model performance, 50% faster training',
        'Stable ML releases with rollback & alerting'
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
    { name: 'Certified Scrum Master (CSM)', provider: 'Scrum Alliance', year: '2023', link: 'https://certification.scrumalliance.org/accounts/1767537-dhairya-sharma/certifications/2096385-csm' },
    { name: 'Atlassian Agile Project Management Professional Certificate', provider: 'Atlassian', year: '2022', link: 'https://www.linkedin.com/learning/certificates/25517d85a79ff68e9823461e0354ef5de8cfcaf012ecb817bf41edc6eec1c569?trk=share_certificate' },
    { name: 'Agile Software Development', provider: 'CompTIA CEU', year: '2022', link: 'https://www.linkedin.com/learning/certificates/5a956e1fceadd4cb29a060438dcf6fe371faee172a08bc269f18e95bcefad46a?trk=share_certificate' },
    { name: 'Product Roadmap', provider: 'PMI CEU', year: '2023', link: 'https://www.linkedin.com/learning/certificates/a533051894e6362f155eef251924989c292112deff070956b165ca76cb1387a8?trk=share_certificate' },
    { name: 'Data-Driven Product Management', provider: 'NASBA CEU', year: '2024', link: 'https://www.linkedin.com/learning/certificates/158ce664cb5b7c3feba879a93300641e63d58dca6e71786f3b1bf84656e5a29c?trk=share_certificate' }
  ];

  const testimonials = [
    {
      quote: "Dhairya turned our product vision into a scalable edge solution. His leadership on edge deployments boosted compliance, cut manual work, and delivered real business impact.",
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

  const prefersReduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="min-h-screen"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeIn}
          style={{ willChange: 'opacity' }}
        >

          {/* Hero Section */}
          <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-12"
          >
            <div className="max-w-4xl w-full mx-auto text-center">
              {/* Intro */}
              <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
              Dhairya
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-2 font-semibold">
            Technical Product Manager & Strategy Leader
          </h2>

          <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed mb-6">
            Leading global teams to turn vision into scalable, data-driven products with measurable impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              Explore My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 hover:scale-105 transform transition duration-300"
            >
              Let&apos;s Connect
            </Link>
            <a
              href="/Dhairya_sharma_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-400 text-gray-600 font-medium hover:bg-gray-50 hover:scale-105 transform transition duration-300"
            >
              Resume
            </a>
          </div>
        </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center items-center gap-6 mt-8"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                style={{ willChange: 'transform, opacity' }}
              >
                <a
                  href="https://www.linkedin.com/in/dhairya-sharma-5484231a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transition-transform transform-gpu hover:scale-110"
                >
                  <Linkedin size={26} />
                </a>
                <a
                  href="mailto:dhairyasharma008@gmail.com"
                  className="text-gray-700 hover:text-red-600 transition-transform transform-gpu hover:scale-110"
                >
                  <Mail size={26} />
                </a>
              </motion.div>
            </div>

            {/* Scroll Down Section */}
            <div className="absolute bottom-6 w-full flex flex-col items-center cursor-pointer" onClick={scrollToAbout}>
              {/* Bouncing Arrow */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 0.9,
                    ease: "easeInOut",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                <ArrowDown size={40} className="text-gray-700 hover:text-blue-700 transition-colors" />
              </motion.div>

              {/* Static Scroll Down Text */}
              <span className="mt-2 text-gray-500 text-sm font-medium tracking-wide">
                Scroll Down
              </span>
            </div>

          </section>

          <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Heading */}
              <motion.div
                className="text-center mb-16"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
                style={{ willChange: 'transform, opacity' }}
              >
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h2>
                <p className="text-lg text-gray-500">
                  Engineering roots, product leadership, and scaling global impact.
                </p>
              </motion.div>

              {/* Main Section */}
              <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-stretch">
              {/* Left Content */}
              <motion.div
                className="lg:w-1/2 text-gray-700 text-lg space-y-6 text-justify leading-relaxed flex flex-col justify-between h-full"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
                style={{ willChange: 'transform, opacity' }}
              >
                <p>
                  I'm <strong>Dhairya Sharma</strong>, an engineer turned Technical Product Manager with 4+ years of experience building and scaling API integrations, cloud, and <strong>AI/ML</strong> products. I drive global enterprise adoption by turning technical innovation into measurable business impact through strategy, scalable design, and data-driven decisions.
                </p>

                <p>
                  At <a href="https://www.softtek.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"><strong>Softtek</strong></a>, I lead post-merger end-to-end product integration for <a href="https://fadv.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"><strong>First Advantage</strong></a>, focusing on <strong>architecture alignment</strong>, <strong>cross-team collaboration</strong>, <strong>migration strategy</strong>, <strong>business continuity planning</strong>, and <strong>scalable technology adoption</strong>.
                </p>

                <p>
                  Previously at <a href="https://www.evercam.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"><strong>Evercam</strong></a>, I drove end-to-end SaaS product strategy, reducing manual reporting by <strong>60%</strong>, improving incident response by <strong>70%</strong>, and scaling deployments from 150 to <strong>1200+ sites</strong>. I partnered with engineering to deliver <strong>real-time Jetson deployments</strong>, OTA updates, and high-availability ML pipelines trusted globally.
                </p>

                <p>
                  I thrive at the intersection of <strong>technology, strategy, and user experience</strong>, turning complex challenges into global-scale solutions through <strong>deep technical understanding</strong>, <strong>outcome-driven roadmaps</strong>, and <strong>business insight</strong>.
                </p>
              </motion.div>

              {/* Right Value Cards */}
              <motion.div
                className="lg:w-1/2 grid gap-4 h-full"
                variants={staggerContainer(0.12, 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
              >
                {valueCards.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between h-full cursor-pointer transition-all duration-300 transform-gpu hover:shadow-lg hover:scale-105"
                    variants={fadeInUp}
                    transition={{ delay: 0.05 + index * 0.05 }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-base semibold leading-relaxed mt-3 text-left">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

              {/* Stats Section */}
              <motion.div
                className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-8 text-center place-items-center"
                variants={staggerContainer(0.06, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
              >
                {[
                  { value: "4+", label: "Years Experience" },
                  { value: "7+", label: "Products" },
                  { value: "10+", label: "Industries Served" },
                  { value: "15+", label: "Projects" },
                  { value: "1200+", label: "Edge Deployments" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl py-6 shadow-sm hover:shadow-lg transition w-full"
                    variants={fadeInUp}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="text-indigo-600 text-4xl font-extrabold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="py-20 pt-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Product Experience</h2>
              </motion.div>

              <div className="relative">
                {/* Horizontal timeline line */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-blue-500 z-0 shadow-[0_0_20px_4px_rgba(59,130,246,0.6)]"></div>

                {/* Keep grid and gap as-is */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 items-stretch">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="relative flex flex-col items-center"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportDefault}
                      transition={{ delay: index * 0.05 }}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      {/* Dot above card */}
                      <div className="hidden md:flex absolute top-[24px] z-10">
                        <div
                          className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"
                          style={{ boxShadow: '0 0 0 rgba(59,130,246,0.4)' }}
                        ></div>
                      </div>

                      {/* Card */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="mt-[50px] w-full h-full bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 flex flex-col justify-between"
                      >
                        {/* Top content */}
                        <div>
                          <div className="text-sm text-blue-600 font-semibold mb-2">{exp.period}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.role}</h3>

                          <div className="text-gray-600 mb-2 flex items-center gap-1">
                            <span>{exp.company}</span>
                          </div>

                          <div className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>

                          <p className="text-gray-600 text-sm mb-4 text-justify leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Metrics pinned bottom */}
                        <div className="space-y-1 mt-auto">
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

          {/* Case Studies */}
          <section id="case-study" className="py-20 pt-16 pb-16 bg-white-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-4xl font-semibold mb-20 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                Featured Product Work
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer(0.1, 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {caseStudies.length > 0 ? (
                  caseStudies.map((study) => (
                    <motion.div
                      key={study.id}
                      variants={fadeInUp}
                      className="cursor-pointer"
                      onClick={() => (window.location.href = study.link)}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform-gpu hover:scale-105 h-[570px] flex flex-col">
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="p-6 flex flex-col flex-grow justify-between">
                          <div className="flex flex-col gap-1">
                            <h3 className="text/base md:text-base font-bold text-gray-900 mb-0 group-hover:text-blue-600 transition-colors">
                              {study.title}
                            </h3>
                            <p className="text-xs text-blue-600 font-semibold mb-2">{study.subtitle}</p>
                            <p className="text-gray-600 text-sm mb-4 text-justify leading-relaxed">{study.description}</p>

                            <div className="flex flex-col gap-1 mb-2 text-xs">
                              {study.impact.map((point, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <TrendingUp className="w-3 h-3 text-green-500" />
                                  <span className="text-green-600 font-semibold">{point}</span>
                                </div>
                              ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-2">
                              <div className="flex items-center gap-2">
                                <Clock className="w-3 h-3 text-gray-500" />
                                <span className="font-medium">Duration:</span> {study.duration}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-3 h-3 text-gray-500" />
                                <span className="font-medium">Team:</span> {study.team}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-2">
                              {study.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                              {study.tags.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  +{study.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mt-auto flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                            <span className="text-sm font-semibold mr-2">View Detailed Case Study</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 col-span-full">No case studies found.</p>
                )}
              </motion.div>

              {/* CTA Button */}
              <div className="mt-10 text-center">
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg transition-colors transition-transform duration-200 hover:bg-blue-700 hover:scale-105 transform-gpu"
                >
                  View All Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Blogs */}
          <section id="blogs" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-4xl font-semibold mb-20 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                Product Leadership Insights
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
                variants={staggerContainer(0.1, 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={fadeInUp}
                    className="cursor-pointer h-full"
                    onClick={() => (window.location.href = `/blogs/${post.id}`)}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform-gpu hover:scale-105 flex flex-col h-[485px]">
                      {/* Image */}
                      <div className="relative overflow-hidden h-48 flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex flex-col gap-1 flex-grow">
                          <h3 className="text-base font-bold text-gray-900 mb-0 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-xs text-blue-600 font-semibold mb-2 capitalize">
                            {post.category.replace('-', ' ')}
                          </p>
                          <p className="text-gray-600 text-sm text-justify mb-2 line-clamp-4">
                            {post.excerpt}
                          </p>

                          <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3 h-3 text-gray-500" />
                              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3 h-3 text-gray-500" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-0">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                +{post.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Read More pinned to bottom */}
                        <div className="mt-auto flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                          <span className="text-sm font-semibold mr-2">Read More</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <div className="mt-10 text-center">
                <a
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg 
                  hover:bg-blue-700 hover:scale-105 transform-gpu transition duration-200 ease-in-out"
                >
                  View All Blogs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </section>


          <section className="py-20 bg-white-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
                style={{ willChange: 'transform, opacity' }}
                layout
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Tools & Platforms</h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6"
                variants={staggerContainer(0.05, 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="group flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer transform-gpu"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    style={{ willChange: 'transform, opacity' }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="h-10 w-10 mb-2 object-contain"
                      loading="lazy"
                    />
                    <div className="text-sm font-medium text-gray-700 text-center">
                      {tool.name}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Endorsements</h2>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer(0.08, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: 0.05 + index * 0.05 }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="group bg-white shadow-md p-6 rounded-xl flex flex-col justify-between h-full cursor-pointer hover:shadow-xl transform-gpu hover:scale-105 transition-all duration-300">
                      <div className="flex-grow">
                        <div className="text-gray-700 mb-6 italic">"{testimonial.quote}"</div>
                      </div>

                      <div className="flex items-center mt-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Certifications */}
          <section className="pt-16 pb-16 bg-white-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            </div>

            <div className="bg-white h-[330px] rounded-2xl shadow-xl ring-1 ring-gray-200 overflow-hidden">
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
                      <tr key={index} className="hover:bg-gray-50 transition">
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportDefault}
              >
                <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
                  Bridging ambition and execution through product leadership
                </h2>
                <p className="text-base text-gray-600 mb-10 max-w-xl mx-auto">
                  Let’s connect if you’re pushing tech to new frontiers.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Link
                    to="/contact"
                    className="min-w-[150px] text-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-200 hover:scale-105 text-sm font-medium shadow transform-gpu"
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
      </MotionConfig>
    </LazyMotion>
  );
};

export default Home;
