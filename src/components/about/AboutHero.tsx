import React from 'react';
import { Box, Container, Typography, Slide, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AboutHero: React.FC = () => {
  return (
    <Box
      sx={{
      //   position: 'relative',
      //   height: { xs: '100dvh', md: '88vh' },           // ← fixed: use dvh on mobile
      //   minHeight: { xs: '100dvh', md: 'unset' },        // prevents collapse if content overflows
      //   overflow: 'hidden',
      //   display: 'flex',
      //   alignItems: 'flex-end',
      //   backgroundImage: `url('about.jpg')`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
        // boxShadow: 'inset 0 0 100px rgba(0,0,0,0.6)',
        // bgcolor: 'black',    
            position: 'relative',
      height: { xs: 'auto', md: '650px' },
      backgroundImage: 'url(about.jpg)',
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
      }}
    >
      {/* <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.75))',
          zIndex: 0,  // ensure it's behind content
        }}
      /> */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1, 
          pt: { xs: 6, md: 29.5 } 
        }}
      >
        <Slide direction="up" in timeout={1200}>
          <Box sx={{ color: 'white' }}>
            {/* <Typography 
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
            </Typography> */}

            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: { xs: '3rem', md: '5.5rem' }, 
                lineHeight: 1.1,  
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