import React from "react";
import "../Styles/AboutRetreat.css";

const AboutRetreat = () => {
    return (
        <section className="about-retreat">
            <div className="about-content1">
                <div className="about-content">
                    <h2>About Seyraya Retreat</h2>
                    <p>
                       Tuhitu Ayurveda is a serene wellness and healing retreat located in the tranquil Tri-City area, surrounded by greenery, calm air, and pleasant scenic views. Designed as a sanctuary for rejuvenation and restoration, Tuhitu offers the perfect blend of Ayurveda, Yoga, and Physiotherapy in a luxurious and peaceful setting.

With 107 thoughtfully designed rooms, a dedicated yoga hall, a fully equipped therapy center, and a spiritual garden, every corner of Tuhitu Ayurveda invites relaxation, healing, and inner balance.

                    </p>
                    <p>
                        Our programs are thoughtfully curated to support old-age wellness, focusing on conditions such as Parkinson’s, arthritis, and migraine, through traditional Ayurvedic therapies, specialized physical treatments, and herbal medicines.

Beyond treatment, Tuhitu Ayurveda welcomes guests for long-stay wellness experiences and staycations, offering a blend of comfort, care, and conscious living. Whether for healing or holistic rest, Tuhitu is where rejuvenation becomes a way of life.
                    </p>
                    
                </div>
                <img className="aboutimg" src="images/offe.png" alt="Retreat View 2" />

            </div>


            {/* <div className="legacy-section">
                <div className="legacy-left">
                    <h3>Backed by</h3>
                    <h1>125</h1>
                    <p>Years of Legacy</p>
                </div>

                <div className="legacy-right">
                    <p>
                        Along its journey of 125 years, Shathayu has expanded its knowledge of Ayurveda and excelled in the art of practising a
                        wide range of Ayurveda therapies. We have opened avenues for targeted therapies as well as wellness programs to rejuvenate
                        body, mind, and soul.
                    </p>
                    <p>
                        Our perpetual effort to excel and find solutions to treat specific diseases based on Ayurveda principles has culminated
                        in various treatment programs. In addition, we have developed wellness programs to enhance the quality of life using
                        natural methods.
                    </p>
                </div>
            </div> */}
        </section>
    );
};

export default AboutRetreat;
