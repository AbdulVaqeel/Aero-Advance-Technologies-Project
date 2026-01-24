import React from 'react';
import { Box, Container, Typography, Grid, Card, Slide } from '@mui/material';
import { Flight, Engineering, Security, Speed } from '@mui/icons-material';

const FeaturesSection: React.FC = () => {
  const features = [
    { icon: <Flight sx={{ fontSize: 60 }} />, title: 'Modern Fleet', desc: 'State-of-the-art aircraft with advanced technology and safety features.' },
    { icon: <Security sx={{ fontSize: 60 }} />, title: 'Safety First', desc: 'Rigorous safety protocols and certified maintenance.' },
    { icon: <Speed sx={{ fontSize: 60 }} />, title: 'Fast Service', desc: 'Quick turnaround times and efficient operations.' },
    { icon: <Engineering sx={{ fontSize: 60 }} />, title: 'Expert Team', desc: 'Highly trained professionals with decades of experience.' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 'bold', color: '#222' }}>
          Why Choose Aero Advance Technologies
        </Typography>
        <Grid container spacing={4}>
          {features.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Slide direction="up" in timeout={600 + idx * 200}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-10px)', boxShadow: 10 },
                  }}
                >
                  <Box sx={{ color: '#0066cc', mb: 3 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturesSection;