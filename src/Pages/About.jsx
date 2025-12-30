import React from 'react';
import Header from '../components/Header';
import AboutHeroSection from '../components/AboutHeroSection';
import WelcomeSection from '../components/WelcomeSection';
import LegacySection from '../components/LegacySection';
import DoctIntro from '../components/DoctIntto';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
      <Header />
      {/* <AboutHeroSection videoSrc="/images/04.mp4" title="About Retreat"/> */}
      <WelcomeSection />
      {/* <LegacySection /> */}
      {/* <DoctIntro /> */}
      <Footer />
    </>
  )
}

export default About
