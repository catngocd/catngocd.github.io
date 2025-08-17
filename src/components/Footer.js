import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/yourusername',
      icon: '🏀'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="footer-brand">
              <h3 className="footer-logo">PORTFOLIO</h3>
              <p className="footer-tagline">
                Building digital experiences with purpose and creativity
              </p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">Navigation</h4>
                <ul className="link-list">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4 className="link-title">Services</h4>
                <ul className="link-list">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Mobile Apps</li>
                  <li>Consulting</li>
                  <li>Maintenance</li>
                </ul>
              </div>

              <div className="link-group">
                <h4 className="link-title">Connect</h4>
                <ul className="link-list">
                  <li><a href="mailto:hello@yourname.com">hello@yourname.com</a></li>
                  <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
                  <li>San Francisco, CA</li>
                  <li>Available for remote work</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="footer-legal">
              <p className="copyright">
                © {currentYear} Your Name. All rights reserved.
              </p>
              <p className="footer-note">
                Made with ❤️ and lots of ☕
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1a1a1a 0%, var(--color-secondary) 100%);
          color: var(--color-primary);
          padding: var(--spacing-2xl) 0 var(--spacing-lg) 0;
          border-top: var(--border-thick);
          border-color: var(--color-accent);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--spacing-2xl);
          align-items: start;
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-logo {
          font-size: var(--font-size-2xl);
          font-weight: 800;
          margin-bottom: var(--spacing-sm);
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .footer-tagline {
          font-size: var(--font-size-base);
          line-height: 1.6;
          color: #ccc;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-xl);
        }

        .link-group {
          display: flex;
          flex-direction: column;
        }

        .link-title {
          font-size: var(--font-size-base);
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          color: var(--color-accent-3);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .link-list li {
          color: #ccc;
          font-size: var(--font-size-sm);
        }

        .link-list a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .link-list a:hover {
          color: var(--color-accent-3);
        }

        .footer-bottom {
          border-top: 2px solid #333;
          padding-top: var(--spacing-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }

        .social-links {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: var(--spacing-xs) var(--spacing-sm);
          background: var(--color-secondary);
          color: var(--color-primary);
          text-decoration: none;
          border: var(--border-thin);
          font-size: var(--font-size-sm);
          font-weight: 600;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-sm);
        }

        .social-link:hover {
          transform: translate(-2px, -2px);
          box-shadow: var(--shadow-md);
        }

        .social-icon {
          font-size: var(--font-size-lg);
        }

        .social-name {
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-legal {
          text-align: right;
        }

        .copyright {
          font-size: var(--font-size-sm);
          color: #ccc;
          margin-bottom: var(--spacing-xs);
        }

        .footer-note {
          font-size: var(--font-size-xs);
          color: #999;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-lg);
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-lg);
          }

          .footer-legal {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
