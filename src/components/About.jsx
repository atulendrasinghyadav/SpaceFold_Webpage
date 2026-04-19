import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import './About.css';

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.5 6.5-7.07a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0 .1-3.1s-1.1-.3-3.5 1.3a12.4 12.4 0 0 0-6.4 0C7.1 1.4 6 1.7 6 1.7a4.3 4.3 0 0 0 .1 3.1 4.6 4.6 0 0 0-1.3 3.2c0 5.57 3.3 6.72 6.5 7.07a4.8 4.8 0 0 0-1 3.03V22" />
    <path d="M9 20c-5 1.5-5-2.5-7-3" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">

        <div className="about-header">
          <motion.div
            className="about-header-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-label">The Developer</span>
            <h2 className="about-name">Atulendra Singh Yadav</h2>
            <p className="about-desc">
              Solo developer. iOS Developer. Building tools that make technology more human and advanced topics like physics accessible to everyone.
            </p>

            <motion.div
              className="about-social-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="https://www.linkedin.com/in/atulendra-singh-yadav" className="about-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
                <LinkedinIcon size={22} />
              </a>
              <a href="https://github.com/atulendrasinghyadav" className="about-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                <GithubIcon size={22} />
              </a>
              <a href="https://www.atulendrasinghyadav.dev/" className="about-social-icon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-purple)' }}>
                <Globe size={22} />
              </a>
              <a href="mailto:atulendrasinghyadav007@gmail.com" className="about-social-icon" style={{ color: 'var(--accent-cyan)' }}>
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-badge-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
          >
            <div className="about-badge">
              ASY
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
