import React, { useState } from 'react';
import '../Styles/Gallery.css'; 
const images = [
  { id: 1, src: '/images/12.webp', alt: 'Group activity outdoors' },
  { id: 2, src: '/images/12.webp', alt: 'Sunset view with pool' },
  { id: 3, src: '/images/12.webp', alt: 'Indoor yoga session' },
  { id: 4, src: '/images/12.webp', alt: 'Greeting with Namaste' },
  { id: 5, src: '/images/12.webp', alt: 'Aerial view of retreat' },
  { id: 6, src: '/images/12.webp', alt: 'Outdoor yoga pose' },
];

const Gallery = () => {
  const [hoveredImageId, setHoveredImageId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredImageId(id);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  return (
    <>
    <div className='outter-gallery-container'>
       <div className="gallery-container">
      <header className="gallery-header">
        <h2>Gallery</h2>
        <button className="view-more-btn">View More</button>
      </header>

      <div className="image-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`image-card1 ${hoveredImageId === image.id ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(image.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image.src} alt={image.alt} />           
           
          </div>
        ))}
      </div>
    </div>

    </div>
    </>
   
  );
};

export default Gallery;