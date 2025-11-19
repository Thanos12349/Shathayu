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

function App() {


  return (
    <ScrollTop>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
      <Route path='/testimonial/video' element={<VideoTestimonial/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/stay' element={<Stay/>}/>
      <Route path='/insur' element={<Insur/>}/>
    </Routes>
    </ScrollTop>
    
  )
}

export default App