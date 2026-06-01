import React from 'react';
import { Box, Container, Typography, Grid, Card, Slide } from '@mui/material';
import { Flight, Engineering, Security, Speed } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const FeaturesSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  const features = [
    {
      icon: <Flight sx={{ fontSize: 60 }} />,
      title: t('home.features.modernFleet.title'),
      desc: t('home.features.modernFleet.desc'),
    },
    {
      icon: <Security sx={{ fontSize: 60 }} />,
      title: t('home.features.safetyFirst.title'),
      desc: t('home.features.safetyFirst.desc'),
    },
    {
      icon: <Speed sx={{ fontSize: 60 }} />,
      title: t('home.features.fastService.title'),
      desc: t('home.features.fastService.desc'),
    },
    {
      icon: <Engineering sx={{ fontSize: 60 }} />,
      title: t('home.features.expertTeam.title'),
      desc: t('home.features.expertTeam.desc'),
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 4,
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 'bold',
            color: '#222',
            lineHeight: isArabic ? 1.5 : 1.2,
          }}
        >
          {t('home.features.title')}
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

                  <Typography
                    variant="h6"
                    gutterBottom
                    fontWeight="bold"
                    sx={{
                      lineHeight: isArabic ? 1.6 : 1.3,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: isArabic ? 1.9 : 1.6,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturesSection;