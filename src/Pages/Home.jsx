import React from 'react'
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
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <OfferingSection />
            <AboutRetreat />
            <RetreatPackages />
            <WellnessForm />
            <DiseaseTreatments />
            <GoogleReviews />
            <Gallery />
            <HolisticContactForm />
            <Footer />
        </>
    )
}

export default Home
