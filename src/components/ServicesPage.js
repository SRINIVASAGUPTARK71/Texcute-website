import React from 'react';
import { Zap, Smartphone, Cloud, Brain, Shield, Palette } from 'lucide-react';

const ServicesPage = () => {
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

  const services = [
    {
      icon: <Zap size={32} color="#ff6b35" />,
      title: 'Web Application Development',
      description: 'Responsive, secure web applications using modern stacks like React, Angular, Vue.js, and Node.js.',
      benefits: 'Improve your online presence, streamline workflows, and engage users effectively.'
    },
    {
      icon: <Smartphone size={32} color="#ff6b35" />,
      title: 'Mobile App Development',
      description: 'Native (iOS/Android) and cross-platform apps (Flutter, React Native) to engage users on the go.',
      benefits: 'Reach more customers and provide seamless mobile experiences.'
    },
    {
      icon: <Cloud size={32} color="#ff6b35" />,
      title: 'Cloud & DevOps Solutions',
      description: 'Cloud migration, infrastructure automation, and CI/CD pipelines on AWS, Azure, and GCP.',
      benefits: 'Scalable, cost-efficient operations with reduced downtime.'
    },
    {
      icon: <Brain size={32} color="#ff6b35" />,
      title: 'AI & Machine Learning',
      description: 'Predictive analytics, NLP, computer vision tailored to your business needs.',
      benefits: 'Make smarter decisions and automate complex processes.'
    },
    {
      icon: <Shield size={32} color="#ff6b35" />,
      title: 'IT Consulting & Support',
      description: 'Strategic IT advisory, tech audits, and ongoing maintenance and support services.',
      benefits: 'Reduced downtime and future-proof architecture.'
    },
    {
      icon: <Palette size={32} color="#ff6b35" />,
      title: 'UI/UX Design Services',
      description: 'User-centered design that improves conversion, engagement, and user satisfaction.',
      benefits: 'Beautiful interfaces that users love to interact with.'
    }
  ];

  return (
    <div>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Our Services</h1>
      </div>

      <div style={styles.section}>
        <div style={styles.cardGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={{ marginBottom: '1rem' }}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>
                <strong>Description:</strong> {service.description}
              </p>
              <p style={styles.cardText}>
                <strong>Benefits:</strong> {service.benefits}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;