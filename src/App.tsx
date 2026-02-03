import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AboutPage from './components/about/AboutPage';
import ServicesPage from './components/services/ServicesPage';
import ContactPage from './components/contactus/ContactPage';
import HomePage from './components/home/HomePage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#fafafa' }}>
        <Navbar />

        <Box component="main" sx={{ flex: 1, pt: 2 }}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;