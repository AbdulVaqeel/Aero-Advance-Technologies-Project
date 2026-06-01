import React from 'react';
import { Box, Container, Typography, Fade } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContactHero: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '85vh' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: isArabic ? 'flex-end' : 'flex-start',
        backgroundImage: `url('./contact_img.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
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

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          pb: { xs: 6, md: 10 },
        }}
      >
        <Fade in timeout={1200}>
          <Box
            sx={{
              textAlign: isArabic ? 'right' : 'left',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '3rem', md: '5rem' },
                lineHeight: isArabic ? 1.35 : 1.1,
                maxWidth: { xs: '100%', md: '80%' },
                ml: isArabic ? 'auto' : 0,
                mr: isArabic ? 0 : 'auto',
              }}
            >
              {t('contact.heroTitle')}
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ContactHero;