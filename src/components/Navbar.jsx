import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/eco-greenenergy-logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* LEFT SIDE */}
      <div className="nav-left">
        <img src={logo} alt="Eco GreenEnergy Logo" className="logo" />

        <div className="company-text">
          <h2>ECO GRE ENERGY BIOFUEL PVT LTD</h2>
          <span>(Registered by Govt. of India)</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <Link to="/" className="active">
          HOME
        </Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/service">SERVICE ▾</Link>
        <Link to="/project">PROJECT</Link>
        <Link to="/gallery">VIDEO GALLERY</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/apply" className="apply-btn">
          APPLY APPLICATION
        </Link>
      </div>
    </div>
  );
}
