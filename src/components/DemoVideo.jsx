import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './DemoVideo.css';

const DemoVideo = () => {
  return (
    <section id="demo" className="section-padding">
      <div className="container">
        <motion.div 
          className="demo-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h2-title">See It In Action</h2>
          <p className="p-subtitle">Watch how SpaceFold maps mind-bending cosmic phenomena directly over your physical surroundings.</p>
        </motion.div>

        <motion.div 
          className="demo-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="demo-device-frame glass-panel">
            {/* Aspect ratio container (16:9) */}
            <div className="video-placeholder">
              <div className="play-button-wrapper pulse-anim">
                <Play size={32} fill="white" />
              </div>
              <div className="demo-gradient-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
