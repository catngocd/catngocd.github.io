import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="nav-list desktop-nav">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                className="nav-item"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button 
                  className="nav-link"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          {/* Mobile Navigation */}
          <motion.div 
            className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              x: isMenuOpen ? 0 : '100%'
            }}
            transition={{ duration: 0.3 }}
          >
            <ul className="nav-list mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <button 
                    className="nav-link"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(10, 10, 10, 0.9);
          border-bottom: var(--border-thick);
          z-index: 1000;
          backdrop-filter: blur(20px);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-md) 0;
        }

        .logo-text {
          font-size: var(--font-size-xl);
          font-weight: 800;
          color: var(--color-primary);
          text-decoration: none;
          letter-spacing: 0.1em;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: var(--spacing-lg);
          align-items: center;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--color-primary);
          cursor: pointer;
          padding: var(--spacing-xs) var(--spacing-sm);
          border: var(--border-thin);
          background: var(--color-secondary);
          transition: all 0.2s ease;
          box-shadow: var(--shadow-sm);
        }

        .nav-link:hover {
          background: var(--color-accent);
          color: var(--color-secondary);
          transform: translate(-2px, -2px);
          box-shadow: var(--shadow-md);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: var(--border-thick);
          padding: var(--spacing-xs);
          cursor: pointer;
          background: var(--color-secondary);
        }

        .hamburger {
          display: block;
          width: 20px;
          height: 2px;
          background: var(--color-primary);
          position: relative;
          transition: all 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 2px;
          background: var(--color-primary);
          transition: all 0.3s ease;
        }

        .hamburger::before {
          top: -6px;
        }

        .hamburger::after {
          bottom: -6px;
        }

        .hamburger.open {
          background: transparent;
        }

        .hamburger.open::before {
          transform: rotate(45deg);
          top: 0;
        }

        .hamburger.open::after {
          transform: rotate(-45deg);
          bottom: 0;
        }

        .mobile-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--color-secondary);
          border-bottom: var(--border-thick);
          border-left: var(--border-thick);
          border-right: var(--border-thick);
        }

        .mobile-nav.open {
          display: block;
        }

        .mobile-nav-list {
          flex-direction: column;
          padding: var(--spacing-md);
          gap: var(--spacing-sm);
        }

        .mobile-nav-list .nav-link {
          width: 100%;
          text-align: left;
          justify-content: flex-start;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
