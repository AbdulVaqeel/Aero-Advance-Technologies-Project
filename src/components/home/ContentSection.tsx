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
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  // Small upward shift – keeps the floating look without big gaps
  const transformStyle = { xs: 'translateY(-20px)', md: 'translateY(-30px)' };

  const imageTransition = section.reverse ? 'translateX(100%)' : 'translateX(-100%)';
  const textTransition = section.reverse ? 'translateX(-100%)' : 'translateX(100%)';

  return (
    <Box
      ref={ref}
      sx={{
        // Much tighter vertical spacing
        pt: {
          xs: sectionIndex === 1 ? 5 : 3,      // first section still slightly more
          md: sectionIndex === 1 ? 7 : 4,
        },
        pb: {
          xs: 4,
          md: 5,
        },
        bgcolor: '#F2F8FF',
        transform: transformStyle,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          spacing={{ xs: 3, md: 5 }}          // reduced horizontal gap between image & text
          direction={section.reverse ? 'row-reverse' : 'row'}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: { xs: 2, md: 3 },
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : imageTransition,
                transition: 'all 0.9s ease-out',
                transitionDelay: '0.15s',
              }}
            >
              <img
                src={section.image}
                alt={section.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : textTransition,
                transition: 'all 0.9s ease-out',
                transitionDelay: section.reverse ? '0.25s' : '0.4s',
                px: { xs: 1, md: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#8B4513',
                  mb: 1,                    // reduced margin below title
                  fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.4rem' },
                  lineHeight: 1.2,
                }}
              >
                {section.title}
              </Typography>

              <Box sx={{ height: 3, width: 70, bgcolor: '#D4AF37', mb: 2 }} /> {/* tighter spacing */}

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.65,
                  color: '#444',
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