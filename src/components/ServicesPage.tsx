import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Button, 
  Fade, 
  Slide,
  Collapse
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();
  
  // Track which cards are expanded (array of indices)
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const services = [
    {
      title: 'Private Charter',
      shortDesc: 'Luxury private jet charters tailored to your schedule. Experience personalized service with our premium fleet.',
      longDesc: 'Our private charter service offers complete flexibility with no fixed schedules. Choose your aircraft from ultra-long-range jets to light jets, enjoy dedicated cabin crew, gourmet catering, and door-to-door luxury transportation. Perfect for business executives, VIPs, families and time-critical travel.',
      bgImage: 'https://images.unsplash.com/photo-1564592030690-2a8a2e0e3c1a?w=1200&q=80'
    },
    {
      title: 'Aircraft Maintenance',
      shortDesc: 'Comprehensive maintenance and repair services by certified technicians.',
      longDesc: 'We provide line & base maintenance, AOG support, engine & component overhaul coordination, paint & interior refurbishment. All work is performed in accordance with OEM standards, EASA/FAA regulations and by experienced licensed engineers with type ratings on most business jet types.',
      bgImage: 'https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?w=1200&q=80'
    },
    {
      title: 'Flight Training',
      shortDesc: 'Professional pilot training programs with experienced instructors.',
      longDesc: 'From zero to hero programs through type rating courses. Modern fleet of aircraft + advanced full-motion simulators. Individual approach, flexible scheduling, preparation for FAA/EASA exams and recurrent training packages for professional pilots.',
      bgImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80'
    },
    {
      title: 'Aircraft Management',
      shortDesc: 'Full-service aircraft management solutions for owners.',
      longDesc: 'Complete turn-key management including regulatory compliance, crew recruitment & training, trip planning & dispatch, maintenance tracking, insurance & finance coordination, charter marketing and 24/7 operational support.',
      bgImage: 'https://images.unsplash.com/photo-1559523195-5b2c5e0d3c99?w=1200&q=80'
    },
    {
      title: 'Cargo Services',
      shortDesc: 'Reliable air cargo solutions for time-sensitive shipments.',
      longDesc: 'Specialized cargo operations for general freight, perishables, dangerous goods, oversized cargo and valuable items. Real-time tracking, temperature-controlled options, customs clearance assistance and dedicated cargo-only flights when required.',
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80'
    },
    {
      title: 'Aviation Consulting',
      shortDesc: 'Expert consulting services for aviation businesses and operators.',
      longDesc: 'Strategic fleet planning, regulatory compliance audits, SMS implementation, cost optimization analysis, aircraft acquisition/sale advisory, operations manual development, safety & quality management system consulting.',
      bgImage: 'https://images.unsplash.com/photo-1556388157-43e3c6764be9?w=1200&q=80'
    }
  ];

  const procurementServices = [
    'Assist buyer and/or seller in the complete procurement process',
    'Pre-buy and Delivery inspection',
    'Due-diligence of technical compliance',
    'Negotiations and contracts',
    'Engines, Components and Tooling procurement',
    'Aircraft appraisal',
    'Aircraft listing'
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
      {/* Hero Section - Aircraft Procurement */}
      <Box sx={{ 
        position: 'relative',
        height: { xs: 'auto', md: '500px' },
        backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 0 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(139, 35, 50, 0.75)'
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography variant="h2" sx={{ 
                    color: 'white', 
                    fontWeight: 'bold',
                    mb: 2,
                    lineHeight: 1.2,
                    fontSize: { xs: '2.5rem', md: '3.75rem' }
                  }}>
                    Aircraft<br />Procurement
                  </Typography>
                  <Typography variant="h5" sx={{ 
                    color: 'white',
                    fontWeight: 300,
                    mb: { xs: 4, md: 0 }
                  }}>
                    Get a better deal
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade in timeout={1200}>
                <Box sx={{ 
                  bgcolor: 'white',
                  p: 4,
                  borderRadius: 2,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}>
                  <Typography variant="body1" sx={{ 
                    color: '#333',
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: '1.1rem'
                  }}>
                    With our global Aircraft Procurement Services our goal is to assist both buyers and sellers with the acquisition or sale of any aircraft and to guide them throughout the whole process, guaranteeing a smooth transaction.
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#666',
                    lineHeight: 1.8,
                    fontSize: '1rem'
                  }}>
                    Finding the perfect plane for your businessmodel can be tough and when finding it, the whole process of inspection, paperwork, negotiations, parts
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Aircraft Procurement Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography variant="h3" sx={{ 
                  fontWeight: 'bold', 
                  mb: 2,
                  color: '#1a1a1a'
                }}>
                  Aircraft Procurement
                </Typography>
                <Typography variant="h6" sx={{ 
                  color: '#666',
                  mb: 3,
                  fontWeight: 400
                }}>
                  Our services
                </Typography>
                <Box component="ul" sx={{ 
                  listStyle: 'none', 
                  p: 0,
                  m: 0 
                }}>
                  {procurementServices.map((service, idx) => (
                    <Box 
                      component="li" 
                      key={idx}
                      sx={{ 
                        mb: 2,
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                    >
                      <Box sx={{ 
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: '#8b2332',
                        mt: 1,
                        mr: 2,
                        flexShrink: 0
                      }} />
                      <Typography variant="body1" sx={{ 
                        color: '#8b2332',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                      }}>
                        {service}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in timeout={1200}>
              <Box>
                <Typography variant="body1" sx={{ 
                  color: '#555',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  mb: 4
                }}>
                  With our extensive market knowledge and experience with intercontinental business ethics we offer our clients guidance along the various steps in the process. No matter if it's for buying or selling an aircraft, by utilizing our vast network of contacts in the aviation industry we're always able to find the better deal.
                </Typography>
                <Button 
                  variant="contained"
                  size="large"
                  sx={{ 
                    bgcolor: '#1a5f5f',
                    color: 'white',
                    px: 5,
                    py: 2,
                    borderRadius: 8,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#164a4a'
                    }
                  }}
                  onClick={() => navigate('/contact us')}
                >
                  Get in touch
                </Button>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>


    <Fade in timeout={1000}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: '#333' }}>
            Our Services
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 8, color: '#666' }}>
            Comprehensive aviation solutions tailored to your needs
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Slide direction="up" in timeout={800 + idx * 150}>
                  <Card sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': { 
                      transform: 'translateY(-10px)',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                    }
                  }}>
                    {/* Image Header */}
                    <Box sx={{ 
                      height: '220px', 
                      backgroundImage: `url(${service.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}>
                      <Box sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.65))',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        pb: 4,
                        px: 3
                      }}>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            color: 'white', 
                            fontWeight: 'bold',
                            textAlign: 'center',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      p: 3 
                    }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: 3, 
                          color: '#444', 
                          lineHeight: 1.7,
                          flexGrow: 1
                        }}
                      >
                        {service.shortDesc}
                      </Typography>

                      {/* Detailed description - shows only for this card */}
                      <Collapse in={isExpanded(idx)}>
                        <Box sx={{ 
                          mt: 2,
                          p: 2,
                          bgcolor: 'rgba(139, 35, 50, 0.03)',
                          borderRadius: 1,
                          borderLeft: '4px solid #8b2332'
                        }}>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#333', 
                              lineHeight: 1.8
                            }}
                          >
                            {service.longDesc}
                          </Typography>
                        </Box>
                      </Collapse>

                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <Button 
                          variant="outlined"
                          size="medium"
                          fullWidth={false}
                          sx={{ 
                            borderColor: isExpanded(idx) ? '#8b2332' : '#667eea',
                            color: isExpanded(idx) ? '#8b2332' : '#667eea',
                            '&:hover': {
                              borderColor: isExpanded(idx) ? '#6b1a27' : '#764ba2',
                              bgcolor: isExpanded(idx) 
                                ? 'rgba(139, 35, 50, 0.08)' 
                                : 'rgba(102, 126, 234, 0.08)'
                            }
                          }}
                          onClick={() => handleLearnMoreClick(idx)}
                        >
                          {isExpanded(idx) ? 'Show Less' : 'Learn More'}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        

      {/* Service Excellence Section */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold', color: '#333' }}>
              Service Excellence
            </Typography>
            <Grid container spacing={3}>
              {[
                { color: '#ff6b6b', title: 'Certified Mechanics' },
                { color: '#4ecdc4', title: 'Modern Technology' },
                { color: '#ffe66d', title: '24/7 Support' }
              ].map((item, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Fade in timeout={1500 + idx * 300}>
                    <Box sx={{ 
                      height: '200px', 
                      bgcolor: item.color,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': { 
                        transform: 'scale(1.05)'
                      }
                    }}>
                      <Typography variant="h5" sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        zIndex: 1,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Call to Action */}
          <Box sx={{ 
            mt: 8, 
            p: 6, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2,
            textAlign: 'center',
            color: 'white'
          }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
              Ready to Elevate Your Aviation Experience?
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Contact us today to discuss your aviation needs
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: '#667eea',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { 
                  bgcolor: '#f0f0f0',
                  transform: 'scale(1.05)'
                }
              }}
              onClick={() => navigate('/contact us')}
            >
              Get In Touch
            </Button>
          </Box>
        </Container>
      </Fade>
    </Box>
  );
};

export default ServicesPage;

