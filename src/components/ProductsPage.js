
// ============================================
// FILE 5: components/ProductsPage.js
// ============================================
import React from 'react';

const ProductsPage = ({ onNavigate }) => {
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
    heroSubtitle: {
      fontSize: '1.3rem',
      marginBottom: '2rem',
      opacity: 0.95
    },
    section: {
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
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
      transition: 'background 0.3s',
      width: '100%',
      marginTop: '1rem'
    }
  };

  const products = [
    {
      name: 'Texecute CRM',
      tagline: 'A lightweight, customizable CRM for SMBs',
      features: 'Contact management, sales pipeline tracking, email integration, reporting & analytics.',
      audience: 'Small to medium-sized businesses looking for an affordable CRM solution.',
      pricing: 'Free trial available • Premium plans starting at $29/month'
    },
    {
      name: 'Texecute Chatbot',
      tagline: 'AI-powered conversational assistant for customer support',
      features: 'Natural language processing, 24/7 availability, multi-language support, seamless handoff to human agents.',
      audience: 'E-commerce, SaaS, and service companies seeking to improve customer support efficiency.',
      pricing: 'Starter plan $99/month • Professional plan $299/month'
    },
    {
      name: 'Texecute TaskFlow',
      tagline: 'Workflow automation tool for teams',
      features: 'Task automation, team collaboration, project tracking, integration with popular tools.',
      audience: 'Teams and agencies looking to streamline workflows and boost productivity.',
      pricing: 'Team plan $199/month • Enterprise custom pricing'
    }
  ];

  return (
    <div>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Our Products</h1>
        <p style={styles.heroSubtitle}>Innovative Tools & Solutions</p>
      </div>

      <div style={styles.section}>
        <div style={styles.cardGrid}>
          {products.map((product, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{product.name}</h3>
              <p style={{ ...styles.cardText, fontStyle: 'italic', marginBottom: '1rem', color: '#ff6b35' }}>
                {product.tagline}
              </p>
              <p style={styles.cardText}>
                <strong>Features:</strong> {product.features}
              </p>
              <p style={styles.cardText}>
                <strong>Target Audience:</strong> {product.audience}
              </p>
              <p style={{ ...styles.cardText, marginTop: '1rem' }}>
                <strong>Pricing:</strong> {product.pricing}
              </p>
              <button
                style={styles.ctaButton}
                onMouseEnter={(e) => (e.target.style.background = '#e55a2b')}
                onMouseLeave={(e) => (e.target.style.background = '#ff6b35')}
                onClick={() => onNavigate('contact')}
              >
                Request a Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;