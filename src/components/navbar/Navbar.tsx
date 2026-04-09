import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Language as LanguageIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showMobileLanguageMenu, setShowMobileLanguageMenu] = useState(false);

  // Apply RTL direction when language changes
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const pages = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.ourPartners'), path: '/partners' },
    { name: t('nav.productsServices'), path: '/services' },
    { name: t('nav.contactUs'), path: '/contact' },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowLanguageMenu(false);
    setShowMobileLanguageMenu(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Split pages for mobile drawer
  const mainPages = pages.filter((page) => page.name !== t('nav.contactUs'));
  const contactPage = pages.find((page) => page.name === t('nav.contactUs'));

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Main menu */}
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
                primaryTypographyProps={{ fontSize: '1.1rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Mobile bottom actions */}
      <Box sx={{ px: 3, mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        
        {/* Contact Us small button */}
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
            {t('nav.contactUs')}
          </Button>
        )}

        {/* WhatsApp */}
        <Button
          component="a"
          href="https://wa.me/966546008481"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<WhatsAppIcon />}
          sx={{
            color: '#25D366',
            textTransform: 'none',
            justifyContent: i18n.language === 'ar' ? 'flex-end' : 'flex-start',
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
      <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 3, overflow: 'visible', zIndex: 9999 }}>
        <Toolbar sx={{ 
          minHeight: { xs: 70, md: 80 }, 
          py: 0,
          px: { xs: 2, md: 3 },
          justifyContent: 'space-between',
          overflow: 'visible',
        }}>
          
          {/* Logo - on left in English, on right in Arabic for both desktop and mobile */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            order: i18n.language === 'ar' ? 2 : 1,
          }}>
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
                  width: { xs: 100, md: 160 },
                  height: 'auto',
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Box>

          {/* Desktop Navigation Menu - Center */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              order: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: 1 }}>
              {pages
                .filter((page) => page.name !== t('nav.contactUs'))
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
                        left: i18n.language === 'ar' ? 'auto' : '50%',
                        right: i18n.language === 'ar' ? '50%' : 'auto',
                        bgcolor: '#163ef0ff',
                        borderRadius: '2px',
                        transform: i18n.language === 'ar' ? 'translateX(50%)' : 'translateX(-50%)',
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
          </Box>

          {/* Desktop Right side items container - on right in English, on left in Arabic */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            alignItems: 'center',
            order: i18n.language === 'ar' ? 1 : 3,
            position: 'relative',
          }}>
            {/* Contact Us Desktop */}
            {pages
              .filter((page) => page.name === t('nav.contactUs'))
              .map((page) => (
                <Button
                  key={page.path}
                  component={Link}
                  to={page.path}
                  sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    fontWeight: 600,
                    textTransform: 'none',
                    px: 3,
                    py: 1,
                    borderRadius: '25px',
                    fontSize: '1.05rem',
                    mx: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#1338ddff',
                      color: '#fff',
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}

            {/* WhatsApp Icon */}
            <IconButton
              component="a"
              href="https://wa.me/966546008481"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#25D366',
                mx: 1,
                '&:hover': {
                  color: '#1ebe5d',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <WhatsAppIcon sx={{ fontSize: '2rem' }} />
            </IconButton>

            {/* Language Toggle Button - Hover version */}
            <Box
              sx={{ 
                position: 'relative',
                display: 'inline-block',
                zIndex: 9999,
              }}
              onMouseEnter={() => setShowLanguageMenu(true)}
              onMouseLeave={() => setShowLanguageMenu(false)}
            >
              <Button
                startIcon={<LanguageIcon />}
                sx={{
                  color: '#000',
                  textTransform: 'none',
                  fontWeight: 500,
                  mx: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(19, 56, 221, 0.1)',
                  },
                }}
              >
                {i18n.language === 'en' ? 'English' : 'العربية'}
              </Button>
              
              {showLanguageMenu && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    right: i18n.language === 'ar' ? 'auto' : 0,
                    left: i18n.language === 'ar' ? 0 : 'auto',
                    mt: 1,
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.15)',
                    borderRadius: '12px',
                    minWidth: '150px',
                    zIndex: 9999,
                    overflow: 'hidden',
                  }}
                  onMouseEnter={() => setShowLanguageMenu(true)}
                  onMouseLeave={() => setShowLanguageMenu(false)}
                >
                  <Box
                    onClick={() => changeLanguage('en')}
                    sx={{
                      px: 2,
                      py: 1.5,
                      cursor: 'pointer',
                      fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <span>🇬🇧</span> English
                  </Box>
                  <Box
                    onClick={() => changeLanguage('ar')}
                    sx={{
                      px: 2,
                      py: 1.5,
                      cursor: 'pointer',
                      fontWeight: i18n.language === 'ar' ? 'bold' : 'normal',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <span>🇸🇦</span> العربية
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          {/* Mobile Container - Language and Hamburger */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' }, 
            alignItems: 'center',
            gap: 1,
            order: i18n.language === 'ar' ? 1 : 3,
          }}>
            {/* Mobile Language Selector */}
            <Box
              sx={{ 
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <Button
                onClick={() => setShowMobileLanguageMenu(!showMobileLanguageMenu)}
                startIcon={<LanguageIcon />}
                sx={{
                  color: '#000',
                  textTransform: 'none',
                  fontWeight: 500,
                  minWidth: 'auto',
                  px: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(19, 56, 221, 0.1)',
                  },
                }}
              >
                {i18n.language === 'en' ? 'EN' : 'AR'}
              </Button>
              
              {showMobileLanguageMenu && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    right: i18n.language === 'ar' ? 'auto' : 0,
                    left: i18n.language === 'ar' ? 0 : 'auto',
                    mt: 1,
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.15)',
                    borderRadius: '12px',
                    minWidth: '130px',
                    zIndex: 9999,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    onClick={() => changeLanguage('en')}
                    sx={{
                      px: 2,
                      py: 1.5,
                      cursor: 'pointer',
                      fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <span>🇬🇧</span> English
                  </Box>
                  <Box
                    onClick={() => changeLanguage('ar')}
                    sx={{
                      px: 2,
                      py: 1.5,
                      cursor: 'pointer',
                      fontWeight: i18n.language === 'ar' ? 'bold' : 'normal',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <span>🇸🇦</span> العربية
                  </Box>
                </Box>
              )}
            </Box>

            <IconButton
              size="large"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: '#444' }}
            >
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor={i18n.language === 'ar' ? 'left' : 'right'}
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