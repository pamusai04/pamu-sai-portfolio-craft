import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload, FaBars, FaTimes, FaHeart, FaReact, FaJs, FaNode, FaHtml5, FaPython, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

// Import images
import profileImage from '../assets/profile-image.jpg';
import pamuSaiLogo from '../assets/pamu-sai-logo.png';
import projectEcommerce from '../assets/project-ecommerce.jpg';
import projectRestaurant from '../assets/project-restaurant.jpg';
import projectFitness from '../assets/project-fitness.jpg';
import projectSocial from '../assets/project-social.jpg';
import projectBanking from '../assets/project-banking.jpg';
import projectRealEstate from '../assets/project-realestate.jpg';
import projectLMS from '../assets/project-lms.jpg';
import projectMusic from '../assets/project-music.jpg';
import projectTasks from '../assets/project-tasks.jpg';
import projectWeather from '../assets/project-weather.jpg';

const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const controls = useAnimation();

  // Animated text for hero section
  const animatedText = "I am a Web Developer...!";
  
  const skills = [
    { name: 'React.js', icon: FaReact },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Node.js', icon: FaNode },
    { name: 'HTML5 & CSS3', icon: FaHtml5 },
    { name: 'Python', icon: FaPython },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Git & GitHub', icon: FaGitAlt },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'RESTful APIs', icon: FaDatabase },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Docker', icon: FaDocker }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      image: projectEcommerce,
      description: 'Full-stack e-commerce solution with payment integration',
      link: 'https://github.com/pamu-sai/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Restaurant Website',
      image: projectRestaurant,
      description: 'Elegant restaurant website with online reservation system',
      link: 'https://github.com/pamu-sai/restaurant-website'
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      image: projectFitness,
      description: 'Comprehensive fitness tracking dashboard with analytics',
      link: 'https://github.com/pamu-sai/fitness-tracker'
    },
    {
      id: 4,
      title: 'Social Media Manager',
      image: projectSocial,
      description: 'Social media management platform with scheduling features',
      link: 'https://github.com/pamu-sai/social-media-app'
    },
    {
      id: 5,
      title: 'Banking App',
      image: projectBanking,
      description: 'Secure banking application with transaction management',
      link: 'https://github.com/pamu-sai/banking-app'
    },
    {
      id: 6,
      title: 'Real Estate Portal',
      image: projectRealEstate,
      description: 'Property listing platform with advanced search filters',
      link: 'https://github.com/pamu-sai/real-estate-portal'
    },
    {
      id: 7,
      title: 'Learning Management System',
      image: projectLMS,
      description: 'Educational platform with course management and progress tracking',
      link: 'https://github.com/pamu-sai/learning-management-system'
    },
    {
      id: 8,
      title: 'Music Streaming App',
      image: projectMusic,
      description: 'Music streaming application with playlist management',
      link: 'https://github.com/pamu-sai/music-streaming-app'
    },
    {
      id: 9,
      title: 'Task Management Tool',
      image: projectTasks,
      description: 'Project management tool with team collaboration features',
      link: 'https://github.com/pamu-sai/task-management-tool'
    },
    {
      id: 10,
      title: 'Weather Forecast App',
      image: projectWeather,
      description: 'Weather application with detailed forecasts and maps',
      link: 'https://github.com/pamu-sai/weather-forecast-app'
    }
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleProjectClick = (projectLink: string) => {
    window.open(projectLink, '_blank');
  };

  const handleResumeClick = () => {
    navigate('/resume');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="cursor-pointer flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
            >
              <img src={pamuSaiLogo} alt="Pamu Sai Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-gradient">&lt;Pamu Sai&gt;</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              className="md:hidden py-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm Pamu Sai.
              </motion.h1>

              {/* Animated Text */}
              <div className="text-2xl md:text-3xl mb-4 h-12">
                <motion.div
                  className="flex"
                  initial="hidden"
                  animate="visible"
                >
                  {animatedText.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      className="text-primary font-semibold"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 2
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I am ready to work—let's achieve great results together.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  onClick={handleResumeClick}
                  className="gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover-scale flex items-center justify-center gap-2 shadow-elegant"
                >
                  <FaDownload />
                  View Resume
                </button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors animate-pulse-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.button>
              </motion.div>

              {/* Social Icons with Water Balloon Effect */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <motion.a
                  href="https://linkedin.com/in/pamu-sai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15 
                      }
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  />
                  <FaLinkedin className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
                
                <motion.a
                  href="https://github.com/pamu-sai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15 
                      }
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  />
                  <FaGithub className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
                
                <motion.a
                  href="mailto:pamusai04102003@gmail.com"
                  className="group w-14 h-14 flex items-center justify-center text-foreground rounded-full transition-all duration-500 border-2 border-primary/40 hover:border-primary relative overflow-hidden"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15 
                      }
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  />
                  <FaEnvelope className="text-xl z-10 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.img
                  src={profileImage}
                  alt="Pamu Sai"
                  className="w-80 h-80 object-cover rounded-full shadow-glow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are the technologies I work with to build amazing web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="group bg-background p-6 rounded-lg shadow-lg hover:shadow-elegant transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative mb-4 flex justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 relative overflow-visible"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-2xl text-primary group-hover:text-primary transition-colors duration-300" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 cursor-default group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="group-hover:opacity-0 transition-opacity duration-300">Featured Projects</span>
              <motion.span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                My Real Projects
              </motion.span>
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and projects I'm proud of
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-elegant transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleProjectClick(project.link)}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <HiOutlineExternalLink className="mx-auto mb-2 text-3xl" />
                      <p className="font-semibold">View Project</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to work together? Let's discuss your project and make it happen!
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.form
              onSubmit={handleFormSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full gradient-primary text-white py-3 rounded-lg font-semibold hover-scale disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-elegant"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <ClipLoader size={20} color="white" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Follow Me Section */}
      

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Handcrafted by <span className="text-primary font-medium">Pamu Sai</span> © 2024
            </p>
          </div>
        </div><section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Follow Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect with me on social media and let's stay in touch
            </p>
          </motion.div>

          <div className="flex justify-center gap-8">
            {/* LinkedIn Icon */}
            <motion.a
              href="https://linkedin.com/in/pamu-sai"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                <FaLinkedin className="text-3xl text-primary" />
              </div>
            </motion.a>

            {/* GitHub Icon */}
            <motion.a
              href="https://github.com/pamu-sai"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                <FaGithub className="text-3xl text-primary" />
              </div>
            </motion.a>

            {/* Email Icon */}
            <motion.a
              href="mailto:pai04102003@gmail.com"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                <FaEnvelope className="text-3xl text-primary" />
              </div>
            </motion.a>
          </div>

          {/* Contact Info */}
          <motion.div
            className="mt-8 text-center space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border hover:border-primary transition-colors">
                <FaEnvelope className="text-lg text-primary" />
                <a
                  href="mailto:pai04102003@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  pai04102003@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border hover:border-primary transition-colors">
                <FaPhone className="text-lg text-primary" />
                <a
                  href="tel:+916880489038"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  +91 6880489038
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </footer>
    </div>
  );
};

export default Index;
