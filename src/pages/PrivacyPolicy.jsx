import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="brand-text">PMI</span><span className="brand-accent">Edu</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/certifications">Certifications</a></li>
              <li className="nav-item"><a className="nav-link" href="/partnerships">Partnerships</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link cta-nav" href="https://exam.pmiedu.com/">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="policy-hero" style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        padding: "120px 0 80px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h1 className="display-4 text-white mb-4">
                <span className="brand-accent">Privacy</span> Policy
              </h1>
              <p className="lead text-white-50 mb-0">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content" style={{ padding: "80px 0", background: "#f8f9fa" }}>
        <div className="container">
          <div className="last-updated" data-aos="fade-up" style={{
            background: "#e3f2fd",
            border: "1px solid #2196f3",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "30px",
            textAlign: "center"
          }}>
            <p className="mb-0"><strong>Last Updated:</strong> January 1, 2024</p>
          </div>

          {/* Policy Sections */}
          {[
            {
              id: 1,
              title: "Information We Collect",
              content: <>
                <p>We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support.</p>
                <h3>Personal Information</h3>
                <ul>
                  <li>Name, email address, and contact information</li>
                  <li>Professional background and certification goals</li>
                  <li>Payment information for course enrollment</li>
                  <li>Communication preferences</li>
                </ul>
                <h3>Usage Information</h3>
                <ul>
                  <li>Course progress and completion data</li>
                  <li>Website usage patterns and preferences</li>
                  <li>Device information and IP addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </>
            },
            {
              id: 2,
              title: "How We Use Your Information",
              content: <>
                <p>We use the information we collect to provide, maintain, and improve our services.</p>
                <ul>
                  <li>Deliver educational content and certification training</li>
                  <li>Process payments and manage your account</li>
                  <li>Send important updates about courses and certifications</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our website and educational offerings</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </>
            },
            {
              id: 3,
              title: "Information Sharing",
              content: <>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> With trusted partners who help us operate our platform</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                  <li><strong>Consent:</strong> With your explicit permission for specific purposes</li>
                </ul>
              </>
            },
            {
              id: 4,
              title: "Data Security",
              content: <>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <ul>
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure payment processing systems</li>
                </ul>
              </>
            },
            {
              id: 5,
              title: "Your Rights and Choices",
              content: <>
                <p>You have certain rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
              </>
            },
            {
              id: 6,
              title: "Cookies and Tracking",
              content: <>
                <p>We use cookies and similar technologies to enhance your experience on our website.</p>
                <h3>Types of Cookies We Use</h3>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements</li>
                </ul>
              </>
            },
            {
              id: 7,
              title: "Contact Us",
              content: <>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> <FaEnvelope /> privacy@pmiedu.com</li>
                  <li><strong>Phone (Support):</strong> <FaPhone /> +91-8062491585</li>
                  <li><strong>WhatsApp:</strong> <FaWhatsapp /> +91-8882671925, +91-8604873445</li>
                  <li><strong>Address:</strong> <FaMapMarkerAlt /> 105 WeWork, Oberoi Commerz II, Oberoi Garden City, Goregaon East, Mumbai 400063</li>
                </ul>
              </>
            }
          ].map((section, idx) => (
            <div className="policy-section mb-4" data-aos="fade-up" data-aos-delay={100*(idx+1)} key={section.id} style={{
              background: "white",
              borderRadius: "15px",
              padding: "40px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              borderLeft: "5px solid #00d4aa"
            }}>
              <h2>{section.id}. {section.title}</h2>
              {section.content}
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="footer-logo"><span className="brand-text">PMI</span><span className="brand-accent">Edu</span></h3>
              <p>Empowering professionals worldwide with globally recognized PMI certifications and expert training.</p>
              <div className="d-flex gap-2">
                <FaFacebookF /><FaTwitter /><FaLinkedinIn /><FaInstagram />
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/certifications">Certifications</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Certifications</h5>
              <ul className="list-unstyled">
                <li>PMP® Certification</li>
                <li>PMI-ACP® Agile</li>
                <li>CAPM® Certification</li>
                <li>PMI-RMP® Risk</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Contact Info</h5>
              <p><FaEnvelope /> info@pmiedu.com</p>
              <p><FaPhone /> +91-8062491585</p>
              <p><FaWhatsapp /> +91-8882671925, +91-8604873445</p>
              <p><FaMapMarkerAlt /> 105 WeWork, Oberoi Commerz II, Oberoi Garden City, Goregaon East, Mumbai 400063</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>© 2024 PMI Edu. All rights reserved. PMI, PMP, CAPM, PMI-ACP are registered marks of Project Management Institute, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
