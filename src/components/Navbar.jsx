import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-text">PMI</span><span className="brand-accent">Edu</span>
        </Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/certifications">Certifications</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/certification-process">Certification Process</Link></li>
            <li className="nav-item"><Link class="nav-link" to="/partnerships">Partnerships</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><a className="nav-link cta-nav" href="https://exam.pmiedu.com/">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
