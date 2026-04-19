import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './DemoVideo.css';

import videoThumb from '../assets/video-thumbnail.png';

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
            {/* Aspect ratio container (16:9) with Drive Link */}
            <a href="https://drive.google.com/file/d/1g3YFGXCEsXbLRv-n6W71CrOcva-QF9Uj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="video-placeholder">
              <img src={videoThumb} alt="SpaceFold Demo" className="demo-thumbnail" />
              <div className="play-button-wrapper pulse-anim">
                <Play size={36} fill="white" style={{ marginLeft: '4px' }} />
              </div>
              <div className="demo-gradient-overlay"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
