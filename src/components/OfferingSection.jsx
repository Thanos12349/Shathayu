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
    title: 'Rejuvenating Location',
    description: 'Set in a tranquil, natural environment ideal for rejuvenation and outdoor activities like hiking or trekking. The lush greenery and serene scenery enhance healing and relaxation.',
  },
  {
    icon: ' 🧘',
    title: 'Holistic Approaches',
    description: 'Embrace comprehensive healing with our holistic therapies, integrating traditional Ayurvedic treatments, yoga, and meditation. We focus on nurturing your mind, body, and spirit for complete wellness.',
  },
];

const OfferingsSection = () => {
  return (
    <section className="offerings-section">
      <div className="offerings-container">
        
        <div className="offerings-images">
          <div className="image-card image-1">

            <img src="images/12.webp" alt="Retreat View 1" />
          </div>
          <div className="image-card image-2">
            
            <img src="images/12.webp" alt="Retreat View 2" />
          </div>
        </div>

        <div className="offerings-content">
          <h2 className="offerings-heading">Explore Our Offerings</h2>
          <p className="offerings-subheading">
            Customized Wellness Experiences Discover the Benefits of Our Holistic Approach
          </p>

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