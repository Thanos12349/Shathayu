import React from "react";
import "../Styles/AboutRetreat.css";

const AboutRetreat = () => {
    return (
        <section className="about-retreat">
            <div className="about-content1">
                <div className="about-content">
                    <h2>About Shathayu Retreat</h2>
                    <p>
                        Shathayu retreat is an ayurveda and yoga retreat surrounded by greenery, hills, and a tranquil lake that offers pure air,
                        a serene atmosphere, and pleasant visuals. With over 20 exquisitely designed rooms, a dedicated yoga hall, a therapy centre,
                        and a spiritual garden, our retreat provides an idyllic ambience for your rejuvenation.
                    </p>
                    <p>
                        Shathayu Retreat offers programs to treat specific diseases, such as arthritis and migraine, using traditional physical
                        techniques and herbal medicines. It also offers packages that help manage chronic conditions like diabetes and chronic pain.
                        The programs target the cause of the diseases, improve overall health, and impart lasting positive effects on the body.
                    </p>
                    
                </div>
                <button className="know-more-btn">Know More</button>

            </div>


            <div className="legacy-section">
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
            </div>
        </section>
    );
};

export default AboutRetreat;
