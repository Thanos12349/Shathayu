import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollTop from './components/ScrollToTop';
import About from './Pages/About.jsx';
import Testimonial from './Pages/GoogleTestimonial.jsx';
import VideoTestimonial from './Pages/VideoTestimonial.jsx';
import Stay from './Pages/Stay.jsx';
import Insur from './Pages/Insur.jsx';
import Contact from './Pages/Contact.jsx';
import PanchakarmaPage from './Pages/PanchakarmaPage.jsx';
import ShirodharaPage from './Pages/ShirodharaPage.jsx'
import KizhiPage from './Pages/KizhiPage.jsx';
import Udvartana from './Pages/Udvartana.jsx';
import PizhichilData from './Pages/PizhichilData.jsx';
import Njavarakizhi from './Pages/Njavarakizhi.jsx';
import NasyaPage from './Pages/Nasya.jsx';
import NetraTarpanaPage from './Pages/NetraTarpanaPage.jsx';
import TherapyPage from './Pages/TherapyPage.jsx';
import DetoxPanchakarmaPage from './Pages/DetoxPanchakarmaPage.jsx'
import PainManagementPage from './Pages/PainManagementPage.jsx';
import WeightLossProgramPage from './Pages/WeightLossProgramPage.jsx';
import RasayanaRejuvenationPage from './Pages/RasayanaRejuvenationPage.jsx'
import WomensHormonalBalancePage from './Pages/WomensHormonalBalancePage.jsx';
import HealingSpaces from './Pages/HealingSpaces.jsx';
import SoulfulCuisine from './Pages/SoulfulCuisine.jsx';
import BehindSeyraya from './Pages/BehindSeyraya.jsx';

function App() {
  const SwedanaData = {
    title: "Swedana — Medicated Herbal Steam",
    subtitle: "Herbal steam therapy for detoxification",
    desc: "Swedana is a herbal steam therapy that opens pores, liquefies toxins, and enhances the effect of other therapies.",
    benefits: [
      "Detoxifies through sweat",
      "Relaxes muscles & joints",
      "Enhances circulation & metabolism",
      "Supports weight management & fat metabolism",
      "Prepares body for deeper Panchakarma treatments",
    ],
    includes: [
      "Stay & Sattvic meals",
      "Doctor consultation & herbal decoction selection",
      "Steam therapy session (15–30 mins)",
      "Post-steam rest & hydration",
      "Yoga & light exercise",
      "Lifestyle & dietary guidance",
    ],
    durationOptions: [
      { title: "3-Day Detox Boost", description: "Light cleansing & relaxation" },
      { title: "5-Day Herbal Steam Therapy", description: "Metabolic & lymphatic support" },
      { title: "7-Day Panchakarma Prep", description: "Full detox + circulation improvement" },
    ],
    timeline: [
      { time: "6:30 AM", activity: "Herbal drink" },
      { time: "7:00–8:00 AM", activity: "Yoga & stretching" },
      { time: "8:30 AM", activity: "Breakfast" },
      { time: "10:00–10:30 AM", activity: "Swedana session" },
      { time: "11:00–11:30 AM", activity: "Rest" },
      { time: "12:30–2:00 PM", activity: "Lunch" },
      { time: "3:00–4:00 PM", activity: "Doctor consultation / meditation" },
      { time: "4:00–4:30 PM", activity: "Herbal tea" },
      { time: "6:30–7:30 PM", activity: "Dinner" },
    ],
  };

  return (
    <ScrollTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/testimonial/video' element={<VideoTestimonial />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/stay' element={<Stay />} />
        <Route path='/insur' element={<Insur />} />
        <Route path='/PanchakarmaPage' element={<PanchakarmaPage />} />
        <Route path='/ShirodharaPage' element={<ShirodharaPage />} />
        <Route path='/KizhiPage' element={<KizhiPage />} />
        <Route path='/Udvartana' element={<Udvartana />} />
        <Route path='/PizhichilData' element={<PizhichilData />} />
        <Route path='/Njavarakizhi' element={<Njavarakizhi />} />
        <Route path='/NasyaPage' element={<NasyaPage />} />
        <Route path='/NetraTarpanaPage' element={<NetraTarpanaPage />} />
        <Route path='/TherapyPage' element={<TherapyPage therapyData={SwedanaData} />} />
        <Route path='/DetoxPanchakarmaPage' element={<DetoxPanchakarmaPage />} />
        <Route path='/PainManagementPage' element={<PainManagementPage />} />
        <Route path='/WeightLossProgramPage' element={<WeightLossProgramPage />} />
        <Route path='/RasayanaRejuvenationPage' element={<RasayanaRejuvenationPage />} />
        <Route path='/WomensHormonalBalancePage' element={<WomensHormonalBalancePage />} />
        <Route path='/HealingSpaces' element={<HealingSpaces />} />
        <Route path='/SoulfulCuisine' element={<SoulfulCuisine />} />
        <Route path='/BehindSeyraya' element={<BehindSeyraya />} />
        


      </Routes>
    </ScrollTop>

  )
}

export default App