import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      background: '#0f172a',
      color: '#fff',
      padding: '3rem 2rem',
      textAlign: 'center',
      marginTop: '2rem',
      borderTop: '1px solid #1e3a8a'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    footerTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    footerText: {
      marginBottom: '1rem',
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#d1d5db'
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    },
    footerLink: {
      color: '#ff6b35',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s',
      fontSize: '0.9rem'
    },
    divider: {
      borderTop: '1px solid #1e3a8a',
      margin: '2rem 0',
      opacity: 0.5
    },
    footerBottom: {
      fontSize: '0.85rem',
      color: '#9ca3af'
    }
  };

  const handleLinkHover = (e) => {
    e.target.style.color = '#fff';
  };

  const handleLinkLeave = (e) => {
    e.target.style.color = '#ff6b35';
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* Footer Title & Tagline */}
        <h3 style={styles.footerTitle}>🚀 Texecute Systems</h3>
        <p style={styles.footerText}>Building Tomorrow's Digital Solutions Today</p>

        {/* Footer Links */}
        <div style={styles.footerLinks}>
          <span
            style={styles.footerLink}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Privacy Policy
          </span>
          <span>•</span>
          <span
            style={styles.footerLink}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Terms of Service
          </span>
          <span>•</span>
          <span
            style={styles.footerLink}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Sitemap
          </span>
          <span>•</span>
          <span
            style={styles.footerLink}
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Blog
          </span>
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Copyright */}
        <p style={styles.footerBottom}>
          &copy; {currentYear} Texecute Systems. All rights reserved.
        </p>
        <p style={{...styles.footerText, marginBottom: 0, fontSize: '0.8rem'}}>
          Made with ❤️ in Secunderabad, Telangana, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;