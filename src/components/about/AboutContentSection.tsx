import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Card
} from '@mui/material';
import { Flight } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface AboutContentSectionProps {
  showFullContent?: boolean;
}

const AboutContentSection: React.FC<AboutContentSectionProps> = ({
  showFullContent = false
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  if (showFullContent) {
    return (
      <>
        {/* Mission & Vision */}
        <Grid
          container
          spacing={4}
          sx={{
            mb: 10,
            direction: isArabic ? 'rtl' : 'ltr',
          }}
        >
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 5,
                height: '100%',
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                textAlign: isArabic ? 'right' : 'left',
                '&:hover': { transform: 'translateY(-8px)' },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: '#146eed',
                  lineHeight: isArabic ? 1.6 : 1.3,
                }}
              >
                {t('about.content.missionTitle')}
              </Typography>

              <Typography sx={{ lineHeight: isArabic ? 2 : 1.9 }}>
                {t('about.content.missionText')}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 5,
                height: '100%',
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                textAlign: isArabic ? 'right' : 'left',
                '&:hover': { transform: 'translateY(-8px)' },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: '#146eed',
                  lineHeight: isArabic ? 1.6 : 1.3,
                }}
              >
                {t('about.content.visionTitle')}
              </Typography>

              <Typography sx={{ lineHeight: isArabic ? 2 : 1.9 }}>
                {t('about.content.visionText')}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <Box
      sx={{
        direction: isArabic ? 'rtl' : 'ltr',
        textAlign: isArabic ? 'right' : 'left',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          textAlign: 'center',
          mb: 6,
          fontWeight: 'bold',
          color: '#222',
          fontFamily: "'Poppins', 'Inter', 'sans-serif'",
          letterSpacing: isArabic ? 0 : '1px',
          lineHeight: isArabic ? 1.6 : 1.3,
        }}
      >
        {t('about.content.mainTitle')}
        <br />
        {t('about.content.mainTitleSecondLine')} <Flight />
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: '1100px',
          mx: 'auto',
          mb: 3,
          color: '#424242',
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: isArabic ? 2 : 1.8,
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        {t('about.content.paragraph1')}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: '1100px',
          mx: 'auto',
          mb: 8,
          color: '#424242',
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: isArabic ? 2 : 1.8,
          textAlign: isArabic ? 'right' : 'left',
        }}
      >
        {t('about.content.paragraph2')}
      </Typography>
    </Box>
  );
};

export default AboutContentSection;