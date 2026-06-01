import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { PhoneAndroid } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface CallToActionProps {
  navigate: (path: string) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ navigate }) => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 8,
        mb: 8,
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <Box
        sx={{
          p: 6,
          borderRadius: 2,
          textAlign: 'center',
          color: 'white',
          backgroundImage: 'url("contact_anytime.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '16px',
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              lineHeight: isArabic ? 1.6 : 1.3,
            }}
          >
            {t('services.cta.title')}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 3,
              lineHeight: isArabic ? 1.8 : 1.5,
            }}
          >
            {t('services.cta.subtitle')}
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#0934f2',
              px: 3,
              py: 1.3,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#fbfbfc',
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => navigate('/contact')}
          >
            {t('services.cta.button')}

            <Box
              sx={{
                ml: isArabic ? 0 : 1,
                mr: isArabic ? 1 : 0,
                mt: 1,
              }}
            >
              <PhoneAndroid />
            </Box>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CallToAction;