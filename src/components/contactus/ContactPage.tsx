import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Fade,
  Snackbar,
  Alert,
} from '@mui/material';
import ContactHero from './ContactHero';
import ContactFormSection from './ContactFormSection';
import api from '../services/api';
import ContactMap from '../gmap/ContactMap';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/contactform', {
        full_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
      });
      setSnackbarSeverity('success');
      setSnackbarMessage('Thank you! We will contact you soon.');
      setOpenSnackbar(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Failed to send message. Please try again.');
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <ContactHero />
      
      <Fade in timeout={1000}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              mb: 2, 
              fontWeight: 'bold', 
              color: '#333' 
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              color: '#666' 
            }}
          >
            We'd love to hear from you. Get in touch with our team.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <ContactFormSection
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </Grid>
            

            {/* Map - right side on desktop */}
    <Grid item xs={12} md={7}>
      <ContactMap
        lat={24.7136}
        lng={46.6753}
        address="Kinf fahad district, Riyadh, Saudi Arabia"
        zoom={14}
        height={{ xs: 340, md: 500 }}
        markerColor="primary"
      />
    </Grid>
  </Grid>
          

          <Snackbar 
            open={openSnackbar} 
            autoHideDuration={4000} 
            onClose={handleCloseSnackbar} 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Container>
      </Fade>
    </>
  );
};

export default ContactPage;