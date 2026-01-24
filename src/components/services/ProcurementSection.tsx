import React from 'react';
import { Container, Grid, Box, Typography, Fade, Button } from '@mui/material';

interface ProcurementSectionProps {
  navigate: (path: string) => void;
}

const ProcurementSection: React.FC<ProcurementSectionProps> = ({ navigate }) => {
  const procurementServices = [
    'Assist buyer and/or seller in the complete procurement process',
    'Pre-buy and Delivery inspection',
    'Due-diligence of technical compliance',
    'Negotiations and contracts',
    'Engines, Components and Tooling procurement',
    'Aircraft appraisal',
    'Aircraft listing'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Fade in timeout={1000}>
            <Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 2,
                  color: '#1a1a1a'
                }}
              >
                Aircraft Procurement
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#666',
                  mb: 3,
                  fontWeight: 400
                }}
              >
                Our services
              </Typography>
              <Box 
                component="ul" 
                sx={{ 
                  listStyle: 'none', 
                  p: 0,
                  m: 0 
                }}
              >
                {procurementServices.map((service, idx) => (
                  <Box 
                    component="li" 
                    key={idx}
                    sx={{ 
                      mb: 2,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}
                  >
                    <Box sx={{ 
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#8b2332',
                      mt: 1,
                      mr: 2,
                      flexShrink: 0
                    }} />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#8b2332',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                      }}
                    >
                      {service}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6}>
          <Fade in timeout={1200}>
            <Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#555',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  mb: 4
                }}
              >
                With our extensive market knowledge and experience with intercontinental business ethics we offer our clients guidance along the various steps in the process. No matter if it's for buying or selling an aircraft, by utilizing our vast network of contacts in the aviation industry we're always able to find the better deal.
              </Typography>
              <Button 
                variant="contained"
                size="large"
                sx={{ 
                  bgcolor: '#1a5f5f',
                  color: 'white',
                  px: 5,
                  py: 2,
                  borderRadius: 8,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#164a4a'
                  }
                }}
                onClick={() => navigate('/contact us')}
              >
                Get in touch
              </Button>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProcurementSection;