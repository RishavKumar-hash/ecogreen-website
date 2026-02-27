import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { IoLocationSharp, IoCall, IoTime } from "react-icons/io5";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>
          <IoLocationSharp /> Gola Road, Near PNB Bank,Mahua,Vaishali,Bihar
          (844122), India
        </span>

        <span>
          <IoTime /> Mon - Fri : 09.00 AM - 09.00 PM
        </span>
      </div>

      <div className="topbar-right">
        <span>
          <IoCall /> +91-9798426600 , +91-9006455664
        </span>

        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaWhatsapp />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}
