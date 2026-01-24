import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface ContentSectionProps {
  section: {
    id: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    reverse?: boolean;
  };
  sectionIndex: number;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section, sectionIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  const transformStyle = sectionIndex <= 5 
    ? { xs: 'translateY(-60px)', md: 'translateY(-100px)' }
    : { xs: 'translateY(-60px)', md: 'translateY(-100px)' };

  const imageTransition = section.reverse ? 'translateX(100%)' : 'translateX(-100%)';
  const textTransition = section.reverse ? 'translateX(-100%)' : 'translateX(100%)';

  return (
    <Box 
      ref={ref}
      sx={{ 
        pt: { xs: sectionIndex === 1 ? 8 : 2, md: sectionIndex === 1 ? 12 : 4 }, 
        pb: { xs: 6, md: sectionIndex === 5 ? 12 : 8 }, 
        bgcolor: '#F2F8FF', 
        transform: transformStyle,
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={6} direction={section.reverse ? 'row-reverse' : 'row'}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: { xs: 3, md: 4 },
                overflow: 'hidden',
                boxShadow: sectionIndex !== 1 ? '0 20px 50px rgba(0,0,0,0.15)' : 'none',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : imageTransition,
                transition: 'all 1s ease-out',
                transitionDelay: '0.1s',
              }}
            >
              <img
                src={section.image}
                alt={section.alt}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : textTransition,
                transition: 'all 1s ease-out',
                transitionDelay: section.reverse ? '0.2s' : '0.4s',
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
                {section.title}
              </Typography>
              <Box sx={{ height: 4, width: 100, bgcolor: '#D4AF37', mb: 4 }} />
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.25rem', 
                  lineHeight: 1.8, 
                  color: '#444',
                  '&:hover': { color: 'navy' } 
                }}
              >
                {section.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContentSection;