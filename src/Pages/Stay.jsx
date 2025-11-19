import React from 'react'
import Header from '../components/Header';
import AboutHeroSection from '../components/AboutHeroSection'
import AccommodationOptions from '../components/AccommodationOptions'
import PackagePrice from '../components/PackagePrice'
import Facilities from '../components/Facilities'
import StayGallery from '../components/StayGallery'
import Footer from '../components/Footer';

const Stay = () => {
  return (
    <>
      <Header />
      {/* <AboutHeroSection videoSrc="/images/04.mp4" title="Accommodation at Shathayu Retreat – Reconnect with Nature in Comfort"/> */}
      <AccommodationOptions />
      <PackagePrice />
      <Facilities />
      <StayGallery />
      <Footer />
    </>
  )
}
export default Stay
