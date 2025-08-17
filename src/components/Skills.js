import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: '#61dafb' },
        { name: 'JavaScript', level: 95, color: '#f7df1e' },
        { name: 'TypeScript', level: 85, color: '#3178c6' },
        { name: 'HTML/CSS', level: 90, color: '#e34c26' },
        { name: 'Next.js', level: 80, color: '#000000' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Python', level: 80, color: '#3776ab' },
        { name: 'Express.js', level: 85, color: '#000000' },
        { name: 'MongoDB', level: 75, color: '#47a248' },
        { name: 'PostgreSQL', level: 70, color: '#336791' }
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: '#f05032' },
        { name: 'Docker', level: 75, color: '#2496ed' },
        { name: 'AWS', level: 70, color: '#ff9900' },
        { name: 'Figma', level: 80, color: '#f24e1e' },
        { name: 'Jest', level: 85, color: '#c21325' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              className="skill-category card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skills-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Always Learning</h3>
            <p>
              Technology evolves rapidly, and so do I. I'm constantly exploring 
              new frameworks, tools, and methodologies to stay current and deliver 
              the best possible solutions.
            </p>
            <div className="learning-badges">
              <span className="badge">Currently Learning</span>
              <span className="badge">Rust</span>
              <span className="badge">Web3</span>
              <span className="badge">AI/ML</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills {
          background: linear-gradient(135deg, #1a1a1a 0%, var(--color-secondary) 100%);
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .skill-category {
          padding: var(--spacing-lg);
        }

        .category-title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .skill-item {
          width: 100%;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xs);
        }

        .skill-name {
          font-weight: 600;
          color: var(--color-primary);
          font-size: var(--font-size-base);
        }

        .skill-level {
          font-weight: 700;
          color: var(--color-accent);
          font-size: var(--font-size-sm);
        }

        .skill-bar {
          width: 100%;
          height: 12px;
          background: #e9ecef;
          border: var(--border-thin);
          position: relative;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          border-radius: 0;
          transition: width 1s ease;
        }

        .skills-cta {
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
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .learning-badges {
          display: flex;
          gap: var(--spacing-sm);
          justify-content: center;
          flex-wrap: wrap;
        }

        .badge {
          padding: var(--spacing-xs) var(--spacing-sm);
          background: var(--color-accent-3);
          border: var(--border-thin);
          color: var(--color-primary);
          font-size: var(--font-size-sm);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .skill-category {
            padding: var(--spacing-md);
          }

          .learning-badges {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
