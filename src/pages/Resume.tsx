import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  const downloadResume = () => {
    alert('Resume download would start here. This is a demo.');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header 
        className="bg-card border-b border-border py-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
            >
              <FaArrowLeft />
              Back to Portfolio
            </button>
            <button
              onClick={downloadResume}
              className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold hover-scale flex items-center gap-2"
            >
              <FaDownload />
              Download PDF
            </button>
          </div>
        </div>
      </motion.header>

      {/* Resume Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="bg-gradient-primary text-white p-8">
            <motion.h1 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Pamu Sai
            </motion.h1>
            <motion.p 
              className="text-xl mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Web Developer
            </motion.p>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>pai04102003@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+91 6880489038</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin />
                <span>linkedin.com/in/pamu-sai</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub />
                <span>github.com/pamu-sai</span>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Professional Summary */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Full Stack Web Developer with expertise in modern web technologies including React.js, Node.js, and Python. 
                Experienced in building responsive, user-friendly applications with clean, maintainable code. 
                Strong problem-solving skills and commitment to delivering high-quality solutions that meet client requirements.
              </p>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-muted-foreground">React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Next.js, Responsive Design</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-muted-foreground">Node.js, Express.js, Python, RESTful APIs, Database Design</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Database</h3>
                  <p className="text-muted-foreground">MongoDB, Firebase, SQL</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools & Others</h3>
                  <p className="text-muted-foreground">Git, GitHub, Docker, VS Code, Figma</p>
                </div>
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                Projects & Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
                  <p className="text-primary font-medium">Full Stack Developer</p>
                  <ul className="text-muted-foreground mt-2 space-y-1">
                    <li>• Developed a complete e-commerce solution with payment integration</li>
                    <li>• Implemented user authentication and authorization system</li>
                    <li>• Created responsive UI with React.js and Tailwind CSS</li>
                    <li>• Built RESTful APIs using Node.js and Express.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Restaurant Management System</h3>
                  <p className="text-primary font-medium">Frontend Developer</p>
                  <ul className="text-muted-foreground mt-2 space-y-1">
                    <li>• Created elegant restaurant website with online reservation system</li>
                    <li>• Implemented real-time table booking functionality</li>
                    <li>• Optimized for mobile devices and cross-browser compatibility</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Social Media Manager</h3>
                  <p className="text-primary font-medium">Full Stack Developer</p>
                  <ul className="text-muted-foreground mt-2 space-y-1">
                    <li>• Built social media management platform with scheduling features</li>
                    <li>• Integrated multiple social media APIs</li>
                    <li>• Developed analytics dashboard for performance tracking</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                Education
              </h2>
              <div>
                <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
                <p className="text-primary font-medium">University Name</p>
                <p className="text-muted-foreground">2020 - 2024</p>
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                Certifications
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React.js Development Certification</li>
                <li>• Node.js Backend Development</li>
                <li>• MongoDB Database Design</li>
                <li>• Responsive Web Design</li>
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;