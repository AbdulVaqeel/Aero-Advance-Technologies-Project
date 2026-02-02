// import React, { useState } from 'react';
// import { Box, Container, Typography, Fade } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ServicesHero from './ServicesHero';
// import ProcurementSection from './ProcurementSection';
// import ServicesSection from './ServicesSection';
// import ServiceExcellence from './ServiceExcellence';
// import CallToAction from './CallToAction';

// const ServicesPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [expandedCards, setExpandedCards] = useState<number[]>([]);

//   const AviationMarin = [
//     {
//       title: 'Automotive',
//       shortDesc: 'Smart automation solutions designed around your business. Experience seamless efficiency and precision with our advanced systems.',
//       longDesc: 'Our automation solutions provide complete operational flexibility with seamless integration into your workflows. From advanced robotics to smart control systems, we deliver precision, efficiency, and real-time monitoring. Designed for industries of all sizes, our solutions optimize performance, reduce downtime, and empower teams to focus on what matters most.',
//       bgImage: 'automative_product.webp'
//     },
//     {
//       title: 'Industrial',
//       shortDesc: 'Reliable industrial solutions with expert maintenance and repair by certified professionals.',
//       longDesc: 'Our industrial services offer complete operational support with tailored solutions for every facility. From maintenance and repair to full-scale equipment management, we ensure efficiency, safety, and minimal downtime. Designed for factories, plants, and heavy industries, our expert team delivers reliable performance, precision, and continuous productivity.',
//       bgImage: 'industrial_product.jpg'
//     },
//     {
//       title: 'Aviation',
//       shortDesc: 'Expert pilot training programs delivered by highly experienced instructors for safe and confident flying.',
//       longDesc: 'Our aviation solutions provide complete support for operators and pilots with tailored programs and services. From pilot training and aircraft management to maintenance and spare parts, we ensure safety, efficiency, and reliability at every stage. Designed for airlines, private operators, and aviation professionals, our expert team delivers seamless operations and peace of mind.',
//       bgImage: "aviation_product.jpg"
//     },
//     {
//       title: 'Marine',
//       shortDesc: 'Comprehensive marine management solutions to keep your vessels safe, efficient, and fully operational.',
//       longDesc: 'Our marine solutions offer complete support for vessel owners and operators, providing tailored services from management and maintenance to technical inspections. Designed for yachts, commercial fleets, and offshore operations, we ensure safety, efficiency, and reliability at every stage, keeping your vessels mission-ready and performing at their best.',
//       bgImage: 'marine_product.jpeg'
//     },
//   ];

//   const defenseAviationServices = [
//     {
//       title: 'Spare Parts Supply',
//       shortDesc: 'High-quality aviation and defense components available on demand, ensuring rapid delivery and dependable performance.',
//       longDesc: 'Certified aviation and defense spare parts delivered with speed and reliability, supporting uninterrupted operations. From sourcing hard-to-find components to ensuring quality and compliance, every part is handled with precision to keep your fleet and equipment performing at peak efficiency.',
//       bgImage: "spareparts_product.webp"
//     },
//     {
//       title: 'GSE Tools & Equipment',
//       shortDesc: 'Durable and reliable ground support tools and equipment designed to keep your operations running smoothly and efficiently.',
//       longDesc: 'Engineered for durability and efficiency, ground support equipment tools and systems streamline airport operations. From routine maintenance to heavy-duty support, every tool is designed to enhance performance, safety, and reliability on the tarmac.',
//       bgImage: 'gsetools_product.webp'
//     },
//     {
//       title: 'Repair & Calibration',
//       shortDesc: 'Accurate repair and calibration services to ensure peak performance and reliable operations.',
//       longDesc: 'Precision-driven repair and calibration services ensure every system operates at peak performance. From routine maintenance to complex adjustments, every process is handled with accuracy and care, maximizing reliability and extending the life of your equipment.',
//       bgImage: 'repair_product.jpg'
//     },
//     {
//       title: 'Logistics Services',
//       shortDesc: 'Efficient logistics solutions designed to move your goods safely, on time, and with complete reliability.',
//       longDesc: 'End-to-end logistics solutions including warehousing, transportation, inventory management and customs coordination, ensuring timely and secure delivery of critical assets across global operations.',
//       bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'
//     }
//   ];

