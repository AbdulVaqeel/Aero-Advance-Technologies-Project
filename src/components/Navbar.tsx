import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Flight } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname; // e.g. "/", "/about", "/services"

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'contact us', path: '/contact us' },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 2 }}>
      <Toolbar>
        {/* Logo + Company Name */}
        <Flight sx={{ mr: 2, color: '#667eea', fontSize: 30 }} />
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: '#667eea',
            fontWeight: 'bold',
            textDecoration: 'none',
            '&:hover': { opacity: 0.9 },
          }}
        >
          SkyTech Aviation
        </Typography>

        {/* Navigation Buttons */}
        {pages.map((page) => (
          <Button
            key={page.path}
            component={Link}
            to={page.path}
            sx={{
              mx: 1,
              color: currentPath === page.path ? '#667eea' : '#333',
              fontWeight: currentPath === page.path ? 'bold' : 'normal',
              borderBottom: currentPath === page.path ? '3px solid #667eea' : 'none',
              borderRadius: 0,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: 'rgba(102, 126, 234, 0.1)',
              },
            }}
          >
            {page.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;