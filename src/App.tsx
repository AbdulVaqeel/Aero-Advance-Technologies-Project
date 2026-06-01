import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AboutPage from './components/about/AboutPage';
import ServicesPage from './components/services/ServicesPage';
import ContactPage from './components/contactus/ContactPage';
import HomePage from './components/home/HomePage';
import ScrollToTop from './components/ScrollToTop';
import OurPartners from './components/ourpartners/OurPartners';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#fafafa',
        }}
      >
        <Navbar />

        <Box component="main" sx={{ flex: 1, pt: 2 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/partners" element={<OurPartners />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;