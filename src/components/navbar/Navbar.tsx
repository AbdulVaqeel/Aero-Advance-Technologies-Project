import React, { useState } from 'react';
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
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [mobileOpen, setMobileOpen] = useState(false);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our partners', path: '/partners' },
    { name: 'Products & Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Split pages for mobile drawer
  const mainPages = pages.filter((page) => page.name !== 'Contact Us');
  const contactPage = pages.find((page) => page.name === 'Contact Us');

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

      {/* ✅ Mobile bottom actions */}
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
            Contact Us
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
            justifyContent: 'flex-start',
            fontWeight: 500,
          }}
        >
          WhatsApp
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ minHeight: { xs: 90, md: 80 }, py: 0 }}>
          
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 2, md: 40 }  }}>
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
                  mr: 1.5,
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', gap: 3, ml: 4 }}>
              {pages
                .filter((page) => page.name !== 'Contact Us')
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

            {/* Contact Us Desktop */}
            {pages
              .filter((page) => page.name === 'Contact Us')
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
                    mr: 2,
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

            <IconButton
              component="a"
              href="https://wa.me/966546008481"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#25D366',
                ml: 1,
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

          {/* ✅ Mobile Hamburger (fixed visibility) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
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

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
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