import React, { useState } from 'react';
import { Box, Container, Typography, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ServicesHero from './ServicesHero';
import ServicesSection from './ServicesSection';
import ServiceExcellence from './ServiceExcellence';
import CallToAction from './CallToAction';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const AviationMarin = [
    {
      title: t('services.categories.oilLubricant.automotive.title'),
      shortDesc: t('services.categories.oilLubricant.automotive.shortDesc'),
      longDesc: t('services.categories.oilLubricant.automotive.longDesc'),
      bgImage: 'automative_product.webp',
    },
    {
      title: t('services.categories.oilLubricant.industrial.title'),
      shortDesc: t('services.categories.oilLubricant.industrial.shortDesc'),
      longDesc: t('services.categories.oilLubricant.industrial.longDesc'),
      bgImage: 'industrial_product.jpg',
    },
    {
      title: t('services.categories.oilLubricant.aviation.title'),
      shortDesc: t('services.categories.oilLubricant.aviation.shortDesc'),
      longDesc: t('services.categories.oilLubricant.aviation.longDesc'),
      bgImage: 'aviation_product.jpg',
    },
    {
      title: t('services.categories.oilLubricant.marine.title'),
      shortDesc: t('services.categories.oilLubricant.marine.shortDesc'),
      longDesc: t('services.categories.oilLubricant.marine.longDesc'),
      bgImage: 'marine_product.jpeg',
    },
  ];

  const defenseAviationServices = [
    {
      title: t('services.categories.defenseAviation.spareParts.title'),
      shortDesc: t('services.categories.defenseAviation.spareParts.shortDesc'),
      longDesc: t('services.categories.defenseAviation.spareParts.longDesc'),
      bgImage: 'spareparts_product.webp',
    },
    {
      title: t('services.categories.defenseAviation.gseTools.title'),
      shortDesc: t('services.categories.defenseAviation.gseTools.shortDesc'),
      longDesc: t('services.categories.defenseAviation.gseTools.longDesc'),
      bgImage: 'gsetools_product.webp',
    },
    {
      title: t('services.categories.defenseAviation.repairCalibration.title'),
      shortDesc: t('services.categories.defenseAviation.repairCalibration.shortDesc'),
      longDesc: t('services.categories.defenseAviation.repairCalibration.longDesc'),
      bgImage: 'repair_product.jpg',
    },
    {
      title: t('services.categories.defenseAviation.logistics.title'),
      shortDesc: t('services.categories.defenseAviation.logistics.shortDesc'),
      longDesc: t('services.categories.defenseAviation.logistics.longDesc'),
      bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
    },
  ];

  const electricalServices = [
    {
      title: t('services.categories.electrical.electricalPanels.title'),
      shortDesc: t('services.categories.electrical.electricalPanels.shortDesc'),
      longDesc: t('services.categories.electrical.electricalPanels.longDesc'),
      bgImage: 'electricpanel_product.webp',
    },
    {
      title: t('services.categories.electrical.smartMeters.title'),
      shortDesc: t('services.categories.electrical.smartMeters.shortDesc'),
      longDesc: t('services.categories.electrical.smartMeters.longDesc'),
      bgImage: 'meter_product.webp',
    },
    {
      title: t('services.categories.electrical.upsSystems.title'),
      shortDesc: t('services.categories.electrical.upsSystems.shortDesc'),
      longDesc: t('services.categories.electrical.upsSystems.longDesc'),
      bgImage: 'upssystem_product.webp',
    },
    {
      title: t('services.categories.electrical.batteryChargers.title'),
      shortDesc: t('services.categories.electrical.batteryChargers.shortDesc'),
      longDesc: t('services.categories.electrical.batteryChargers.longDesc'),
      bgImage: 'batterycharger_product.jpg',
    },
    {
      title: t('services.categories.electrical.frequencyConverters.title'),
      shortDesc: t('services.categories.electrical.frequencyConverters.shortDesc'),
      longDesc: t('services.categories.electrical.frequencyConverters.longDesc'),
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80',
    },
    {
      title: t('services.categories.electrical.solarPower.title'),
      shortDesc: t('services.categories.electrical.solarPower.shortDesc'),
      longDesc: t('services.categories.electrical.solarPower.longDesc'),
      bgImage: 'solarsytem_product.jpg',
    },
  ];

  const handleLearnMoreClick = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedCards.includes(index);

  return (
    <Box sx={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <ServicesHero />

      <Fade in timeout={1000}>
        <Container maxWidth="lg" sx={{ py: 1 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mt: 10,
              fontWeight: 'bold',
              color: '#333',
              lineHeight: isArabic ? 1.5 : 1.2,
            }}
          >
            {t('services.mainTitle')}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 2,
              color: '#666',
              lineHeight: isArabic ? 1.8 : 1.5,
            }}
          >
            {t('services.mainSubtitle')}
          </Typography>
        </Container>
      </Fade>

      <ServicesSection
        sectionId="oil-and-lubricant"
        services={AviationMarin}
        sectionTitle={t('services.sectionTitles.oilLubricant')}
        expandedCards={expandedCards}
        handleLearnMoreClick={handleLearnMoreClick}
        isExpanded={isExpanded}
      />

      <ServicesSection
        sectionId="defence-and-aviation"
        services={defenseAviationServices}
        sectionTitle={t('services.sectionTitles.defenseAviation')}
        expandedCards={expandedCards}
        handleLearnMoreClick={handleLearnMoreClick}
        isExpanded={isExpanded}
        offsetIndex={AviationMarin.length}
      />

      <ServicesSection
        sectionId="electricals"
        services={electricalServices}
        sectionTitle={t('services.sectionTitles.electricals')}
        expandedCards={expandedCards}
        handleLearnMoreClick={handleLearnMoreClick}
        isExpanded={isExpanded}
        offsetIndex={AviationMarin.length + defenseAviationServices.length}
      />

      <ServiceExcellence />
      <CallToAction navigate={navigate} />
    </Box>
  );
};

export default ServicesPage;