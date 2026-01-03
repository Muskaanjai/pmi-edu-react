import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, ChevronDown, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Custom Multi-Select State
  const [selectedCerts, setSelectedCerts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState({ submitted: false, error: false });
  
  const dropdownRef = useRef(null);

  const certifications = [
    "PMP® - Project Management Professional",
    "CAPM® - Certified Associate in Project Management",
    "PMI-ACP® - Agile Certified Practitioner",
    "AWS Certified Solutions Architect",
    "ITIL® 4 Foundation",
    "Six Sigma Green Belt",
    "CISSP - Information Security"
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Close dropdown on outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCert = (cert) => {
    setSelectedCerts(prev => 
      prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Call
    setStatus({ submitted: true, error: false });
    setTimeout(() => setStatus({ submitted: false, error: false }), 5000);
  };

  return (
    <div className="contact-wrapper bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20 text-center">
        <div className="container">
          <h1 className="hero-title text-gradient display-3 fw-bold mb-4" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="hero-subtitle mx-auto text-secondary fs-5" style={{ maxWidth: '600px' }} data-aos="fade-up" data-aos-delay="200">
            Ready to advance your career? Get in touch with our certification experts today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-section pb-20">
        <div className="container">
          <div className="row g-4">
            
            {/* Left Column: Info */}
            <div className="col-lg-4" data-aos="fade-right">
              <div className="contact-info-card p-4 rounded-4 h-100 border border-success border-opacity-25 bg-dark">
                <div className="contact-icon bg-gradient-success p-3 rounded-circle d-inline-flex mb-4">
                  <MapPin size={32} className="text-black" />
                </div>
                <h4 className="text-primary-emphasis fw-bold">Visit Our Office</h4>
                <p className="mb-1"><strong>PMI Edu Training Center</strong></p>
                <p className="text-secondary small mb-4">
                  105 WeWork, Oberoi Commerz II, Oberoi Garden City, Goregaon East, Mumbai 400063
                </p>

                <div className="office-hours-box bg-black bg-opacity-50 p-3 rounded-3 mb-4">
                  <h5 className="fs-6 text-primary mb-3 border-bottom border-secondary pb-2 d-flex align-items-center">
                    <Clock size={16} className="me-2" /> Office Hours
                  </h5>
                  <div className="d-flex justify-content-between small mb-1">
                    <span>Mon - Fri:</span> <span>9 AM - 6 PM</span>
                  </div>
                  <div className="d-flex justify-content-between small">
                    <span>Sat:</span> <span>10 AM - 4 PM</span>
                  </div>
                </div>

                <div className="contact-links-box bg-black bg-opacity-50 p-3 rounded-3">
                  <h5 className="fs-6 text-primary mb-3 border-bottom border-secondary pb-2 d-flex align-items-center">
                    <Phone size={16} className="me-2" /> Contact Info
                  </h5>
                  <a href="tel:+918069524204" className="d-block text-decoration-none text-secondary small mb-2 hover-white">
                    +91-8069524204
                  </a>
                  <a href="mailto:info@pmiedu.com" className="d-block text-decoration-none text-secondary small hover-white">
                    info@pmiedu.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="col-lg-8" data-aos="fade-left">
              <div className="contact-form-card p-5 rounded-4 bg-dark border border-success border-opacity-25">
                <h3 className="mb-4 text-primary fw-bold">Send Us a Message</h3>

                {status.submitted && (
                  <div className="alert alert-success d-flex align-items-center">
                    <CheckCircle className="me-2" /> Message sent successfully!
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-primary small fw-bold">First Name *</label>
                      <input 
                        type="text" className="form-control bg-dark text-white border-secondary" 
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})} required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-primary small fw-bold">Last Name *</label>
                      <input 
                        type="text" className="form-control bg-dark text-white border-secondary"
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})} required 
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-primary small fw-bold">Certifications of Interest</label>
                    <div className="multi-select-container position-relative" ref={dropdownRef}>
                      <div 
                        className="form-control bg-dark text-white border-secondary d-flex flex-wrap gap-2 align-items-center min-vh-10"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        style={{ cursor: 'pointer', minHeight: '50px' }}
                      >
                        {selectedCerts.length === 0 && <span className="text-secondary">Select Certifications...</span>}
                        {selectedCerts.map(cert => (
                          <span key={cert} className="badge bg-primary d-flex align-items-center gap-1">
                            {cert} <X size={14} onClick={(e) => { e.stopPropagation(); toggleCert(cert); }} />
                          </span>
                        ))}
                        <ChevronDown size={18} className="ms-auto text-primary" />
                      </div>

                      {isDropdownOpen && (
                        <div className="dropdown-menu show w-100 bg-dark border-secondary mt-1 p-2 shadow-lg" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                          <input 
                            type="text" className="form-control form-control-sm bg-black text-white border-secondary mb-2" 
                            placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          {certifications.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase())).map(cert => (
                            <div 
                              key={cert} 
                              className={`dropdown-item text-white p-2 rounded ${selectedCerts.includes(cert) ? 'bg-primary' : 'hover-bg-secondary'}`}
                              onClick={() => toggleCert(cert)}
                              style={{ cursor: 'pointer' }}
                            >
                              {cert}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-primary small fw-bold">Message</label>
                    <textarea 
                      className="form-control bg-dark text-white border-secondary" 
                      rows="4" placeholder="How can we help you?"
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill fw-bold text-black bg-gradient">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;