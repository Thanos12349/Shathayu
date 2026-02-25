import React from "react";
import "../Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo-text">BIOME+</h2>
          <p className="footer-tagline">
            Complete Nutrition That Tastes as Good as It Works
          </p>

          <div className="footer-emails">
            <p><FaEnvelope /> D2C: hello@biomeplus.com</p>
            <p><FaEnvelope /> B2B & Export: business@biomeplus.com</p>
          </div>

          <div className="social-icons">
            <span>Follow Us:</span>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p>Tasty • Consistent • No Pills</p>
        <p>© BIOME+ All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;