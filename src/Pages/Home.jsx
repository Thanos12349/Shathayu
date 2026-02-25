import React from 'react'
import FloatingVideoPopup from '../components/FloatingVideoPopup.jsx';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection.jsx';
import AboutRetreat from '../components/AboutRetreat.jsx';
import RetreatPackages from '../components/RetreatPackages.jsx';
import GoogleReviews from '../components/GoogleReviews.jsx';
import Gallery from '../components/Gallery';
import HolisticContactForm from '../components/HolisticContactForm.jsx';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome.jsx';
import CentreSection from '../components/CenterSection.jsx';
import OurStory from '../components/OurStory.jsx';
import CuisinePhilosophy from '../components/Cusine.jsx';
import BiomeMethod from '../components/BiomeMethod.jsx';


const Home = () => {
    return (
        <>
            {/* <FloatingVideoPopup videoSrc="https://9wyna8jwrlz8jibj.public.blob.vercel-storage.com/04.mp4" poster="/images/01.png" /> */}
            <Header />
            <HeroSection />
            {/* <Welcome />
            <OurStory /> */}
            <AboutRetreat />
            <BiomeMethod />
            {/* <CentreSection />
            <RetreatPackages />
            <CuisinePhilosophy />
            <GoogleReviews />
            <Gallery />
            <HolisticContactForm /> */}
            <Footer />
        </>
    )
}

export default Home
