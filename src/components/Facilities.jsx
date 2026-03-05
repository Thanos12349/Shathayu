// import React from "react";
// import { motion as Motion } from "framer-motion";
// import "../Styles/Facilities.css";

// const facilities = [
//   "Walk-in closets",
//   "Bathrooms with showers (hot/cold water available)",
//   "Television and air conditioning",
//   "Writing and bedside tables",
//   "Electric kettle and in-room safe",
//   "Complimentary Wi-Fi",
//   "Limited-hours room service",
//   "Sattvic meals",
//   "Laundry facilities",
// ];

// const Facilities = () => {
//   return (
//     <div className="facilities-container">
//       <h2 className="facilities-title">Facilities Included in Your Stay</h2>

//       <div className="facilities-grid">
//         {facilities.map((facility, index) => (
//           <Motion.div
//             key={index}
//             className="facility-card"
//             initial={{ rotateY: 90, opacity: 0 }}
//             whileInView={{ rotateY: 0, opacity: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{
//               duration: 0.8,
//               delay: index * 0.1,
//               ease: [0.25, 0.8, 0.25, 1],
//             }}
//           >
//             <p>{facility}</p>
//           </Motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Facilities;
import React from "react";
import { motion as Motion } from "framer-motion";
import "../Styles/Facilities.css";

const facilities = [
  { text: "Walk-in closets", img: "/images/wkc.png" },
  { text: "Bathrooms with showers", img: "/images/bands.png" },
  { text: "Television and ACs", img: "/images/tv.png" },
  { text: "Writing and bedside tables", img: "/images/r.png" },
  { text: "Electric kettle in-room", img: "/images/e.png" },
  { text: "Complimentary Wi-Fi", img: "/images/w.png" },
  { text: "Limited-hours room service", img: "/images/s.png" },
  { text: "Sattvic meals", img: "/images/f.png" },
  { text: "Laundry facilities", img: "/images/l.png" },
];

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h2 className="facilities-title">Facilities Included in Your Stay</h2>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <Motion.div
            key={index}
            className="facility-card1"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            {/* Image inside card */}
            <img src={facility.img} alt={facility.text} className="facility-img" />

            {/* Overlay text */}
            <div className="facility-overlay">
              <p>{facility.text}</p>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
