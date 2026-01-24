import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

interface CallToActionProps {
  navigate: (path: string) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ navigate }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ 
        p: 6, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 2,
        textAlign: 'center',
        color: 'white'
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 2, 
            fontWeight: 'bold' 
          }}
        >
          Ready to Elevate Your Aviation Experience?
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 3 
          }}
        >
          Contact us today to discuss your aviation needs
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            bgcolor: 'white', 
            color: '#667eea',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': { 
              bgcolor: '#f0f0f0',
              transform: 'scale(1.05)'
            }
          }}
          onClick={() => navigate('/contact us')}
        >
          Get In Touch
        </Button>
      </Box>
    </Container>
  );
};

export default CallToAction;