// src/pages/CookiePolicy.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaCookieBite } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./CookiePolicy.css"; // optional: move your CSS here

const CookiePolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Cookie preference functions
  const acceptAllCookies = () => {
    alert("All cookies have been accepted. Your preferences have been saved.");
  };

  const managePreferences = () => {
    alert("Cookie preference manager would open here. This is a demo implementation.");
  };

  const rejectNonEssential = () => {
    alert("Non-essential cookies have been rejected. Only essential cookies will be used.");
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="brand-text">PMI</span>
            <span className="brand-accent">Edu</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/certifications">Certifications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/partnerships">Partnerships</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link cta-nav" href="https://exam.pmiedu.com/">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="policy-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h1 className="display-4 text-white mb-4">
                <span className="brand-accent">Cookie</span> Policy
              </h1>
              <p className="lead text-white-50 mb-0">
                Learn about how we use cookies to enhance your browsing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="last-updated" data-aos="fade-up">
            <p className="mb-0"><strong>Last Updated:</strong> January 1, 2024</p>
          </div>

          {/* Sections */}
          <div className="policy-section" data-aos="fade-up" data-aos-delay="100">
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
            <p>Cookies allow websites to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Provide personalized content and experiences</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website functionality and performance</li>
              <li>Deliver relevant advertisements</li>
            </ul>
          </div>

          <div className="policy-section" data-aos="fade-up" data-aos-delay="200">
            <h2>2. How We Use Cookies</h2>
            <p>PMI Edu uses cookies to enhance your experience on our website and provide you with personalized services. We use cookies for the following purposes:</p>

            <h3>Essential Cookies</h3>
            <p>Necessary for website functions like navigation, secure areas, and forms.</p>

            <h3>Performance Cookies</h3>
            <p>Collect information on website usage to improve performance.</p>

            <h3>Functionality Cookies</h3>
            <p>Remember choices and provide enhanced features.</p>

            <h3>Targeting Cookies</h3>
            <p>Deliver advertisements relevant to your interests.</p>
          </div>

          <div className="policy-section" data-aos="fade-up" data-aos-delay="300">
            <h2>3. Types of Cookies We Use</h2>
            <p>We use both session cookies (expire when browser closes) and persistent cookies (stay for a set period).</p>

            <table className="cookie-table table">
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Session Cookies</td>
                  <td>Maintain your session while browsing</td>
                  <td>Until browser is closed</td>
                </tr>
                <tr>
                  <td>Authentication Cookies</td>
                  <td>Keep you logged in</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td>Preference Cookies</td>
                  <td>Remember settings and preferences</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>Analytics Cookies</td>
                  <td>Track website usage</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>Marketing Cookies</td>
                  <td>Deliver personalized ads</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="policy-section" data-aos="fade-up" data-aos-delay="400">
            <h2>4. Third-Party Cookies</h2>
            <h3>Google Analytics</h3>
            <p>Collects information anonymously and reports website trends.</p>
            <h3>Social Media Cookies</h3>
            <p>Enable social media features.</p>
            <h3>Advertising Partners</h3>
            <p>Show relevant ads based on your interests.</p>
          </div>

          <div className="cookie-controls" data-aos="fade-up" data-aos-delay="500">
            <h3><FaCookieBite /> Cookie Preferences</h3>
            <p>You can manage your cookie preferences using the controls below:</p>
            <button className="cookie-btn" onClick={acceptAllCookies}>Accept All Cookies</button>
            <button className="cookie-btn secondary" onClick={managePreferences}>Manage Preferences</button>
            <button className="cookie-btn secondary" onClick={rejectNonEssential}>Reject Non-Essential</button>
          </div>

          <div className="policy-section" data-aos="fade-up" data-aos-delay="600">
            <h2>5. Managing Cookies</h2>
            <p>You have several options for managing cookies via browser settings:</p>
            <ul>
              <li>Block all cookies</li>
              <li>Allow only first-party cookies</li>
              <li>Delete existing cookies</li>
              <li>Set cookies to expire when browser closes</li>
            </ul>
          </div>

          <div className="policy-section" data-aos="fade-up" data-aos-delay="700">
            <h2>6. Impact of Disabling Cookies</h2>
            <ul>
              <li>May need to re-enter info frequently</li>
              <li>Some features may not function properly</li>
              <li>Personalized content may not be available</li>
              <li>Preferences may not be saved</li>
            </ul>
          </div>

          <div className="policy-section" data-aos="fade-up" data-aos-delay="800">
            <h2>7. Updates to This Policy</h2>
            <ul>
              <li>Update the "Last Updated" date</li>
              <li>Notify users of significant changes</li>
              <li>Provide opportunity to review new preferences</li>
            </ul>
          </div>

          <div className="policy-section" data-aos="fade-up" data-aos-delay="900">
            <h2>8. Contact Us</h2>
            <ul>
              <li><FaEnvelope /> Email: privacy@pmiedu.com</li>
              <li><FaPhone /> Phone: +91-8062491585</li>
              <li><FaWhatsapp /> WhatsApp: +91-8882671925, +91-8604873445</li>
              <li><FaMapMarkerAlt /> Address: 105 WeWork, Oberoi Commerz II, Oberoi Garden City, Goregaon East, Mumbai 400063</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="footer-logo"><span className="brand-text">PMI</span><span className="brand-accent">Edu</span></h3>
              <p>Empowering professionals worldwide with globally recognized PMI certifications and expert training.</p>
              <div className="social-links">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h4>Quick Links</h4>
              <ul className="footer-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/certifications">Certifications</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h4>Certifications</h4>
              <ul className="footer-menu">
                <li><a href="#">PMP® Certification</a></li>
                <li><a href="#">PMI-ACP® Agile</a></li>
                <li><a href="#">CAPM® Certification</a></li>
                <li><a href="#">PMI-RMP® Risk</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h4>Contact Info</h4>
              <p><FaEnvelope /> info@pmiedu.com</p>
              <p><FaPhone /> +91-8062491585</p>
              <p><FaWhatsapp /> +91-8882671925, +91-8604873445</p>
              <p><FaMapMarkerAlt /> 105 WeWork, Oberoi Commerz II, Oberoi Garden City, Goregaon East, Mumbai 400063</p>
            </div>
          </div>
          <div className="footer-bottom text-center mt-3">
            <p>© 2024 PMI Edu. All rights reserved. PMI, PMP, CAPM, PMI-ACP are registered marks of Project Management Institute, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CookiePolicy;
