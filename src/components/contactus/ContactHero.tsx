import React from 'react';
import { Box, Container, Typography, Fade, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ContactHero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '85vh' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundImage: `url('./contact_img.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 2, 
          pb: { xs: 6, md: 10 } 
        }}
      >
        <Fade in timeout={1200}>
          <Box>
            {/* Clickable Breadcrumb */}
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                mb: 4,
                letterSpacing: '2px',
                fontSize: { xs: '0.9rem', md: '1rem' },
                opacity: 0.9,
              }}
            >
              <Link
                component={RouterLink}
                to="/"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                HOME
              </Link>
              {' > '}
              <Link
                component={RouterLink}
                to="/services"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                SERVICES
              </Link>
              {' > '}
              <Link
                component={RouterLink}
                to="/contact us"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                CONTACT US
              </Link>
            </Typography>

            {/* Main Title */}
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '3rem', md: '5rem' },
                lineHeight: 1.1,
                maxWidth: '80%',
              }}
            >
              360° Support and Services
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ContactHero;