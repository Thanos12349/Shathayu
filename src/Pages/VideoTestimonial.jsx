import React from 'react'
import Header from '../components/Header';
import AboutHeroSection from '../components/AboutHeroSection'
import VideoGallery from '../components/VideoGallery'
import Footer from '../components/Footer';

const VideoTestimonial = () => {
  return (
    <>
    <Header />
     {/* <AboutHeroSection videoSrc="/images/04.mp4" title="Video Testimonial Retreat" /> */}
     <VideoGallery />
    <Footer />
    
    </>
  )
}

export default VideoTestimonial
