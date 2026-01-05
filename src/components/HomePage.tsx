import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Card, Fade, Slide, IconButton } from '@mui/material';
import { Flight, Engineering, Security, Speed, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // <-- Added this

// Removed props completely – no more TypeScript errors
const HomePage = () => {
  const navigate = useNavigate(); // <-- Now we can navigate properly

  const features = [
    { icon: <Flight sx={{ fontSize: 60 }} />, title: 'Modern Fleet', desc: 'State-of-the-art aircraft with advanced technology and safety features.' },
    { icon: <Security sx={{ fontSize: 60 }} />, title: 'Safety First', desc: 'Rigorous safety protocols and certified maintenance.' },
    { icon: <Speed sx={{ fontSize: 60 }} />, title: 'Fast Service', desc: 'Quick turnaround times and efficient operations.' },
    { icon: <Engineering sx={{ fontSize: 60 }} />, title: 'Expert Team', desc: 'Highly trained professionals with decades of experience.' },
  ];

  const galleryImages = [
    { src: '/Saudia.webp', alt: 'Saudia Aircraft' },
    { src: '/Emirates.jpg', alt: 'Emirates Aircraft' },
    { src: '/Riyadhair.avif', alt: 'RiyadhAir Aircraft' },
    { src: '/flynas.avif', alt: 'Flynas Aircraft' },
    { src: '/Airindia.avif', alt: 'AirIndia Aircraft' },
    { src: '/SpiceJet.jpg', alt: 'SpiceJet Aircraft' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

  return (
    <Fade in timeout={1000}>
      <Box>
        {/* HERO SECTION */}
        <Box
          sx={{
            height: { xs: '70vh', md: '90vh' },
            minHeight: '600px',
            backgroundImage: `url('/Saudia.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))',
              zIndex: 1,
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '3.5rem', md: '6rem' }, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
              SkyTech Aviation
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
              Excellence in Aircraft Solutions
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact us')} // Now uses real routing!
              sx={{
                bgcolor: 'white',
                color: '#0066cc',
                fontWeight: 'bold',
                px: 6,
                py: 2,
                borderRadius: '50px',
                fontSize: '1.3rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-5px)', 
                  boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
                  bgcolor: 'white'
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>

        {/* GALLERY & REST OF CONTENT (unchanged) */}
        <Container maxWidth="lg" sx={{ my: 10 }}>
          <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 'bold', color: '#222' }}>
            Our Partner Airlines & Fleet
          </Typography>

          <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}>
            <Box sx={{ display: 'flex', transition: 'transform 0.8s ease-in-out', transform: `translateX(-${currentSlide * 100}%)` }}>
              {galleryImages.map((img, idx) => (
                <Box key={idx} sx={{ minWidth: '100%', height: { xs: '300px', md: '500px' } }}>
                  <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
              ))}
            </Box>

            <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}>
              <ChevronLeft />
            </IconButton>
            <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}>
              <ChevronRight />
            </IconButton>

            <Box sx={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
              {galleryImages.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: currentSlide === idx ? 'white' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 'bold', color: '#222' }}>
            Why Choose SkyTech
          </Typography>
          <Grid container spacing={4}>
            {features.map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Slide direction="up" in timeout={600 + idx * 200}>
                  <Card sx={{ height: '100%', textAlign: 'center', p: 4, borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: 10 } }}>
                    <Box sx={{ color: '#0066cc', mb: 3 }}>{item.icon}</Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold">{item.title}</Typography>
                    <Typography variant="body1" color="text.secondary">{item.desc}</Typography>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
};

export default HomePage;