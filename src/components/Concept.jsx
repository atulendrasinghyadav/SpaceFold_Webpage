import React from 'react';
import { motion } from 'framer-motion';

const Concept = () => {
  return (
    <section id="concept" className="section-padding">
      <div className="container">
        <motion.div 
          className="glass-panel"
          style={{ padding: '80px 40px', textAlign: 'center', maxWidth: '900px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle background glow inside panel */}
          <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(ellipse at top, rgba(129, 140, 248, 0.15), transparent 70%)', pointerEvents: 'none' }}></div>
          
          <motion.h2 
            className="h2-title"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Not Equations. <span className="gradient-text">Experiences.</span>
          </motion.h2>

          <motion.p 
            style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: '0 auto', maxWidth: '700px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            For over a century, the Theory of Relativity has been locked behind complex math. SpaceFold changes that. By leveraging the power of Augmented Reality and Apple's Foundation Models, we've transformed abstract concepts into tangible visual and haptic experiences. 
            <br/><br/>
            Step into the fabric of spacetime right from your living room.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Concept;
