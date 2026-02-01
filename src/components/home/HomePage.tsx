import React from 'react';
import { Box, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import TypingTextSection from './TypingTextSection';
import GallerySlider from './GallerySlider';
import ContentSection from './ContentSection';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSections';

// Reusable slider logic hook
const useSlider = (length: number, intervalMs = 5000) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [length, intervalMs]);

  const goToNext = () => setCurrent((prev) => (prev + 1) % length);
  const goToPrev = () => setCurrent((prev) => (prev - 1 + length) % length);
  const goToIndex = (index: number) => setCurrent(index);

  return { current, goToNext, goToPrev, goToIndex };
};

const HomePage = () => {
  const navigate = useNavigate();

  // ── Slider 1 ── Oils / Greases / Lubricants / Coolants / Chemicals
  const slider1 = useSlider(5);
  const galleryImages1 = [
    { src: '/oils_header.jpg', alt: 'Oils' },
    { src: '/grease_header.jpg', alt: 'Grease' },
    { src: '/lubricants_header.jpg', alt: 'Lubricants' },
    { src: '/coolants_header.jpg', alt: 'Coolants' },
    { src: '/chemicals_header.jpg', alt: 'Chemicals' },
  ];

  // ── Slider 2 ── Aviation related
  const slider2 = useSlider(4);
  const galleryImages2 = [
    { src: '/aviation.webp', alt: 'Aviation' },
    { src: '/spareparts.webp', alt: 'Spare parts' },
    { src: '/tools.jpg', alt: 'Tools' },
    { src: '/equipments.avif', alt: 'Equipments' },
  ];

  // ── Slider 3 ── Electrical & Communications
  const slider3 = useSlider(2);
  const galleryImages3 = [
    { src: '/electrical.jpg', alt: 'Electrical' },
    { src: '/electro&commu.jpg', alt: 'Electronics & Communications' },
  ];

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
      image: 'oils_sub-header.jpg',
      alt: 'Oils'
    },
    {
      id: 'grease',
      title: 'Greases Built for Demanding Operations',
      description: 'Experience a higher standard in greases designed for performance and reliability, supporting critical applications and delivering consistent results under demanding conditions.',
      image: 'greases_sub-header.jpg',
      alt: 'Greases',
      reverse: true
    },
    {
      id: 'coolants',
      title: 'Advanced Coolants for Peak Performance',
      description: 'Experience a higher standard in coolants designed for performance and reliability, supporting critical applications and delivering consistent results under demanding conditions.',
      image: 'coolants_sub-header.jpg',
      alt: 'Coolants'
    },
    {
      id: 'chemicals',
      title: 'Innovative Chemicals for Maximum Efficiency',
      description: 'Experience a higher standard in chemicals, designed for performance and reliability. Supporting critical applications and delivering consistent results under demanding conditions.',
      image: 'chemicals_sub-header.jpg',
      alt: 'Chemicals',
      reverse: true
    },
    {
      id: 'lubricants',
      title: 'Precision Lubricants for Reliable Operations',
      description: 'Experience superior performance with advanced lubricants, engineered to reduce wear and maximize efficiency. Protecting critical machinery, and ensuring smooth, reliable operation under demanding conditions.',
      image: 'lubricants_sub-header.jpg',
      alt: 'Private jet boarding'
    }
  ];

  // Content sections data (Aviation)
  const aviationSections = [
    {
      id: 'aviation',
      title: 'Precision solutions built for aviation excellence',
      description: 'Experience the ultimate freedom of air travel with private aviation services tailored to your needs. Whether for business or leisure, enjoy a journey defined by comfort, style, and unmatched efficiency.',
      image: 'aviation_sub-header.jpg',
      alt: 'Aviation'
    },
    {
      id: 'spare-parts',
      title: 'Trusted Parts for Critical Aviation Systems',
      description: 'Experience unmatched confidence with premium spare parts, engineered to deliver precision and reliability. Supporting critical operations with consistent performance and ensuring your business runs efficiently, every time.',
      image: 'spareparts_sub-header.jpg',
      alt: 'Spare Parts',
      reverse: true
    },
    {
      id: 'tools',
      title: 'Reliable Tools for Critical Operations',
      description: 'Experience unmatched confidence with premium tools, engineered for precision, durability, and reliability. Supporting critical operations with consistent performance and ensuring your business runs efficiently, every time.',
      image: 'tools_sub-header.webp',
      alt: 'Tools'
    },
    {
      id: 'equipment',
      title: 'Advanced Equipment for Maximum Efficiency',
      description: 'Experience reliable, high-performance equipment, built for precision, strength, and dependability. Supporting essential operations with consistent results and keeping your business running efficiently.',
      image: 'equipments_sub-header.jpg',
      alt: 'Equipments',
      reverse: true
    }
  ];

  // Content sections data (Electrical and Electronics & Communications)
  const electricalSections = [
    {
      id: 'electrical',
      title: 'Advanced Electrical for Peak Performance',
      description: 'Experience reliable, high-performance electrical equipment, engineered for precision, strength, and durability. Supporting critical operations with consistent results and keeping your business running efficiently.',
      image: 'electrical_sub-header.jpg',
      alt: 'Electricals'
    },
    {
      id: 'electronics & communications',
      title: 'Electronics Solutions & Communications',
      description: 'Experience reliable, high-performance electronic systems, engineered for precision, durability, and efficiency. Deliver dependable, high-performance communication solutions, designed for accuracy, resilience, and seamless operation.',
      image: 'electro&commu_sub-header.jpg',
      alt: 'Electronics & Communications',
      reverse: true
    },
  ];

  return (
    <Fade in timeout={2000}>
      <Box>
        <HeroSection navigate={navigate} />

        <TypingTextSection section={typingSections[0]} />

        <GallerySlider
          title="Oils, Greases, Lubricants, Coolants, Chemicals"
          images={galleryImages1}
          currentSlide={slider1.current}
          onNext={slider1.goToNext}
          onPrev={slider1.goToPrev}
          onDotClick={slider1.goToIndex}
        />

        {/* Only meaningful gap – after slider before content cards */}
        <Box sx={{ mt: { xs: 3, md: 1 } }} />

        {oilGasSections.map((section, index) => (
          <ContentSection key={section.id} section={section} sectionIndex={index + 1} />
        ))}

        <TypingTextSection section={typingSections[1]} />

        <GallerySlider
          title="Aviation, Spare Parts, Tools, Equipment"
          images={galleryImages2}
          currentSlide={slider2.current}
          onNext={slider2.goToNext}
          onPrev={slider2.goToPrev}
          onDotClick={slider2.goToIndex}
        />

        <Box sx={{ mt: { xs: 3, md: 5 } }} />

        {aviationSections.map((section, index) => (
          <ContentSection key={section.id} section={section} sectionIndex={index + 6} />
        ))}

        <TypingTextSection section={typingSections[2]} />

        <GallerySlider
          title="Electrical, Electronics & Communications"
          images={galleryImages3}
          currentSlide={slider3.current}
          onNext={slider3.goToNext}
          onPrev={slider3.goToPrev}
          onDotClick={slider3.goToIndex}
        />

        <Box sx={{ mt: { xs: 3, md: 5 } }} />

        {electricalSections.map((section, index) => (
          <ContentSection key={section.id} section={section} sectionIndex={index + 10} />
        ))}

        <FeaturesSection />

        {/* Small bottom padding so last section doesn't stick to edge */}
        <Box sx={{ mb: { xs: 4, md: 6 } }} />
      </Box>
    </Fade>
  );
};

export default HomePage;