import React from 'react'
import Header from '../components/Header';
import AboutHeroSection from '../components/AboutHeroSection'
import GoogleReviews from '../components/GoogleReviews'
import Footer from '../components/Footer';

const Testimonial = () => {
  return (
   <>
   <Header />
    {/* <AboutHeroSection videoSrc="/images/04.mp4" title="Testimonial Retreat" /> */}
    <GoogleReviews />
   <Footer />
   </>
  )
}

export default Testimonial
