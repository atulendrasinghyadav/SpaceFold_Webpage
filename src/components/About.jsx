import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div 
          style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h2-title">By Developer, For Learners</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            SpaceFold was created to bridge the gap between heavy academic physics and natural human intuition. As an independent developer passionate about spatial computing and education, my mission is to make advanced topics accessible to anyone with a smartphone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
