import React from 'react';
import { Box, Container, Typography, Slide, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AboutHero: React.FC = () => {
  return (
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
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1, 
          pb: { xs: 6, md: 10 } 
        }}
      >
        <Slide direction="up" in timeout={1200}>
          <Box sx={{ color: 'white' }}>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                opacity: 0.9, 
                letterSpacing: 3 
              }}
            >
              <Link 
                component={RouterLink} 
                to="/" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none', 
                  '&:hover': { textDecoration: 'underline' } 
                }}
              >
                HOME
              </Link>
              {' > '}
              <Link 
                component={RouterLink} 
                to="/about" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none', 
                  '&:hover': { textDecoration: 'underline' } 
                }}
              >
                ABOUT
              </Link>
            </Typography>

            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: { xs: '3rem', md: '5.5rem' }, 
                lineHeight: 1.1, 
                mb: 3, 
                textShadow: '0 4px 15px rgba(0,0,0,0.8)' 
              }}
            >
              Who we are
            </Typography>

            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 400, 
                fontSize: { xs: '1.2rem', md: '1.8rem' }, 
                lineHeight: 1.7, 
                maxWidth: '800px' 
              }}
            >
              We are dedicated to providing solutions that support our customers' long-term profitable growth. Our extensive experience and broad network ensure the right product is delivered at the right time.
            </Typography>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
};

export default AboutHero;