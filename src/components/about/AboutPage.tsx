import React from 'react';
import { Container, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import AboutHero from './AboutHero';
import InteractiveSectorSection from './InteractiveSectorSection';
import AboutContentSection from './AboutContentSection';
import StatsSection from './StatsSection';

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  const sectors = [
    {
      title: t('about.sectors.main.aviation.title'),
      image:
        'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: t('about.sectors.main.aviation.text'),
      hoverColor: '#d32f2f',
    },
    {
      title: t('about.sectors.main.marine.title'),
      image: 'https://i.ytimg.com/vi/p4iwZr14FVc/maxresdefault.jpg',
      text: t('about.sectors.main.marine.text'),
      hoverColor: '#0288d1',
    },
    {
      title: t('about.sectors.main.industrial.title'),
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: t('about.sectors.main.industrial.text'),
      hoverColor: '#388e3c',
    },
    {
      title: t('about.sectors.main.automotive.title'),
      image:
        'https://platform.theverge.com/wp-content/uploads/sites/2/2025/11/2025-Czinger-Area-21-Visit-001.jpg?quality=90&strip=all',
      text: t('about.sectors.main.automotive.text'),
      hoverColor: '#f57c00',
    },
    {
      title: t('about.sectors.main.construction.title'),
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/Erickson_Aircrane_Gypsy_Lady_landing_at_Wagga_Wagga_Airport_%28cropped%29.jpg',
      text: t('about.sectors.main.construction.text'),
      hoverColor: '#f57c00',
    },
    {
      title: t('about.sectors.main.agriculture.title'),
      image: 'https://aerospaceamerica.aiaa.org/wp-content/uploads/2019/05/crop-opener-1.jpg',
      text: t('about.sectors.main.agriculture.text'),
      hoverColor: '#f57c00',
    },
  ];

  const sectors1 = [
    {
      title: t('about.sectors.industries.defense.title'),
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/F22_Training_Formation.jpg',
      text: t('about.sectors.industries.defense.text'),
      hoverColor: '#212121',
    },
    {
      title: t('about.sectors.industries.civil.title'),
      image:
        'https://nationalacademies.bynder.com/asset/efc559e5-8465-4e73-b877-334203277a65/Landscape_500/emerging-hazards-in-commercial-aviation-UW-slider.jpg',
      text: t('about.sectors.industries.civil.text'),
      hoverColor: '#1976d2',
    },
    {
      title: t('about.sectors.industries.privateJet.title'),
      image:
        'https://gate.shyaviation.com/media/d2cpi5um/what-are-the-most-luxurious-private-jetst-4800-2700px.jpg',
      text: t('about.sectors.industries.privateJet.text'),
      hoverColor: '#6a1b9a',
    },
    {
      title: t('about.sectors.industries.fixedWing.title'),
      image: 'https://tecnam.com/wp-content/uploads/2022/09/P2012-STOL-1B8A8156-1024x682.jpg',
      text: t('about.sectors.industries.fixedWing.text'),
      hoverColor: '#0277bd',
    },
    {
      title: t('about.sectors.industries.rotaryWing.title'),
      image:
        'https://www.unmannedsystemstechnology.com/wp-content/uploads/2023/06/alpha-unmanned-systems.jpg',
      text: t('about.sectors.industries.rotaryWing.text'),
      hoverColor: '#01579b',
    },
    {
      title: t('about.sectors.industries.drone.title'),
      image: 'https://www.jouav.com/wp-content/uploads/2022/07/ph-007-1024x576.jpg',
      text: t('about.sectors.industries.drone.text'),
      hoverColor: '#455a64',
    },
  ];

  const sectors2 = [
    {
      title: t('about.sectors.excellence.spareParts.title'),
      image: 'https://www.oceanair.aero/wp-content/uploads/2024/09/aircraft-engine-parts-suppliers.jpg',
      text: t('about.sectors.excellence.spareParts.text'),
      hoverColor: '#7b1fa2',
    },
    {
      title: t('about.sectors.excellence.distribution.title'),
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070',
      text: t('about.sectors.excellence.distribution.text'),
      hoverColor: '#0288d1',
    },
    {
      title: t('about.sectors.excellence.equipment.title'),
      image:
        'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: t('about.sectors.excellence.equipment.text'),
      hoverColor: '#388e3c',
    },
    {
      title: t('about.sectors.excellence.installment.title'),
      image: 'https://finance.aopa.org/media/images/600x338-First-Time-Buyers-2.png',
      text: t('about.sectors.excellence.installment.text'),
      hoverColor: '#f57c00',
    },
    {
      title: t('about.sectors.excellence.devices.title'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
      text: t('about.sectors.excellence.devices.text'),
      hoverColor: '#1976d2',
    },
    {
      title: t('about.sectors.excellence.repairMaintenance.title'),
      image:
        'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: t('about.sectors.excellence.repairMaintenance.text'),
      hoverColor: '#d32f2f',
    },
  ];

  return (
    <Box sx={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <AboutHero />

      <Container maxWidth="lg" sx={{ py: 13 }}>
        <Box sx={{ mb: 10 }}>
          <AboutContentSection />
        </Box>

        <InteractiveSectorSection
          sectors={sectors}
          sectionIndex={1}
          title={t('about.sectionTitles.expertise')}
        />

        <InteractiveSectorSection
          sectors={sectors1}
          sectionIndex={2}
          reverse={true}
          title={t('about.sectionTitles.industries')}
        />

        <InteractiveSectorSection
          sectors={sectors2}
          sectionIndex={3}
          title={t('about.sectionTitles.excellence')}
        />

        <Box sx={{ textAlign: 'center', mb: 10, mt: 10 }}>
          <AboutContentSection showFullContent={true} />
        </Box>

        <StatsSection />
      </Container>
    </Box>
  );
};

export default AboutPage;