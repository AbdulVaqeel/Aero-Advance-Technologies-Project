import React from 'react';
import { Container, Typography, Box, Grid, Card, Fade, Slide } from '@mui/material';

const AboutPage: React.FC = () => {
  const values = ['Innovation', 'Integrity', 'Excellence', 'Safety'];

  return (
    <Fade in timeout={1000}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: '#222',
            letterSpacing: '1px'
          }}
        >
          About SkyTech Aviation
        </Typography>

        {/* HERO IMAGE (Gulfair.jpg as background) */}
        <Box
          sx={{
            height: '420px',
            mb: 6,
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: `url('/Gulfair.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 15px 40px rgba(0,0,0,0.2)',

            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.100))',
              zIndex: 1,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              top: 30,
              left: 0,
              right: 0,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              zIndex: 2,
              textShadow: '0 4px 20px rgba(0,0,0,0.9)',
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            Aircraft Hangar Scene
          </Typography>
        </Box>

        {/* Story + Timeline Section */}
        <Grid container spacing={5} alignItems="stretch">
          {/* Our Story */}
          <Grid item xs={12} md={6}>
            <Slide direction="right" in timeout={1000}>
              <Box>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#667eea' }}>
                  Our Story
                </Typography>
                <Typography paragraph sx={{ color: '#555', lineHeight: 1.9, fontSize: '1.05rem' }}>
                  Founded in 1995, SkyTech Aviation has been at the forefront of aviation excellence for over 25 years. We started with a single aircraft and a vision to revolutionize air travel and aircraft services.
                </Typography>
                <Typography paragraph sx={{ color: '#555', lineHeight: 1.9 }}>
                  Today, we operate a fleet of 50+ aircraft and serve clients worldwide with comprehensive aviation solutions including charter services, maintenance, and consulting.
                </Typography>
                <Typography paragraph sx={{ color: '#555', lineHeight: 1.9 }}>
                  Our commitment to innovation and safety has made us a trusted partner for businesses, government agencies, and individuals seeking exceptional aviation services.
                </Typography>
              </Box>
            </Slide>
          </Grid>

          {/* TIMELINE CARD — NOW WITH YOUR IMAGE Gulfair_Parts.avif */}
          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={1200}>
              <Box
                sx={{
                  height: '380px',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                  backgroundImage: `url('/Gulfair_Parts.avif')`,  // ← YOUR IMAGE HERE
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Subtle dark overlay so text is readable */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
                    zIndex: 1,
                  }}
                />

                {/* Title */}
                {/* <Typography
                  variant="h4"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    zIndex: 2,
                    textAlign: 'center',
                    textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                    fontSize: { xs: '2rem', md: '2.1rem' },
                    letterSpacing: '2px'
                  }}
                >
                  Company Timeline
                </Typography> */}
              </Box>
            </Slide>
          </Grid>
        </Grid>

        {/* Mission & Vision */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 5, bgcolor: '#f8f9fa', height: '100%', borderRadius: 3, boxShadow: 3, '&:hover': { transform: 'translateY(-8px)', transition: '0.4s' } }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#667eea' }}>Our Mission</Typography>
                <Typography sx={{ color: '#444', lineHeight: 1.9 }}>
                  To provide world-class aviation services that exceed expectations through innovation, dedication, and an unwavering commitment to safety and customer satisfaction.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 5, bgcolor: '#f8f9fa', height: '100%', borderRadius: 3, boxShadow: 3, '&:hover': { transform: 'translateY(-8px)', transition: '0.4s' } }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#667eea' }}>Our Vision</Typography>
                <Typography sx={{ color: '#444', lineHeight: 1.9 }}>
                  To be the global leader in aviation services, recognized for operational excellence, technological innovation, and creating lasting value for our clients and stakeholders.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Core Values */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: '#222' }}>Our Core Values</Typography>
          <Grid container spacing={3}>
            {values.map((value, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <Slide direction="up" in timeout={1000 + idx * 200}>
                  <Card
                    sx={{
                      p: 4,
                      bgcolor: '#667eea',
                      color: 'white',
                      borderRadius: 3,
                      transition: 'all 0.4s',
                      '&:hover': { bgcolor: '#5a67d8', transform: 'scale(1.08)', boxShadow: '0 15px 30px rgba(102,126,234,0.4)' }
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
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Grid container spacing={4}>
            {[
              { number: '50+', label: 'Aircraft Fleet' },
              { number: '25+', label: 'Years Experience' },
              { number: '10K+', label: 'Happy Clients' },
              { number: '100+', label: 'Expert Staff' }
            ].map((stat, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <Fade in timeout={1400 + idx * 300}>
                  <Box>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#667eea' }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#555', mt: 1 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Fade>
  );
};

export default AboutPage;