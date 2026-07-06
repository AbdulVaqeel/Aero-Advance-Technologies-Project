import React, { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(nextLanguage);
  };

  const pages = [
    { name: t('nav.home'), path: '/', key: 'home' },
    { name: t('nav.about'), path: '/about', key: 'about' },
    { name: t('nav.ourPartners'), path: '/partners', key: 'partners' },
    { name: t('nav.productsServices'), path: '/services', key: 'services' },
    { name: t('nav.contactUs'), path: '/contact', key: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainPages = pages.filter((page) => page.key !== 'contact');
  const contactPage = pages.find((page) => page.key === 'contact');

  const isArabic = i18n.language === 'ar';

  const drawer = (
    <Box
      sx={{
        width: 280,
        pt: 2,
        direction: isArabic ? 'rtl' : 'ltr',
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: isArabic ? 'flex-start' : 'flex-end',
          px: 2,
          pb: 2,
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {mainPages.map((page) => (
          <ListItem key={page.path} disablePadding>
            <ListItemButton
              component={Link}
              to={page.path}
              onClick={handleDrawerToggle}
              sx={{
                color: currentPath === page.path ? '#1338ddff' : '#000',
                fontWeight: currentPath === page.path ? 700 : 500,
                py: 1.8,
                px: 3,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <ListItemText
                primary={page.name}
                primaryTypographyProps={{
                  fontSize: '1.1rem',
                  textAlign: isArabic ? 'right' : 'left',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ px: 3, mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {contactPage && (
          <Button
            component={Link}
            to={contactPage.path}
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '25px',
              fontSize: '0.85rem',
              py: 0.6,
              '&:hover': {
                backgroundColor: '#1338ddff',
              },
            }}
          >
            {contactPage.name}
          </Button>
        )}

        <Button
          onClick={toggleLanguage}
          sx={{
            border: '1px solid #1338ddff',
            color: '#1338ddff',
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: '25px',
            fontSize: '0.85rem',
            py: 0.6,
            '&:hover': {
              backgroundColor: '#eef2ff',
            },
          }}
        >
          {isArabic ? 'English' : 'العربية'}
        </Button>

        <Button
          component="a"
          // href="https://wa.me/966546008481"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={isArabic ? undefined : <WhatsAppIcon />}
          endIcon={isArabic ? <WhatsAppIcon /> : undefined}
          sx={{
            color: '#25D366',
            textTransform: 'none',
            justifyContent: 'center',
            fontWeight: 500,
          }}
        >
          {t('nav.whatsapp')}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ minHeight: { xs: 90, md: 80 }, py: 0 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: isArabic ? 0 : { xs: 2, md: 40 },
              ml: isArabic ? { xs: 2, md: 40 } : 0,
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="aatc_logo.jpeg"
                alt="AATC Logo"
                sx={{
                  width: { xs: 120, md: 160 },
                  height: 'auto',
                  mr: isArabic ? 0 : 1.5,
                  ml: isArabic ? 1.5 : 0,
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                ml: isArabic ? 0 : 4,
                mr: isArabic ? 4 : 0,
              }}
            >
              {pages
                .filter((page) => page.key !== 'contact')
                .map((page) => (
                  <Button
                    key={page.path}
                    component={Link}
                    to={page.path}
                    sx={{
                      position: 'relative',
                      color: currentPath === page.path ? '#1338ddff' : '#000',
                      fontWeight: currentPath === page.path ? 700 : 500,
                      fontSize: '1.15rem',
                      textTransform: 'none',
                      minHeight: 48,
                      px: 2.5,
                      py: 1,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: currentPath === page.path ? '100%' : '0',
                        height: '3px',
                        bottom: 0,
                        left: '50%',
                        bgcolor: '#163ef0ff',
                        borderRadius: '2px',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.4s ease',
                      },
                      '&:hover': {
                        color: '#1239e6ff',
                        bgcolor: 'transparent',
                        '&:after': { width: '100%' },
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {contactPage && (
              <Button
                component={Link}
                to={contactPage.path}
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: '25px',
                  fontSize: '1.05rem',
                  mr: isArabic ? 0 : 2,
                  ml: isArabic ? 2 : 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#1338ddff',
                    color: '#fff',
                  },
                }}
              >
                {contactPage.name}
              </Button>
            )}

            <Button
              onClick={toggleLanguage}
              sx={{
                border: '1px solid #1338ddff',
                color: '#1338ddff',
                fontWeight: 600,
                textTransform: 'none',
                px: 2,
                py: 0.8,
                borderRadius: '25px',
                fontSize: '0.95rem',
                mr: isArabic ? 0 : 1.5,
                ml: isArabic ? 1.5 : 0,
                '&:hover': {
                  backgroundColor: '#eef2ff',
                },
              }}
            >
              {isArabic ? 'English' : 'العربية'}
            </Button>

            <IconButton
              component="a"
              href="https://wa.me/966546008481"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#25D366',
                ml: isArabic ? 0 : 1,
                mr: isArabic ? 1 : 0,
                '&:hover': {
                  color: '#1ebe5d',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <WhatsAppIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              ml: isArabic ? 0 : 'auto',
              mr: isArabic ? 'auto' : 0,
            }}
          >
            <IconButton
              size="large"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: '#444' }}
            >
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>

          <Box sx={{ width: { md: 64 }, display: { xs: 'none', md: 'block' } }} />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor={isArabic ? 'left' : 'right'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;