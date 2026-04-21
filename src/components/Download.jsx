import React from 'react';
import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';

const Download = () => {
  return (
    <section id="download" className="section-padding" style={{ paddingBottom: 'clamp(80px, 15vw, 160px)' }}>
      <div className="container">
        <motion.div
          className="glass-panel"
          style={{
            padding: 'clamp(40px, 10vw, 80px) clamp(20px, 5vw, 40px)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(49, 46, 129, 0.4))',
            border: '1px solid rgba(129, 140, 248, 0.3)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 0 40px rgba(129, 140, 248, 0.1)'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="h2-title"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', marginBottom: '16px' }}
          >
            Ready to fold <span className="gradient-text">Space?</span>
          </motion.h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px auto' }}>
            Download SpaceFold today and experience the universe like never before.
          </p>

          <motion.button
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 36px',
              fontSize: '1.05rem',
              boxShadow: '0 10px 30px rgba(129, 140, 248, 0.4)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/2175/2175370.png" alt="" style={{ width: '24px', height: '24px' }} />
            <span>Get it on the App Store</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
