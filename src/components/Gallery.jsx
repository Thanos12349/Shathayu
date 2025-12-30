// import React, { useState, useEffect } from "react";
// import '../Styles/Gallery.css'; 
// // import { useEffect, useState } from "react";
// // import "./Gallery.css";
// export default function Gallery() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     // start first animation
//     setShow(true);

//     const interval = setInterval(() => {
//       // reset position
//       setShow(false);

//       // retrigger animation
//       setTimeout(() => {
//         setShow(true);
//       }, 1500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="gallery-container">
//       <div className={`panel left ${show ? "show" : ""}`}>
//         {[1, 2, 3, 4].map((n) => (
//           <img key={n} src={`https://picsum.photos/200?random=${n}`} />
//         ))}
//       </div>

//       <div className={`panel right ${show ? "show" : ""}`}>
//         {[5, 6, 7, 8].map((n) => (
//           <img key={n} src={`https://picsum.photos/200?random=${n}`} />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import "../Styles/Gallery.css";

export default function Gallery() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // start first animation
    setShow(true);

    const interval = setInterval(() => {
      // reset position
      setShow(false);

      // retrigger animation
      setTimeout(() => {
        setShow(true);
      }, 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
      <div className={`panel left ${show ? "show" : ""}`}>
        {[1, 2, 3, 4].map((n) => (
          <img
            key={n}
            src={`/images/img${n}.jpeg`}
            alt={`gallery-${n}`}
          />
        ))}
      </div>

      <div className={`panel right ${show ? "show" : ""}`}>
        {[5, 6, 7, 8].map((n) => (
          <img
            key={n}
            src={`/images/img${n}.jpeg`}
            alt={`gallery-${n}`}
          />
        ))}
      </div>
    </div>
  );
}
