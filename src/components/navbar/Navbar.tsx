import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Flight } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Partners', path: '/partners' },
    { name: ' Product & Services', path: '/services' },
    { name: 'Contact Us', path: '/contact us' },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 3 }}>
      <Toolbar sx={{ minHeight: { xs: 64, md: 80 }, py: 1 }}>
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

        {/* Centered Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right' }}>
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 3 } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                sx={{
                  position: 'relative',
                  color: currentPath === page.path ? '#1338ddff' : '#444',
                  fontWeight: currentPath === page.path ? 700 : 500,
                  fontSize: { xs: '0.100rem', md: '1.15rem' },
                  textTransform: 'none',
                  px: { xs: 1.5, md: 2 },
                  py: 1,
                  transition: 'color 0.3s ease',
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
                  },
                  '&:hover:after': {
                    width: '100%',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Optional: Empty box on right for perfect centering balance */}
        <Box sx={{ width: { xs: 48, md: 64 } }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
