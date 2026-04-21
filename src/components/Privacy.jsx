import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Camera, Database, ExternalLink } from 'lucide-react';

const Privacy = () => {
  return (
    <section id="privacy" className="section-padding" style={{ background: 'linear-gradient(to bottom, transparent, rgba(16, 24, 39, 0.5))' }}>
      <div className="container">
        <motion.div
          className="glass-panel"
          style={{ padding: 'clamp(32px, 8vw, 60px) clamp(20px, 5vw, 40px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            style={{ marginBottom: '20px', color: '#10B981' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShieldCheck size={56} />
          </motion.div>

          <h2 className="h2-title" style={{ marginBottom: '12px' }}>Privacy Policy</h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.7', maxWidth: '650px', marginBottom: '32px' }}>
            Your privacy matters to us. Here's the simple truth about SpaceFold: <strong>We don't collect anything.</strong> SpaceFold doesn't gather, store, or share any personal data — ever.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', textAlign: 'left', width: '100%', maxWidth: '650px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', padding: 'clamp(20px, 4vw, 28px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ background: 'rgba(45, 212, 191, 0.1)', padding: '10px', borderRadius: '12px' }}>
                <Camera size={24} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              </div>
              <div>
                <h4 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.2rem)', fontWeight: '600', marginBottom: '6px' }}>Camera is for AR only</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>We ask for camera access purely to power the AR experience. Your camera feed never leaves your device. Nothing is recorded or uploaded.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', padding: 'clamp(20px, 4vw, 28px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ background: 'rgba(129, 140, 248, 0.1)', padding: '10px', borderRadius: '12px' }}>
                <Database size={24} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
              </div>
              <div>
                <h4 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.2rem)', fontWeight: '600', marginBottom: '6px' }}>Everything stays on your device</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>No servers. No databases. No tracking. No ads.</p>
              </div>
            </div>
          </div>

          <a href="https://drive.google.com/file/d/1OF2OSD1flSo5RlpqaD-07V9zPbipg2-r/view?usp=sharing" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '1rem', padding: '12px 28px' }}>
            <ExternalLink size={18} />
            Read Detailed Policy Here
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
