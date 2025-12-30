import React from "react";
import { motion as Motion } from "framer-motion";
import "../Styles/FacilitiesInsur.css";

const facilities = [
  {
    title: "Cervical Spondylosis & Lumbar Spondylosis",
    des: ["Patients suffering from these spine-related disorders can benefit from personalized Ayurvedic therapies like Abhyanga, Swedana, and Basti, designed to relieve pain and inflammation. AYUSH Insurance covers treatments that help improve mobility and reduce stiffness."]
  },
  {
    title: "Migraine",
    des: ["Ayurvedic treatments like Shirodhara and Nasya help manage chronic migraines by addressing the root cause. With AYUSH Insurance coverage for migraines, you can seek relief without worrying about financial constraints."]
  },
  {
    title: "Brain injury due to accident or trauma",
    des: ["Comprehensive Ayurvedic rehabilitation programs can aid recovery from brain injuries, focusing on holistic healing and cognitive function improvement. AYUSH Insurance supports these essential therapies."]
  },
  {
    title: "Sciatica, OA (Osteoarthritis), RA (Rheumatoid Arthritis), & Gout (Hyperuricaemia)",
    des: ["Ayurvedic treatments such as Panchakarma, herbal remedies, and therapeutic massages can alleviate symptoms of these joint disorders. AYUSH Insurance ensures that patients have access to these beneficial treatments."]
  },
  {
    title: "Non-Alcoholic Fatty Liver Disease (NAFLD)",
    des: ["Ayurvedic approaches to managing NAFLD focus on detoxification and liver health. Treatments may include dietary recommendations, herbal supplements, and lifestyle modifications. AYUSH Insurance supports these holistic interventions."]
  },
  {
    title: "Parkinson’s Disease, Stroke, & Multiple Sclerosis",
    des: ["Ayurvedic therapies for neurodegenerative conditions aim to improve quality of life and manage symptoms. AYUSH Insurance facilitates access to these vital treatments."]
  },
  {
    title: "Fibromyalgia",
    des: ["Ayurvedic treatments for fibromyalgia focus on pain management and improving overall well-being. AYUSH Insurance covers these holistic approaches."]
  },
  {
    title: "Allergic Rhinitis & Sinusitis",
    des: ["Ayurvedic remedies for allergic rhinitis and sinusitis aim to reduce inflammation and improve respiratory health. AYUSH Insurance supports these natural treatments."  ]
  }
];


const FacilitiesInsur = () => {
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
            <h3>{facility.title}</h3>
            <p>{facility.des.join(" ")}</p>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesInsur;
