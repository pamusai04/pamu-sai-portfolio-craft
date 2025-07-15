import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1KQCWZynuMI1uXPxS-n2GOxmN3UrarvzU/view?usp=drive_link', '_blank');
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
              className="text-4xl font-bold mb-2 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              SAI PAMU
            </motion.h1>
            <motion.p 
              className="text-xl mb-4 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Portfolio
            </motion.p>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaGithub />
                <span>Github</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>pamusai04102003@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+91-7780489038</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin />
                <span>linkedin.com</span>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                EDUCATION
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-4 font-semibold">Degree</th>
                      <th className="text-left py-2 px-4 font-semibold">Specialization</th>
                      <th className="text-left py-2 px-4 font-semibold">Institute</th>
                      <th className="text-left py-2 px-4 font-semibold">Year</th>
                      <th className="text-left py-2 px-4 font-semibold">CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 px-4">B.Tech</td>
                      <td className="py-2 px-4">Computer Science & Engineering</td>
                      <td className="py-2 px-4">BESTIU</td>
                      <td className="py-2 px-4">2021-2025</td>
                      <td className="py-2 px-4">8.24</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-4">Intermediate(XII)</td>
                      <td className="py-2 px-4">Physics, Chemistry, & Mathematics</td>
                      <td className="py-2 px-4">A.P Model JR college</td>
                      <td className="py-2 px-4">2021</td>
                      <td className="py-2 px-4">7.21</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-4">Secondary(X)</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Z.P High School</td>
                      <td className="py-2 px-4">2019</td>
                      <td className="py-2 px-4">8.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Technical Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">• Programming Languages:</span>
                  <span className="text-muted-foreground ml-2">C++, Java, JavaScript</span>
                </div>
                <div>
                  <span className="font-semibold">• Frontend Technologies:</span>
                  <span className="text-muted-foreground ml-2">HTML, CSS, Tailwind CSS, ReactJS, JavaScript, Bootstrap, TypeScript</span>
                </div>
                <div>
                  <span className="font-semibold">• Backend Technologies:</span>
                  <span className="text-muted-foreground ml-2">Node.js, Express.js, RESTful APIs</span>
                </div>
                <div>
                  <span className="font-semibold">• Databases & Tools:</span>
                  <span className="text-muted-foreground ml-2">SQL, MongoDB, Git (Version Control)</span>
                </div>
                <div>
                  <span className="font-semibold">• Data Structures & Algorithms:</span>
                  <span className="text-muted-foreground ml-2">Strong understanding and implementation in C++</span>
                </div>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                PROJECTS
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">• Ride-Sharing (Full-Stack Web Application) [College Project]</h3>
                  <ul className="text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>◦ Created a multi-role platform (User/Driver/Admin) with MySQL database for managing ride bookings and approvals.</li>
                    <li>◦ Implemented driver onboarding with document uploads (license, vehicle details) and admin approval workflow.</li>
                    <li>◦ Developed user features: ride search, booking system, and driver matching based on location/city.</li>
                    <li>◦ Built secure authentication for all roles with form validations (email, mobile, password strength)</li>
                    <li>◦ <span className="font-semibold">Tech Stack:</span> PHP, MySQL, JavaScript, Bootstrap, HTML/CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">• Social Media Application (Full-Stack Web Application) [Self Project]</h3>
                  <ul className="text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>◦ <span className="font-semibold">User Management:</span> Implemented secure authentication (JWT), registration, login, and password recovery.</li>
                    <li>◦ <span className="font-semibold">Post Interactions:</span> Developed CRUD operations for posts (create, edit, delete) and engagement features (likes, comments).</li>
                    <li>◦ <span className="font-semibold">Profile System:</span> Designed user profiles with customizable details and activity tracking.</li>
                    <li>◦ <span className="font-semibold">Backend Security:</span> Built a secure Node.js API with MongoDB for data storage, ensuring protected user operations.</li>
                    <li>◦ <span className="font-semibold">Tech Stack:</span> React.js, Node.js, Express, MongoDB, JWT, RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Work Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                WORK EXPERIENCE/INTERNSHIPS
              </h2>
              <div>
                <h3 className="text-xl font-semibold">• Web Developer Intern [GeoInfy Solutions]</h3>
                <p className="text-primary font-medium mb-2">Sep-Dec 2023</p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>◦ Developed interactive WebGIS applications using Leaflet.js and OpenLayers for geospatial data visualization.</li>
                  <li>◦ Built efficient geospatial data management systems with GeoJSON, MySQL, and PHP, for storage and dynamic display.</li>
                  <li>◦ Designed intuitive user interfaces with custom map controls and interactive layer toggles.</li>
                  <li>◦ <span className="font-semibold">Tech Stack:</span> JavaScript, HTML/CSS, Leaflet.js, GeoJSON, MySQL, PHP.</li>
                </ul>
              </div>
            </motion.section>

            {/* Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">
                ACHIEVEMENTS
              </h2>
              <div>
                <h3 className="text-xl font-semibold">• Solved 200+ Coding Problems with 90% Accuracy [Problem Solving]</h3>
                <ul className="text-muted-foreground mt-2 space-y-1 ml-4">
                  <li>◦ Practiced and solved over 200 coding problems on platforms like LeetCode, Code 360 by Coding Ninjas and GeeksforGeeks, focusing on Data Structures and Algorithm optimization.</li>
                  <li>◦ <span className="font-semibold">LeetCode:</span> SaiLeetCode</li>
                  <li>◦ <span className="font-semibold">GeeksforGeeks:</span> SaiGFG</li>
                  <li>◦ <span className="font-semibold">Code 360 by Coding Ninjas:</span> SaiCode360</li>
                </ul>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;