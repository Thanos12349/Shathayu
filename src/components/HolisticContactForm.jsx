import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import '../Styles/HolisticContactForm.css';

const packageOptions = [
  'Select Packages', 
  'Mind-Body Balance',
  'Total Rejuvenation',
  'Stress Relief & Detox',
  'Customized Wellness Plan',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HolisticContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    package: packageOptions[0],
    message: '',
    isRobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
  };

  return (
    <div className="holistic-page-container">
      <div className="holistic-bg-image"></div>
      <div className="holistic-overlay"></div>

      <Motion.div
        className="holistic-content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="holistic-text-section">
          <Motion.h1 variants={itemVariants}>
            Transform Your Life with Holistic Wellness!
          </Motion.h1>
          <Motion.p variants={itemVariants}>
            Explore our tailored programs that restore the **balance in your body, mind, and soul**. Start your journey towards rejuvenation and healing!
          </Motion.p>
        </div>

        <Motion.div className="holistic-form-section" variants={itemVariants}>
          <form onSubmit={handleSubmit} className="holistic-form">
             <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-half"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-half"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />

            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
            >
              {packageOptions.map((option) => (
                <option key={option} value={option} disabled={option === packageOptions[0]}>
                  {option}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>

            {/* reCAPTCHA Placeholder */}
        

            <Motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </Motion.button>
          </form>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default HolisticContactForm;