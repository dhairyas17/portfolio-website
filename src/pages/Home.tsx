import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Download, MapPin, Calendar, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      role: 'Technical Product Manager',
      company: 'Evercam',
      period: '2023 - Present',
      description: 'Leading AI platform delivery across 100+ global sites',
      metrics: ['60% reduction in manual reporting', '90% faster incident response', '100+ global sites managed'],
      location: 'San Francisco, CA'
    },
    {
      role: 'Senior Product Manager',
      company: 'TechCorp',
      period: '2021 - 2023',
      description: 'Scaled ML platform serving millions of users daily',
      metrics: ['5M+ daily active users', '40% increase in engagement', '99.9% platform uptime'],
      location: 'New York, NY'
    },
    {
      role: 'Product Manager',
      company: 'StartupXYZ',
      period: '2019 - 2021',
      description: 'Built product from 0-1, achieving product-market fit',
      metrics: ['0 to 100K users in 18 months', '25% monthly growth rate', '$2M ARR achieved'],
      location: 'Austin, TX'
    }
  ];

  const tools = [
    { name: 'Jira', icon: '🔷' },
    { name: 'Confluence', icon: '🌊' },
    { name: 'Notion', icon: '📝' },
    { name: 'Google Analytics', icon: '📊' },
    { name: 'Mixpanel', icon: '📈' },
    { name: 'Amplitude', icon: '⚡' },
    { name: 'Aha!', icon: '💡' },
    { name: 'Productboard', icon: '📋' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Miro', icon: '🖼️' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Postman', icon: '📮' },
    { name: 'Airflow', icon: '🌪️' },
    { name: 'Grafana', icon: '📊' },
    { name: 'Prometheus', icon: '🔥' },
    { name: 'GitLab', icon: '🦊' }
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
      quote: "Dhairya balances AI innovation with real-world product delivery exceptionally well. I am very very fond of hima nd recommends",
      name: "Dhia",
      role: "AI Team Lead – Evercam",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "His strategic thinking and execution capabilities are unmatched in the product space.",
      name: "Sarah Chen",
      role: "VP Engineering – TechCorp",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "Dhairya transformed our product vision into a scalable reality that users love.",
      name: "Michael Rodriguez",
      role: "CEO – StartupXYZ",
      avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
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
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-5">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Dhairya
              </span>
            </h1>
            <h2 className="text-2xl md:text-2xl text-gray-700 mb-9">
              Product Manger & Strategy Leader
            </h2>
            <p className="text-xl text-gray-400 mb-2 max-w-6xl mx-auto">
              I bridge business goals and technical execution, delivering scalable products that solve real-world problems.
            </p>
            <p className="text-xl text-gray-400 mb-8 max-w-6xl mx-auto">
              Driven by clarity, data, and collaboration, I lead cross-functional teams from product vision to launch.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold"
            >
              Let's Connect
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 font-semibold"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="animate-bounce cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2"
            onClick={scrollToAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ArrowDown size={32} className="text-gray-400" />
          </motion.div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* About Me Text */}
            <motion.div
              className="flex-1 text-lg text-gray-600 leading-relaxed"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              My journey began in software engineering, where I discovered my passion for bridging the gap between technology and user needs. This led me to transition into product management, where I could combine technical expertise with strategic thinking. <br /><br />
              Over the past 8 years, I've scaled products from startup concepts to enterprise solutions, leading cross-functional teams and driving innovation in AI, machine learning, and distributed systems. <br /><br />
              I specialize in building products that not only solve complex technical challenges but also deliver measurable business impact and exceptional user experiences. <br /><br />
            </motion.div>

            {/* Experience Metrics */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-2 gap-8 flex-1"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">Global Sites</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">5M+</div>
                <div className="text-gray-600">Daily Users</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">4</div>
                <div className="text-gray-600">Cities Worked</div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">My journey in product leadership</p>
          </motion.div>
          <div className="relative">
            {/* Horizontal timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-blue-600 z-0"></div>

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
                    {/* Dot - perfectly centered on the timeline line */}
                    <div className="hidden md:flex absolute top-[24px] z-10">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    {/* Card - appears slightly below the dot */}
                    <div className="mt-[48px] w-3/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-sm text-blue-600 font-semibold mb-2">{exp.period}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <div className="text-gray-600 mb-2 flex items-center gap-1">
                        <span>{exp.company}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{exp.description}</p>
                      <div className="space-y-1">
                        {exp.metrics.map((metric, idx) => (
                          <div key={idx} className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Tools & Platforms */}
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
            <p className="text-xl text-gray-600">Technologies I work with daily</p>
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
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <div className="text-sm font-medium text-gray-700 text-center">
                  {tool.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-xl text-gray-600">Continuous learning and professional development</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Certification
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Provider
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {certifications.map((cert, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {cert.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {cert.provider}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {cert.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a
                          href={cert.link}
                          className="text-blue-600 hover:text-blue-900 transition-colors inline-flex items-center gap-1"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
            <p className="text-xl text-gray-600">What colleagues say about working with me</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg flex flex-col justify-between h-full"
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

    </motion.div>
  );
};

export default Home;