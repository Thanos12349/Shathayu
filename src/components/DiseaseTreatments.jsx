import React from "react";
import { motion as Motion } from "framer-motion";

import "../Styles/DiseaseTreatments.css";

const DiseaseTreatments = () => {
  const diseases = [
    {
      icon: "fa-solid fa-syringe",
      title: "Diabetes",
      desc: "Ayurvedic diabetes treatment manages blood sugar, enhances insulin sensitivity, and prevents complications through diet, lifestyle, and herbs."
    },
    {
      icon: "fa-solid fa-brain",
      title: "Parkinson's Disease",
      desc: "Herbs, diet, yoga, and Ayurvedic therapies improve overall health. Shirodhara and Shirobasti Ayurvedic therapies externally halt neurodegeneration."
    },
    {
      icon: "fa-solid fa-head-side-cough",
      title: "Sinusitis",
      desc: "Ayurvedic Sinusitis Treatment uses herbs, diet, and nasal therapies, including Dhumapana, steam inhalation, and cleansing exercises, to soothe and expel doshas."
    },
    {
      icon: "fa-solid fa-head-side-virus",
      title: "Migraine",
      desc: "Ayurvedic migraine treatment involves Kaya Virechana, Pathya Ahara, and Vihara techniques. Shathayu provides customized, research-based treatment."
    },
    {
      icon: "fa-solid fa-venus-mars",
      title: "Infertility",
      desc: "Customized detox for males enhances sperm health and reproductive function with a blend of herbs like Ashwagandha, Shatavari, and more."
    }
  ];

  return (
    <section className="disease-section text-center">
      <h2 className="disease-heading">Disease Treatments</h2>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-md-4 text-md-end text-center">
            {diseases.slice(0, 2).map((d, i) => (
              <Motion.div
                key={i}
                className="disease-card mb-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <i className={`${d.icon} disease-icon`}></i>
                <h5>{d.title}</h5>
                <p>{d.desc}</p>
              </Motion.div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <Motion.img
              src="/images/yogaimg.png"
              alt="Yoga Pose"
              className="yoga-image"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="col-md-4 text-md-start text-center">
            {diseases.slice(2, 4).map((d, i) => (
              <Motion.div
                key={i}
                className="disease-card mb-5"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <i className={`${d.icon} disease-icon`}></i>
                <h5>{d.title}</h5>
                <p>{d.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
        <Motion.div
          className="disease-card infertility-card text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <i className={`${diseases[4].icon} disease-icon`}></i>
          <h5>{diseases[4].title}</h5>
          <p>{diseases[4].desc}</p>
        </Motion.div>
      </div>
    </section>
  );
};

export default DiseaseTreatments;