//   const electricalServices = [
//     {
//       title: 'Electrical Panels & Instrumentation',
//       shortDesc: 'Advanced electrical panels and instrumentation solutions engineered for precision, safety, and reliable performance.',
//       longDesc: 'Design, manufacturing and integration of high-quality electrical panels and instrumentation systems for industrial and infrastructure applications, ensuring safety, efficiency, real-time monitoring and compliance with international standards.',
//       bgImage: 'electricpanel_product.webp'
//     },
//     {
//       title: 'Smart Meters',
//       shortDesc: 'Next-generation smart meters delivering accurate readings, seamless monitoring, and intelligent energy management.',
//       longDesc: 'Advanced smart metering solutions enabling real-time consumption tracking, remote monitoring and data-driven energy optimization for utilities, industries and smart infrastructure.',
//       bgImage: 'meter_product.webp'
//     },
//     {
//       title: 'Industrial Grade UPS Systems',
//       shortDesc: 'Robust industrial UPS solutions ensuring uninterrupted power, reliability, and maximum operational efficiency.',
//       longDesc: 'High-performance industrial UPS systems designed to deliver stable, reliable backup power for critical operations, ensuring protection against outages, surges and power disturbances.',
//       bgImage: 'upssystem_product.webp'
//     },
//     {
//       title: 'Battery Chargers, Rectifiers & Inverters',
//       shortDesc: 'High-performance battery chargers, rectifiers, and inverters engineered for efficiency, reliability, and long-lasting power.',
//       longDesc: 'Robust battery charging systems, rectifiers and inverters engineered for reliable energy conversion, storage and backup across industrial, utility and infrastructure applications.',
//       bgImage: 'batterycharger_product.jpg'
//     },
//     {
//       title: 'Frequency Converters',
//       shortDesc: 'Reliable frequency converters designed to deliver precise power conversion and seamless operational performance.',
//       longDesc: 'Advanced frequency converters enabling precise speed and torque control for motors and electrical systems, improving efficiency, reliability and operational flexibility.',
//       bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80'
//     },
//     {
//       title: 'Solar Power Systems',
//       shortDesc: 'Efficient and sustainable solar power solutions engineered to deliver reliable energy and long-term savings.',
//       longDesc: 'Complete solar power solutions including design, installation and integration of photovoltaic systems, delivering clean, renewable energy for industrial, commercial and utility-scale applications.',
//       bgImage: 'solarsytem_product.jpg'
//     }
//   ];

//   const handleLearnMoreClick = (index: number) => {
//     setExpandedCards(prev => 
//       prev.includes(index)
//         ? prev.filter(i => i !== index)    
//         : [...prev, index]               
//     );
//   };

//   const isExpanded = (index: number) => expandedCards.includes(index);

//   return (
//     <Box>
//       <ServicesHero />
//       <ProcurementSection navigate={navigate} />
      
//       {/* Main Services Title - Only shown once */}
//       <Fade in timeout={1000}>
//         <Container maxWidth="lg" sx={{ py: 1 }}>
//           <Typography 
//             variant="h3" 
//             sx={{ 
//               textAlign: 'center', 
//               mb: 2, 
//               fontWeight: 'bold', 
//               color: '#333' 
//             }}
//           >
//             Our Services & Products
//           </Typography>
//           <Typography 
//             variant="h6" 
//             sx={{ 
//               textAlign: 'center', 
//               mb: 2, 
//               color: '#666' 
//             }}
//           >
//             Comprehensive aviation solutions tailored to your needs
//           </Typography>
//         </Container>
//       </Fade>
      
