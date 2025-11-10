import React from 'react';

const HomePage = ({ onNavigate }) => {
  const styles = {
    heroSection: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #2d5a96 100%)',
      color: '#fff',
      padding: '6rem 2rem',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontWeight: 'bold'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      marginBottom: '2rem',
      opacity: 0.95
    },
    ctaButton: {
      background: '#ff6b35',
      color: '#fff',
      padding: '0.75rem 2rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background 0.3s'
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
        <h1 style={styles.heroTitle}>Empowering Your Business with Smart IT</h1>
        <p style={styles.heroSubtitle}>End-to-End Digital Solutions: Web, Mobile, Cloud, AI & More</p>
        <button
          style={styles.ctaButton}
          onMouseEnter={(e) => (e.target.style.background = '#e55a2b')}
          onMouseLeave={(e) => (e.target.style.background = '#ff6b35')}
          onClick={() => onNavigate('contact')}
        >
          Get a Free Consultation
        </button>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Texecute?</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>5+ Years Experience</h3>
            <p style={styles.cardText}>
              Proven track record in delivering high-quality IT solutions across diverse industries.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>India-Based, Global Outlook</h3>
            <p style={styles.cardText}>
              Headquartered in Secunderabad, Telangana, we serve clients worldwide with competitive pricing and world-class quality.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Expert Team</h3>
            <p style={styles.cardText}>
              Experienced developers, designers, and consultants dedicated to your success.
            </p>
          </div>
        </div>
      </div>

      <div style={{ ...styles.section, background: '#f8f9fa' }}>
        <h2 style={styles.sectionTitle}>Our Core Services</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Web Development</h3>
            <p style={styles.cardText}>
              Modern, responsive web apps built with React, Angular, Node.js and more.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Mobile Apps</h3>
            <p style={styles.cardText}>
              Native & cross-platform solutions for iOS and Android.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Cloud & DevOps</h3>
            <p style={styles.cardText}>
              AWS, Azure, GCP solutions with CI/CD pipelines for scalability.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>AI & ML</h3>
            <p style={styles.cardText}>
              Predictive analytics, NLP, and computer vision for intelligent automation.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>IT Consulting</h3>
            <p style={styles.cardText}>
              Strategic advisory and tech audits for future-proof architecture.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>UI/UX Design</h3>
            <p style={styles.cardText}>
              User-centered designs that boost engagement and conversions.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Process</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1. Discover</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Understanding your business needs and goals</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2. Design</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Creating thoughtful solutions and prototypes</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>3. Develop</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Building robust, scalable applications</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>4. Deploy & Support</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Launching and providing ongoing support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;