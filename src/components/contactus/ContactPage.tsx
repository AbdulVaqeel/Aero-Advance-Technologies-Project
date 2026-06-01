import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Fade,
  Snackbar,
  Alert,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import ContactHero from './ContactHero';
import ContactFormSection from './ContactFormSection';
import api from '../services/api';
import ContactMap from '../gmap/ContactMap';

const ContactPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

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
      setSnackbarMessage(t('contact.messages.success'));
      setOpenSnackbar(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage(t('contact.messages.error'));
      setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={{ direction: isArabic ? 'rtl' : 'ltr' }}>
      <ContactHero />

      <Fade in timeout={1000}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 'bold',
              color: '#333',
              lineHeight: isArabic ? 1.5 : 1.2,
            }}
          >
            {t('contact.title')}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666',
              lineHeight: isArabic ? 1.8 : 1.5,
            }}
          >
            {t('contact.subtitle')}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <ContactFormSection
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
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

      <Box sx={{ width: '100%', mt: 6, mb: 10 }}>
        <ContactMap
          lat={24.7136}
          lng={46.6753}
          address={t('contact.mapAddress')}
          zoom={14}
          height={{ xs: 350, md: 600 }}
          markerColor="primary"
        />
      </Box>
    </Box>
  );
};

export default ContactPage;