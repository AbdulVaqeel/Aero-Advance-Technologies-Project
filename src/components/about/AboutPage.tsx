import React from 'react';
import { Container, Box } from '@mui/material';
import AboutHero from './AboutHero';
import InteractiveSectorSection from './InteractiveSectorSection';
import GridSectorsSection from './GridSectorsSection';
import AboutContentSection from './AboutContentSection';
import StatsSection from './StatsSection';

const AboutPage: React.FC = () => {
  const sectors = [
    {
      title: 'Aviation',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Aviation plays a critical role in connecting people, businesses, and communities across the globe. It supports commerce, tourism, and humanitarian efforts while driving technological innovation and economic growth. With a focus on safety, efficiency, and sustainability, the industry advances global mobility.',
      hoverColor: '#d32f2f',
    },
    {
      title: 'Marine',
      image: 'https://i.ytimg.com/vi/p4iwZr14FVc/maxresdefault.jpg',
      text: 'The marine sector drives global trade and logistics through efficient shipping, port operations, and maritime innovation. We support safe, reliable marine solutions aligned with international standards, contributing to economic connectivity in the GCC and beyond.',
      hoverColor: '#0288d1',
    },
    {
      title: 'Industrial',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Our industrial solutions empower manufacturing, infrastructure, and heavy industry projects with high-quality equipment and support, meeting regional regulations and best practices for productivity and reliability.',
      hoverColor: '#388e3c',
    },
    {
      title: 'Automotive',
      image: 'https://platform.theverge.com/wp-content/uploads/sites/2/2025/11/2025-Czinger-Area-21-Visit-001.jpg?quality=90&strip=all',
      text: 'The automotive industry fuels mobility and innovation worldwide. We provide advanced solutions for vehicle manufacturing, maintenance, and emerging technologies like electrification, ensuring quality, safety, and sustainable progress.',
      hoverColor: '#f57c00',
    },
    {
      title: 'Construction',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Erickson_Aircrane_Gypsy_Lady_landing_at_Wagga_Wagga_Airport_%28cropped%29.jpg',
      text: 'The construction industry shapes infrastructure and urban development worldwide. We deliver advanced solutions for building, renovation, and project management, integrating modern technologies and sustainable practices to ensure quality, safety, and long-term value.',
      hoverColor: '#f57c00',
    },
    {
      title: 'Agriculture',
      image: 'https://aerospaceamerica.aiaa.org/wp-content/uploads/2019/05/crop-opener-1.jpg',
      text: 'The agriculture industry sustains global food production and rural economies worldwide. We provide advanced solutions for farming, cultivation, and agribusiness, integrating modern technologies and sustainable practices to ensure productivity, quality, and long-term environmental stewardship.',
      hoverColor: '#f57c00',
    },
  ];

  const sectors1 = [
    {
      title: 'Defense',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/F22_Training_Formation.jpg',
      text: 'Defense solutions protect national security and sovereignty. We deliver advanced systems, equipment, and support for military aviation, surveillance, and strategic operations.',
      hoverColor: '#212121',
    },
    {
      title: 'Civil',
      image: 'https://nationalacademies.bynder.com/asset/efc559e5-8465-4e73-b877-334203277a65/Landscape_500/emerging-hazards-in-commercial-aviation-UW-slider.jpg',
      text: 'Civil aviation connects communities through safe, efficient passenger and cargo transport. We support airlines, airports, and infrastructure with reliable solutions and global compliance.',
      hoverColor: '#1976d2',
    },
    {
      title: 'Private Jet',
      image: 'https://gate.shyaviation.com/media/d2cpi5um/what-are-the-most-luxurious-private-jetst-4800-2700px.jpg',
      text: 'Private aviation offers luxury, flexibility, and efficiency for executive and personal travel. We provide premium aircraft, charter services, and bespoke maintenance for discerning clients.',
      hoverColor: '#6a1b9a',
    },
    {
      title: 'Fixed Wing',
      image: 'https://tecnam.com/wp-content/uploads/2022/09/P2012-STOL-1B8A8156-1024x682.jpg',
      text: 'Fixed-wing aircraft deliver speed, range, and reliability for commercial, cargo, and special missions. We offer comprehensive support from procurement to operations and upgrades.',
      hoverColor: '#0277bd',
    },
    {
      title: 'Rotary Wing',
      image: 'https://www.unmannedsystemstechnology.com/wp-content/uploads/2023/06/alpha-unmanned-systems.jpg',
      text: 'Rotary-wing platforms excel in versatility — from transport and rescue to offshore and military roles. We provide maintenance, parts, and training for helicopters and advanced VTOL systems.',
      hoverColor: '#01579b',
    },
    {
      title: 'Drone',
      image: 'https://www.jouav.com/wp-content/uploads/2022/07/ph-007-1024x576.jpg',
      text: 'Drones and UAV technology revolutionize surveillance, mapping, delivery, and precision operations. We supply modern drone systems, software, and integration services for commercial and defense use.',
      hoverColor: '#455a64',
    },
  ];

  const sectors2 = [
    {
      title: 'Spare Parts',
      image: 'https://www.oceanair.aero/wp-content/uploads/2024/09/aircraft-engine-parts-suppliers.jpg',
      text: 'We provide a comprehensive range of genuine and high-quality spare parts for aviation, marine, industrial, and automotive systems. Our inventory and global supply chain ensure fast delivery and availability of critical components to minimize downtime.',
      hoverColor: '#7b1fa2',
    },
    {
      title: 'Distribution',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070',
      text: 'Our distribution network covers the Kingdom of Saudi Arabia and the wider GCC region. We ensure efficient logistics, timely delivery, and reliable supply chain management for all types of aviation, marine, industrial, and defense products.',
      hoverColor: '#0288d1',
    },
    {
      title: 'Equipment',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'We supply advanced equipment and machinery tailored for aviation maintenance, marine operations, industrial projects, and defense applications. All solutions meet international standards and regional regulatory requirements.',
      hoverColor: '#388e3c',
    },
    {
      title: 'Installment',
      image: 'https://finance.aopa.org/media/images/600x338-First-Time-Buyers-2.png',
      text: 'Our expert teams handle professional installation and commissioning of systems, avionics, engines, marine equipment, industrial machinery, and defense hardware — ensuring safe, compliant, and optimal performance from day one.',
      hoverColor: '#f57c00',
    },
    {
      title: 'Devices',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
      text: 'We offer a wide range of specialized devices including navigation systems, communication equipment, monitoring tools, diagnostic instruments, and precision devices for aviation, marine, industrial, and defense environments.',
      hoverColor: '#1976d2',
    },
    {
      title: 'Repair & Maintenance',
      image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Our certified technicians provide comprehensive repair, overhaul, scheduled maintenance, and line maintenance services for aircraft, marine vessels, industrial systems, and defense platforms — maximizing asset life and operational reliability.',
      hoverColor: '#d32f2f',
    },
  ];

  return (
    <>
      <AboutHero />
      
      <Container maxWidth="lg" sx={{ py: 13 }}>
        {/* Introduction Section */}
        <Box sx={{ mb: 10 }}>
          <AboutContentSection />
        </Box>

        {/* Interactive Sector Sections */}
        <InteractiveSectorSection 
          sectors={sectors}
          sectionIndex={1}
          title="Our Expertise Across Sectors"
        />
        
        
        <GridSectorsSection 
          sectors={sectors}
          title="Our Expertise Across Sectors"
          mb={10}
        />

        <InteractiveSectorSection 
          sectors={sectors1}
          sectionIndex={2}
          reverse={true}
          title="Powering Multiple Industries"
        />
        
        <GridSectorsSection 
          sectors={sectors1}
          title="Powering Multiple Industries"
          mb={10}
        />

        <InteractiveSectorSection 
          sectors={sectors2}
          sectionIndex={3}
          title="Our Areas of Excellence"
        />
        
        <GridSectorsSection 
          sectors={sectors2}
          title="Our Areas of Excellence"
          mb={10}
        />

        {/* Accelerating Sustainable Connections */}
        <Box sx={{ textAlign: 'center', mb: 10, mt: 10 }}>
          <AboutContentSection 
            showFullContent={true}
          />
        </Box>

        {/* Stats Section */}
        <StatsSection />
      </Container>
    </>
  );
};

export default AboutPage;