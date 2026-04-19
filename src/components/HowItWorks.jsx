import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Activity, Lightbulb } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    title: "Interaction",
    desc: "Engage with abstract concepts using intuitive gestures like tapping and dragging.",
    icon: <MousePointerClick size={24} />
  },
  {
    title: "Observation",
    desc: "See immediate visual feedback as spacetime naturally reacts to your inputs in AR.",
    icon: <Activity size={24} />
  },
  {
    title: "Understanding",
    desc: "Achieve 'Aha!' moments as AI seamlessly explains the physics behind your observations.",
    icon: <Lightbulb size={24} />
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
            <h2 className="h2-title" style={{ textAlign: 'left' }}>The Learning <br/><span className="gradient-text">Algorithm</span></h2>
            <p className="p-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              SpaceFold uses a simple yet powerful pedagogical loop. Active experimentation replaces passive reading, creating a mental model that sticks.
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
