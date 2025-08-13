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
  ChevronUp,
  TrendingUp,
  Clock,
  Users,
  ArrowRight,
  Calendar,
  Lightbulb,
  Target
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const valueCards = [
  {
    title: "Strategic Vision",
    icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
    desc: "Architect industry-defining product roadmaps that outpace market trends, align with business ambition, and create category leadership with measurable growth."
  },
  {
    title: "Cross-Functional Leadership",
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    desc: "Bridge engineering, design, and business teams to deliver complex products at speed, with uncompromising quality, across global markets.."
  },
  {
    title: "User Obsession",
    icon: <Target className="w-6 h-6 text-indigo-600" />,
    desc: "Translate deep user insights into intuitive, scalable solutions that drive adoption, strengthen retention, and accelerate revenue growth."
  }
];

const posts = [
  {
    id: '1',
    title: 'From Engineer to TPM: Influencing Without Authority',
    excerpt: 'Aligned engineering, design, and ops teams to deliver AI/edge products to 500+ sites, without formal authority. Built trust, drove alignment, and enabled execution through clear communication.',
    image: '/assets/blogs/6.png',
    category: 'leadership',
    date: '2025-08-06',
    readTime: '5 min read',
    tags: ['Career', 'TPM', 'Leadership']
  },
  {
    id: '2',
    title: 'Feature Prioritization in Complex Technical Products',
    excerpt: 'Cut prioritization cycle time by 40% by integrating RICE, MoSCoW, and Productboard across firmware, DevOps, and UX teams, accelerating AI product delivery and scaling decision-making efficiency.',
    image: '/assets/blogs/2.png',
    category: 'product-strategy',
    date: '2025-02-02',
    readTime: '5 min read',
    tags: ['Prioritization', 'AI Products', 'TPM']
  },
  {
    id: '3',
    title: 'Stakeholder Management for TPMs – From Chaos to Clarity',
    excerpt: 'Aligned firmware, DevOps, data science, and business teams into a single execution roadmap, improving delivery speed, reducing rework, and increasing cross-team trust for global AI/edge rollouts.',
    image: '/assets/blogs/7.png',
    category: 'leadership',
    date: '2025-07-17',
    readTime: '6 min read',
    tags: ['Stakeholders', 'TPM', 'Execution']
  }
] 

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
    id: '2',
    title: "Redesigned Evercam’s Edge Architecture to Scale Globally with Zero-Dev Onboarding",
    subtitle: 'Unified hardware, firmware, and configs for global rollout.',
    category: 'infra',
    description: 'Drove org-wide shift from camera to kit-based system and standardized edge deployments, enabling non-engineers to manage 1,200+ devices.',
    duration: '4 months',
    team: '10',
    impact: ['Reduced deployment time by 70%', 'Standardized 1,200+ kits, enabling 500+ site scalability.', 'Empowered non-devs to manage edge ops'],
    tags: ['Edge Infrastructure', 'Ansible', 'AWX', 'OTA', 'Kit-Based Architecture', 'TPM', 'DevOps'],
    image:  '/assets/case-studies/standardizing-edge.png',
    link: '/case-studies/2'
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll if coming from a route with state.scrollTarget
  useEffect(() => {
    if (location.state?.scrollTarget) {
      const targetId = location.state.scrollTarget;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
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
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50); // wait for DOM to render
      }
    }
  }, [location]);

  const experiences = [
    {
      role: 'Computer Vision Engineer - R&D',
      company: 'Evercam',
      period: 'May 2021 – July 2022',
      description: 'Built CV pipelines that improved measurement accuracy and developed PoCs for drone and 360° site walkthroughs ',
      metrics: [
        'Improved measuring accuracy by 79%',
        'NPS score increased by 55%',
        'DroneView & 360° PoCs deployed to production',
        'Adopted by enterprise clients across US, AU & EU'
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

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Hero Section */}
      
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

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-1 font-semibold">
            Product Manager & Strategy Leader
          </h2>

          <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed mb-8">
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
              href="/resume.pdf"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
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
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="animate-bounce absolute bottom-10 cursor-pointer"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ArrowDown size={40} className="text-gray-700 hover:text-blue-700 transition-colors" />
      </motion.div>
    </section>
    <section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      className="text-center mb-16"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
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
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          I'm Dhairya Sharma, an engineer turned Product Manager with 4+ years building and scaling AI/ML, edge computing, and cloud infrastructure products. Delivered enterprise adoption in <strong>25+ countries</strong> and <strong>1200+ site deployments</strong> through scalable system design and data-driven strategy.
        </p>
        <p>
          At Evercam, owned end-to-end SaaS product strategy for global enterprises, cutting manual work <strong>60%</strong>, ensuring SLA compliance, and aligning teams across the US, EU, and APAC. Trusted by leaders in construction and tech to deliver high-availability, mission-critical solutions.
        </p>
        <p>
        I operate at the intersection of technology, strategy, and user experience, turning complex problems into impactful, global-scale products. With a focus on measurable outcomes, rapid iteration, and customer insight. I lead solutions that drive adoption, set technical standards, and create lasting business value.
        </p>


      </motion.div>

      {/* Right Value Cards */}
      <motion.div
        className="lg:w-1/2 grid grid-rows-3 gap-9 h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {valueCards.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition h-full"
            whileHover={{ scale: 1.02 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <h4 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Stats Section */}
    <motion.div
      className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-8 text-center place-items-center"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {[
        { value: "4+", label: "Years Experience" },
        { value: "10+", label: "Products" },
        { value: "25+", label: "Countries" },
        { value: "50+", label: "Global Teams" },
        { value: "1200+", label: "Deployments" }
      ].map((stat, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-2xl py-6 shadow-sm hover:shadow-lg transition w-full"
        >
          <div className="text-indigo-600 text-4xl font-extrabold">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  </div>
</section>



      {/* Experience Timeline */}
      <section className="py-20 pt-16 bg-gray-50">
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


            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
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
      <section className="py-20 bg-white-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      layout
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Tools & Platforms</h2>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          className="group flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer will-change-transform will-change-opacity"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          layout
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Endorsements</h2>
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
            




      <section id="case-study" className="py-20 pt-16 pb-16 bg-white-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-semibold mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Product Case Studies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.length > 0 ? (
              caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="cursor-pointer"
                  onClick={() => window.location.href = study.link}
                >
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 h-[530px] flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base font-bold text-gray-900 mb-0 group-hover:text-blue-600 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-xs text-blue-600 font-semibold mb-2">{study.subtitle}</p>
                        <p className="text-gray-600 text-sm text-justify mb-2 line-clamp-3">{study.description}</p>

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
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
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
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
        <a
          href="/case-studies"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg transition-colors transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
        >
          View All Case Studies
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
        </div>
      </section>

      {/* Testimonials */}


      <section id="blogs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      className="text-3xl font-semibold mb-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Product Leadership Insights
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
  {posts.map((post, index) => (
    <motion.div
      key={post.id}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      className="cursor-pointer h-full"
      onClick={() => window.location.href = `/blogs/${post.id}`}
    >
      <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 flex flex-col h-[500px]">
        
        {/* Image */}
        <div className="relative overflow-hidden h-48 flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
            <p className="text-gray-600 text-sm text-justify mb-5 line-clamp-4">
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

            <div className="flex flex-wrap gap-2 mb-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
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
</div>

    {/* CTA Button */}
    <div className="mt-10 text-center">
      <a
        href="/blog"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg 
                  hover:bg-blue-700 hover:scale-105 transform transition duration-200 ease-in-out"
      >
        View All Blogs
        <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </div>

        </div>
      </section>


      {/* Certifications */}
      <section className="pt-16 pb-16 bg-white-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
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
            Let’s connect if you’re pushing tech to new frontiers.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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