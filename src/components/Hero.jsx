import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroApp1 from '../assets/hero-app-1.png';
import heroApp2 from '../assets/hero-app-2.png';
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

        {/* App visuals showing interaction */}
        <div className="hero-app-grid">
          <motion.img
            src={heroApp1}
            alt="SpaceFold App Interface"
            className="hero-app-img"
            initial={{ opacity: 0, x: -140, y: 20, rotateY: 35, scale: 0.85, zIndex: 1, filter: "blur(4px)" }}
            animate={{
              opacity: 0.8,
              x: -120,
              y: [20, 10, 20],
              rotateY: 25,
              scale: 0.85,
              zIndex: 1,
              filter: "blur(2px)"
            }}
            transition={{
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              default: { duration: 1.2, delay: 0.6, type: "spring", bounce: 0.4 }
            }}
            whileHover={{
              scale: 0.95,
              opacity: 1,
              x: -200,
              y: 0,
              rotateY: 10,
              zIndex: 3,
              filter: "blur(0px)",
              boxShadow: "0 0 50px rgba(129, 140, 248, 0.6)",
              transition: { duration: 0.4 }
            }}
          />
          <motion.img
            src={heroApp2}
            alt="SpaceFold AR View"
            className="hero-app-img"
            initial={{ opacity: 0, x: 140, y: 30, rotateY: -35, scale: 0.9, zIndex: 2 }}
            animate={{
              opacity: 1,
              x: 120,
              y: [0, -15, 0],
              rotateY: -20,
              scale: 1,
              zIndex: 2,
              boxShadow: "0 40px 80px rgba(129, 140, 248, 0.3)"
            }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 },
              default: { duration: 1.2, delay: 0.8, type: "spring", bounce: 0.4 }
            }}
            whileHover={{
              scale: 1.05,
              y: -20,
              x: 200,
              rotateY: 0,
              zIndex: 4,
              boxShadow: "0 0 70px rgba(45, 212, 191, 0.7)",
              transition: { duration: 0.4 }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
