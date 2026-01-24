import React from 'react';
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
} from '@mui/material';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';

interface ContactFormSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <Grid container spacing={4}>
      {/* Contact Info Card */}
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
            backgroundImage: `
              linear-gradient(135deg, rgba(102,126,234,0.9) 0%, rgba(118,75,162,0.9) 100%),
              url('/contact_img.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
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
                  <Link 
                    href="tel:+966546008481" 
                    underline="none" 
                    sx={{ 
                      color: 'white', 
                      '&:hover': { color: '#e0d6ff' } 
                    }}
                  >
                    054600 8481
                  </Link>
                  <br />
                  <Link 
                    href="tel:+966532899087" 
                    underline="none" 
                    sx={{ 
                      color: 'white', 
                      '&:hover': { color: '#e0d6ff' } 
                    }}
                  >
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
                  <Link 
                    href="mailto:abdulvaqeel9636@gmail.com" 
                    underline="none" 
                    sx={{ 
                      color: 'white', 
                      '&:hover': { color: '#e0d6ff' } 
                    }}
                  >
                    abdulvaqeel9636@gmail.com
                  </Link>
                  <br />
                  <Link 
                    href="mailto:vaqeel@vs.sa" 
                    underline="none" 
                    sx={{ 
                      color: 'white', 
                      '&:hover': { color: '#e0d6ff' } 
                    }}
                  >
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
        <Card sx={{ 
          p: 4, 
          height: '100%', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3, 
              fontWeight: 'bold', 
              color: '#667eea' 
            }}
          >
            Send Us a Message
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField 
              fullWidth 
              label="Full Name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
              sx={{ mb: 3 }} 
            />
            <TextField 
              fullWidth 
              label="Email Address" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
              sx={{ mb: 3 }} 
            />
            <TextField 
              fullWidth 
              label="Phone Number" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
              sx={{ mb: 3 }} 
            />
            <TextField 
              fullWidth 
              label="Message" 
              name="message" 
              multiline 
              rows={4} 
              value={formData.message} 
              onChange={handleInputChange} 
              required 
              sx={{ mb: 3 }} 
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                bgcolor: '#667eea',
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { 
                  bgcolor: '#764ba2', 
                  transform: 'scale(1.02)' 
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ContactFormSection;