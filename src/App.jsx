import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { DropdownProvider } from './context/DropdownContext';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import Electrical from "./components/Electrical";
import CCTV from "./components/CCTV";
import BMS from "./components/BMS";
import Testimonials from "./components/Testimonials";
import ScrollToHashElement from "./components/ScrollToHashElement";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <DropdownProvider>
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services/electrical" element={<Electrical />} />
        <Route path="/services/cctv" element={<CCTV />} />
        <Route path="/services/bms" element={<BMS />} /> 
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
    </DropdownProvider>
  );
};

export default App;
