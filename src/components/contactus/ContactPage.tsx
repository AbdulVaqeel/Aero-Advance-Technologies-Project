import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Box,
  Fade,
  Snackbar,
  Alert,
  Link,
} from '@mui/material';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';

// Leaflet Imports
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import api from '../services/api'; // Axios instance

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

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

  // Coordinates for 114 Al Muruj, Riyadh
  const position: [number, number] = [24.7425, 46.6542];

  return (
    <>
      {/* New Hero Section - Matches Your Attachment Exactly */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '70vh', md: '85vh' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          backgroundImage: `url('contact_img.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for Text Readability */}
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

        {/* Content Container */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pb: { xs: 6, md: 10 } }}>
          <Fade in timeout={1200}>
            <Box>
              {/* Clickable Breadcrumb */}
<Typography
  variant="body1"
  sx={{
    color: 'white',
    mb: 4,
    letterSpacing: '2px',
    fontSize: { xs: '0.9rem', md: '1rem' },
    opacity: 0.9,
  }}
>
  <Link
    component={RouterLink}
    to="/"
    sx={{
      color: 'white',
      textDecoration: 'none',
      '&:hover': { textDecoration: 'underline' },
    }}
  >
    HOME
  </Link>
  {' > '}
  <Link
    component={RouterLink}
    to="/services"
    sx={{
      color: 'white',
      textDecoration: 'none',
      '&:hover': { textDecoration: 'underline' },
    }}
  >
    SERVICES
  </Link>
  {' > '}
  <Link
    component={RouterLink}
    to="/contact us"
    sx={{
      color: 'white',
      textDecoration: 'none',
      '&:hover': { textDecoration: 'underline' },
    }}
  >
    CONTACT US
  </Link>
</Typography>

              {/* Main Title */}
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: { xs: '3rem', md: '5rem' },
                  lineHeight: 1.1,
                  maxWidth: '80%',
                }}
              >
                360° Support and Services
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Your Original Contact Page Content Starts Here (Unchanged) */}
      <Fade in timeout={1000}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: '#333' }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: '#666' }}>
            We'd love to hear from you. Get in touch with our team.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: 2,
                  p: 4,
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',

                    /* Background Image */
                backgroundImage: `
                linear-gradient(135deg, rgba(102,126,234,0.9) 0%, rgba(118,75,162,0.9) 100%),
                url('/contact_img.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}
                >
                {/* <Box
                  sx={{
                    position: 'absolute',
                    width: '200%',
                    height: '200%',
                    background:
                      'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)',
                    top: -50,
                    left: -50,
                  }}
                /> */}

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                    Get In Touch
                  </Typography>

                  {/* Address */}
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'flex-start' }}>
                    <LocationOn sx={{ fontSize: 30, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        Address
                      </Typography>
                      <Typography variant="body1">
                        114 Al Muruj,<br />
                        Riyadh 12552,<br />
                        Kingdom of Saudi Arabia.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'flex-start' }}>
                    <Phone sx={{ fontSize: 30, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        Phone
                      </Typography>
                      <Typography variant="body1">
                        <Link href="tel:+966546008481" underline="none" sx={{ color: 'white', '&:hover': { color: '#e0d6ff' } }}>
                          054600 8481
                        </Link>
                        <br />
                        <Link href="tel:+966532899087" underline="none" sx={{ color: 'white', '&:hover': { color: '#e0d6ff' } }}>
                          053289 9087
                        </Link>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'flex-start' }}>
                    <Email sx={{ fontSize: 30, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        Email
                      </Typography>
                      <Typography variant="body1">
                        <Link href="mailto:abdulvaqeel9636@gmail.com" underline="none" sx={{ color: 'white', '&:hover': { color: '#e0d6ff' } }}>
                          abdulvaqeel9636@gmail.com
                        </Link>
                        <br />
                        <Link href="mailto:vaqeel@vs.sa" underline="none" sx={{ color: 'white', '&:hover': { color: '#e0d6ff' } }}>
                          vaqeel@vs.sa
                        </Link>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Business Hours */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <AccessTime sx={{ fontSize: 30, mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        Business Hours
                      </Typography>
                      <Typography variant="body1">
                        Sun - Thur: 8:00 AM - 8:00 PM<br />
                        Fri - Sat: 3:00 PM - 8:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#667eea' }}>
                  Send Us a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleInputChange} required sx={{ mb: 3 }} />
                  <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} required sx={{ mb: 3 }} />
                  <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} sx={{ mb: 3 }} />
                  <TextField fullWidth label="Message" name="message" multiline rows={4} value={formData.message} onChange={handleInputChange} required sx={{ mb: 3 }} />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      bgcolor: '#667eea',
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': { bgcolor: '#764ba2', transform: 'scale(1.02)' },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </Grid>
          </Grid>

          {/* Map and Info Cards - your existing code continues here */}

          <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
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