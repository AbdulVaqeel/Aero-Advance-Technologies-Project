import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import { Flight, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Partners', path: '/partners' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Flight sx={{ fontSize: 30, mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Aero Advance Technologies
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: '#b0b0b0' }}>
              Leading the way in aviation excellence since 1995. Your trusted partner for all aviation needs.
            </Typography>

            {/* Social Media Icons – White by default, Blue on hover */}
            <Box sx={{ display: 'flex', gap: 2.5 }}>
              <MuiLink
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook
                  sx={{
                    fontSize: 28,
                    color: 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#667eea' },
                  }}
                />
              </MuiLink>

              <MuiLink
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter
                  sx={{
                    fontSize: 28,
                    color: 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#667eea' },
                  }}
                />
              </MuiLink>

              <MuiLink
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn
                  sx={{
                    fontSize: 28,
                    color: 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#667eea' },
                  }}
                />
              </MuiLink>

              <MuiLink
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
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
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  {quickLinks.map((item) => (
                    <MuiLink
                      key={item.name}
                      component="button"
                      onClick={() => navigate(item.path)}
                      underline="none"
                      sx={{
                        textAlign: 'left',
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
  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
    Our Services
  </Typography>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
    {[
      { name: 'Oil and Lubricant', id: 'oil-and-lubricant' },
      { name: 'Defence and Aviation', id: 'defence-and-aviation' },
      { name: 'Electricals', id: 'electricals' },
    ].map((service) => (
      <MuiLink
        key={service.name}
        component="button"
        onClick={() => navigate(`/services#${service.id}`)}
        underline="none"
        sx={{
          textAlign: 'left',
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
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Contact us
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '15px', lineHeight: 1.6 }}>
                    114 Al Morabba, Riyadh - 12552,<br />
                    Kingdom of Saudi Arabia
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>Mobile:</Typography>
                    <MuiLink href="tel:+966546008481" underline="none" sx={{ color: '#b0b0b0', '&:hover': { color: '#667eea' } }}>
                      +966 55600 7891
                    </MuiLink>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>Email:</Typography>
                    <MuiLink href="mailto:abdulvaqeel9636@gmail.com" underline="none" sx={{ color: '#b0b0b0', '&:hover': { color: '#667eea' } }}>
                      client@gmail.com
                    </MuiLink>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #333', mt: 6, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
            © 2026 Aero Advance Technologies. All rights reserved. | Privacy Policy | Terms of Service
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;