import React, { useState } from 'react';
import { Menu, X, Zap, Smartphone, Cloud, Brain, Shield, Palette, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import './App.css';

const TexecuteWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });

  const styles = {
    container: { fontFamily: 'Arial, sans-serif', color: '#333' },
    navbar: { background: '#0f172a', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
    navBrand: { fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' },
    navLinks: { display: 'flex', gap: '2rem' },
    navLink: { cursor: 'pointer', textDecoration: 'none', color: '#fff', transition: 'color 0.3s', fontSize: '0.95rem' },
    heroSection: { background: 'linear-gradient(135deg, #1e3a8a 0%, #2d5a96 100%)', color: '#fff', padding: '6rem 2rem', textAlign: 'center' },
    heroTitle: { fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' },
    heroSubtitle: { fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.95 },
    ctaButton: { background: '#ff6b35', color: '#fff', padding: '0.75rem 2rem', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold', transition: 'background 0.3s' },
    section: { padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' },
    sectionTitle: { fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 'bold', color: '#0f172a' },
    cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' },
    card: { background: '#f8f9fa', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #e9ecef', transition: 'transform 0.3s, boxShadow 0.3s' },
    cardTitle: { fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#1e3a8a' },
    cardText: { fontSize: '0.95rem', lineHeight: '1.6', color: '#555' },
    formInput: { width: '100%', padding: '0.75rem', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1rem', boxSizing: 'border-box', fontFamily: 'Arial, sans-serif', marginBottom: '0.75rem' },
    footer: { background: '#0f172a', color: '#fff', padding: '3rem 2rem', textAlign: 'center' },
  };

  const toggleNav = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your inquiry! We will contact you within 24 hours.');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    } else {
      alert('Please fill in all required fields');
    }
  };

  // HOME PAGE
  const HomePage = () => (
    <div>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Empowering Your Business with Smart IT</h1>
        <p style={styles.heroSubtitle}>End-to-End Digital Solutions: Web, Mobile, Cloud, AI & More</p>
        <button style={styles.ctaButton} onMouseEnter={(e) => e.target.style.background = '#e55a2b'} onMouseLeave={(e) => e.target.style.background = '#ff6b35'} onClick={() => toggleNav('contact')}>Get a Free Consultation</button>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Texecute?</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>5+ Years Experience</h3>
            <p style={styles.cardText}>Proven track record in delivering high-quality IT solutions across diverse industries.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>India-Based, Global Outlook</h3>
            <p style={styles.cardText}>Headquartered in Secunderabad, Telangana, we serve clients worldwide with competitive pricing and world-class quality.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Expert Team</h3>
            <p style={styles.cardText}>Experienced developers, designers, and consultants dedicated to your success.</p>
          </div>
        </div>
      </div>

      <div style={{...styles.section, background: '#f8f9fa'}}>
        <h2 style={styles.sectionTitle}>Our Core Services</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}><h3 style={styles.cardTitle}>Web Development</h3><p style={styles.cardText}>Modern, responsive web apps built with React, Angular, Node.js and more.</p></div>
          <div style={styles.card}><h3 style={styles.cardTitle}>Mobile Apps</h3><p style={styles.cardText}>Native & cross-platform solutions for iOS and Android.</p></div>
          <div style={styles.card}><h3 style={styles.cardTitle}>Cloud & DevOps</h3><p style={styles.cardText}>AWS, Azure, GCP solutions with CI/CD pipelines for scalability.</p></div>
          <div style={styles.card}><h3 style={styles.cardTitle}>AI & ML</h3><p style={styles.cardText}>Predictive analytics, NLP, and computer vision for intelligent automation.</p></div>
          <div style={styles.card}><h3 style={styles.cardTitle}>IT Consulting</h3><p style={styles.cardText}>Strategic advisory and tech audits for future-proof architecture.</p></div>
          <div style={styles.card}><h3 style={styles.cardTitle}>UI/UX Design</h3><p style={styles.cardText}>User-centered designs that boost engagement and conversions.</p></div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Process</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div><h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>1. Discover</h3><p style={{fontSize: '0.9rem', color: '#666'}}>Understanding your business needs and goals</p></div>
          <div><h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>2. Design</h3><p style={{fontSize: '0.9rem', color: '#666'}}>Creating thoughtful solutions and prototypes</p></div>
          <div><h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>3. Develop</h3><p style={{fontSize: '0.9rem', color: '#666'}}>Building robust, scalable applications</p></div>
          <div><h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>4. Deploy & Support</h3><p style={{fontSize: '0.9rem', color: '#666'}}>Launching and providing ongoing support</p></div>
        </div>
      </div>
    </div>
  );

  // ABOUT PAGE
  const AboutPage = () => (
    <div>
      <div style={{...styles.heroSection, paddingTop: '3rem'}}>
        <h1 style={styles.heroTitle}>About Texecute Systems</h1>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
          Texecute Systems was founded with a vision to help businesses leverage modern IT and digital technologies. Based in Secunderabad, Telangana, India, we've grown into a trusted partner for companies seeking digital transformation.
        </p>
      </div>

      <div style={{...styles.section, background: '#f8f9fa'}}>
        <h2 style={styles.sectionTitle}>Mission & Vision</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={{...styles.cardTitle, color: '#ff6b35'}}>Our Mission</h3>
            <p style={styles.cardText}>To deliver reliable, scalable, and innovative IT solutions that empower our clients to succeed in the digital economy.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{...styles.cardTitle, color: '#ff6b35'}}>Our Vision</h3>
            <p style={styles.cardText}>To become a trusted global partner for businesses seeking digital transformation and intelligent automation.</p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}><h3 style={styles.cardTitle}>Customer-Centricity</h3><p style={styles.cardText}>Your success is our success. We prioritize understanding and exceeding your expectations.</p></div>
          <div style={styles.card}><h3 style={styles.cardTitle}>Innovation & Excellence</h3><p style={styles.cardText}>We embrace cutting-edge technologies and maintain the highest quality standards.</p></div>
          <div style={styles.card}><h3 style={styles.cardTitle}>Integrity & Transparency</h3><p style={styles.cardText}>We operate with honesty, transparency, and accountability in all relationships.</p></div>
          <div style={styles.card}><h3 style={styles.cardTitle}>Continuous Learning</h3><p style={styles.cardText}>We invest in team development and stay ahead of industry trends.</p></div>
        </div>
      </div>

      <div style={{...styles.section, background: '#f8f9fa'}}>
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

  // SERVICES PAGE
  const ServicesPage = () => (
    <div>
      <div style={{...styles.heroSection, paddingTop: '3rem'}}>
        <h1 style={styles.heroTitle}>Our Services</h1>
      </div>

      <div style={styles.section}>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <Zap style={{ marginBottom: '1rem', color: '#ff6b35' }} size={32} />
            <h3 style={styles.cardTitle}>Web Application Development</h3>
            <p style={styles.cardText}><strong>Description:</strong> Responsive, secure web applications using modern stacks like React, Angular, Vue.js, and Node.js.</p>
            <p style={styles.cardText}><strong>Benefits:</strong> Improve your online presence, streamline workflows, and engage users effectively.</p>
          </div>
          <div style={styles.card}>
            <Smartphone style={{ marginBottom: '1rem', color: '#ff6b35' }} size={32} />
            <h3 style={styles.cardTitle}>Mobile App Development</h3>
            <p style={styles.cardText}><strong>Description:</strong> Native (iOS/Android) and cross-platform apps (Flutter, React Native) to engage users on the go.</p>
            <p style={styles.cardText}><strong>Benefits:</strong> Reach more customers and provide seamless mobile experiences.</p>
          </div>
          <div style={styles.card}>
            <Cloud style={{ marginBottom: '1rem', color: '#ff6b35' }} size={32} />
            <h3 style={styles.cardTitle}>Cloud & DevOps Solutions</h3>
            <p style={styles.cardText}><strong>Description:</strong> Cloud migration, infrastructure automation, and CI/CD pipelines on AWS, Azure, and GCP.</p>
            <p style={styles.cardText}><strong>Benefits:</strong> Scalable, cost-efficient operations with reduced downtime.</p>
          </div>
          <div style={styles.card}>
            <Brain style={{ marginBottom: '1rem', color: '#ff6b35' }} size={32} />
            <h3 style={styles.cardTitle}>AI & Machine Learning</h3>
            <p style={styles.cardText}><strong>Description:</strong> Predictive analytics, NLP, computer vision tailored to your business needs.</p>
            <p style={styles.cardText}><strong>Benefits:</strong> Make smarter decisions and automate complex processes.</p>
          </div>
          <div style={styles.card}>
            <Shield style={{ marginBottom: '1rem', color: '#ff6b35' }} size={32} />
            <h3 style={styles.cardTitle}>IT Consulting & Support</h3>
            <p style={styles.cardText}><strong>Description:</strong> Strategic IT advisory, tech audits, and ongoing maintenance and support services.</p>
            <p style={styles.cardText}><strong>Benefits:</strong> Reduced downtime and future-proof architecture.</p>
          </div>
          <div style={styles.card}>
            <Palette style={{ marginBottom: '1rem', color: '#ff6b35' }} size={32} />
            <h3 style={styles.cardTitle}>UI/UX Design Services</h3>
            <p style={styles.cardText}><strong>Description:</strong> User-centered design that improves conversion, engagement, and user satisfaction.</p>
            <p style={styles.cardText}><strong>Benefits:</strong> Beautiful interfaces that users love to interact with.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // PRODUCTS PAGE
  const ProductsPage = () => (
    <div>
      <div style={{...styles.heroSection, paddingTop: '3rem'}}>
        <h1 style={styles.heroTitle}>Our Products</h1>
        <p style={styles.heroSubtitle}>Innovative Tools & Solutions</p>
      </div>

      <div style={styles.section}>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Texecute CRM</h3>
            <p style={{...styles.cardText, fontStyle: 'italic', marginBottom: '1rem', color: '#ff6b35'}}>A lightweight, customizable CRM for SMBs</p>
            <p style={styles.cardText}><strong>Features:</strong> Contact management, sales pipeline tracking, email integration, reporting & analytics.</p>
            <p style={styles.cardText}><strong>Target Audience:</strong> Small to medium-sized businesses looking for an affordable CRM solution.</p>
            <p style={{...styles.cardText, marginTop: '1rem'}}><strong>Pricing:</strong> Free trial available • Premium plans starting at $29/month</p>
            <button style={{...styles.ctaButton, marginTop: '1rem', width: '100%'}} onClick={() => toggleNav('contact')}>Request a Demo</button>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Texecute Chatbot</h3>
            <p style={{...styles.cardText, fontStyle: 'italic', marginBottom: '1rem', color: '#ff6b35'}}>AI-powered conversational assistant for customer support</p>
            <p style={styles.cardText}><strong>Features:</strong> Natural language processing, 24/7 availability, multi-language support, seamless handoff to human agents.</p>
            <p style={styles.cardText}><strong>Target Audience:</strong> E-commerce, SaaS, and service companies seeking to improve customer support efficiency.</p>
            <p style={{...styles.cardText, marginTop: '1rem'}}><strong>Pricing:</strong> Starter plan $99/month • Professional plan $299/month</p>
            <button style={{...styles.ctaButton, marginTop: '1rem', width: '100%'}} onClick={() => toggleNav('contact')}>Request a Demo</button>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Texecute TaskFlow</h3>
            <p style={{...styles.cardText, fontStyle: 'italic', marginBottom: '1rem', color: '#ff6b35'}}>Workflow automation tool for teams</p>
            <p style={styles.cardText}><strong>Features:</strong> Task automation, team collaboration, project tracking, integration with popular tools.</p>
            <p style={styles.cardText}><strong>Target Audience:</strong> Teams and agencies looking to streamline workflows and boost productivity.</p>
            <p style={{...styles.cardText, marginTop: '1rem'}}><strong>Pricing:</strong> Team plan $199/month • Enterprise custom pricing</p>
            <button style={{...styles.ctaButton, marginTop: '1rem', width: '100%'}} onClick={() => toggleNav('contact')}>Request a Demo</button>
          </div>
        </div>
      </div>
    </div>
  );

  // CONTACT PAGE
  const ContactPage = () => (
    <div>
      <div style={{...styles.heroSection, paddingTop: '3rem'}}>
        <h1 style={styles.heroTitle}>Get in Touch</h1>
        <p style={styles.heroSubtitle}>We're here to help with your IT and digital transformation needs</p>
      </div>

      <div style={styles.section}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <h2 style={{fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 'bold'}}>Contact Form</h2>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#0f172a' }}>Full Name*</label>
                <input style={styles.formInput} type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#0f172a' }}>Email Address*</label>
                <input style={styles.formInput} type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#0f172a' }}>Company Name</label>
                <input style={styles.formInput} type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enter your company name" />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#0f172a' }}>Service Interest</label>
                <select style={styles.formInput} name="service" value={formData.service} onChange={handleInputChange}>
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile Apps</option>
                  <option>Cloud & DevOps</option>
                  <option>AI & ML</option>
                  <option>IT Consulting</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#0f172a' }}>Message*</label>
                <textarea style={{...styles.formInput, minHeight: '120px', fontFamily: 'Arial, sans-serif', resize: 'vertical'}} name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button style={{...styles.ctaButton, width: '100%'}} onMouseEnter={(e) => e.target.style.background = '#e55a2b'} onMouseLeave={(e) => e.target.style.background = '#ff6b35'} onClick={handleFormSubmit}>Send Message</button>
            </div>
          </div>

          <div>
            <h2 style={{fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 'bold'}}>Contact Information</h2>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MapPin size={20} color="#ff6b35" /> Location</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Secunderabad, Telangana, India<br/>[Full Address to be updated]</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={20} color="#ff6b35" /> Phone</h3>
              <p style={{ fontSize: '0.95rem' }}>+91-XXXXXXXXXX</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={20} color="#ff6b35" /> Email</h3>
              <p style={{ fontSize: '0.95rem' }}>contact@texecute.com</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Operating Hours</h3>
              <p style={{ fontSize: '0.95rem' }}>Monday – Friday: 9:00 AM – 6:00 PM IST<br/>Saturday & Sunday: Closed</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: '#0f172a', fontSize: '1.5rem', textDecoration: 'none' }}><Linkedin size={28} color="#1e3a8a" /></a>
                <a href="#" style={{ color: '#0f172a', fontSize: '1.5rem', textDecoration: 'none' }}><Twitter size={28} color="#1e3a8a" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{...styles.section, background: '#f8f9fa'}}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #ddd' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What happens after I submit a form?</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Our team will review your inquiry and contact you within 24 business hours to discuss your requirements.</p>
          </div>
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #ddd' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05rem' }}>How quickly will we respond?</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Do you offer free consultations?</h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Yes! We offer a free initial consultation to understand your business needs and propose the best solution.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navBrand} onClick={() => toggleNav('home')}>🚀 Texecute</div>
        <div style={styles.navLinks}>
          <span style={styles.navLink} onMouseEnter={(e) => e.target.style.color = '#ff6b35'} onMouseLeave={(e) => e.target.style.color = '#fff'} onClick={() => toggleNav('home')}>Home</span>
          <span style={styles.navLink} onMouseEnter={(e) => e.target.style.color = '#ff6b35'} onMouseLeave={(e) => e.target.style.color = '#fff'} onClick={() => toggleNav('about')}>About</span>
          <span style={styles.navLink} onMouseEnter={(e) => e.target.style.color = '#ff6b35'} onMouseLeave={(e) => e.target.style.color = '#fff'} onClick={() => toggleNav('services')}>Services</span>
          <span style={styles.navLink} onMouseEnter={(e) => e.target.style.color = '#ff6b35'} onMouseLeave={(e) => e.target.style.color = '#fff'} onClick={() => toggleNav('products')}>Products</span>
          <span style={styles.navLink} onMouseEnter={(e) => e.target.style.color = '#ff6b35'} onMouseLeave={(e) => e.target.style.color = '#fff'} onClick={() => toggleNav('contact')}>Contact</span>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'products' && <ProductsPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p style={{marginBottom: '1rem'}}>&copy; 2025 Texecute Systems. All rights reserved.</p>
        <p style={{marginBottom: '1rem'}}>Building Tomorrow's Digital Solutions Today</p>
      </footer>
    </div>
  );
};

export default TexecuteWebsite;