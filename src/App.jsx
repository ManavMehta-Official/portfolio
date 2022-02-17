import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import './main.css';
import borderHR from './images/horizontal-border.png';
import Home from './components/pages/home/home';
import Work from './components/pages/work/work'
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <img src={borderHR} alt="Horizontal Border" className='borderHR' />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <img src={borderHR} alt="Horizontal Border" className='borderHR' style={{"margin-top": "8%"}} />
      <Footer />
    </Router>
  );
}



export default App;