import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Grid, Card, Fade, Slide, IconButton } from '@mui/material';
import { Flight, Engineering, Security, Speed, ChevronLeft, ChevronRight, Translate } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Flight sx={{ fontSize: 60 }} />, title: 'Modern Fleet', desc: 'State-of-the-art aircraft with advanced technology and safety features.' },
    { icon: <Security sx={{ fontSize: 60 }} />, title: 'Safety First', desc: 'Rigorous safety protocols and certified maintenance.' },
    { icon: <Speed sx={{ fontSize: 60 }} />, title: 'Fast Service', desc: 'Quick turnaround times and efficient operations.' },
    { icon: <Engineering sx={{ fontSize: 60 }} />, title: 'Expert Team', desc: 'Highly trained professionals with decades of experience.' },
  ];

  const galleryImages = [
    { src: '/oils_home.jpg', alt: 'Oils' },
    { src: '/grease_home.jpg', alt: 'Grease' },
    { src: '/lubricants_home.jpg', alt: 'Lubricants' },
    { src: '/coolants_home.jpg', alt: 'Coolants' },
    { src: '/chemicals_home.jpg', alt: 'Chemicals' },
    { src: '/lubricants2_home.jpg', alt: 'Lubricants' },
  ];

const [currentSlide, setCurrentSlide] = useState(0);

const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref5, inView5] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref6, inView6] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref7, inView7] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref8, inView8] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref9, inView9] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref10, inView10] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref11, inView11] = useInView({ threshold: 0.2, triggerOnce: false });
const [ref12, inView12] = useInView({ threshold: 0.2, triggerOnce: false });


  // ─── Observer for Heading 1 ────────────────────────────────
  const { ref: refh1, inView: inViewh1 } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  // ─── Observer for Heading 2 ────────────────────────────────
  const { ref: refh2, inView: inViewh2 } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  // ─── Observer for Heading 3 ────────────────────────────────
  const { ref: refh3, inView: inViewh3 } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  // ─── Heading 1 ─────────────────────────────────────────────
  const text1 = "Our Focus is on improving reliability and extending the operation life of customer products.";
  const [displayed1, setDisplayed1] = useState('');
  const interval1 = useRef<number | null>(null);

  // ─── Heading 2 ─────────────────────────────────────────────
  const text2 = "Professional aviation solutions, Your one-stop aviation partner sectors ranging from automotive to aviation.";
  const [displayed2, setDisplayed2] = useState('');
  const interval2 = useRef<number | null>(null);

  // ─── Heading 3 ─────────────────────────────────────────────
  const text3 = "We focus on improving innovation capabilities and industry advancement competitiveness from automotive to aviation.";
  const [displayed3, setDisplayed3] = useState('');
  const interval3 = useRef<number | null>(null);

  // Reusable typing function
  const startTyping = (
    text: string,
    setDisplayed: React.Dispatch<React.SetStateAction<string>>,
    intervalRef: React.MutableRefObject<number | null>
  ) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setDisplayed('');

    let i = 0;

    const typeNext = () => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i]);
        i++;
      } else {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    };

    typeNext(); // first character immediately
    intervalRef.current = setInterval(typeNext, 35); // adjust speed here
  };

  // ─── Effect for Heading 1 ──────────────────────────────────
  useEffect(() => {
    if (inViewh1) {
      startTyping(text1, setDisplayed1, interval1);
    } else {
      if (interval1.current) {
        clearInterval(interval1.current);
        interval1.current = null;
      }
      setDisplayed1('');
    }

    return () => {
      if (interval1.current) clearInterval(interval1.current);
    };
  }, [inViewh1]);

  // ─── Effect for Heading 2 ──────────────────────────────────
  useEffect(() => {
    if (inViewh2) {
      startTyping(text2, setDisplayed2, interval2);
    } else {
      if (interval2.current) {
        clearInterval(interval2.current);
        interval2.current = null;
      }
      setDisplayed2('');
    }

    return () => {
      if (interval2.current) clearInterval(interval2.current);
    };
  }, [inViewh2]);

  // ─── Effect for Heading 3 ──────────────────────────────────
  useEffect(() => {
    if (inViewh3) {
      startTyping(text3, setDisplayed3, interval3);
    } else {
      if (interval3.current) {
        clearInterval(interval3.current);
        interval3.current = null;
      }
      setDisplayed3('');
    }

    return () => {
      if (interval3.current) clearInterval(interval3.current);
    };
  }, [inViewh3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));

  return (
    <Fade in timeout={2000}>
  <Box>
    {/* HERO SECTION */}
    <Box
      sx={{
        height: { xs: '70vh', md: '90vh' },
        minHeight: '500px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        overflowX: 'hidden',
        overflowY: 'auto', // prevents video overflow
        width: '100%'
      }}
    >
      {/* Video background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.stockcake.com/public/e/b/7/eb7e4fe1-9d5b-4c42-96f8-2d862c789650_large/jet-engine-maintenance-stockcake.jpg"
        src="https://videos.pexels.com/video-files/11866363/11866363-hd_1920_1080_30fps.mp4"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(1.2)', // makes the video brighter
          zIndex: 0,
        }}
      />

      {/* Dark overlay gradient (lightened for better brightness/readability) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
          zIndex: 1,
        }}
      />

      {/* Content overlay */}
      <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '3.5rem', md: '6rem' },
            textShadow: '0 4px 20px rgba(0,0,0,0.9)',
          }}
        >
          Aero Advance Technologies
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            textShadow: '0 2px 10px rgba(0,0,0,0.9)',
            fontWeight: 500,
          }}
        >
          Excellence in Aviation Maintenance & Solutions
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/contact us')}
          sx={{
            bgcolor: 'white',
            color: '#0066cc',
            fontWeight: 'bold',
            px: 6,
            py: 2,
            mt: 6,
            borderRadius: '50px',
            fontSize: '1.3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
              bgcolor: 'white',
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>

        {/* observer  */}
       <Box 
       ref={refh1}
       sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            py: { xs: 6, md: 10 },
            minHeight: '200px', // helps with initial layout shift
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.2rem' },
              color: '#003366',
              lineHeight: 1.2,
              whiteSpace: 'pre-wrap',
              minHeight: '1.2em',
            }}
          >
            {displayed1}
            {/* {inView && <span className="blinking-cursor">|</span>} */}
          </Typography>

            <Typography
              variant="body1"
              sx={{
                py: { xs: 1, md: 3 },
                fontSize: '1.35rem',
                lineHeight: 1.8,
                color: '#0b0258ff',
                maxWidth: { md: '900px' },
                mx: 'auto',      
                textAlign: 'center', 
              }}
            >
              Protecting and optimizing the machines that keep our country moving by offering over 500 <br />
              products for a variety of industry sectors ranging from Aviation to Agriculture.<br /> Our country
              moving by offering over 4,500 products for a variety of industry <br />
              sectors ranging from automotive to aviation.
            </Typography>
           </Box>
          </Container>
          </Box>

        {/* FULL-WIDTH GALLERY SLIDER */}
        <Box sx={{ my: { xs: 6, md: 10, transform: 'TranslateY(-80px)'} }}>
          <Container maxWidth="lg" sx={{ mb: 5 }}>
            <Typography variant="h2" align="center" sx={{ fontSize:'2vm', color: '#031852ff' }}>
              Oils, Greases, Lubricants, <br />
              Coolants, Chemicals
            </Typography>
          </Container>

          <Box
            sx={{
              width: '100%',
              maxWidth: '1200px',
              mx: 'auto',
              bgcolor:'white',
              position: 'relative',
              overflow: 'hidden',
              // borderRadius: { xs: 1, md: 2 },
              // boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.8s ease-in-out',
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {galleryImages.map((img, idx) => (
                <Box key={idx} sx={{ minWidth: '100%', height: { xs: '40vh', sm: '60vh', md: '80vh' } }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Box>

            <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: { xs: 8, md: 32 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 10 }}>
              <ChevronLeft fontSize="large" />
            </IconButton>

            <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: { xs: 8, md: 32 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 10 }}>
              <ChevronRight fontSize="large" />
            </IconButton>

            <Box sx={{ position: 'absolute', bottom: { xs: 16, md: 32 }, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1.5, zIndex: 10 }}>
              {galleryImages.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  sx={{
                    width: 14,
                    height: 18,
                    // borderRadius: '50%',
                    bgcolor: currentSlide === idx ? 'white' : 'rgba(255,255,255,0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    // boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Image with subtitles */}
        <Box 
          ref={ref1}
          sx={{ 
          pt: { xs: 8, md: 12 }, 
          pb: { xs: 6, md: 8 }, 
          bgcolor: '#F2F8FF', 
          transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)',
          overflow: 'hidden'
           } 
           }}>

          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    opacity: inView1 ? 1 : 0,
                    transform: inView1 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                >
                  <img
                    src="oils2.jpg"
                    alt="Oils"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
              sx={{
                opacity: inView1 ? 1 : 0,
                transform: inView1 ? 'translateX(0)' : 'translateX(100%)',
                transition: 'all 1s ease-out',
                transitionDelay: '0.4s', // Slightly later than image for layered effect
              }}
               >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Built for the Demands of
                  <br />
                  Oil & Gas Operations
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444','&:hover': {color: 'navy'} }}>
                  Experience a higher standard in oil and gas services—where precision, reliability, and industry expertise come together to support your most critical operations and drive energy performance forward.
                </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

         <Box 
           ref={ref2}
           sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 8 },  bgcolor: '#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                 <Box
              sx={{
                opacity: inView2 ? 1 : 0,
                transform: inView2 ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'all 1s ease-out',
                transitionDelay: '0.2s', // Slightly later than image for layered effect
              }}
               >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Greases Built for
                  <br />
                  Demanding Operations
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444','&:hover': {color: 'navy'} }}>
                  Experience a higher standard in greases designed for performance and reliability, supporting critical applications and delivering consistent results under demanding conditions.
                </Typography>
                </Box>
              </Grid>

               <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    opacity: inView2 ? 1 : 0,
                    transform: inView2 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.2s', // Slight delay for sequential feel
                  }}
                >
                  <img
                    src="grease_home.jpg"
                    alt="Greases"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box 
          ref={ref3}
          sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    opacity: inView3 ? 1 : 0,
                    transform: inView3 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s',
                  }}
                >
                  <img
                    src="coolants_home.jpg"
                    alt="Coolants"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
              sx={{
            opacity: inView3 ? 1 : 0,
            transform: inView3 ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 1s ease-out',
            transitionDelay: '0.4s',
              }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Advanced Coolants for 
                  <br />
                  Peak Performance
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444', '&:hover': {color: 'navy'}}}>
                  Experience a higher standard in coolants designed for performance and reliability, supporting critical applications and delivering consistent results under demanding conditions.
                </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box 
        ref={ref4}
        sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                sx={{
                opacity: inView4 ? 1 : 0,
                transform: inView4 ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'all 1s ease-out',
                transitionDelay: '0.2s', // Slightly later than image for layered effect
                }}
                >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Innovative Chemicals for 
                  <br />
                  Maximum Efficiency
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444', '&:hover': {color: 'navy'}}}>
                  Experience a higher standard in chemicals, designed for performance and reliability. Supporting critical applications and delivering consistent results under demanding conditions.
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    opacity: inView4 ? 1 : 0,
                    transform: inView4 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    ransitionDelay: '0.4s', // Slightly later than image for layered effect
                  }}
                >
                  <img
                    src="chemicals_home.jpg"
                    alt="Chemicals"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box 
          ref={ref5}
          sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 8, md: 12 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    opacity: inView5 ? 1 : 0,
                    transform: inView5 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                >
                  <img
                    src="lubricants_home.jpg"
                    alt="Private jet boarding"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                sx={{
                    opacity: inView5 ? 1 : 0,
                    transform: inView5 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                 >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Precision Lubricants for 
                  <br />
                  Reliable Operations
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444', '&:hover': {color: 'navy'}}}>
                  Experience superior performance with advanced lubricants, engineered to reduce wear and maximize efficiency. Protecting critical machinery, and ensuring smooth, reliable operation under demanding conditions.
                </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box 
          ref={refh2}
          sx={{ bgcolor: 'white' }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
                py: { xs: 6, md: 8 },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: 500,
                  fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.2rem' },
                  color: '#003366', 
                  lineHeight: 1.2,
                }}
              >
                {displayed2}
              </Typography>
           <Typography variant="body1" sx={{  py: { xs: 1, md: 3 }, fontSize: '1.35rem', lineHeight: 1.8, color: '#0b0258ff', textAlign: 'center' }}>
             We are a leading global aircraft parts supplier, offering immediate access to new and <br />aftermarket airframe and engine components 
             through an integrated supply chain, <br />strong OEM relationships, ensuring part integrity, competitive prices,<br /> and minimal operational 
             downtime for our clients.
          </Typography>
            </Box>
          </Container>
        </Box>

          {/* FULL-WIDTH GALLERY SLIDER */}
        <Box sx={{ my: { xs: 6, md: 10, transform: 'TranslateY(-80px)'} }}>
          <Container maxWidth="lg" sx={{ mb: 5 }}>
            <Typography variant="h2" align="center" sx={{ fontSize:'2vm', color: '#031852ff' }}>
              Aviation, Spare parts, <br />
              Tools, Equipments
            </Typography>
          </Container>

          <Box
            sx={{
              width: '100%',
              maxWidth: '1200px',
              mx: 'auto',
              bgcolor:'white',
              position: 'relative',
              overflow: 'hidden',
              // borderRadius: { xs: 1, md: 2 },
              // boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.8s ease-in-out',
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {galleryImages.map((img, idx) => (
                <Box key={idx} sx={{ minWidth: '100%', height: { xs: '40vh', sm: '60vh', md: '80vh' } }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Box>

            <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: { xs: 8, md: 32 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 10 }}>
              <ChevronLeft fontSize="large" />
            </IconButton>

            <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: { xs: 8, md: 32 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 10 }}>
              <ChevronRight fontSize="large" />
            </IconButton>

            <Box sx={{ position: 'absolute', bottom: { xs: 16, md: 32 }, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1.5, zIndex: 10 }}>
              {galleryImages.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  sx={{
                    width: 14,
                    height: 18,
                    // borderRadius: '50%',
                    bgcolor: currentSlide === idx ? 'white' : 'rgba(255,255,255,0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    // boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Image with subtitles */}
        <Box 
        ref={ref6}
        sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    opacity: inView6 ? 1 : 0,
                    transform: inView6 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                    // boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  }}
                >
                  <img
                    src="oils2.jpg"
                    alt="Aviation"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    opacity: inView6 ? 1 : 0,
                    transform: inView6 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                 Precision solutions built 
                  <br />
                  for aviation excellence
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444' }}>
                  Experience the ultimate freedom of air travel with private aviation services tailored to your needs. Whether for business or leisure, enjoy a journey defined by comfort, style, and unmatched efficiency.
                </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box 
        ref={ref7}
        sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    opacity: inView7 ? 1 : 0,
                    transform: inView7 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                  >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                 Trusted Parts for 
                  <br />
                 Critical Aviation Systems
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444' }}>
                  Experience unmatched confidence with premium spare parts, engineered to deliver precision and reliability. Supporting critical operations with consistent performance and ensuring your business runs efficiently, every time.
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    opacity: inView7 ? 1 : 0,
                    transform: inView7 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                  >
                  <img
                    src="grease_home.jpg"
                    alt="Spare Parts"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box 
        ref={ref8}
        sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    opacity: inView8 ? 1 : 0,
                    transform: inView8 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                   >
                  <img
                    src="coolants_home.jpg"
                    alt="Tools"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                 sx={{
                    opacity: inView8 ? 1 : 0,
                    transform: inView8 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                  >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Reliable Tools for 
                  <br />
                 Critical Operations
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444' }}>
                 Experience unmatched confidence with premium tools, engineered for precision, durability, and reliability. Supporting critical operations with consistent performance and ensuring your business runs efficiently, every time.
                </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box 
        ref={ref9}
        sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                sx={{
                 
                    opacity: inView9 ? 1 : 0,
                    transform: inView9 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Advanced Equipment for 
                  <br />
                  Maximum Efficiency
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444' }}>
                  Experience reliable, high-performance equipment, built for precision, strength, and dependability. Supporting essential operations with consistent results and keeping your business running efficiently.
                </Typography>
                </Box>
              </Grid>
               <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    opacity: inView9 ? 1 : 0,
                    transform: inView9 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                >
                  <img
                    src="chemicals_home.jpg"
                    alt="Equipments"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

      {/* Electrical and Electronics */}
        <Box 
          ref={refh3}
          sx={{ bgcolor: 'white' }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
                py: { xs: 6, md: 10 },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: 500,
                  fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.2rem' },
                  color: '#003366', 
                  lineHeight: 1.2,
                }}
              >
              {displayed3}
              </Typography>
           <Typography variant="body1" sx={{  py: { xs: 1, md: 3 }, fontSize: '1.35rem', lineHeight: 1.8, color: '#0b0258ff', textAlign: 'center' }}>
            Delivering advanced electrical and electronic communication solutions, <br />
            our portfolio of 4,500+ products supports critical machinery across industries <br />
            ranging from Agriculture to Aerospace, helping keep operations safe, connected, and efficient.
          </Typography>
            </Box>
          </Container>
        </Box>

         {/* FULL-WIDTH GALLERY SLIDER */}
        <Box sx={{ my: { xs: 6, md: 10, transform: 'TranslateY(-80px)'} }}>
          <Container maxWidth="lg" sx={{ mb: 5 }}>
            <Typography variant="h2" align="center" sx={{ fontSize:'2vm', color: '#031852ff' }}>
              Electrical, Electronics & Communication.
            </Typography>
          </Container>

          <Box
            sx={{
              width: '100%',
              maxWidth: '1200px',
              mx: 'auto',
              bgcolor:'white',
              position: 'relative',
              overflow: 'hidden',
              // borderRadius: { xs: 1, md: 2 },
              // boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.8s ease-in-out',
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {galleryImages.map((img, idx) => (
                <Box key={idx} sx={{ minWidth: '100%', height: { xs: '40vh', sm: '60vh', md: '80vh' } }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Box>

            <IconButton onClick={prevSlide} sx={{ position: 'absolute', left: { xs: 8, md: 32 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 10 }}>
              <ChevronLeft fontSize="large" />
            </IconButton>

            <IconButton onClick={nextSlide} sx={{ position: 'absolute', right: { xs: 8, md: 32 }, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, zIndex: 10 }}>
              <ChevronRight fontSize="large" />
            </IconButton>

            <Box sx={{ position: 'absolute', bottom: { xs: 16, md: 32 }, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1.5, zIndex: 10 }}>
              {galleryImages.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  sx={{
                    width: 14,
                    height: 18,
                    // borderRadius: '50%',
                    bgcolor: currentSlide === idx ? 'white' : 'rgba(255,255,255,0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    // boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>


        {/* Image with subtitles */}
        <Box 
        ref={ref10}
        sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    opacity: inView10 ? 1 : 0,
                    transform: inView10 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                    // boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  }}
                >
                  <img
                    src="oils2.jpg"
                    alt="Electricals"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                sx={{
                    opacity: inView10 ? 1 : 0,
                    transform: inView10 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                  >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Advanced Electrical for 
                  <br />
                  Peak Performance
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444' }}>
                  Experience reliable, high-performance electrical equipment, engineered for precision, strength, and durability. Supporting critical operations with consistent results and keeping your business running efficiently.
                </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

         <Box 
         ref={ref11}
         sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                sx={{
                 
                    opacity: inView11 ? 1 : 0,
                    transform: inView11 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                  >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  High-Performance 
                  <br />
                  Electronics Solutions
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444' }}>
                  Experience reliable, high-performance electronic systems, engineered for precision, durability, and efficiency. Supporting critical operations with consistent results and ensuring your business runs smoothly at all times.
                </Typography>
                </Box>
              </Grid>
               <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                     opacity: inView11 ? 1 : 0,
                    transform: inView11 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                >
                  <img
                    src="grease_home.jpg"
                    alt="Electronics"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box 
        ref={ref12}
        sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 8 }, bgcolor:'#F2F8FF', transform: { xs: 'translateY(-60px)', md: 'translateY(-100px)' } }}>
          <Container maxWidth="lg">
            <Grid container alignItems="center" spacing={6}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    borderRadius: { xs: 3, md: 4 },
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                     opacity: inView12 ? 1 : 0,
                    transform: inView12 ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                >
                  <img
                    src="coolants_home.jpg"
                    alt="Communications"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box 
                sx={{
                    opacity: inView12 ? 1 : 0,
                    transform: inView12 ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'all 1s ease-out',
                    transitionDelay: '0.1s', // Slight delay for sequential feel
                  }}
                  >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#8B4513',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Reliable Communication, 
                  <br />
                  Every Time
                </Typography>
                <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#444' }}>
                  Deliver dependable, high-performance communication solutions, designed for accuracy, resilience, and seamless operation. Enabling critical functions with consistent, reliable performance and keeping your business connected and operating efficiently.
                </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* WHY CHOOSE US SECTION */}
        <Container maxWidth="lg">
          <Box 
          sx={{ py: 4 }}>
          <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 'bold', color: '#222' }}>
            Why Choose Aero Advance Technologies
          </Typography>
          <Grid container spacing={4}>
            {features.map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Slide direction="up" in timeout={600 + idx * 200}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 4,
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: '0.3s',
                      '&:hover': { transform: 'translateY(-10px)', boxShadow: 10 },
                    }}
                  >
                    <Box sx={{ color: '#0066cc', mb: 3 }}>{item.icon}</Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};

export default HomePage;