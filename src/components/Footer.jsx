import React from "react";
import "../Styles/Footer.css";
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="/images/logo.png"
            alt="Shathayu Logo"
            className="footer-logo"
          />
          <p>
            NABH Accredited
Registered with NABH (National Accreditation Board for Hospitals & Healthcare Providers), ensuring the highest standards of safety, quality, and patient care.

Insurance Facility Available
Insurance claims are available, subject to the terms and conditions of your underlying medical insurance policy.
            
          </p>
          <div className="social-icons">
            <a href="#"><FaLinkedin /></a>

            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>About Seyraya</li>
            <li>Gallery</li>
            <li>Panchakarma</li>
            <li>Yoga & Naturopathy</li>
            <li>Disease Treatment</li>
            <li>Blogs</li>
            <li>Activities</li>
            <li>Places to explore</li>
            <li>Terms & Conditions</li>
            <li>Cancellation Policy</li>
            <li>Membership</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Location" />
            <select>
              <option>Select Packages</option>
            </select>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-info">
          <p><FaPhone /> +91 88841 33300</p>
          <p><FaEnvelope /> info@Seyrayaretreat.com</p>
          <p>
            <FaMapMarkerAlt /> Seyraya Ayurveda Yoga Retreat, S.No.261, Avathi,
            Devanahalli, Bangalore – 562110, Karnataka, INDIA
          </p>
        </div>
        <p className="copyright">
          Copyright ©2025 Seyraya Retreat. All Rights Reserved. Designed by Fablesquare
        </p>
      </div>
    </footer>
  );
};

export default Footer;