//       {/* Oil & Lubricant Services */}
//       <ServicesSection
//         services={AviationMarin}
//         sectionTitle="Oil & Lubricant"
//         expandedCards={expandedCards}
//         handleLearnMoreClick={handleLearnMoreClick}
//         isExpanded={isExpanded}
//       />
      
//       {/* Defense and Aviation Services */}
//       <ServicesSection
//         services={defenseAviationServices}
//         sectionTitle="Defense and Aviation"
//         expandedCards={expandedCards}
//         handleLearnMoreClick={handleLearnMoreClick}
//         isExpanded={isExpanded}
//         offsetIndex={AviationMarin.length}
//       />
      
//       {/* Electrical Services */}
//       <ServicesSection
//         services={electricalServices}
//         sectionTitle="Electricals"
//         expandedCards={expandedCards}
//         handleLearnMoreClick={handleLearnMoreClick}
//         isExpanded={isExpanded}
//         offsetIndex={AviationMarin.length + defenseAviationServices.length}
//       />
      
//       <ServiceExcellence />
//       <CallToAction navigate={navigate} />
//     </Box>
//   );
// };

// export default ServicesPage;



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
      shortDesc: 'Smart automation solutions designed around your business. Experience seamless efficiency and precision with our advanced systems.',
      longDesc: 'Our automation solutions provide complete operational flexibility with seamless integration into your workflows. From advanced robotics to smart control systems, we deliver precision, efficiency, and real-time monitoring. Designed for industries of all sizes, our solutions optimize performance, reduce downtime, and empower teams to focus on what matters most.',
      bgImage: 'automative_product.webp'
    },
    {
      title: 'Industrial',
      shortDesc: 'Reliable industrial solutions with expert maintenance and repair by certified professionals.',
      longDesc: 'Our industrial services offer complete operational support with tailored solutions for every facility. From maintenance and repair to full-scale equipment management, we ensure efficiency, safety, and minimal downtime. Designed for factories, plants, and heavy industries, our expert team delivers reliable performance, precision, and continuous productivity.',
      bgImage: 'industrial_product.jpg'
    },
    {
      title: 'Aviation',
      shortDesc: 'Expert pilot training programs delivered by highly experienced instructors for safe and confident flying.',
      longDesc: 'Our aviation solutions provide complete support for operators and pilots with tailored programs and services. From pilot training and aircraft management to maintenance and spare parts, we ensure safety, efficiency, and reliability at every stage. Designed for airlines, private operators, and aviation professionals, our expert team delivers seamless operations and peace of mind.',
      bgImage: "aviation_product.jpg"
    },
    {
      title: 'Marine',
      shortDesc: 'Comprehensive marine management solutions to keep your vessels safe, efficient, and fully operational.',
      longDesc: 'Our marine solutions offer complete support for vessel owners and operators, providing tailored services from management and maintenance to technical inspections. Designed for yachts, commercial fleets, and offshore operations, we ensure safety, efficiency, and reliability at every stage, keeping your vessels mission-ready and performing at their best.',
      bgImage: 'marine_product.jpeg'
    },
  ];

  const defenseAviationServices = [
    {
      title: 'Spare Parts Supply',
      shortDesc: 'High-quality aviation and defense components available on demand, ensuring rapid delivery and dependable performance.',
      longDesc: 'Certified aviation and defense spare parts delivered with speed and reliability, supporting uninterrupted operations. From sourcing hard-to-find components to ensuring quality and compliance, every part is handled with precision to keep your fleet and equipment performing at peak efficiency.',
      bgImage: "spareparts_product.webp"
    },
    {
      title: 'GSE Tools & Equipment',
      shortDesc: 'Durable and reliable ground support tools and equipment designed to keep your operations running smoothly and efficiently.',
      longDesc: 'Engineered for durability and efficiency, ground support equipment tools and systems streamline airport operations. From routine maintenance to heavy-duty support, every tool is designed to enhance performance, safety, and reliability on the tarmac.',
      bgImage: 'gsetools_product.webp'
    },
    {
      title: 'Repair & Calibration',
      shortDesc: 'Accurate repair and calibration services to ensure peak performance and reliable operations.',
      longDesc: 'Precision-driven repair and calibration services ensure every system operates at peak performance. From routine maintenance to complex adjustments, every process is handled with accuracy and care, maximizing reliability and extending the life of your equipment.',
      bgImage: 'repair_product.jpg'
    },
    {
      title: 'Logistics Services',
      shortDesc: 'Efficient logistics solutions designed to move your goods safely, on time, and with complete reliability.',
      longDesc: 'End-to-end logistics solutions including warehousing, transportation, inventory management and customs coordination, ensuring timely and secure delivery of critical assets across global operations.',
      bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'
    }
  ];

  const electricalServices = [
    {
      title: 'Electrical Panels & Instrumentation',
      shortDesc: 'Advanced electrical panels and instrumentation solutions engineered for precision, safety, and reliable performance.',
      longDesc: 'Design, manufacturing and integration of high-quality electrical panels and instrumentation systems for industrial and infrastructure applications, ensuring safety, efficiency, real-time monitoring and compliance with international standards.',
      bgImage: 'electricpanel_product.webp'
    },
    {
      title: 'Smart Meters',
      shortDesc: 'Next-generation smart meters delivering accurate readings, seamless monitoring, and intelligent energy management.',
      longDesc: 'Advanced smart metering solutions enabling real-time consumption tracking, remote monitoring and data-driven energy optimization for utilities, industries and smart infrastructure.',
      bgImage: 'meter_product.webp'
    },
    {
      title: 'Industrial Grade UPS Systems',
      shortDesc: 'Robust industrial UPS solutions ensuring uninterrupted power, reliability, and maximum operational efficiency.',
      longDesc: 'High-performance industrial UPS systems designed to deliver stable, reliable backup power for critical operations, ensuring protection against outages, surges and power disturbances.',
      bgImage: 'upssystem_product.webp'
    },
    {
      title: 'Battery Chargers, Rectifiers & Inverters',
      shortDesc: 'High-performance battery chargers, rectifiers, and inverters engineered for efficiency, reliability, and long-lasting power.',
      longDesc: 'Robust battery charging systems, rectifiers and inverters engineered for reliable energy conversion, storage and backup across industrial, utility and infrastructure applications.',
      bgImage: 'batterycharger_product.jpg'
    },
    {
      title: 'Frequency Converters',
      shortDesc: 'Reliable frequency converters designed to deliver precise power conversion and seamless operational performance.',
      longDesc: 'Advanced frequency converters enabling precise speed and torque control for motors and electrical systems, improving efficiency, reliability and operational flexibility.',
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80'
    },
    {
      title: 'Solar Power Systems',
      shortDesc: 'Efficient and sustainable solar power solutions engineered to deliver reliable energy and long-term savings.',
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
              mb: 2, 
              color: '#666' 
            }}
          >
            Comprehensive aviation solutions tailored to your needs
          </Typography>
        </Container>
      </Fade>
      
      {/* Oil & Lubricant Services */}
      <ServicesSection
        sectionId="oil-and-lubricant"
        services={AviationMarin}
        sectionTitle="Oil & Lubricant"
        expandedCards={expandedCards}
        handleLearnMoreClick={handleLearnMoreClick}
        isExpanded={isExpanded}
      />
      
      {/* Defense and Aviation Services */}
      <ServicesSection
        sectionId="defence-and-aviation"
        services={defenseAviationServices}
        sectionTitle="Defense and Aviation"
        expandedCards={expandedCards}
        handleLearnMoreClick={handleLearnMoreClick}
        isExpanded={isExpanded}
        offsetIndex={AviationMarin.length}
      />
      
      {/* Electrical Services */}
      <ServicesSection
        sectionId="electricals"
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