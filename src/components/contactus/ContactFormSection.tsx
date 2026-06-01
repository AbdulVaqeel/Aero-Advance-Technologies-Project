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
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <Grid container spacing={4} sx={{ direction: isArabic ? 'rtl' : 'ltr' }}>
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
              url('/contactus.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            textAlign: isArabic ? 'right' : 'left',
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontWeight: 'bold',
                lineHeight: isArabic ? 1.5 : 1.2,
              }}
            >
              {t('contact.form.getInTouch')}
            </Typography>

            {/* Address */}
            <Box
              sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: isArabic ? 'row-reverse' : 'row',
              }}
            >
              <LocationOn
                sx={{
                  fontSize: 30,
                  mr: isArabic ? 0 : 2,
                  ml: isArabic ? 2 : 0,
                  mt: 0.5,
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {t('contact.form.addressTitle')}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: isArabic ? 1.9 : 1.6 }}>
                  {t('contact.form.addressLine1')}
                  <br />
                  {t('contact.form.addressLine2')}
                  <br />
                  {t('contact.form.addressLine3')}
                </Typography>
              </Box>
            </Box>

            {/* Phone */}
            <Box
              sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: isArabic ? 'row-reverse' : 'row',
              }}
            >
              <Phone
                sx={{
                  fontSize: 30,
                  mr: isArabic ? 0 : 2,
                  ml: isArabic ? 2 : 0,
                  mt: 0.5,
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {t('contact.form.phoneTitle')}
                </Typography>
                <Typography variant="body1">
                  <Link
                    href="tel:+966556007891"
                    underline="none"
                    sx={{
                      color: 'white',
                      '&:hover': { color: '#e0d6ff' },
                    }}
                  >
                    055 600 7891
                  </Link>
                  <br />
                  <Link
                    href="tel:+966532899087"
                    underline="none"
                    sx={{
                      color: 'white',
                      '&:hover': { color: '#e0d6ff' },
                    }}
                  >
                    053289 9087
                  </Link>
                </Typography>
              </Box>
            </Box>

            {/* Email */}
            <Box
              sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: isArabic ? 'row-reverse' : 'row',
              }}
            >
              <Email
                sx={{
                  fontSize: 30,
                  mr: isArabic ? 0 : 2,
                  ml: isArabic ? 2 : 0,
                  mt: 0.5,
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {t('contact.form.emailTitle')}
                </Typography>
                <Typography variant="body1">
                  <Link
                    href="mailto:client@gmail.com"
                    underline="none"
                    sx={{
                      color: 'white',
                      '&:hover': { color: '#e0d6ff' },
                    }}
                  >
                    client@gmail.com
                  </Link>
                  <br />
                  <Link
                    href="mailto:client123@outlook.com"
                    underline="none"
                    sx={{
                      color: 'white',
                      '&:hover': { color: '#e0d6ff' },
                    }}
                  >
                    client123@outlook.com
                  </Link>
                </Typography>
              </Box>
            </Box>

            {/* Business Hours */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: isArabic ? 'row-reverse' : 'row',
              }}
            >
              <AccessTime
                sx={{
                  fontSize: 30,
                  mr: isArabic ? 0 : 2,
                  ml: isArabic ? 2 : 0,
                  mt: 0.5,
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {t('contact.form.businessHoursTitle')}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: isArabic ? 1.9 : 1.6 }}>
                  {t('contact.form.businessHoursLine1')}
                  <br />
                  {t('contact.form.businessHoursLine2')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Contact Form */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            p: 4,
            height: '100%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: isArabic ? 'right' : 'left',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              color: '#667eea',
              lineHeight: isArabic ? 1.5 : 1.2,
            }}
          >
            {t('contact.form.sendMessageTitle')}
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t('contact.form.fullName')}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              sx={{ mb: 3 }}
              InputProps={{
                sx: { textAlign: isArabic ? 'right' : 'left' },
              }}
              InputLabelProps={{
                sx: {
                  right: isArabic ? 28 : 'auto',
                  left: isArabic ? 'auto' : 0,
                  transformOrigin: isArabic ? 'top right' : 'top left',
                },
              }}
            />

            <TextField
              fullWidth
              label={t('contact.form.emailAddress')}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              sx={{ mb: 3 }}
              InputProps={{
                sx: { textAlign: isArabic ? 'right' : 'left' },
              }}
              InputLabelProps={{
                sx: {
                  right: isArabic ? 28 : 'auto',
                  left: isArabic ? 'auto' : 0,
                  transformOrigin: isArabic ? 'top right' : 'top left',
                },
              }}
            />

            <TextField
              fullWidth
              label={t('contact.form.phoneNumber')}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              sx={{ mb: 3 }}
              InputProps={{
                sx: { textAlign: isArabic ? 'right' : 'left' },
              }}
              InputLabelProps={{
                sx: {
                  right: isArabic ? 28 : 'auto',
                  left: isArabic ? 'auto' : 0,
                  transformOrigin: isArabic ? 'top right' : 'top left',
                },
              }}
            />

            <TextField
              fullWidth
              label={t('contact.form.message')}
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              sx={{ mb: 3 }}
              InputProps={{
                sx: { textAlign: isArabic ? 'right' : 'left' },
              }}
              InputLabelProps={{
                sx: {
                  right: isArabic ? 28 : 'auto',
                  left: isArabic ? 'auto' : 0,
                  transformOrigin: isArabic ? 'top right' : 'top left',
                },
              }}
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
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#764ba2',
                  transform: 'scale(1.02)',
                },
              }}
            >
              {t('contact.form.sendButton')}
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ContactFormSection;