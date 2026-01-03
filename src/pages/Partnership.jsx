import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaUsersCog, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./styles.css"; // Your custom CSS if any

const PartnershipsPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const partners = [
    {
      name: "Naukri.com",
      tagline: "India’s Leading Career Platform",
      description: "Through our partnership with Naukri.com, we provide job seekers and premium subscribers with access to exclusive certification programs, carefully curated to improve employability and enhance career readiness. This collaboration supports thousands of active learners with targeted training in Project Management, Agile, Cybersecurity, Cloud Computing, and more—ensuring they stay relevant in a fast-changing job landscape."
    },
    {
      name: "Indeed.com",
      tagline: "Global Job & Hiring Marketplace",
      description: "Our association with Indeed.com allows us to offer tailored certification and upskilling opportunities to professionals actively seeking growth or career transitions. We work closely with Indeed’s team to design value-driven learning bundles that align with top job trends and help learners strengthen their profiles with globally recognized credentials, improving hiring potential and career progression."
    },
    {
      name: "The Knowledge Academy",
      tagline: "Global Training & Certification Leader",
      description: "In collaboration with The Knowledge Academy, we co-create and deliver high-quality, globally compliant courseware for various professional domains including Project Management, IT, and Agile practices. This partnership allows us to combine our instructional expertise with their international reach, enabling broader access to PMI-certified training, cloud technology programs, and cyber-risk certifications for learners across continents."
    },
    {
      name: "Tata Group",
      tagline: "Empowering Internal Capabilities Across Sectors",
      description: "Working with multiple companies under the Tata Group umbrella, we provide customized internal training and employee development programs that address project management maturity, agile transformation, and digital readiness. Our PMI-certified programs are designed to align with Tata’s operational excellence initiatives, ensuring that their employees are equipped to manage complex projects, lead agile teams, and drive innovation across departments."
    },
    {
      name: "Infosys",
      tagline: "Strengthening Tech Delivery Through Certification",
      description: "Our training partnership with Infosys focuses on building strong project management capabilities and agile readiness among their delivery teams. We provide structured training tracks for fresh graduates, lateral hires, and project managers, enabling them to earn certifications like PMP®, PMI-ACP®, and AWS Certified Solutions Architect. The goal is to strengthen Infosys’s delivery excellence and ensure their teams remain competitive and globally aligned."
    }
  ];

  const features = [
    "Bulk Enrollment Discounts",
    "Custom Course Content & Case Studies",
    "On-Demand & Live Virtual Training",
    "LMS Access for Internal Tracking",
    "Certification Path Mapping for Employees",
    "Dedicated Account Manager & Post-Training Support"
  ];

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
              <li className="nav-item"><a className="nav-link" href="/certification-process">Certification Process</a></li>
              <li className="nav-item"><a className="nav-link active" href="/partnerships">Partnerships</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link cta-nav" href="https://exam.pmiedu.com/">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="page-hero">
        <div className="container position-relative">
          <h1 className="display-4 mb-3" data-aos="fade-down">
            Our Corporate Partnerships & <span className="text-gradient">Enterprise Training Solutions</span>
          </h1>
          <p className="lead mb-0" data-aos="fade-up" data-aos-delay="200">
            Trusted by Industry Leaders
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          {/* Intro */}
          <div className="row mb-5" data-aos="fade-up">
            <div className="col-lg-10 mx-auto text-center text-light">
              <p className="lead">
                At PMIUS Services, we take pride in being the training partner of choice for some of the world’s most respected organizations. Through our corporate tie-ups, we offer customized certification programs, bulk enrollment discounts, and tailored learning paths to empower both employees and customers of leading companies.
              </p>
              <p>
                We understand that every organization has unique learning needs, which is why we offer flexible, scalable, and industry-relevant solutions that align with business goals.
              </p>
            </div>
          </div>

          {/* Partners */}
          <h2 className="text-center mb-5" data-aos="fade-up">Companies We Work With</h2>
          <div className="row g-4">
            {partners.map((partner, idx) => (
              <div className="col-md-6" key={idx} data-aos="fade-up" data-aos-delay={(idx+1)*100}>
                <div className="partner-card">
                  <h3 className="h4 text-gradient mb-3">{partner.name}</h3>
                  <h5 className="text-muted mb-3">{partner.tagline}</h5>
                  <p>{partner.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5" data-aos="fade-up">
            <div className="col-12 text-center text-light">
              <p className="lead">
                Each of these partnerships is built on a foundation of shared goals: to enhance professional skills, accelerate career growth, and build high-performing, future-ready teams. At PMIUS Services, we continue to expand our collaborations with like-minded organizations that value learning, leadership, and transformation.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="mb-4">Customized Training for <span className="text-gradient">Corporate Teams</span></h2>
              <p>We offer personalized training packages for organizations of all sizes, including:</p>
              <ul className="feature-list">
                {features.map((feature, idx) => (
                  <li key={idx}><FaCheckCircle color="#00d4aa" className="me-2" /> {feature}</li>
                ))}
              </ul>
              <p className="mt-3">Our programs cover domains like Project Management, Agile, Cloud, Cybersecurity, ITIL®, and more—helping your team stay future-ready.</p>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="p-5 text-center" style={{background: "rgba(255,255,255,0.05)", borderRadius:"20px", border:"1px solid rgba(0,212,170,0.2)"}}>
                <FaUsersCog size={80} className="text-gradient mb-4" />
                <h4>Empower Your Workforce</h4>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section text-center mt-5" data-aos="zoom-in">
            <h2 className="mb-4">Looking to Partner With Us?</h2>
            <p className="lead mb-4">Are you a business, educational institution, staffing agency, or job portal looking to add value-added certification training to your offerings?</p>
            <p className="mb-4">We are actively seeking new partners to expand our mission of accessible, high-quality certification training. Whether you're looking to train your own workforce or offer our courses to your audience, we’d love to collaborate with you.</p>
            <a href="/contact" className="btn btn-primary btn-lg">Contact Us Today</a>
          </div>
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
                <li><a href="/partnerships">Partnerships</a></li>
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
              <p><FaUsersCog /> +91-8882671925, +91-8604873445</p>
              <p><FaMapMarkerAlt /> 105 WeWork, Oberoi Commerz II, Goregaon East, Mumbai 400063</p>
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

export default PartnershipsPage;
