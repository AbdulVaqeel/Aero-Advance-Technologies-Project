import React, { useState } from 'react';
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
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'OUR PARTNERS', path: '/partners' },
    { name: 'PRODUCT & SERVICES', path: '/services' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {pages.map((page) => (
          <ListItem key={page.path} disablePadding>
            <ListItemButton
              component={Link}
              to={page.path}
              onClick={handleDrawerToggle}
              sx={{
                color: currentPath === page.path ? '#1338ddff' : '#444',
                fontWeight: currentPath === page.path ? 700 : 500,
                py: 1.8,
                px: 3,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <ListItemText primary={page.name} primaryTypographyProps={{ fontSize: '1.1rem' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ minHeight: { xs: 90, md: 80 }, py: 0 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
            <Box
              component="img"
              src="aatc_logo.jpeg"
              alt="AATC Logo"
              sx={{
                width: { xs: 120, md: 160 },
                height: 'auto',
                mr: 1.5,
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Desktop Navigation - centered right */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {pages.map((page) => (
                <Button
                  key={page.path}
                  component={Link}
                  to={page.path}
                  sx={{
                    position: 'relative',
                    color: currentPath === page.path ? '#1338ddff' : '#444',
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
          </Box>

          {/* Mobile Hamburger - right side */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, ml: 'auto' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: '#444' }}
            >
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>

          {/* Optional spacer - can be removed if not needed */}
          <Box sx={{ width: { md: 64 }, display: { xs: 'none', md: 'block' } }} />
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // better open performance on mobile
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;