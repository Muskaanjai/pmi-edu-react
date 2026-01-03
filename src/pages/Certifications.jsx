import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlus, faProjectDiagram, faCertificate, faSyncAlt, faCrown, faChessKing,
  faUsersCog, faMedal, faBullseye, faExpandArrowsAlt, faDharmachakra, faShieldAlt,
  faUserSecret, faLock, faUserShield, faExclamationTriangle, faCogs, faTools,
  faChartLine, faTrophy, faStar, faChartBar, faClipboardList, faBusinessTime, 
  faDatabase, faChartPie, faChartArea, faCalculator, faSearch, faBullhorn, faPenFancy,
  faHandshake, faUsers, faUserTie, faDollarSign, faHeart, faFileInvoiceDollar,
  faCode, faTruck, faArrowUp, faAward, faRuler, faPills, faHeartbeat, faStethoscope,
  faXRay, faMicroscope, faHospital, faUserMd, faShieldVirus, faClipboardCheck,
  faHandsHelping, faWheelchair, faCalendarAlt, faBriefcase, faUndo, faHelmetSafety,
  faChair, faLungs, faUserNurse, faLaptopCode, faSearchDollar, faHardHat 
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

AOS.init({ duration: 1000, once: true });

const certifications = [
  {
    title: "Project Management Professional (PMP)®",
    provider: "Project Management Institute (PMI)",
    icon: faProjectDiagram,
    description:
      "The gold standard in project management certification, demonstrating your competence to lead and direct projects.",
    features: ["35 PDUs required", "4-year degree + 3 years PM experience", "Global recognition", "Salary increase potential"]
  },
  {
    title: "Certified Associate in Project Management (CAPM)®",
    provider: "Project Management Institute (PMI)",
    icon: faCertificate,
    description:
      "Entry-level certification for project practitioners looking to demonstrate their understanding of project management.",
    features: ["23 hours of PM education", "No experience required", "Career foundation", "PMI credential"]
  },
  // ... add all other certifications here
];

const itemsPerPage = 10;

const CertificationsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const displayedCertifications = certifications.slice(0, (currentPage + 1) * itemsPerPage);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* Navigation */}
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
              <li className="nav-item"><a className="nav-link active" href="/certifications">Certifications</a></li>
              <li className="nav-item"><a className="nav-link" href="/certification-process">Certification Process</a></li>
              <li className="nav-item"><a className="nav-link" href="/partnerships">Partnerships</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link cta-nav" href="https://exam.pmiedu.com/">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title text-gradient" data-aos="fade-up">Professional Certifications</h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Advance your career with industry-recognized certifications from leading organizations worldwide
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="certifications-grid">
        <div className="container">
          <div className="row">
            {displayedCertifications.map((cert, index) => (
              <div className="col-lg-6 col-xl-4 mb-4" key={index} data-aos="fade-up" data-aos-delay={Math.random() * 200}>
                <div className="cert-card">
                  <div className="cert-icon">
                    <FontAwesomeIcon icon={cert.icon} size="2x" />
                  </div>
                  <h5 className="cert-title">{cert.title}</h5>
                  <p className="cert-provider">{cert.provider}</p>
                  <p className="cert-description">{cert.description}</p>
                  <ul className="cert-features">
                    {cert.features.map((feature, i) => (
                      <li key={i}><i className="fas fa-check"></i>{feature}</li>
                    ))}
                  </ul>
                  <a href="#" className="enquire-btn">Enquire Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      {displayedCertifications.length < certifications.length && (
        <section className="load-more-section">
          <div className="container text-center">
            <button className="load-more-btn" onClick={loadMore}>
              <FontAwesomeIcon icon={faPlus} className="me-2" /> Load More Certifications
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-brand">
                <h3 className="footer-logo"><span className="brand-text">PMI</span><span className="brand-accent">Edu</span></h3>
                <p className="footer-description">
                  Empowering professionals worldwide with globally recognized PMI certifications and expert training.
                </p>
              </div>
            </div>
            {/* Other footer columns here */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default CertificationsPage;
