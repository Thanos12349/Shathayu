import '../Styles/WelcomeSection.css'; 
const RETREAT_IMAGE = 'images/12.webp'; 

const WelcomeSection = () => {
 
    const ScrollAnimation = ({ animateIn, children }) => (
        <div className={`animated-element ${animateIn}`}>
            {children}
        </div>
    );

    return (
        <section className="welcome-section">
            <p> Coming soon</p>
            {/* <div className="welcome-container">
                <ScrollAnimation animateIn="fade-in-left">
                    <div className="image-panel">
                        <img 
                            src={RETREAT_IMAGE} 
                            alt="Shathayu Retreat - Panoramic view" 
                            className="retreat-image"
                        />
                         
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fade-in-right">
                    <div className="content-panel">
                        <h2 className="welcome-title">
                            Welcome to Shathayu Retreat
                        </h2>
                        <p className="retreat-description">
                            Shathayu Retreat, the premier Ayurveda retreat in India since 1901, promotes holistic wellness encompassing mental, physical, spiritual, social, and lifestyle dimensions. Our serene retreat, nestled amidst lush greenery with panoramic hill and lake views, features over 20 beautifully designed rooms, a yoga hall, therapy center, and spiritual garden.
                        </p>
                        <p className="retreat-description">
                            At Shathayu, we combine tradition and culture to offer Ayurvedic and Naturopathy therapies, along with expertly crafted yoga sessions, all aimed at **revitalizing your mind, body, and spirit**. Conveniently located just 25 minutes from Bengaluru International Airport, we ensure a seamless travel experience.
                        </p>
                        <blockquote className="core-belief">
                            Our core belief, “HEAL TOGETHER LIVE FULLER,” emphasizes comprehensive health, including psychological and spiritual wellness, to create a healthy society.
                        </blockquote>
                    </div>
                </ScrollAnimation> */}
            {/* </div> */}
        </section>
    );
};

export default WelcomeSection;