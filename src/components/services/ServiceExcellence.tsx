import React from 'react';
import { Container, Typography, Grid, Box, Fade } from '@mui/material';

const ServiceExcellence: React.FC = () => {
  const excellenceItems = [
    { 
      title: 'Certified Mechanics', 
      bgImage: 'certified_mechanics.jpg' 
    },
    { 
      title: 'Modern Technology', 
      bgImage: 'modern_technology.jpg'
    },
    { 
      title: '24/7 Support', 
      bgImage: 'call_support.jpg'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          textAlign: 'center', 
          mb: 4, 
          fontWeight: 'bold', 
          color: '#333' 
        }}
      >
        Service Excellence
      </Typography>
      <Grid container spacing={3}>
        {excellenceItems.map((item, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Fade in timeout={1500 + idx * 300}>
              <Box sx={{ 
                height: '200px',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${item.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
                {/* Text Content */}
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 'bold',
                    zIndex: 1,
                    textAlign: 'center',
                    textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
                    px: 2
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceExcellence;
