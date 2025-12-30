import React, { useState, useEffect } from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState('');
  const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    package: '',
    country: '',
    city: '',
    arrivalDate: '',
    departureDate: '',
    adults: '',
    rooms: '',
    requirements: '',
  });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const n2 = Math.floor(Math.random() * 10) + 1; // 1-10
    setNum1(n1);
    setNum2(n2);
    setCaptchaInput('');
    setIsCaptchaCorrect(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (e) => {
    const value = e.target.value;
    setCaptchaInput(value);
    setIsCaptchaCorrect(parseInt(value) === num1 * num2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Book Your Stay</h2>

          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-row">
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
            >
              <option value="">Select Package</option>
              <option value="package1">Package 1</option>
              <option value="package2">Package 2</option>
            </select>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="input-row">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-row">
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="adults"
              placeholder="No of Adults"
              value={formData.adults}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-row">
            <input
              type="number"
              name="rooms"
              placeholder="No of Rooms"
              value={formData.rooms}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="requirements"
            placeholder="Special Requirements"
            value={formData.requirements}
            onChange={handleChange}
          ></textarea>

          {/* Captcha */}
          <div className="captcha">
            <span>{num1} × {num2} = </span>
            <input
              type="text"
              placeholder="Ans"
              value={captchaInput}
              onChange={handleCaptchaChange}
            />
            <button
              type="button"
              onClick={generateCaptcha}
              style={{ marginLeft: '10px', padding: '5px 10px' }}
            >
              Refresh
            </button>
          </div>

          <button type="submit" disabled={!isCaptchaCorrect}>
            {isCaptchaCorrect ? 'Submit' : 'Solve Captcha to Enable'}
          </button>
        </form>

        <div className="contact-info">
          <h2>Get In Touch With Us</h2>
          <p>Fill out the form and we will get back to you as soon as possible.</p>

          <h3>Seyraya Retreat</h3>
          <p>Seyraya Ayurveda Yoga Retreat, S.No.261, Avathi, Devanahalli, Bangalore – 562110.</p>
          <p>📞 +91 88841 33300</p>
          <p>✉️ info@Seyrayaretreat.com</p>

          <h3>Corporate Office</h3>
          <p>Seyraya Ayurveda #578, 4th Cross, HMT Layout, CBI Main Road, R.T.Nagar, Bangalore -560032.</p>
          <p>📞 +91 80236 35171</p>
          <p>✉️ info@Seyrayaretreat.com</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Shathayu Retreat Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8980916200223!2d77.6590478152012!3d13.220601090641168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae10c31231f2ff%3A0x2233f09f47b15e7c!2sShathayu%20Ayurveda%20Yoga%20Retreat!5e0!3m2!1sen!2sin!4v1699364497927!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
