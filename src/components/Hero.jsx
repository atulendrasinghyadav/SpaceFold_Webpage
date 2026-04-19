import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Orbs */}
      <div className="hero-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="container hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="badge-dot"></span>
          New: Vision Pro Support added
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Experience <br />
          <span className="gradient-text">Relativity</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Interactive physics simulation app that helps you visualize curved spacetime, time dilation, and the perspective of relativistic observers using Augmented Reality.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#download" className="btn-primary hero-btn">
            Download on App Store <ChevronRight size={18} />
          </a>
          <a href="#demo" className="btn-secondary hero-btn">
            Watch Demo
          </a>
        </motion.div>
        
        {/* Mockup visualization */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
        >
          <div className="spacetime-grid"></div>
          <div className="planet-placeholder pulse-anim"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
