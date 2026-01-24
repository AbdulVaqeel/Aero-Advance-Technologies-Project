  import React, { useState } from 'react';
  import { Container, Typography, Box, Grid, Card, Fade, Slide, Link, ButtonBase } from '@mui/material';
  import { Link as RouterLink } from 'react-router-dom';
  import { Flight } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

  const AboutPage: React.FC = () => {
    const values = ['Innovation', 'Integrity', 'Excellence', 'Safety'];

    const { ref, inView } = useInView({
    triggerOnce: true,     // animate only once
    threshold: 0.3,        // start when 30% of the element is visible
  });

   const stats = [
    { end: 50,  suffix: '+', label: 'Aircraft Supported' },
    { end: 25,  suffix: '+', label: 'Years of Excellence' },
    { end: 10000, suffix: '+', label: 'Projects Delivered' },
    { end: 100, suffix: '+', label: 'Expert Team' },
  ];  

    // Interactive card contents
    const sectors = [
      {
        title: 'Aviation',
        image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Modern jets in formation
        text: 'Aviation plays a critical role in connecting people, businesses, and communities across the globe. It supports commerce, tourism, and humanitarian efforts while driving technological innovation and economic growth. With a focus on safety, efficiency, and sustainability, the industry advances global mobility.',
        hoverColor: '#d32f2f',
      },
      {
        title: 'Marine',
        image: 'https://i.ytimg.com/vi/p4iwZr14FVc/maxresdefault.jpg', // Cargo ship at port
        text: 'The marine sector drives global trade and logistics through efficient shipping, port operations, and maritime innovation. We support safe, reliable marine solutions aligned with international standards, contributing to economic connectivity in the GCC and beyond.',
        hoverColor: '#0288d1',
      },
      {
        title: 'Industrial',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Heavy machinery/factory
        text: 'Our industrial solutions empower manufacturing, infrastructure, and heavy industry projects with high-quality equipment and support, meeting regional regulations and best practices for productivity and reliability.',
        hoverColor: '#388e3c',
      },
      {
        title: 'Automotive',
        image: 'https://platform.theverge.com/wp-content/uploads/sites/2/2025/11/2025-Czinger-Area-21-Visit-001.jpg?quality=90&strip=all', // Car assembly line
        text: 'The automotive industry fuels mobility and innovation worldwide. We provide advanced solutions for vehicle manufacturing, maintenance, and emerging technologies like electrification, ensuring quality, safety, and sustainable progress.',
        hoverColor: '#f57c00',
      },
      {
        title: 'Construction',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Erickson_Aircrane_Gypsy_Lady_landing_at_Wagga_Wagga_Airport_%28cropped%29.jpg', // Car assembly line
        text: 'The construction industry shapes infrastructure and urban development worldwide. We deliver advanced solutions for building, renovation, and project management, integrating modern technologies and sustainable practices to ensure quality, safety, and long-term value.',
        hoverColor: '#f57c00',
      },
      {
        title: 'Agriculture',
        image: 'https://aerospaceamerica.aiaa.org/wp-content/uploads/2019/05/crop-opener-1.jpg', // Car assembly line
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

    const [activeSector, setActiveSector] = useState(0);
    const current = sectors[activeSector];

    const [activeSector1, setActiveSector1] = useState(0);
    const current1 = sectors1[activeSector1];

    const [activeSector2, setActiveSector2] = useState(0);
    const current2 = sectors2[activeSector2];

    return (
      <>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: '80vh', md: '100vh' },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end',
            backgroundImage: `url('https://images.stockcake.com/public/d/4/4/d44220a4-3789-4192-80a3-01af51aec9d2_large/sunset-military-jet-stockcake.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.6)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.75))',
            }}
          />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: { xs: 6, md: 10 } }}>
            <Slide direction="up" in timeout={1200}>
              <Box sx={{ color: 'white' }}>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, letterSpacing: 3 }}>
                  <Link component={RouterLink} to="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    HOME
                  </Link>{' > '}
                  <Link component={RouterLink} to="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    ABOUT
                  </Link>
                </Typography>

                <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.1, mb: 3, textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                  Who we are
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 400, fontSize: { xs: '1.2rem', md: '1.8rem' }, lineHeight: 1.7, maxWidth: '800px' }}>
                  We are dedicated to providing solutions that support our customers’ long-term profitable growth. Our extensive experience and broad network ensure the right product is delivered at the right time.
                </Typography>
              </Box>
            </Slide>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 13 }}>
          <Typography variant="h3" align="center" sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 'bold',
                color: '#222',
                fontFamily: "'Poppins', 'Inter', 'sans-serif'",
                letterSpacing: '1px'
              }} >
            A Global Leader in Aviation & <br /> Multi-Sector Solutions <Flight />
          </Typography>
          
          <Typography
      variant="body1"
      sx={{
        maxWidth: '1100px',
        mx: 'auto',
        mb: 3,
        color: '#424242',
        fontSize: { xs: '1rem', md: '1.2rem' },
        lineHeight: 1.8,
      }}
    >
      We are a leading provider of aviation and marine solutions in the Kingdom of Saudi Arabia and the wider GCC region, established to support the growing demand for safe, efficient, and reliable air and maritime operations. With a strong regional presence and adherence to international standards, we serve airlines, marine operators, ports, and offshore industries, contributing to regional connectivity and economic development.
    </Typography>

    {/* Second Paragraph */}
    <Typography
      variant="body1"
      sx={{
        maxWidth: '1100px',
        mx: 'auto',
        mb: 8,
        color: '#424242',
        fontSize: { xs: '1rem', md: '1.2rem' },
        lineHeight: 1.8,
      }}
    >
      We are a trusted industrial and automotive solutions provider in Saudi Arabia and the GCC, established to meet the requirements of industrial, manufacturing, and mobility sectors. Our operations are aligned with regional regulations and international best practices, enabling us to support major infrastructure, industrial, and automotive projects across the Kingdom.
    </Typography>
    
          {/* Interactive Sector Card */}
          <Grid container spacing={6} sx={{ mb: 10 }}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, md: 550 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
                  transition: 'all 0.4s ease',
                }}
              >
                <Box
                  component="img"
                  src={current.image}
                  alt={current.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,30,40,0.3))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 5,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1.1rem', md: '1.35rem' },
                      lineHeight: 1.7,
                      maxWidth: '85%',
                    }}
                  >
                    {current.text}
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: 40,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: { xs: '3rem', md: '5rem' },
                    textShadow: '0 4px 14px rgba(0,0,0,0.8)',
                    pointerEvents: 'none',
                  }}
                >
                  {current.title}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: { md: 'center' } }}>
                {sectors.map((sector, idx) => (
                  <ButtonBase
                    key={idx}
                    onMouseEnter={() => setActiveSector(idx)}
                    onClick={() => setActiveSector(idx)}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: activeSector === idx ? 'rgba(20, 110, 237, 0.15)' : 'rgba(0,0,0,0.08)',
                      color: activeSector === idx ? '#146eed' : '#333',
                      fontWeight: activeSector === idx ? 'bold' : 'medium',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      '&:hover': { bgcolor: 'rgba(20, 110, 237, 0.25)', transform: 'translateX(8px)' },
                    }}
                  >
                    {sector.title}
                  </ButtonBase>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Typography
      variant="h4"
      align="center"
      sx={{
        mb: 6,
        fontWeight: 'bold',
        color: '#222',
      }}
    >
      Our Expertise Across Sectors
    </Typography>

    <Grid container spacing={4}>
      {sectors.map((sector, idx) => (
        <Grid item xs={4} sm={4} md={4} key={idx}>
          <Box
            sx={{
              position: 'relative',
              height: 280,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              '&:hover': {
                transform: 'scale(1.04)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={sector.image}
              alt={sector.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                p: 3,
                pt: 6,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                }}
              >
                {sector.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>

      <Grid container spacing={6} sx={{ mb: 10, mt: 10 }}>
         <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: { md: 'center' } }}>
                {sectors1.map((sector, idx) => (
                  <ButtonBase
                    key={idx}
                    onMouseEnter={() => setActiveSector1(idx)}
                    onClick={() => setActiveSector1(idx)}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: activeSector1 === idx ? 'rgba(20, 110, 237, 0.15)' : 'rgba(0,0,0,0.08)',
                      color: activeSector1 === idx ? '#146eed' : '#333',
                      fontWeight: activeSector1 === idx ? 'bold' : 'medium',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      '&:hover': { bgcolor: 'rgba(20, 110, 237, 0.25)', transform: 'translateX(8px)' },
                    }}
                  >
                    {sector.title}
                  </ButtonBase>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, md: 550 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
                  transition: 'all 0.4s ease',
                }}
              >
                <Box
                  component="img"
                  src={current1.image}
                  alt={current1.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,30,40,0.3))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 5,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1.1rem', md: '1.35rem' },
                      lineHeight: 1.7,
                      maxWidth: '85%',
                    }}
                  >
                    {current1.text}
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: 40,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: { xs: '3rem', md: '5rem' },
                    textShadow: '0 4px 14px rgba(0,0,0,0.8)',
                    pointerEvents: 'none',
                  }}
                >
                  {current1.title}
                </Typography>
              </Box>
            </Grid>
          </Grid>

            <Typography
      variant="h4"
      align="center"
      sx={{
        mb: 6,
        fontWeight: 'bold',
        color: '#222',
      }}
    >
      Powering Multiple Industries
    </Typography>

    <Grid container spacing={4}>
      {sectors1.map((sector, idx) => (
        <Grid item xs={4} sm={4} md={4} key={idx}>
          <Box
            sx={{
              position: 'relative',
              height: 280,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              '&:hover': {
                transform: 'scale(1.04)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={sector.image}
              alt={sector.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                p: 3,
                pt: 6,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                }}
              >
                {sector.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>

    <Grid container spacing={6} sx={{ mb: 10, mt:10 }}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, md: 550 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
                  transition: 'all 0.4s ease',
                }}
              >
                <Box
                  component="img"
                  src={current2.image}
                  alt={current2.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,30,40,0.3))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 5,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1.1rem', md: '1.35rem' },
                      lineHeight: 1.7,
                      maxWidth: '85%',
                    }}
                  >
                    {current2.text}
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: 40,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: { xs: '3rem', md: '5rem' },
                    textShadow: '0 4px 14px rgba(0,0,0,0.8)',
                    pointerEvents: 'none',
                  }}
                >
                  {current2.title}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: { md: 'center' } }}>
                {sectors2.map((sector, idx) => (
                  <ButtonBase
                    key={idx}
                    onMouseEnter={() => setActiveSector2(idx)}
                    onClick={() => setActiveSector2(idx)}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: activeSector2 === idx ? 'rgba(20, 110, 237, 0.15)' : 'rgba(0,0,0,0.08)',
                      color: activeSector2 === idx ? '#146eed' : '#333',
                      fontWeight: activeSector2 === idx ? 'bold' : 'medium',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      '&:hover': { bgcolor: 'rgba(20, 110, 237, 0.25)', transform: 'translateX(8px)' },
                    }}
                  >
                    {sector.title}
                  </ButtonBase>
                ))}
              </Box>
            </Grid>
          </Grid>

           <Typography
      variant="h4"
      align="center"
      sx={{
        mb: 6,
        fontWeight: 'bold',
        color: '#222',
      }}
    >
      Our Areas of Excellence
    </Typography>

    <Grid container spacing={4}>
      {sectors2.map((sector, idx) => (
        <Grid item xs={4} sm={4} md={4} key={idx}>
          <Box
            sx={{
              position: 'relative',
              height: 280,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              '&:hover': {
                transform: 'scale(1.04)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={sector.image}
              alt={sector.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                p: 3,
                pt: 6,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                }}
              >
                {sector.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>

          {/* Accelerating Sustainable Connections */}
          <Box sx={{ textAlign: 'center', mb: 10, mt:10 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: '#051833',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                mb: 4,
                fontSize: { xs: '2.5rem', md: '4rem' },
              }}
            >
              Accelerating Sustainable<br />Connections
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto', mb: 4, color: '#424242', lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.2rem' } }}>
              We are passionate about regional connectivity and provide top-tier products, services, and support. Since 1981, we have delivered aircraft to over 200 airlines across 100+ countries, enabling essential links for passengers and communities worldwide.
            </Typography>

                 <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto', mb: 4, color: '#424242', lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.2rem' } }}>
              We are passionate about regional connectivity and provide top-tier products, services, and support. Since 1981, we have delivered aircraft to over 200 airlines across 100+ countries, enabling essential links for passengers and communities worldwide.
            </Typography>
          </Box>

          {/* Story + Timeline, Mission, Vision, Values, Stats (unchanged or lightly adjusted) */}
          <Grid container spacing={5} sx={{ mb: 10 }}>
            <Grid item xs={12} md={6}>
              <Slide direction="right" in timeout={1000}>
                <Box>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#146eed' }}>
                    Our Successful Story
                  </Typography>
                  <Typography paragraph sx={{ color: '#555', lineHeight: 1.9 }}>
                    Founded with a vision for excellence, we have grown into a trusted partner in aviation, marine, industrial, and automotive sectors across the GCC and beyond. Founded with a vision for excellence, we have grown into a trusted partner in aviation, marine, industrial, and automotive sectors across the GCC and beyond.
                  </Typography>
                  <Typography paragraph sx={{ color: '#555', lineHeight: 1.9 }}>
                    Founded with a vision for excellence, we have grown into a trusted partner in aviation, marine, industrial, and automotive sectors across the GCC and beyond. Founded with a vision for excellence, we have grown into a trusted partner in aviation, marine, industrial, and automotive sectors across the GCC and beyond.
                  </Typography>
                  <Typography paragraph sx={{ color: '#555', lineHeight: 1.9 }}>
                  </Typography>
                  {/* Add more paragraphs if needed */}
                </Box>
              </Slide>
            </Grid>

            <Grid item xs={12} md={6}>
              <Slide direction="left" in timeout={1200}>
                <Box
                  sx={{
                    height: 400,
                    borderRadius: 3,
                    overflow: 'hidden',
                    backgroundImage: `url('https://ca-times.brightspotcdn.com/dims4/default/11a635c/2147483647/strip/true/crop/2000x1050+0+38/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8e%2F47%2Fad9dc445971eadea14ea8cf1c073%2Fla-1489117919-0mmgi8qnkl-snap-photo')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                  }}
                >
                  <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.4)' }} />
                </Box>
              </Slide>
            </Grid>
          </Grid>

          {/* Mission & Vision */}
          <Grid container spacing={4} sx={{ mb: 10 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 5, height: '100%', borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#146eed' }}>Our Mission</Typography>
                <Typography sx={{ lineHeight: 1.9 }}>
                  To deliver world-class multi-sector solutions through innovation, safety, and unmatched customer support.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 5, height: '100%', borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#146eed' }}>Our Vision</Typography>
                <Typography sx={{ lineHeight: 1.9 }}>
                  To lead regionally and globally in sustainable, efficient solutions across aviation, marine, industrial, and automotive domains.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Core Values */}
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>Our Core Values</Typography>
            <Grid container spacing={3}>
              {values.map((value, idx) => (
                <Grid item xs={6} md={3} key={idx}>
                  <Slide direction="up" in timeout={1000 + idx * 200}>
                    <Card
                      sx={{
                        p: 4,
                        bgcolor: '#146eed',
                        color: 'white',
                        borderRadius: 3,
                        transition: '0.4s',
                        '&:hover': { bgcolor: '#0d47a1', transform: 'scale(1.08)', boxShadow: 6 },
                      }}
                    >
                      <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                        {value}
                      </Typography>
                    </Card>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Stats */}
          <Box sx={{ textAlign: 'center', py: 6 }} ref={ref}>
      <Grid container spacing={4}>
        {stats.map((stat, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Fade in={inView} timeout={800 + idx * 300}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#146eed',
                    minHeight: '1.4em', // prevent layout jump
                  }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={2.2}
                      delay={0.3 + idx * 0.2}
                      separator=","
                      suffix={stat.suffix}
                      enableScrollSpy={false} // we use inView instead
                    />
                  ) : (
                    "0" + stat.suffix
                  )}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ color: '#555', mt: 1, fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
          </Box>
        </Container>
      </>
    );
  };

  export default AboutPage;