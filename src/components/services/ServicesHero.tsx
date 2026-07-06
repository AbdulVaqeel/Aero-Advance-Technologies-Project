import React from 'react';
import { Box, Container, Typography, Slide } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ServicesHero: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '430px', md: '650px' },
        backgroundImage:
          'url(products2.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 0, md: 0 },
        direction: isArabic ? 'rtl' : 'ltr',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.70), rgba(0,0,0,0.45), rgba(0,0,0,0.20))',
          zIndex: 0,
        },
      }}
    >
      <Slide direction="up" in timeout={1200}>
        <Container
          maxWidth="lg"
          sx={{
           position: 'relative',
           zIndex: 1,
           pb: { xs: 3, md: 10 },
           pt: { xs: 10, md: 0 },
           textAlign: isArabic ? 'right' : 'left',
         }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', md: '5.5rem' },
              lineHeight: isArabic ? 1.3 : 1.1,
              mt: { xs: 0, md: 40 },
              color: '#fff',

              textShadow:
                '0 3px 8px rgba(0,0,0,0.7), 0 8px 20px rgba(0,0,0,0.5)',

              letterSpacing: '-0.5px',
            }}
          >
            {t('services.hero.title')}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              lineHeight: isArabic ? 2 : 1.7,
              maxWidth: '800px',
              color: 'rgba(255,255,255,0.98)',

              textShadow: '0 2px 8px rgba(0,0,0,0.65)',

              ml: isArabic ? 'auto' : 0,
              mr: isArabic ? 0 : 'auto',
            }}
          >
            {t('services.hero.subtitle')}
          </Typography>
        </Container>
      </Slide>
    </Box>
  );
};

export default ServicesHero;