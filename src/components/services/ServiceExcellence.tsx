import React from 'react';
import { Container, Typography, Grid, Box, Fade } from '@mui/material';

const ServiceExcellence: React.FC = () => {
  const excellenceItems = [
    { color: '#ff6b6b', title: 'Certified Mechanics' },
    { color: '#4ecdc4', title: 'Modern Technology' },
    { color: '#ffe66d', title: '24/7 Support' }
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
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 'bold',
                    zIndex: 1,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
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