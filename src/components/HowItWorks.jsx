import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine, Box, Brain } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    title: "Scan Surface",
    desc: "Scan your immediate surroundings to map surfaces and seamlessly anchor the Augmented Reality fabric.",
    icon: <ScanLine size={24} color="var(--accent-cyan)" />
  },
  {
    title: "Interact with Models",
    desc: "Once the grid is established, spawn physical masses and deform spacetime using intuitive hand gestures.",
    icon: <Box size={24} color="var(--accent-purple)" />
  },
  {
    title: "Ask the AI",
    desc: "Have any doubts during an experiment? Ask the integrated foundation model for instant, deep physics clarification.",
    icon: <Brain size={24} color="#f472b6" />
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="how-it-works-grid">
          <motion.div 
            className="hiw-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h2-title" style={{ textAlign: 'left' }}>The Seamless <br/><span className="gradient-text">Workflow</span></h2>
            <p className="p-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              SpaceFold is designed for absolute immersion. From mapping your reality to consulting the foundation model, the journey is completely frictionless.
            </p>
          </motion.div>

          <div className="hiw-steps">
            {steps.map((step, idx) => (
              <motion.div 
                className="hiw-step-item"
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="step-number">{idx + 1}</div>
                <div className="step-content glass-panel">
                  <div className="step-icon">{step.icon}</div>
                  <div>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
