import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { CallEnd, CallEndOutlined, CallMadeRounded, PhoneAndroid } from '@mui/icons-material';

interface CallToActionProps {
  navigate: (path: string) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ navigate }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
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
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            Ready to Elevate Your Aviation Experience?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Contact us today to discuss your aviation needs
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
              '&:hover': {
                bgcolor: '#fbfbfc',
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => navigate('/contact us')}
          >
            Get In Touch
            <Box
            sx={{
              ml:1,
              mt:1
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
