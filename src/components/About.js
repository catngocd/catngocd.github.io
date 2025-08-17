import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a love for clean code and creative solutions
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-card card">
              <h3 className="about-card-title">Who I Am</h3>
              <p>
                I'm a dedicated developer who believes in the power of technology 
                to solve real-world problems. With a background in both design and 
                development, I bridge the gap between aesthetics and functionality.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a 
                passion for creating digital experiences that not only look great 
                but also provide genuine value to users.
              </p>
            </div>

            <div className="about-card card">
              <h3 className="about-card-title">What I Do</h3>
              <p>
                I specialize in full-stack development, creating responsive web 
                applications, and building scalable systems. My expertise includes 
                modern JavaScript frameworks, cloud technologies, and API development.
              </p>
              <p>
                I'm always exploring new technologies and methodologies to stay 
                at the forefront of web development trends.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="about-image-container">
              <div className="about-image-placeholder">
                <span className="placeholder-text">Your Photo</span>
              </div>
              <div className="image-decoration"></div>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to work together?</h3>
            <p>Let's discuss your project and bring your ideas to life</p>
            <a href="#contact" className="btn btn-primary">Start a Conversation</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about {
          background: linear-gradient(135deg, var(--color-secondary) 0%, #1a1a1a 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
          align-items: start;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .about-card-title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          color: var(--color-primary);
        }

        .about-card p {
          margin-bottom: var(--spacing-md);
          line-height: 1.7;
          color: #555;
        }

        .about-card p:last-child {
          margin-bottom: 0;
        }

        .about-visual {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .about-image-container {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .about-image-placeholder {
          width: 250px;
          height: 250px;
          background: var(--color-accent-3);
          border: var(--border-thick);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .placeholder-text {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--color-primary);
        }

        .image-decoration {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 250px;
          height: 250px;
          background: var(--color-accent-2);
          border: var(--border-thick);
          z-index: 1;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-md);
        }

        .stat-item {
          text-align: center;
          padding: var(--spacing-md);
          background: var(--color-secondary);
          border: var(--border-thin);
          box-shadow: var(--shadow-sm);
        }

        .stat-number {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          color: var(--color-accent);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .about-cta {
          text-align: center;
          padding: var(--spacing-xl);
          background: var(--color-secondary);
          border: var(--border-thick);
          box-shadow: var(--shadow-md);
        }

        .cta-content h3 {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
          color: var(--color-primary);
        }

        .cta-content p {
          font-size: var(--font-size-lg);
          color: #666;
          margin-bottom: var(--spacing-lg);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .about-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-image-placeholder,
          .image-decoration {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
