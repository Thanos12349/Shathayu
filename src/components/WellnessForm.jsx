import React from "react";
import "../Styles/WellnessForm.css";

const WellnessForm = () => {
  return (
    <section className="wellness-section">
      <div className="overlay">
        <div className="container">
          <div className="content">
            <div className="text-section">
              <h2>Transform Your Life with Holistic Wellness!</h2>
              <p>
                Explore our tailored programs that restore the balance in your body, mind, and soul.
                Start your journey towards rejuvenation and healing!
              </p>
            </div>

            <form className="form-section">
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>

              <div className="form-row">
                <input type="tel" placeholder="Phone" />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Location" />
              </div>

              <div className="form-row">
                <select>
                  <option>Select Packages</option>
                  <option>Ayurvedic Detox</option>
                  <option>Stress Relief</option>
                  <option>Weight Management</option>
                </select>
              </div>

              <div className="form-row">
                <textarea placeholder="Message"></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessForm;
