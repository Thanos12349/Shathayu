import React from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => {

  return (
    <div>
      <div className="contact-container">

        <div className="contact-info">
          <h2>Get In Touch With Us</h2>
          <p>Fill out the form and we will get back to you as soon as possible.</p>

          <h3>BIOME+</h3>
          <p>
            TUHITU BIOME+, S.No.261, Avathi, Devanahalli, Bangalore – 562110.
          </p>

          <p>
            📞 <a href="tel:+918884133300">+91 88841 33300</a>
          </p>

          <p>
            ✉️ <a href="mailto:info@biome.com">info@biome.com</a>
          </p>

          <h3>Corporate Office</h3>

          <p>
            TUHITU BIOME+ #578, 4th Cross, HMT Layout, CBI Main Road, R.T.Nagar,
            Bangalore -560032.
          </p>

          <p>
            📞 <a href="tel:+918023635171">+91 80236 35171</a>
          </p>

          <p>
            ✉️ <a href="mailto:info@biome.com">info@biome.com</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;