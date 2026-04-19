import React from 'react';
import { motion } from 'framer-motion';
import { Orbit, Clock, Eye } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    title: "Spacetime Fabric",
    description: "Toss virtual masses like bowling balls onto the AR spacetime grid and watch how gravity naturally pulls smaller objects into orbit.",
    icon: <Orbit size={32} color="var(--accent-cyan)" />
  },
  {
    title: "Time Dilation",
    description: "Move physical devices at varying speeds to observe real-time tick-rate changes of virtual clocks, directly proving time is relative.",
    icon: <Clock size={32} color="var(--accent-purple)" />
  },
  {
    title: "Observer Perspective",
    description: "Switch seamlessly between multiple AR reference frames to see how light and motion appear to different observers at the same moment.",
    icon: <Eye size={32} color="#f472b6" /> /* Pinkish accent */
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', damping: 15 }
  }
};

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h2-title">Core Features</h2>
          <p className="p-subtitle">Three distinct modules designed from the ground up to make advanced physics intuitive and experiential.</p>
        </motion.div>

        <motion.div 
          className="grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuresData.map((feature, idx) => (
            <motion.div 
              className="feature-card glass-panel"
              key={idx}
              variants={itemVariants}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              
              <div className="feature-hover-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
