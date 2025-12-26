import React from 'react'
import FloatingVideoPopup from '../components/FloatingVideoPopup.jsx';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection.jsx';
import OfferingSection from '../components/OfferingSection.jsx';
import AboutRetreat from '../components/AboutRetreat.jsx';
import RetreatPackages from '../components/RetreatPackages.jsx';
import DiseaseTreatments from '../components/DiseaseTreatments.jsx';
import WellnessForm from '../components/WellnessForm';
import GoogleReviews from '../components/GoogleReviews.jsx';
import Gallery from '../components/Gallery';
import HolisticContactForm from '../components/HolisticContactForm.jsx';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome.jsx';
import CentreSection from '../components/CenterSection.jsx';

const Home = () => {
    return (
        <>
         <FloatingVideoPopup videoSrc="https://di7if5tmmdf4zu0a.public.blob.vercel-storage.com/04.mp4" poster="/images/01.png"/>
            <Header />
            <HeroSection />
           <Welcome />
            <OfferingSection />
            <AboutRetreat />
            <RetreatPackages />
            <WellnessForm />
            <DiseaseTreatments />
            <CentreSection />
            <GoogleReviews />
            <Gallery />
            <HolisticContactForm />
            <Footer />
        </>
    )
}

export default Home
