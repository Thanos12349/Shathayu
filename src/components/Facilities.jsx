import React from "react";
import { motion as Motion } from "framer-motion";
import "../Styles/Facilities.css";

const facilities = [
  "Walk-in closets",
  "Bathrooms with showers (hot/cold water available)",
  "Television and air conditioning",
  "Writing and bedside tables",
  "Electric kettle and in-room safe",
  "Complimentary Wi-Fi",
  "Limited-hours room service",
  "Sattvic meals",
  "Laundry facilities",
];

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h2 className="facilities-title">Facilities Included in Your Stay</h2>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <Motion.div
            key={index}
            className="facility-card"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            <p>{facility}</p>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
