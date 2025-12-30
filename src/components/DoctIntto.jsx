import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/DoctIntro.css";

const DoctIntro = () => {
  const doctors = [
    {
      image: "images/12.webp",
      name: "Dr. John Doe",
      title: "Chief Ayurvedic Physician",
      experience: "20 Years of Experience",
      description: "Expert in Panchakarma and holistic healing.",
    },
    {
      image: "images/12.webp",
      name: "Dr. Sarah Mehta",
      title: "Ayurvedic Nutrition Specialist",
      experience: "15 Years of Experience",
      description:
        "Focuses on Ayurvedic diet and lifestyle management for chronic disorders.",
    },
    {
      image: "images/12.webp",
      name: "Dr. Rajesh Kumar",
      title: "Holistic Wellness Coach",
      experience: "18 Years of Experience",
      description:
        "Specializes in detoxification, rejuvenation, and yoga-based healing.",
    },
    {
      image: "images/12.webp",
      name: "Dr. Rekha Sharma",
      title: "Therapeutic Yoga Specialist",
      experience: "12 Years of Experience",
      description:
        "Expert in combining yoga and Ayurveda for natural wellness.",
    },
    {
      image: "images/12.webp",
      name: "Dr. Anil Patel",
      title: "Wellness Consultant",
      experience: "22 Years of Experience",
      description: "Specializes in stress management and herbal medicine.",
    },
    {
      image: "images/12.webp",
      name: "Dr. Anil Patel",
      title: "Wellness Consultant",
      experience: "22 Years of Experience",
      description: "Specializes in stress management and herbal medicine.",
    },
  ];

  const visitDoctor = [
    {
        image: "images/12.webp",
        name: "Dr. Maya Iyer",
        title: "Visiting Consultant - Ayurvedic Specialist",
        experience: "25 Years of Experience",
        description: "Renowned for her expertise in traditional Ayurvedic therapies and treatments.",
    },
    {
        image: "images/12.webp",
        name: "Dr. Vikram Singh",
        title: "Visiting Consultant - Panchakarma Expert",
        experience: "30 Years of Experience",
        description: "Globally recognized for his work in Panchakarma and holistic healing.",
    },
    {
        image: "images/12.webp",
        name: "Dr. Leena Nair",
        title: "Visiting Consultant - Lifestyle Disorders Specialist",
        experience: "28 Years of Experience",
        description: "Specializes in Ayurvedic management of lifestyle disorders with a personalized approach.",
    }

  ];


  return (
    <div className="doct-intro-container">
      <h2 className="doct-intro-heading">Meet Our Experts at Shathayu Retreat</h2>
      <p className="doct-intro-text">
        At Shathayu Retreat, we take pride in having some of the best Ayurveda
        doctors in India, renowned for their expertise in holistic healing,
        Panchakarma therapies, and the treatment of lifestyle disorders. With
        decades of experience and global recognition, our team ensures you
        receive the highest standard of Ayurvedic care.
      </p>

      <div className="doct-intro-list">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
      <h2 className="doct-intro-heading">Visiting Consultant</h2>
      <div className="doct-intro-list">
        {visitDoctor.map((doctor,index)=>(
            <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctIntro;
