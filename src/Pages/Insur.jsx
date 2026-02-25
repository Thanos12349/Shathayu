import React from 'react'
import Header from '../components/Header';
import AboutHeroSection from '../components/AboutHeroSection'
import FacilitiesInsur from '../components/FacilitiesInsur'
import HolisticContactForm from '../components/HolisticContactForm';
import Footer from '../components/Footer';

const Insur = () => {
  return (
    <>
      <Header />
      {/* <AboutHeroSection videoSrc="/images/04.mp4" title="Avail Health Insurance Coverage" /> */}
      <FacilitiesInsur />
      <HolisticContactForm />
    
      <Footer />
    </>
  )
}

export default Insur

