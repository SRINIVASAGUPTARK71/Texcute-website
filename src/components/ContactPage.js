import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

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
    formInput: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif'
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
      width: '100%'
    }
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

  return (
    <div>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Get in Touch</h1>
        <p style={styles.heroSubtitle}>
          We're here to help with your IT and digital transformation needs
        </p>
      </div>

      <div style={styles.section}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Contact Form Section */}
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 'bold' }}>
              Contact Form
            </h2>
            <div>
              {/* Full Name Input */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold',
                    color: '#0f172a'
                  }}
                >
                  Full Name*
                </label>
                <input
                  style={styles.formInput}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold',
                    color: '#0f172a'
                  }}
                >
                  Email Address*
                </label>
                <input
                  style={styles.formInput}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                />
              </div>

              {/* Company Name Input */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold',
                    color: '#0f172a'
                  }}
                >
                  Company Name
                </label>
                <input
                  style={styles.formInput}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                />
              </div>

              {/* Service Interest Dropdown */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold',
                    color: '#0f172a'
                  }}
                >
                  Service Interest
                </label>
                <select
                  style={styles.formInput}
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold',
                    color: '#0f172a'
                  }}
                >
                  Message*
                </label>
                <textarea
                  style={{
                    ...styles.formInput,
                    minHeight: '120px',
                    fontFamily: 'Arial, sans-serif',
                    resize: 'vertical'
                  }}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                style={styles.ctaButton}
                onMouseEnter={(e) => (e.target.style.background = '#e55a2b')}
                onMouseLeave={(e) => (e.target.style.background = '#ff6b35')}
                onClick={handleFormSubmit}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 'bold' }}>
              Contact Information
            </h2>

            {/* Location */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <MapPin size={20} color="#ff6b35" /> Location
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Secunderabad, Telangana, India
                <br />
                [Full Address to be updated]
              </p>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Phone size={20} color="#ff6b35" /> Phone
              </h3>
              <p style={{ fontSize: '0.95rem' }}>+91-XXXXXXXXXX</p>
            </div>

            {/* Email */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <Mail size={20} color="#ff6b35" /> Email
              </h3>
              <p style={{ fontSize: '0.95rem' }}>contact@texecute.com</p>
            </div>

            {/* Operating Hours */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Operating Hours</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Monday – Friday: 9:00 AM – 6:00 PM IST
                <br />
                Saturday & Sunday: Closed
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0f172a', fontSize: '1.5rem', textDecoration: 'none' }}
                >
                  <Linkedin size={28} color="#1e3a8a" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0f172a', fontSize: '1.5rem', textDecoration: 'none' }}
                >
                  <Twitter size={28} color="#1e3a8a" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ ...styles.section, background: '#f8f9fa' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#0f172a'
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* FAQ Item 1 */}
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #ddd' }}>
            <h4
              style={{
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                fontSize: '1.05rem'
              }}
            >
              What happens after I submit a form?
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>
              Our team will review your inquiry and contact you within 24 business hours to discuss
              your requirements.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #ddd' }}>
            <h4
              style={{
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                fontSize: '1.05rem'
              }}
            >
              How quickly will we respond?
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>
              We aim to respond to all inquiries within 24 hours during business days. For urgent
              matters, please call us directly.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div>
            <h4
              style={{
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                fontSize: '1.05rem'
              }}
            >
              Do you offer free consultations?
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>
              Yes! We offer a free initial consultation to understand your business needs and propose
              the best solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;