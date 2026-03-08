import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollTop from './components/ScrollToTop';
import Contact from './Pages/Contact.jsx';


function App() {

  return (
    <ScrollTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </ScrollTop>

  )
}

export default App