
import React from 'react';
import '../Styles/LegacySection.css';

const NABH_LOGO = '../images/12.webp'; 

const LegacySection = () => {
    return (
        <section className="image-6910df-container">
        
            <h2 className="image-6910df-main-heading">
                At Shathayu Retreat
            </h2>

            <div className="image-6910df-main-content">
                
                <div className="image-6910df-legacy-panel">
                    <div className="image-6910df-legacy-number">125</div>
                    <div className="image-6910df-legacy-text">Years of Legacy</div>
                </div>
                <div className="image-6910df-philosophy-box">
                    <p>
                        We combine the wisdom of Ayurveda and modern biomedicine to assess health scientifically.
                    </p>
                    <p>
                        Our holistic healthcare streams, including Ayurveda, Yoga, and Naturopathy offer a diverse range of physical treatments and therapies.
                    </p>
                    <p>
                        All therapies are **personalized and tailored to individual needs**, specific ailments, and seasonal considerations while maintaining the authenticity of classical treatment methods.
                    </p>
                    <p>
                        Our professional team ensures customized service and provides a **specialized sattvik diet** designed by doctors to complement your health conditions.
                    </p>
                </div>
            </div>

            <div className="image-6910df-accreditation-row">
                
                <div className="image-6910df-accreditation-text-box">
                    <p>
                        We are a NABH (National Accreditation Board of Hospitals & Healthcare Providers of India) accredited Ayurveda Centre. This accreditation resonates with our commitment to quality healthcare safety.
                    </p>
                    <p>
                        We strictly adhere to scientific Ayurvedic principles and promote practice of Yoga.
                    </p>
                    <p>
                        Discover a haven of **Best health and wellness resort at Shathayu Retreat**, where we provide a perfect blend of ancient wisdom and modern expertise. Experience the transformation that awaits you.
                    </p>
                    <p>
                        Discover a haven of health and wellness at Shathayu Retreat, one of the **Best Ayurveda resorts in India**, where ancient wisdom harmonizes with modern expertise. Embark on a transformative journey that awaits you, and offers experiences that provide profound healing at our **Ayurveda Rejuvenation Retreat** near you.
                    </p>
                </div>

                <div className="image-6910df-nabh-logo-panel">
                    <img src={NABH_LOGO} alt="NABH Accredited" className="image-6910df-nabh-logo" />
                                     </div>
            </div>
        </section>
    );
};

export default LegacySection;