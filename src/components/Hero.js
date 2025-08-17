import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
                         <div className="hero-image-container">
               <img 
                 src="/cat-pixel-art.png" 
                 alt="Cat - Creative Developer with pixel art style" 
                 className="hero-image"
               />
             </div>
          </motion.div>

          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
                       <motion.h1
             className="hero-title"
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
           >
             <span className="typing-text">
               Hello, I'm{' '}
               <span className="highlight">Cat</span>
             </span>
           </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A <span className="accent-text">Software Engineer</span> who builds
              <br />
              digital experiences with purpose
            </motion.p>
            
            <motion.div 
              className="hero-description"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p>
                I specialize in building modern web applications, scaling them, and
                combining clean code with bold design principles. 
                Let's build something extraordinary together.
              </p>
            </motion.div>


          </motion.div>
        </div>



        {/* Floating Space Particles */}
        <div className="space-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          background: 
            radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%),
            radial-gradient(ellipse at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, var(--color-secondary) 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: center;
          margin-bottom: var(--spacing-2xl);
        }

        .hero-title {
          font-size: var(--font-size-5xl);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: var(--spacing-md);
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .typing-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          animation: typing 2.5s steps(25, end) 0.5s both;
          will-change: width, opacity;
        }

        .typing-text::after {
          content: '';
          position: absolute;
          right: -3px;
          top: 0;
          width: 3px;
          height: 100%;
          background: var(--color-accent);
          animation: blink-caret 0.75s step-end infinite 2.5s;
        }

        .highlight {
          color: var(--color-accent);
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 12px;
          background: var(--color-accent);
          z-index: -1;
          border-radius: 2px;
        }

        .hero-subtitle {
          font-size: var(--font-size-2xl);
          font-weight: 600;
          margin-bottom: var(--spacing-lg);
          line-height: 1.3;
        }

        .accent-text {
          color: var(--color-accent-2);
          font-weight: 700;
        }

        .hero-description {
          margin-bottom: var(--spacing-xl);
          max-width: 500px;
        }

        .hero-description p {
          font-size: var(--font-size-lg);
          line-height: 1.7;
          color: #e0e0e0;
          font-weight: 400;
        }



        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-container {
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transform: rotate(-2deg);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(6px 6px 0px var(--color-accent));
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        /* Floating Space Particles */
        .space-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          background: var(--color-accent);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle-1 {
          width: 4px;
          height: 4px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          background: var(--color-accent);
        }

        .particle-2 {
          width: 6px;
          height: 6px;
          top: 60%;
          left: 80%;
          animation-delay: 1s;
          background: var(--color-accent-2);
        }

        .particle-3 {
          width: 3px;
          height: 3px;
          top: 80%;
          left: 20%;
          animation-delay: 2s;
          background: var(--color-accent-3);
        }

        .particle-4 {
          width: 5px;
          height: 5px;
          top: 30%;
          left: 70%;
          animation-delay: 3s;
          background: var(--color-accent-4);
        }

        .particle-5 {
          width: 4px;
          height: 4px;
          top: 70%;
          left: 90%;
          animation-delay: 4s;
          background: var(--color-accent);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }



        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: var(--spacing-xl);
          }

          .hero-title {
            font-size: var(--font-size-4xl);
          }

          .hero-subtitle {
            font-size: var(--font-size-xl);
          }



          .hero-image-container {
            width: 250px;
            height: 250px;
          }

          .hero-image {
            width: 250px;
            height: 250px;
          }
        }

        @keyframes typing {
          0% { 
            width: 0; 
            opacity: 0;
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            width: 100%; 
          }
          100% { 
            width: 100%; 
            opacity: 1;
          }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: var(--color-accent); }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
