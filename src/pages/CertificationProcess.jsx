import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CertificationProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">
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
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="certifications.html">
                  Certifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="certification-process.html"
                >
                  Certification Process
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="partnerships.html">
                  Partnerships
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link cta-nav" href="https://exam.pmiedu.com/">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="process-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <h1 className="display-3 fw-bold mb-4">
                Certification <span className="gradient-text">Process</span>
              </h1>
              <p className="lead mb-4">
                Thank you for showing your interest in participation. We are
                connecting with you regarding it and we are here to help you for
                the upgrade that you are looking forward in your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          {/* Introduction */}
          <div className="process-section" data-aos="fade-up">
            <h3>Welcome to Our Certification Program</h3>
            <p>
              We are aware that you are looking forward to fill the gap in your
              professional journey. We appreciate your interest in our
              professional course certification program. We will assist you in
              completing these professional courses.
            </p>
          </div>

          {/* Certification Process */}
          <div className="process-section" data-aos="fade-up">
            <h3>Certification Process</h3>
            <p>
              You must take two different tests, at two different dates in order
              to be awarded all necessary certifications. After placing an order,
              you must take the pre-board test (the 1st Exam), then 120-180 days
              later, the on-board test. For your preparation, we will give you
              live training sessions, training videos, and study material over
              the course of 120-180 days.
            </p>
          </div>

          {/* Method of Obtaining Certification */}
          <div className="process-section" data-aos="fade-up">
            <h3>Method of Obtaining Certification</h3>
            <p>
              After completion of your session within 2-3 days we will evaluate
              your performance and will provide you result within 2-3 days.
            </p>
            <div className="highlight-box">
              <p>
                <i className="fas fa-envelope me-2"></i>A soft copy will be
                shared on registered email within 3 working days after your
                results are announced.
              </p>
            </div>
          </div>

          {/* Online Classes */}
          <div className="process-section" data-aos="fade-up">
            <h3>Online Classes</h3>
            <p>
              Certification Course Online classes will start after 120 days from
              the pre-board exam. We will share a video tutorial (study
              material) and the online class schedule (weekend only) with you.
              We will also help you fix the final on-board exam date and time in
              between 150 and 180 days from the pre-board exam.
            </p>
          </div>

          {/* Examination Process */}
          <div className="process-section" data-aos="fade-up">
            <h3>Examination Process</h3>
            <p>
              For both the tests, you must participate using an online platform
              on our server. This test will be a combination of all necessary
              professional courses and will include questions from desired
              professional courses. There will be a 90-120-minute time limit, you
              have to respond to total of 90-120 objective questionnaires. All
              exam questions will be derived from the provided study material,
              and we will be available to assist you where-ever you need it.
            </p>
          </div>

          {/* Step by Step Process */}
          <div className="process-section" data-aos="fade-up">
            <h3>Step by Step Process</h3>

            {Array.from({ length: 12 }, (_, i) => (
              <div
                className="step-item"
                key={i + 1}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h5>
                  <span
                    className="step-number"
                    style={{
                      width: "30px",
                      height: "30px",
                      fontSize: "1rem",
                      marginBottom: 0,
                      marginRight: "10px",
                      display: "inline-flex",
                    }}
                  >
                    {i + 1}
                  </span>{" "}
                  Step {i + 1} Title
                </h5>
                <p>Step {i + 1} description goes here.</p>
              </div>
            ))}
          </div>

          {/* Reward Plan */}
          <div className="process-section" data-aos="fade-up">
            <div className="reward-card">
              <div className="reward-icon">
                <i className="fas fa-gift"></i>
              </div>
              <h4>Reward Plan</h4>
              <p style={{ color: "#e0e0e0", lineHeight: 1.8 }}>
                Candidates who achieve 80% or higher in the pre-examination may
                be eligible for a complimentary gift, subject to availability
                and company discretion. The gift will be dispatched within
                45–60 days with tracking details shared via email, and eligible
                candidates agree to the use of their photograph for promotional
                purposes.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-5" data-aos="fade-up">
            <div
              className="cta-section"
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid rgba(0, 255, 255, 0.2)",
              }}
            >
              <h3 className="mb-4">Ready to Start Your Certification Journey?</h3>
              <p className="lead mb-4">
                Contact us today and take the first step towards advancing your
                career
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="contact.html" className="btn btn-primary btn-lg btn-glow">
                  Get Started
                </a>
                <a href="certifications.html" className="btn btn-outline-light btn-lg">
                  View Certifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          {/* Footer content same as your HTML */}
          <div className="row">
            {/* ...Copy all footer HTML here... */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CertificationProcess;
