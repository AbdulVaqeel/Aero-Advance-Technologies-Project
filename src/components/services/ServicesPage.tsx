import React, { useState } from 'react';
import { Box, Container, Typography, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ServicesHero from './ServicesHero';
import ProcurementSection from './ProcurementSection';
import ServicesSection from './ServicesSection';
import ServiceExcellence from './ServiceExcellence';
import CallToAction from './CallToAction';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const AviationMarin = [
    {
      title: 'Automotive',
      shortDesc: 'Luxury private jet charters tailored to your schedule. Experience personalized service with our premium fleet.',
      longDesc: 'Our private charter service offers complete flexibility with no fixed schedules. Choose your aircraft from ultra-long-range jets to light jets, enjoy dedicated cabin crew, gourmet catering, and door-to-door luxury transportation. Perfect for business executives, VIPs, families and time-critical travel.',
      bgImage: 'automative_product.webp'
    },
    {
      title: 'Industrial',
      shortDesc: 'Comprehensive maintenance and repair services by certified technicians.',
      longDesc: 'We provide line & base maintenance, AOG support, engine & component overhaul coordination, paint & interior refurbishment. All work is performed in accordance with OEM standards, EASA/FAA regulations and by experienced licensed engineers with type ratings on most business jet types.',
      bgImage: 'industrial_product.jpg'
    },
    {
      title: 'Aviation',
      shortDesc: 'Professional pilot training programs with experienced instructors.',
      longDesc: 'From zero to hero programs through type rating courses. Modern fleet of aircraft + advanced full-motion simulators. Individual approach, flexible scheduling, preparation for FAA/EASA exams and recurrent training packages for professional pilots.',
      bgImage: "aviation_product.jpg"
    },
    {
      title: 'Marine',
      shortDesc: 'Full-service aircraft management solutions for owners.',
      longDesc: 'Complete turn-key management including regulatory compliance, crew recruitment & training, trip planning & dispatch, maintenance tracking, insurance & finance coordination, charter marketing and 24/7 operational support.',
      bgImage: 'marine_product.jpeg'
    },
  ];

  const defenseAviationServices = [
    {
      title: 'Spare Parts Supply',
      shortDesc: 'Certified aviation and defense spare parts with rapid availability.',
      longDesc: 'Comprehensive supply of OEM and approved spare parts for aircraft, defense systems and ground operations. Ensuring traceability, regulatory compliance, fast sourcing and global delivery to minimize downtime and maintain mission readiness.',
      bgImage: "spareparts_product.webp"
    },
    {
      title: 'GSE Tools & Equipment',
      shortDesc: 'High-performance ground support tools for mission-critical operations.',
      longDesc: 'Provision of advanced Ground Support Equipment and specialized tools for aircraft handling, maintenance and flight-line operations. Designed for safety, reliability and compliance with international aviation standards.',
      bgImage: 'gsetools_product.webp'
    },
    {
      title: 'Repair & Calibration',
      shortDesc: 'Precision maintenance for operational excellence.',
      longDesc: 'Certified repair, overhaul and calibration services for aviation and defense equipment, ensuring accuracy, reliability and regulatory compliance through state-of-the-art facilities and expert technicians.',
      bgImage: 'repair_product.jpg'
    },
    {
      title: 'Logistics Services',
      shortDesc: 'Secure and efficient logistics for defense and aviation supply chains.',
      longDesc: 'End-to-end logistics solutions including warehousing, transportation, inventory management and customs coordination, ensuring timely and secure delivery of critical assets across global operations.',
      bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'
    }
  ];

  const electricalServices = [
    {
      title: 'Electrical Panels & Instrumentation',
      shortDesc: 'Reliable control and monitoring solutions for critical operations.',
      longDesc: 'Design, manufacturing and integration of high-quality electrical panels and instrumentation systems for industrial and infrastructure applications, ensuring safety, efficiency, real-time monitoring and compliance with international standards.',
      bgImage: 'electricpanel_product.webp'
    },
    {
      title: 'Smart Meters',
      shortDesc: 'Intelligent metering for accurate energy management.',
      longDesc: 'Advanced smart metering solutions enabling real-time consumption tracking, remote monitoring and data-driven energy optimization for utilities, industries and smart infrastructure.',
      bgImage: 'meter_product.webp'
    },
    {
      title: 'Industrial Grade UPS Systems',
      shortDesc: 'Uninterrupted power for mission-critical environments.',
      longDesc: 'High-performance industrial UPS systems designed to deliver stable, reliable backup power for critical operations, ensuring protection against outages, surges and power disturbances.',
      bgImage: 'upssystem_product.webp'
    },
    {
      title: 'Battery Chargers, Rectifiers & Inverters',
      shortDesc: 'Efficient power conversion and energy continuity solutions.',
      longDesc: 'Robust battery charging systems, rectifiers and inverters engineered for reliable energy conversion, storage and backup across industrial, utility and infrastructure applications.',
      bgImage: 'batterycharger_product.jpg'
    },
    {
      title: 'Frequency Converters',
      shortDesc: 'Precision control for optimized power performance.',
      longDesc: 'Advanced frequency converters enabling precise speed and torque control for motors and electrical systems, improving efficiency, reliability and operational flexibility.',
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80'
    },
    {
      title: 'Solar Power Systems',
      shortDesc: 'Sustainable energy solutions for a greener future.',
      longDesc: 'Complete solar power solutions including design, installation and integration of photovoltaic systems, delivering clean, renewable energy for industrial, commercial and utility-scale applications.',
      bgImage: 'solarsytem_product.jpg'
    }
  ];

  const handleLearnMoreClick = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)    
        : [...prev, index]               
    );
  };

  const isExpanded = (index: number) => expandedCards.includes(index);

  return (
    <Box>
      <ServicesHero />
      <ProcurementSection navigate={navigate} />
      
      {/* Main Services Title - Only shown once */}
      <Fade in timeout={1000}>
        <Container maxWidth="lg" sx={{ py: 1 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              mb: 2, 
              fontWeight: 'bold', 
              color: '#333' 
            }}
          >
            Our Services & Products
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center', 
              mb: 8, 
              color: '#666' 
            }}
          >
            Comprehensive aviation solutions tailored to your needs
          </Typography>
        </Container>
      </Fade>
      
      {/* Aviation and Marin Services */}
      <ServicesSection
        services={AviationMarin}
        sectionTitle="Oil & Lubricant"
        expandedCards={expandedCards}
        handleLearnMoreClick={handleLearnMoreClick}
        isExpanded={isExpanded}
      />
      
      {/* Defense and Aviation Services */}
      <ServicesSection
        services={defenseAviationServices}
        sectionTitle="Defense and Aviation"
        expandedCards={expandedCards}
        handleLearnMoreClick={handleLearnMoreClick}
        isExpanded={isExpanded}
        offsetIndex={AviationMarin.length}
      />
      
      {/* Electrical Services */}
      <ServicesSection
        services={electricalServices}
        sectionTitle="Electricals"
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