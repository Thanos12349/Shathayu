import React from 'react';
import '../Styles/AccommodationOptions.css'; // Link to the external CSS file

// Data for the three room types
const roomOptions = [
  {
    type: "Standard Room",
    description: "Our Standard Rooms provide a cozy, comfortable space designed for simplicity and relaxation. Ideal for guests seeking a peaceful rest, these rooms, which are 280 Sq.ft, feature all the essential amenities necessary for a restful stay while keeping you close to nature.",
    imageUrl: "images/offe.png", // Placeholder - Update path to your image
    altText: "Image of a Standard Room with twin beds"
  },
  {
    type: "Deluxe Room",
    description: "Step into our Deluxe Rooms for an elevated experience of comfort and style. These rooms are very spacious and offer stunning clearing views of the surrounding greenery. Deluxe rooms are 422 Sq.ft, perfect for unwinding after a day of wellness therapies.",
    imageUrl: "images/offe.png", // Placeholder - Update path to your image
    altText: "Image of a Deluxe Room with a king bed and lounge area"
  },
  {
    type: "Luxury Room",
    description: "For those seeking the finest experience, our Luxury Rooms offer unmatched elegance and tranquility. These rooms, which are 543 Sq.ft, feature luxurious interiors, modern amenities, and private balcony facing lake and hills for relaxation and rejuvenation.",
    imageUrl: "images/offe.png", // Placeholder - Update path to your image
    altText: "Image of a Luxury Room with a large balcony and view"
  },
];

const AccommodationOptions = () => {
  return (
    <section className="accommodation-section">
      <h2 className="accommodation-heading">Our Accommodation Options</h2>
      
      <div className="card-container">
        {roomOptions.map((room, index) => (
          <div key={index} className="accommodation-card">
            {/* Image Wrapper */}
            <div className="card-image-wrapper">
              {/* NOTE: You must update the 'src' path below to your actual image file locations */}
              <img src={room.imageUrl} alt={room.altText} className="card-image" />
            </div>

            {/* Content */}
            <div className="card-content">
              <h3 className="room-type-heading">{room.type}</h3>
              <p className="room-description">{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccommodationOptions;