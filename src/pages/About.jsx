import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // We'll put CSS here

const AboutUs = () => {
  // Counter state for animated numbers
  const [counters, setCounters] = useState({
    students: 0,
    years: 0,
    programs: 0,
    success: 0
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
    // Animate counters
    const interval = setInterval(() => {
      setCounters(prev => ({
        students: prev.students < 50000 ? prev.students + 500 : 50000,
        years: prev.years < 25 ? prev.years + 1 : 25,
        programs: prev.programs < 15 ? prev.programs + 1 : 15,
        success: prev.success < 98 ? prev.success + 1 : 98
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Toggle Read More details for certifications
  const toggleDetails = id => {
    const element = document.getElementById(id);
    element.classList.toggle("expanded");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero text-light text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">
            About <span className="gradient-text">PMI Edu</span>
          </h1>
          <p className="lead mb-4">
            Empowering professionals worldwide with cutting-edge project management education and certification programs.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{counters.students}</div>
              <p>Students Certified</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.years}</div>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.programs}</div>
              <p>Certification Programs</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.success}</div>
              <p>Success Rate %</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 container">
        <div className="row">
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>Provide comprehensive, industry-aligned certification programs to empower professionals.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>To be the global leader in project management education, recognized for innovation and student success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="display-4 fw-bold mb-3">Why Choose <span className="gradient-text">PMI Edu</span>?</h2>
          </div>
          <div className="row">
            <div className="col-md-4" data-aos="fade-up">
              <div className="value-prop-card">
                <div className="value-icon"><i className="fas fa-medal"></i></div>
                <h4>25+ Years of Excellence</h4>
                <ul className="benefit-list">
                  <li><i className="fas fa-check-circle"></i> Industry-leading curriculum</li>
                  <li><i className="fas fa-check-circle"></i> Expert instructors</li>
                  <li><i className="fas fa-check-circle"></i> Updated content</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="value-prop-card">
                <div className="value-icon"><i className="fas fa-globe-americas"></i></div>
                <h4>Global Recognition</h4>
                <ul className="benefit-list">
                  <li><i className="fas fa-check-circle"></i> Accepted in 200+ countries</li>
                  <li><i className="fas fa-check-circle"></i> PMI Authorized Training Partner</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="value-prop-card">
                <div className="value-icon"><i className="fas fa-user-graduate"></i></div>
                <h4>Personalized Learning</h4>
                <ul className="benefit-list">
                  <li><i className="fas fa-check-circle"></i> Adaptive learning technology</li>
                  <li><i className="fas fa-check-circle"></i> Flexible schedules</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 container text-center">
        <h2 className="display-4 fw-bold mb-4">Our Team</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-3" data-aos="zoom-in">
            <div className="team-card">
              <img src="images/ceo 1.jpg" alt="Rajaram" className="team-avatar" />
              <h5>Rajaram</h5>
              <p>CFO</p>
            </div>
          </div>
          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="100">
            <div className="team-card">
              <img src="images/ceo 2.jpg" alt="Ramprasad" className="team-avatar" />
              <h5>Ramprasad</h5>
              <p>Chief Counselor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-5 container">
        <h2 className="display-4 fw-bold mb-4 text-center">Our <span className="gradient-text">Certifications</span></h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up">
            <div className="certification-card">
              <div className="cert-icon"><i className="fas fa-crown"></i></div>
              <h4>PMP®</h4>
              <p>Gold standard in project management certification.</p>
              <button className="read-more-btn" onClick={() => toggleDetails("pmp")}>Read More</button>
              <div id="pmp" className="cert-details">
                <p>Certification overview, exam details, prerequisites, and course information for PMP®.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="certification-card">
              <div className="cert-icon"><i className="fas fa-seedling"></i></div>
              <h4>CAPM®</h4>
              <p>Entry-level project management certification.</p>
              <button className="read-more-btn" onClick={() => toggleDetails("capm")}>Read More</button>
              <div id="capm" className="cert-details">
                <p>Certification overview, exam details, prerequisites, and course information for CAPM®.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
