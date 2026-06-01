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
        height: { xs: 'auto', md: '650px' },
        backgroundImage: 'url(productandservice.jpg)',
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
      <Slide direction="up" in timeout={1200}>
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            pb: { xs: 6, md: 10 },
            textAlign: isArabic ? 'right' : 'left',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', md: '5.5rem' },
              lineHeight: isArabic ? 1.3 : 1.1,
              mt: 40,
              color: 'white',
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
              color: 'white',
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