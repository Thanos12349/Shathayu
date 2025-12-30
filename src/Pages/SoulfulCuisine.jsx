import "./SoulfulCuisine.css";
import PropHeroSection from "../components/PropHeroSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const galleryImages = [
    "/images/tuhit11.jpeg",
    "/images/tuhit12.jpeg",
    "/images/tuhit3.jpeg",
    "/images/tuhit4.jpeg",
    "/images/tuhit5.jpeg",
];

const reviews = [
  {
    image: "/images/tuhitu23.jpeg",
    text: "The food felt light, nourishing, and deeply healing.",
  },
  {
    image: "/images/tuhit18.jpeg",
    text: "Every meal was soulful and aligned with wellness.",
  },
];

const SoulfulCuisine = () => {
  return (
    <>
    <Header/>
     <PropHeroSection
        title="Soulful Cuisine"
        description="Our Ayurvedic cuisine heals from within, crafted from fresh, pure,
            sattvic ingredients aligned with the body’s natural rhythms."
        image="/images/tuhit19.png"
      />
   
    <div className="sc-wrapper">

      {/* ===== Diet-in-Plate Concept ===== */}
      <section className="sc-plate">
        <div className="sc-plate-card">
          <img src="/images/tuhitu1.jpeg" alt="Balanced Ayurvedic Plate" />
          <p>
            Each plate is thoughtfully designed to balance doshas, improve
            digestion, and provide nourishment that supports healing and vitality.
          </p>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="sc-gallery">
        <h2>THE GALLERY</h2>

        <div className="sc-collage">
          {galleryImages.map((img, index) => (
            <div className="sc-collage-item" key={index}>
              <img src={img} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== Gallery Reviews ===== */}
      <section className="sc-reviews">
        <h2>Gallery Reviews</h2>

        <div className="sc-review-grid">
          {reviews.map((review, index) => (
            <div className="sc-review-card" key={index}>
              <img src={review.image} alt="Guest Review" />
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
    <Footer/>
     </>
  );
};

export default SoulfulCuisine;
