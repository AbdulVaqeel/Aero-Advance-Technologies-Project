import React from 'react';
import { Container, Typography, Grid, Box, Fade } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ServiceExcellence: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  const excellenceItems = [
    {
      title: t('services.excellence.certifiedMechanics'),
      bgImage: 'certified_mechanics.jpg',
    },
    {
      title: t('services.excellence.modernTechnology'),
      bgImage: 'modern_technology.jpg',
    },
    {
      title: t('services.excellence.support'),
      bgImage: 'call_support.jpg',
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 8,
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: '#333',
          lineHeight: isArabic ? 1.5 : 1.2,
        }}
      >
        {t('services.excellence.title')}
      </Typography>

      <Grid container spacing={3}>
        {excellenceItems.map((item, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Fade in timeout={1500 + idx * 300}>
              <Box
                sx={{
                  height: '200px',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${item.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    zIndex: 1,
                    textAlign: 'center',
                    textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
                    px: 2,
                    lineHeight: isArabic ? 1.6 : 1.3,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceExcellence;