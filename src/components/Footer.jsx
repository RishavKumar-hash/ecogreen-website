import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ADDRESS */}
        <div className="footer-col">
          <h3>Address</h3>

          <p>
            <IoLocationSharp /> Gola Road, Near PNB Bank
            <br />
            Mahua,Vaishali <br />
            Bihar - 844122
          </p>

          <p>
            <IoCall /> +91-9798426600 , +91-9006455664
          </p>
          <p>
            <IoMail /> ecogreenergybiofuel@gmail.com
          </p>

          <div className="social-icons">
            <FaTwitter />
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link to="/about">› About Us</Link>
          <Link to="/contact">› Contact Us</Link>
          <Link to="/service">› Our Services</Link>
          <Link to="/privacy">› Privacy Policy</Link>
          <Link to="/terms">› Terms & Condition</Link>
        </div>

        {/* PROJECT GALLERY */}
        <div className="footer-col">
          <h3>Project Gallery</h3>

          <div className="gallery">
            <img src="/gallery/g1.png" />
            <img src="/gallery/g2.png" />
            <img src="/gallery/g3.jpg" />
            <img src="/gallery/g4.jpg" />
            <img src="/gallery/g5.png" />
            <img src="/gallery/g6.jpg" />
          </div>
        </div>
      </div>

      {/* PAYMENT LINKS */}
      <div className="footer-bottom">
        <p>
          Payment Policies :<Link to="/terms"> Terms & Conditions</Link> ||
          <Link to="/privacy"> Privacy Policy</Link> ||
          <Link to="/pricing"> Pricing</Link> ||
          <Link to="/refund"> Refunds</Link> ||
          <Link to="/shipping"> Shipping</Link> ||
          <Link to="/cancellation"> Cancellations</Link>
        </p>

        <hr />

        <p>© Eco Greenergy Biofuels Corporation, All Right Reserved.</p>
      </div>

      {/* SCROLL BUTTON */}
      <button
        className="scrollTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
}
