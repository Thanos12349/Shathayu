import React from "react";
import "../Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

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
            <p>
              <FaEnvelope />  <a href="mailto:info@biomeplus.co">info@biomeplus.co</a>
            </p>
            <p>
              <FaEnvelope />  <a href="mailto:business@biomeplus.com">customercare@fdhsnet.com</a>
            </p>
          </div>

          <div className="social-icons">
            <span>Follow Us:</span>

            <a
              href="https://www.instagram.com/tuhitubiome_?igsh=MWY0em01MzZqOGto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1AhxLkKpWq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://youtube.com/@tuhitubiome?si=UmVhBmVhgFTnvDNl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/in/tuhitu-biome-a145193b4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
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