import "./BehindSeyraya.css";
import Header from "../components/Header";
import PropHeroSection from "../components/PropHeroSection";
import Footer from "../components/Footer";

const BehindSeyraya = () => {
    return (
        <>
            <Header />
            <PropHeroSection
                title="Behind Seyraya"
                description="Our Ayurvedic cuisine heals from within, crafted from fresh, pure,
            sattvic ingredients aligned with the body’s natural rhythms."
                image="/images/06.png"
            />
            <section className="seyraya-wrapper">
                
                <div className="seyraya-intro">
                    <h2>Behind Seyraya</h2>
                    <p>
                        Seyraya is a sanctuary where ancient healing meets modern care. Rooted
                        in the timeless wisdom of Ayurveda and supported by evidence-based
                        wellness sciences, Seyraya was created with one purpose — to help
                        individuals heal deeply, live consciously, and transform their
                        wellbeing from the inside out.
                    </p>

                    <p className="soft-text">
                        We believe that true healing is not a treatment, but a journey. A
                        journey that requires nurture, personalization, and an environment
                        that restores balance naturally.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="seyraya-images">
                    <img src="/images/tuhit8.jpeg" alt="Seyraya healing space" />
                    <img src="/images/tuhit9.jpeg" alt="Ayurveda therapy" />
                    <img src="/images/tuhit11.jpeg" alt="Nature healing" />
                    <img src="/images/tuhit13.jpeg" alt="Wellness sanctuary" />
                </div>

                {/* Philosophy */}
                <div className="seyraya-philosophy">
                    <h3>The Seyraya Philosophy</h3>
                    <span className="highlight-line">
                        Healing Shouldn’t Be Temporary — It Should Be Transformational.
                    </span>

                    <p>
                        At Seyraya, we believe true wellness begins when the body, mind and
                        emotions come back into perfect alignment.
                    </p>

                    <ul className="philosophy-points">
                        <li>Ancient Ayurvedic science</li>
                        <li>Evidence-based healing modalities</li>
                        <li>Nature-driven rejuvenation</li>
                        <li>Personalized treatment plans</li>
                    </ul>

                    <p className="soft-text">
                        Every guest receives doctor-supervised care and a custom healing
                        roadmap based on their body type, medical history, stress levels and
                        wellness goals.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BehindSeyraya;
