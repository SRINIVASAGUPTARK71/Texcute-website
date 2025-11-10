import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    navbar: {
      background: '#0f172a',
      color: '#fff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    navBrand: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem'
    },
    navLink: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: '#fff',
      transition: 'color 0.3s',
      fontSize: '0.95rem'
    },
    mobileMenu: {
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '1.5rem',
      display: 'none'
    }
  };

  const toggleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navBrand} onClick={() => toggleNav('home')}>
        🚀 Texecute
      </div>
      <div style={styles.navLinks}>
        <span
          style={styles.navLink}
          onMouseEnter={(e) => (e.target.style.color = '#ff6b35')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
          onClick={() => toggleNav('home')}
        >
          Home
        </span>
        <span
          style={styles.navLink}
          onMouseEnter={(e) => (e.target.style.color = '#ff6b35')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
          onClick={() => toggleNav('about')}
        >
          About
        </span>
        <span
          style={styles.navLink}
          onMouseEnter={(e) => (e.target.style.color = '#ff6b35')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
          onClick={() => toggleNav('services')}
        >
          Services
        </span>
        <span
          style={styles.navLink}
          onMouseEnter={(e) => (e.target.style.color = '#ff6b35')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
          onClick={() => toggleNav('products')}
        >
          Products
        </span>
        <span
          style={styles.navLink}
          onMouseEnter={(e) => (e.target.style.color = '#ff6b35')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
          onClick={() => toggleNav('contact')}
        >
          Contact
        </span>
      </div>
      <button style={styles.mobileMenu} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;