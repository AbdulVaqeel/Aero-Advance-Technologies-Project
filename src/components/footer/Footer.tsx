import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import { Flight, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.productsServices'), path: '/services' },
    { name: t('nav.ourPartners'), path: '/partners' },
    { name: t('nav.contactUs'), path: '/contact' },
  ];

  const services = [
    { name: t('footer.services.oilLubricant'), id: 'oil-and-lubricant' },
    { name: t('footer.services.defenceAviation'), id: 'defence-and-aviation' },
    { name: t('footer.services.electricals'), id: 'electricals' },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        py: 6,
        mt: 'auto',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                justifyContent: { xs: 'center', md: isArabic ? 'flex-end' : 'flex-start' },
                textAlign: { xs: 'center', md: isArabic ? 'right' : 'left' },
              }}
            >
              <Flight sx={{ fontSize: 30, mr: isArabic ? 0 : 1, ml: isArabic ? 1 : 0 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {t('footer.companyName')}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: '#b0b0b0',
                textAlign: { xs: 'center', md: isArabic ? 'right' : 'left' },
                lineHeight: isArabic ? 1.9 : 1.6,
              }}
            >
              {t('footer.companyDescription')}
            </Typography>

            {/* Social Media Icons */}
            <Box
              sx={{
                display: 'flex',
                gap: 2.5,
                justifyContent: { xs: 'center', md: isArabic ? 'flex-end' : 'flex-start' },
              }}
            >
              <MuiLink href="#" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook
                  sx={{
                    fontSize: 28,
                    color: 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#667eea' },
                  }}
                />
              </MuiLink>

              <MuiLink href="#" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter
                  sx={{
                    fontSize: 28,
                    color: 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#667eea' },
                  }}
                />
              </MuiLink>

              <MuiLink href="#" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedIn
                  sx={{
                    fontSize: 28,
                    color: 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#667eea' },
                  }}
                />
              </MuiLink>

              <MuiLink href="#" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram
                  sx={{
                    fontSize: 28,
                    color: 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#667eea' },
                  }}
                />
              </MuiLink>
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {/* Quick Links */}
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    textAlign: { xs: 'center', sm: isArabic ? 'right' : 'left' },
                  }}
                >
                  {t('footer.quickLinksTitle')}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.2,
                    alignItems: { xs: 'center', sm: isArabic ? 'flex-end' : 'flex-start' },
                  }}
                >
                  {quickLinks.map((item) => (
                    <MuiLink
                      key={item.path}
                      component="button"
                      onClick={() => navigate(item.path)}
                      underline="none"
                      sx={{
                        textAlign: isArabic ? 'right' : 'left',
                        color: '#b0b0b0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        font: 'inherit',
                        '&:hover': { color: '#667eea' },
                      }}
                    >
                      {item.name}
                    </MuiLink>
                  ))}
                </Box>
              </Grid>

              {/* Our Services */}
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    textAlign: { xs: 'center', sm: isArabic ? 'right' : 'left' },
                  }}
                >
                  {t('footer.ourServicesTitle')}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.2,
                    alignItems: { xs: 'center', sm: isArabic ? 'flex-end' : 'flex-start' },
                  }}
                >
                  {services.map((service) => (
                    <MuiLink
                      key={service.id}
                      component="button"
                      onClick={() => navigate(`/services#${service.id}`)}
                      underline="none"
                      sx={{
                        textAlign: isArabic ? 'right' : 'left',
                        color: '#b0b0b0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        font: 'inherit',
                        '&:hover': { color: '#667eea' },
                      }}
                    >
                      {service.name}
                    </MuiLink>
                  ))}
                </Box>
              </Grid>

              {/* Contact */}
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    textAlign: { xs: 'center', sm: isArabic ? 'right' : 'left' },
                  }}
                >
                  {t('footer.contactTitle')}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    alignItems: { xs: 'center', sm: isArabic ? 'flex-end' : 'flex-start' },
                    textAlign: { xs: 'center', sm: isArabic ? 'right' : 'left' },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#b0b0b0',
                      fontSize: '15px',
                      lineHeight: isArabic ? 1.9 : 1.6,
                    }}
                  >
                    {t('footer.addressLine1')}
                    <br />
                    {t('footer.addressLine2')}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, flexDirection: isArabic ? 'row-reverse' : 'row' }}>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                      {t('footer.mobileLabel')}
                    </Typography>
                    <MuiLink
                      href="tel:+966556007891"
                      underline="none"
                      sx={{ color: '#b0b0b0', '&:hover': { color: '#667eea' } }}
                    >
                      +966 55600 7891
                    </MuiLink>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, flexDirection: isArabic ? 'row-reverse' : 'row' }}>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                      {t('footer.emailLabel')}
                    </Typography>
                    <MuiLink
                      href="mailto:client@gmail.com"
                      underline="none"
                      sx={{ color: '#b0b0b0', '&:hover': { color: '#667eea' } }}
                    >
                      client@gmail.com
                    </MuiLink>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #333', mt: 6, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#b0b0b0', lineHeight: isArabic ? 1.8 : 1.5 }}>
            {t('footer.copyright')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;