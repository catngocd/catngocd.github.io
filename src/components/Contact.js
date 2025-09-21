import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'catngocnd@gmail.com',
      link: 'mailto:catngocnd@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/cat-ngoc-nguyen/',
      link: 'https://www.linkedin.com/in/cat-ngoc-nguyen/'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start a project or just want to chat? Let's connect!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-card card">
              <h3 className="info-title">Let's Work Together</h3>
              <p className="info-description">
                I'm always open to discussing new opportunities, interesting projects, 
                or creative ideas. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.title}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <span className="contact-icon">{info.icon}</span>
                    <div className="contact-text">
                      <h4 className="contact-label">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="contact-value"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="form-card card">
              <h3 className="form-title">Send Me a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Tell me more about your project or idea..."
                />
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: linear-gradient(135deg, #1a1a1a 0%, var(--color-secondary) 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: #e0e0e0;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 400;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: start;
        }

        .info-card {
          padding: var(--spacing-lg);
        }

        .info-title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          color: var(--color-primary);
        }

        .info-description {
          color: #e0e0e0;
          line-height: 1.7;
          margin-bottom: var(--spacing-lg);
          font-weight: 400;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .contact-icon {
          font-size: var(--font-size-xl);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-accent-3);
          border: var(--border-thin);
        }

        .contact-text {
          flex: 1;
        }

        .contact-label {
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--spacing-xs);
        }

        .contact-value {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
        }

        .contact-value:hover {
          color: var(--color-accent);
        }

        .form-card {
          padding: var(--spacing-lg);
        }

        .form-title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          color: var(--color-primary);
        }

        .form-group {
          margin-bottom: var(--spacing-md);
        }

        .form-label {
          display: block;
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: var(--spacing-xs);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: var(--spacing-sm);
          border: var(--border-thin);
          background: var(--color-secondary);
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          transition: all 0.2s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: var(--shadow-sm);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: var(--spacing-md);
          font-size: var(--font-size-base);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-submit.submitting {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .contact-item {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-xs);
          }

          .contact-icon {
            width: 35px;
            height: 35px;
            font-size: var(--font-size-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
