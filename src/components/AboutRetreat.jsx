import React from "react";
import "../Styles/AboutRetreat.css";

const AboutRetreat = () => {
    return (
        <section className="about-retreat">
            <div className="about-content1">
                <div className="about-content">
                    <h2>About</h2>

                    <p>
                        <strong>Wellness That Fits Real Life</strong>
                    </p>

                    <p>
                        Modern lifestyles are busy, demanding, and always moving —
                        but your health cannot be optional.
                    </p>

                    <p>
                        Traditional supplements often feel clinical, complicated,
                        and difficult to maintain consistently.
                    </p>

                    <p>
                        <strong>BIOME+</strong> changes that.
                    </p>

                    <p>
                        We combine nutritional science, powerful herbs,
                        and crave-worthy flavours to turn wellness into
                        a habit you actually enjoy.
                    </p>

                    <p>
                        Because true health is not built in 30 days —
                        it is built every single day.
                    </p>
                </div>

                <img
                    className="aboutimg"
                    src="images/bio4.png"
                    alt="BIOME+ Wellness"
                />
            </div>
        </section>
    );
};

export default AboutRetreat;