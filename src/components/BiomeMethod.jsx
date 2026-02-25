import React from "react";
import "../Styles/BiomeMethod.css";

const BiomeMethod = () => {
    return (
        <section className="biome-method">
            <div className="biome-container ">

                <div className="method-section">
                    <div className="method-content fade-up">
                        <h2>THE BIOME+ METHOD</h2>
                        <p className="method-flow">
                            Habit → Taste → Consistency → Transformation
                        </p>
                        <p className="method-desc">
                            Our gummies are designed for high absorption, precise functional dosing,
                            bioavailable nutrients, and safe daily long-term use.
                        </p>
                        <p className="highlight-line">
                            When wellness tastes good, you don’t skip it.
                            When you don’t skip it — your body transforms.
                        </p>
                    </div>

                    <div className="method-image">
                        <img src="/images/bio.png" alt="Biome Method" />
                    </div>
                </div>

                <div className="method-section1 fade-up">
                    <h3>OUR FUNCTIONAL GUMMY SYSTEM</h3>
                    <p className="section-sub">Complete Nutrition for Every Body & Every Age</p>

                    <div className="grid-3">

                        <div className="card">
                            <h4>DAILY FOUNDATIONS</h4>
                            <ul>
                                <li>Multivitamin Gummies</li>
                                <li>Multivitamin Women</li>
                                <li>Kids Multivitamin</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>BEAUTY & METABOLIC SUPPORT</h4>
                            <ul>
                                <li>Biotin Gummies</li>
                                <li>Weight Management Gummies</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>CALM SLEEP STRESS</h4>
                            <ul>
                                <li>Ashwagandha Gummies</li>
                                <li>Magnesium Gummies</li>
                                <li>Stress Relief Gummies</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>STRENGTH ENERGY VITALITY</h4>
                            <ul>
                                <li>Shilajit Gummies</li>
                                <li>Moringa Gummies</li>
                            </ul>
                        </div>

                        <div className="card">
                            <h4>DIGITAL LIFESTYLE SUPPORT</h4>
                            <ul>
                                <li>Eye Care Gummies</li>
                            </ul>
                        </div>

                    </div>

                    <p className="section-note">
                        All with a delicious taste that turns nutrition into a daily reward.
                    </p>
                </div>

                <div className="benefits-section fade-up">
                    <div className="benefits-content">
                        <h3>CORE BENEFITS</h3>

                        <div className="benefits-grid">
                            <span>Radiant skin & stronger hair</span>
                            <span>Calm mind & stress support</span>
                            <span>Deep, restful sleep</span>
                            <span>All-day clean energy</span>
                            <span>Stronger immunity</span>
                            <span>Healthy growth for kids</span>
                        </div>

                        <p className="highlight-line">
                            One simple routine. Total wellness.
                        </p>
                    </div>

                    <div className="benefits-image py-4">
                        <img src="/images/bio2.jpg" alt="Core Benefits" />
                    </div>
                </div>

                <div className="method-section1 fade-up">
                    <h3>SCIENCE & INGREDIENT PHILOSOPHY</h3>
                    <ul className="science-list">
                        <li>Clinically studied vitamins & minerals</li>
                        <li>Standardised herbal extracts</li>
                        <li>Bioavailable nutrient formats</li>
                        <li>Clean, carefully selected ingredients</li>
                    </ul>
                    <p className="section-note">
                        No unnecessary fillers. No over-promises.
                        Only research-driven nutrition designed for real, visible results.
                    </p>
                </div>

                <div className="emotional-block fade-up">
                    <h3>Your Sweetest Daily Act of Self-Care</h3>
                    <p>
                        In the middle of a busy day, this becomes your pause.
                        A small, delicious reminder that you are taking care of your body, your mind, and your future.
                    </p>
                </div>

                <div className="method-section1 py-4 fade-up">
                    <h3>FAMILY WELLNESS POSITIONING</h3>
                    <p>One brand for Women  Men  Kids  Professionals Fitness Lifestyles</p>
                    <p>
                        No more skipped supplements.
                        No more chasing children with syrups.
                        Just a wellness routine the whole family looks forward to.
                    </p>
                </div>

                <div className="partner-section fade-up">
                    <div className="partner-content">
                        <h3>Partner With BIOME+</h3>
                        <p className="partner-sub">
                            Join our growing wellness network and bring premium nutrition
                            to your customers.
                        </p>

                        <div className="grid-2">
                            <ul>
                                <li>Bulk supply with low MOQs</li>
                                <li>Custom formulations</li>
                                <li>Private & white labelling</li>
                                <li>Premium packaging solutions</li>
                            </ul>

                            <ul>
                                <li>Retail & pharmacy partnerships</li>
                                <li>Wellness chains</li>
                                <li>Gyms & fitness centres</li>
                                <li>Global distributors</li>
                            </ul>
                        </div>

                        <div className="cta-row">
                            <button className="primary-btn">Become a Stockist</button>
                            <button className="outline-btn">Enquire for Wholesale</button>
                        </div>
                    </div>

                    <div className="partner-image">
                        <img src="/images/bio3.png" alt="Partner with Biome+" />
                    </div>
                </div>
                <div className="conversion-section fade-up">
                     <div className="conversion-right">
                        <img src="/images/bio4.png" alt="Biome+ Wellness" />
                    </div>

                    <div className="conversion-left">
                        <h3>Start Your BIOME+ Ritual Today</h3>

                        <ul className="conversion-list">
                            <li>Better sleep</li>
                            <li>Stronger immunity</li>
                            <li>Natural glow</li>
                            <li>Calmer days</li>
                            <li>Healthier kids</li>
                        </ul>

                        <div className="cta-row">
                            <button className="primary-btn">Shop Now</button>
                            <button className="outline-btn">
                                Build Your Wellness Routine
                            </button>
                        </div>
                    </div>

                   

                </div>
            </div>

        </section>
    );
};

export default BiomeMethod;