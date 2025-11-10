import React from 'react';

const AboutPage = () => {
  const styles = {
    heroSection: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #2d5a96 100%)',
      color: '#fff',
      padding: '3rem 2rem',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontWeight: 'bold'
    },
    section: {
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      marginBottom: '3rem',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#0f172a'
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    card: {
      background: '#f8f9fa',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid #e9ecef'
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '0.75rem',
      color: '#1e3a8a'
    },
    cardText: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#555'
    }
  };

  return (
    <div>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>About Texecute Systems</h1>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
          Texecute Systems was founded with a vision to help businesses leverage modern IT and digital technologies. Based in Secunderabad, Telangana, India, we've grown into a trusted partner for companies seeking digital transformation.
        </p>
      </div>

      <div style={{ ...styles.section, background: '#f8f9fa' }}>
        <h2 style={styles.sectionTitle}>Mission & Vision</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={{ ...styles.cardTitle, color: '#ff6b35' }}>Our Mission</h3>
            <p style={styles.cardText}>
              To deliver reliable, scalable, and innovative IT solutions that empower our clients to succeed in the digital economy.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={{ ...styles.cardTitle, color: '#ff6b35' }}>Our Vision</h3>
            <p style={styles.cardText}>
              To become a trusted global partner for businesses seeking digital transformation and intelligent automation.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Customer-Centricity</h3>
            <p style={styles.cardText}>
              Your success is our success. We prioritize understanding and exceeding your expectations.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Innovation & Excellence</h3>
            <p style={styles.cardText}>
              We embrace cutting-edge technologies and maintain the highest quality standards.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Integrity & Transparency</h3>
            <p style={styles.cardText}>
              We operate with honesty, transparency, and accountability in all relationships.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Continuous Learning</h3>
            <p style={styles.cardText}>
              We invest in team development and stay ahead of industry trends.
            </p>
          </div>
        </div>
      </div>

      <div style={{ ...styles.section, background: '#f8f9fa' }}>
        <h2 style={styles.sectionTitle}>Why Choose Texecute?</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.05rem', lineHeight: '2' }}>
            <li>✓ <strong>Indian Cost-Advantage + Global Quality</strong> – Best of both worlds</li>
            <li>✓ <strong>End-to-End Services</strong> – From consulting to deployment and support</li>
            <li>✓ <strong>Agile Methodology</strong> – Flexible, iterative development approach</li>
            <li>✓ <strong>Ongoing Support</strong> – Dedicated maintenance and continuous improvement</li>
            <li>✓ <strong>Proven Expertise</strong> – 5+ years delivering successful projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
