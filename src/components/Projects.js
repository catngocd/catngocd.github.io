import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/300',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that provides current conditions, forecasts, and interactive maps using multiple weather APIs.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Grid'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'A content management system for blogs with markdown support, SEO optimization, and analytics dashboard.',
      image: '/api/placeholder/400/300',
      category: 'fullstack',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Framer Motion, featuring smooth animations and responsive design.',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      technologies: ['React', 'Framer Motion', 'CSS Grid', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'API Gateway',
      description: 'A microservices API gateway with authentication, rate limiting, and request routing built with Node.js and Redis.',
      image: '/api/placeholder/400/300',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}
              
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="placeholder-text">{project.title}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.liveUrl} className="btn btn-primary">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary">
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Have a project in mind?</h3>
            <p>Let's collaborate and create something amazing together</p>
            <a href="#contact" className="btn btn-primary">Start a Project</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .projects {
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

        .project-filters {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: var(--spacing-sm) var(--spacing-md);
          background: var(--color-secondary);
          border: var(--border-thin);
          color: var(--color-primary);
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-sm);
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--color-accent);
          color: var(--color-secondary);
          transform: translate(-2px, -2px);
          box-shadow: var(--shadow-md);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .project-card {
          position: relative;
          overflow: hidden;
        }

        .project-card.featured {
          border-width: 4px;
          border-color: var(--color-accent);
        }

        .featured-badge {
          position: absolute;
          top: var(--spacing-md);
          right: var(--spacing-md);
          background: var(--color-accent);
          color: var(--color-secondary);
          padding: var(--spacing-xs) var(--spacing-sm);
          font-size: var(--font-size-sm);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 2;
        }

        .project-image {
          margin: calc(-1 * var(--spacing-lg)) calc(-1 * var(--spacing-lg)) var(--spacing-md) calc(-1 * var(--spacing-lg));
          height: 200px;
          background: var(--color-accent-3);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: var(--border-thin);
        }

        .image-placeholder {
          text-align: center;
        }

        .placeholder-text {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--color-primary);
        }

        .project-content {
          padding: 0;
        }

        .project-title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--spacing-sm);
          color: var(--color-primary);
        }

        .project-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-md);
        }

        .tech-tag {
          padding: var(--spacing-xs) var(--spacing-sm);
          background: var(--color-accent-2);
          color: var(--color-secondary);
          font-size: var(--font-size-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-actions {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }

        .projects-cta {
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
          .projects-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .project-filters {
            gap: var(--spacing-xs);
          }

          .filter-btn {
            padding: var(--spacing-xs) var(--spacing-sm);
            font-size: var(--font-size-sm);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
