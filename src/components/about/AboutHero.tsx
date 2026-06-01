import React from 'react';
import { Box, Container, Typography, Slide } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutHero: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 'auto', md: '650px' },
        backgroundImage: 'url(about.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 12, md: 0 },
        direction: isArabic ? 'rtl' : 'ltr',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(50, 27, 1, 0.75)',
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 6, md: 29.5 },
        }}
      >
        <Slide direction="up" in timeout={1200}>
          <Box
            sx={{
              color: 'white',
              textAlign: isArabic ? 'right' : 'left',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '3rem', md: '5.5rem' },
                lineHeight: isArabic ? 1.3 : 1.1,
                textShadow: '0 4px 15px rgba(0,0,0,0.8)',
              }}
            >
              {t('about.hero.title')}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1.2rem', md: '1.8rem' },
                lineHeight: isArabic ? 2 : 1.7,
                maxWidth: '800px',
                ml: isArabic ? 'auto' : 0,
                mr: isArabic ? 0 : 'auto',
              }}
            >
              {t('about.hero.subtitle')}
            </Typography>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
};

export default AboutHero;