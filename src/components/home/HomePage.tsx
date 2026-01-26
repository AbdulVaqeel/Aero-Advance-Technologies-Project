import React, { useState, useEffect, useRef } from 'react';
import { Box, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TypingTextSection from './TypingTextSection';
import GallerySlider from './GallerySlider';
import ContentSection from './ContentSection';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSections';

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { src: '/oils_header.jpg', alt: 'Oils' },
    { src: '/grease_header.jpg', alt: 'Grease' },
    { src: '/lubricants_header.jpg', alt: 'Lubricants' },
    { src: '/coolants_header.jpg', alt: 'Coolants' },
    { src: '/chemicals_header.jpg', alt: 'Chemicals' },
  ];

  // Auto slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

  // Typing sections data
  const typingSections = [
    {
      id: 1,
      text: "Our Focus is on improving reliability and extending the operation life of customer products.",
      subtitle: "Protecting and optimizing the machines that keep our country moving by offering over 500 products for a variety of industry sectors ranging from Aviation to Agriculture. Our country moving by offering over 4,500 products for a variety of industry sectors ranging from automotive to aviation."
    },
    {
      id: 2,
      text: "Professional aviation solutions, Your one-stop aviation partner sectors ranging from automotive to aviation.",
      subtitle: "We are a leading global aircraft parts supplier, offering immediate access to new and aftermarket airframe and engine components through an integrated supply chain, strong OEM relationships, ensuring part integrity, competitive prices, and minimal operational downtime for our clients."
    },
    {
      id: 3,
      text: "We focus on improving innovation capabilities and industry advancement competitiveness from automotive to aviation.",
      subtitle: "Delivering advanced electrical and electronic communication solutions, our portfolio of 4,500+ products supports critical machinery across industries ranging from Agriculture to Aerospace, helping keep operations safe, connected, and efficient."
    }
  ];

  // Content sections data (Oil & Gas)
  const oilGasSections = [
    {
      id: 'oil',
      title: 'Built for the Demands of Oil & Gas Operations',
      description: 'Experience a higher standard in oil and gas services—where precision, reliability, and industry expertise come together to support your most critical operations and drive energy performance forward.',
      image: 'oils2.jpg',
      alt: 'Oils'
    },
    {
      id: 'grease',
      title: 'Greases Built for Demanding Operations',
      description: 'Experience a higher standard in greases designed for performance and reliability, supporting critical applications and delivering consistent results under demanding conditions.',
      image: 'grease_home.jpg',
      alt: 'Greases',
      reverse: true
    },
    {
      id: 'coolants',
      title: 'Advanced Coolants for Peak Performance',
      description: 'Experience a higher standard in coolants designed for performance and reliability, supporting critical applications and delivering consistent results under demanding conditions.',
      image: 'coolants_home.jpg',
      alt: 'Coolants'
    },
    {
      id: 'chemicals',
      title: 'Innovative Chemicals for Maximum Efficiency',
      description: 'Experience a higher standard in chemicals, designed for performance and reliability. Supporting critical applications and delivering consistent results under demanding conditions.',
      image: 'chemicals_home.jpg',
      alt: 'Chemicals',
      reverse: true
    },
    {
      id: 'lubricants',
      title: 'Precision Lubricants for Reliable Operations',
      description: 'Experience superior performance with advanced lubricants, engineered to reduce wear and maximize efficiency. Protecting critical machinery, and ensuring smooth, reliable operation under demanding conditions.',
      image: 'lubricants_home.jpg',
      alt: 'Private jet boarding'
    }
  ];

  // Content sections data (Aviation)
  const aviationSections = [
    {
      id: 'aviation',
      title: 'Precision solutions built for aviation excellence',
      description: 'Experience the ultimate freedom of air travel with private aviation services tailored to your needs. Whether for business or leisure, enjoy a journey defined by comfort, style, and unmatched efficiency.',
      image: 'oils2.jpg',
      alt: 'Aviation'
    },
    {
      id: 'spare-parts',
      title: 'Trusted Parts for Critical Aviation Systems',
      description: 'Experience unmatched confidence with premium spare parts, engineered to deliver precision and reliability. Supporting critical operations with consistent performance and ensuring your business runs efficiently, every time.',
      image: 'grease_home.jpg',
      alt: 'Spare Parts',
      reverse: true
    },
    {
      id: 'tools',
      title: 'Reliable Tools for Critical Operations',
      description: 'Experience unmatched confidence with premium tools, engineered for precision, durability, and reliability. Supporting critical operations with consistent performance and ensuring your business runs efficiently, every time.',
      image: 'coolants_home.jpg',
      alt: 'Tools'
    },
    {
      id: 'equipment',
      title: 'Advanced Equipment for Maximum Efficiency',
      description: 'Experience reliable, high-performance equipment, built for precision, strength, and dependability. Supporting essential operations with consistent results and keeping your business running efficiently.',
      image: 'chemicals_home.jpg',
      alt: 'Equipments',
      reverse: true
    }
  ];

  // Content sections data (Electrical & Electronics)
  const electricalSections = [
    {
      id: 'electrical',
      title: 'Advanced Electrical for Peak Performance',
      description: 'Experience reliable, high-performance electrical equipment, engineered for precision, strength, and durability. Supporting critical operations with consistent results and keeping your business running efficiently.',
      image: 'oils2.jpg',
      alt: 'Electricals'
    },
    {
      id: 'electronics',
      title: 'High-Performance Electronics Solutions',
      description: 'Experience reliable, high-performance electronic systems, engineered for precision, durability, and efficiency. Supporting critical operations with consistent results and ensuring your business runs smoothly at all times.',
      image: 'grease_home.jpg',
      alt: 'Electronics',
      reverse: true
    },
    {
      id: 'communication',
      title: 'Reliable Communication, Every Time',
      description: 'Deliver dependable, high-performance communication solutions, designed for accuracy, resilience, and seamless operation. Enabling critical functions with consistent, reliable performance and keeping your business connected and operating efficiently.',
      image: 'coolants_home.jpg',
      alt: 'Communications'
    }
  ];

  return (
    <Fade in timeout={2000}>
      <Box>
        <HeroSection navigate={navigate} />
        
        <TypingTextSection section={typingSections[0]} />
        
        <GallerySlider 
          title="Oils, Greases, Lubricants, Coolants, Chemicals"
          currentSlide={currentSlide}
          galleryImages={galleryImages}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setCurrentSlide={setCurrentSlide}
        />
        
        {oilGasSections.map((section, index) => (
          <ContentSection 
            key={section.id}
            section={section}
            sectionIndex={index + 1}
          />
        ))}
        
        <TypingTextSection section={typingSections[1]} />
        
        <GallerySlider 
          title="Aviation, Spare parts, Tools, Equipments"
          currentSlide={currentSlide}
          galleryImages={galleryImages}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setCurrentSlide={setCurrentSlide}
        />
        
        {aviationSections.map((section, index) => (
          <ContentSection 
            key={section.id}
            section={section}
            sectionIndex={index + 6} // Continue from where oilGasSections left off
          />
        ))}
        
        <TypingTextSection section={typingSections[2]} />
        
        <GallerySlider 
          title="Electrical, Electronics & Communication."
          currentSlide={currentSlide}
          galleryImages={galleryImages}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setCurrentSlide={setCurrentSlide}
        />
        
        {electricalSections.map((section, index) => (
          <ContentSection 
            key={section.id}
            section={section}
            sectionIndex={index + 10} // Continue from where aviationSections left off
          />
        ))}
        
        <FeaturesSection />
      </Box>
    </Fade>
  );
};

export default HomePage;