import React from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => {

  return (
    <div>
      <div className="contact-container">

        <div className="contact-info">
          <h2>Get In Touch With Us</h2>
          {/* <p>Fill out the form and we will get back to you as soon as possible.</p> */}

          <h3>BIOME+</h3>
          <p>
            Gurgaon | Chandigarh | Pune | Dubai
          </p>

          <p>
            📞 <a href="tel:+919217306126">+91 9217306126</a>
          </p>

          <p>
            ✉️ <a href="mailto:info@biomeplus.co">info@biomeplus.co</a>
          </p>
          <p>
            ✉️ <a href="mailto:customercare@fdhsnet.com">customercare@fdhsnet.com</a>
          </p>
       

        </div>

      </div>
    </div>
  );
};

export default ContactForm;