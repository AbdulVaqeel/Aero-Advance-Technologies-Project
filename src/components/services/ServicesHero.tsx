import React from 'react';
import { Box, Container, Grid, Typography, Fade, Slide } from '@mui/material';
import { Link } from 'react-router-dom';

const ServicesHero: React.FC = () => {
  return (
    <Box sx={{ 
      position: 'relative',
      height: { xs: 'auto', md: '650px' },
      backgroundImage: 'url(productandservice.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      py: { xs: 12, md: 0 },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'rgba(50, 27, 1, 0.75)'
      }
    }}>
      {/* <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 'bold',
                    mb: 2,
                    lineHeight: 1.2,
                    fontSize: { xs: '2.5rem', md: '3.75rem' }
                  }}
                >
                  Aircraft<br />Procurement
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'white',
                    fontWeight: 400,
                    width: '80rem',
                    fontSize: { xs: '1.2rem', md: '1.8rem' }, 
                    mb: { xs: 4, md: 0 }
                  }}
                >
                   Aero Advance Technologies makes finding and acquiring the right aircraft simple by managing inspections, paperwork, negotiations, and delivery—ensuring a smooth and hassle-free experience.
                </Typography>
              </Box>
            </Fade>
          </Grid> */}
          {/* <Grid item xs={12} md={6}> */}
            {/* <Fade in timeout={1200}>
              <Box sx={{ 
                bgcolor: 'white',
                p: 4,
                borderRadius: 2,
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
              }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#333',
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: '1.1rem'
                  }}
                >
                  Through our Aircraft Procurement Solutions, Aero Advance Technologies helps buyers and sellers successfully navigate aircraft purchasing and selling. From initial consultation to final delivery, we manage the complete process to ensure a secure, seamless, and hassle-free experience.
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#666',
                    lineHeight: 1.8,
                    fontSize: '1rem'
                  }}
                >
                  Aero Advance Technologies makes finding and acquiring the right aircraft simple by managing inspections, paperwork, negotiations, and delivery—ensuring a smooth and hassle-free experience.
                </Typography>
              </Box>
            </Fade> */}
          {/* </Grid> */}
        {/* </Grid>
      </Container> */}

       <Slide direction="up" in timeout={1200}>
       <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1, 
          pb: { xs: 6, md: 10 } 
        }}
      >
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: { xs: '3rem', md: '5.5rem' }, 
                lineHeight: 1.1, 
                mt: 40, 
                color: 'white'
              }}
            >
               Aircraft Procurement
            </Typography>

            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 400, 
                fontSize: { xs: '1.2rem', md: '1.8rem' }, 
                lineHeight: 1.7, 
                maxWidth: '800px',
                color: 'white'
              }}
            >
              Aero Advance Technologies makes finding and acquiring the right aircraft simple by managing inspections, paperwork, negotiations, and delivery—ensuring a smooth and hassle-free experience.
            </Typography>
      </Container>
      </Slide>
    </Box>
  );
};

export default ServicesHero;