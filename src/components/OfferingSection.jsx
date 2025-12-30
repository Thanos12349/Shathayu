import React from 'react';
import '../Styles/OfferingsSection.css'; 

const offeringsData = [
  {
    icon: '🧘', 
    title: 'Customised Packages',
    description: 'Experience personalised wellness with tailored Ayurvedic treatments. Our experts assess your unique needs to create bespoke therapy plans focusing on your specific health goals.',
  },
  {
    icon: '🏞️', 
    title: 'Healing through Energy Approach',
    description: 'Tuhitu may be a modest space, but it carries warmth, care, and spiritual grounding. Every visit feels lighter — emotionally, mentally, and physically — as the therapies and atmosphere balance your inner energies.',
  },
  {
    icon: '🧘',
    title: 'Community & Compassion Approach',
    description: 'A comforting place for healing and belonging. At Tuhitu, you’re not just cared for — you’re understood. The peaceful setting and heartfelt presence of our team help nurture a sense of comfort and quiet joy in daily healing routines.',
  },
];

const OfferingsSection = () => {
  return (
    <section className="offerings-section">
      <div className="offerings-container">
        
        <div className="offerings-images">
          <div className="image-card image-1">
            <img src="images/offe.png" alt="Retreat View 1" />
          </div>
          <div className="image-card image-2">
            <img src="images/offe.png" alt="Retreat View 2" />
          </div>
        </div>

        <div className="offerings-content">
          <div className='offering-content1'>

        
          <h2 className="offerings-heading">Explore Our Offerings</h2>
          <p className="offerings-subheading">
            Customized Wellness Experiences — Discover the Benefits of Our Holistic Approach
          </p>
            </div>

          <div className="offerings-list">
            {offeringsData.map((offering, index) => (
              <div key={index} className="offering-item">
                <div className="offering-icon">{offering.icon}</div> 
                <div className="offering-text">
                  <h3 className="offering-title">{offering.title}</h3>
                  <p className="offering-description">{offering.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OfferingsSection;
