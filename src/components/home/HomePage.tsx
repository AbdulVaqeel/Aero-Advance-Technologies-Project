import React from 'react';
import { Box, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  // ── Slider 1 ── Oils / Greases / Lubricants / Coolants / Chemicals
  const slider1 = useSlider(5);
  const galleryImages1 = [
    { src: '/oils_header.jpg', alt: t('home.gallery1.images.oils') },
    { src: '/grease_header.jpg', alt: t('home.gallery1.images.grease') },
    { src: '/lubricants_header.jpg', alt: t('home.gallery1.images.lubricants') },
    { src: '/coolants_header.jpg', alt: t('home.gallery1.images.coolants') },
    { src: '/chemicals_header.jpg', alt: t('home.gallery1.images.chemicals') },
  ];

  // ── Slider 2 ── Aviation related
  const slider2 = useSlider(4);
  const galleryImages2 = [
    { src: '/aviation.webp', alt: t('home.gallery2.images.aviation') },
    { src: '/spareparts.webp', alt: t('home.gallery2.images.spareParts') },
    { src: '/tools.jpg', alt: t('home.gallery2.images.tools') },
    { src: '/equipments.avif', alt: t('home.gallery2.images.equipment') },
  ];

  // ── Slider 3 ── Electrical & Communications
  const slider3 = useSlider(2);
  const galleryImages3 = [
    { src: '/electrical.jpg', alt: t('home.gallery3.images.electrical') },
    { src: '/electro&commu.jpg', alt: t('home.gallery3.images.electronicsCommunications') },
  ];

  // Typing sections data
  const typingSections = [
    {
      id: 1,
      text: t('home.typing.section1.text'),
      subtitle: t('home.typing.section1.subtitle'),
    },
    {
      id: 2,
      text: t('home.typing.section2.text'),
      subtitle: t('home.typing.section2.subtitle'),
    },
    {
      id: 3,
      text: t('home.typing.section3.text'),
      subtitle: t('home.typing.section3.subtitle'),
    },
  ];

  // Content sections data (Oil & Gas)
  const oilGasSections = [
    {
      id: 'oil',
      title: t('home.oilGas.oil.title'),
      description: t('home.oilGas.oil.description'),
      image: 'oils_sub-header.jpg',
      alt: t('home.oilGas.oil.alt'),
    },
    {
      id: 'grease',
      title: t('home.oilGas.grease.title'),
      description: t('home.oilGas.grease.description'),
      image: 'greases_sub-header.jpg',
      alt: t('home.oilGas.grease.alt'),
      reverse: true,
    },
    {
      id: 'coolants',
      title: t('home.oilGas.coolants.title'),
      description: t('home.oilGas.coolants.description'),
      image: 'coolants_sub-header.jpg',
      alt: t('home.oilGas.coolants.alt'),
    },
    {
      id: 'chemicals',
      title: t('home.oilGas.chemicals.title'),
      description: t('home.oilGas.chemicals.description'),
      image: 'chemicals_sub-header.jpg',
      alt: t('home.oilGas.chemicals.alt'),
      reverse: true,
    },
    {
      id: 'lubricants',
      title: t('home.oilGas.lubricants.title'),
      description: t('home.oilGas.lubricants.description'),
      image: 'lubricants_sub-header.jpg',
      alt: t('home.oilGas.lubricants.alt'),
    },
  ];

  // Content sections data (Aviation)
  const aviationSections = [
    {
      id: 'aviation',
      title: t('home.aviation.aviation.title'),
      description: t('home.aviation.aviation.description'),
      image: 'aviation_sub-header.jpg',
      alt: t('home.aviation.aviation.alt'),
    },
    {
      id: 'spare-parts',
      title: t('home.aviation.spareParts.title'),
      description: t('home.aviation.spareParts.description'),
      image: 'spareparts_sub-header.jpg',
      alt: t('home.aviation.spareParts.alt'),
      reverse: true,
    },
    {
      id: 'tools',
      title: t('home.aviation.tools.title'),
      description: t('home.aviation.tools.description'),
      image: 'tools_sub-header.webp',
      alt: t('home.aviation.tools.alt'),
    },
    {
      id: 'equipment',
      title: t('home.aviation.equipment.title'),
      description: t('home.aviation.equipment.description'),
      image: 'equipments_sub-header.jpg',
      alt: t('home.aviation.equipment.alt'),
      reverse: true,
    },
  ];

  // Content sections data (Electrical and Electronics & Communications)
  const electricalSections = [
    {
      id: 'electrical',
      title: t('home.electrical.electrical.title'),
      description: t('home.electrical.electrical.description'),
      image: 'electrical_sub-header.jpg',
      alt: t('home.electrical.electrical.alt'),
    },
    {
      id: 'electronics-communications',
      title: t('home.electrical.electronicsCommunications.title'),
      description: t('home.electrical.electronicsCommunications.description'),
      image: 'electro&commu_sub-header.jpg',
      alt: t('home.electrical.electronicsCommunications.alt'),
      reverse: true,
    },
  ];

  return (
    <Fade in timeout={2000}>
      <Box sx={{ direction: isArabic ? 'rtl' : 'ltr' }}>
        <HeroSection navigate={navigate} />

        <TypingTextSection section={typingSections[0]} />

        <GallerySlider
          title={t('home.gallery1.title')}
          images={galleryImages1}
          currentSlide={slider1.current}
          onNext={slider1.goToNext}
          onPrev={slider1.goToPrev}
          onDotClick={slider1.goToIndex}
        />

        <Box sx={{ mt: { xs: 3, md: 1 } }} />

        {oilGasSections.map((section, index) => (
          <ContentSection key={section.id} section={section} sectionIndex={index + 1} />
        ))}

        <TypingTextSection section={typingSections[1]} />

        <GallerySlider
          title={t('home.gallery2.title')}
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
          title={t('home.gallery3.title')}
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

        <Box sx={{ mb: { xs: 4, md: 6 } }} />
      </Box>
    </Fade>
  );
};

export default HomePage;