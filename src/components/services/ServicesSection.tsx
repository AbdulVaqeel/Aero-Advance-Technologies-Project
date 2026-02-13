import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Slide,
  Collapse,
  Fade
} from '@mui/material';

interface Service {
  title: string;
  shortDesc: string;
  longDesc: string;
  bgImage: string;
}

interface ServicesSectionProps {
  services: Service[];
  sectionTitle: string;
  expandedCards: number[];
  handleLearnMoreClick: (index: number) => void;
  isExpanded: (index: number) => boolean;
  offsetIndex?: number;
  sectionId?: string; // ← NEW: for anchor navigation
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  sectionTitle,
  expandedCards,
  handleLearnMoreClick,
  isExpanded,
  offsetIndex = 0,
  sectionId // ← NEW
}) => {
  return (
    <Fade in timeout={1000}>
      <Container 
        id={sectionId} // ← NEW: Add the id here
        maxWidth="lg" 
        sx={{ py: 4, scrollMarginTop: '100px' }} // ← scroll-margin-top for offset
      >
        {/* Only show the section-specific title */}
        <Typography 
          sx={{
            color: 'navy',
            fontFamily: 'initial',
            textAlign: 'center',
            fontSize: '3rem',
            mb: 4
          }}
        >
          {sectionTitle}
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, idx) => {
            const globalIndex = offsetIndex + idx;
            return (
              <Grid item xs={12} md={6} key={globalIndex}>
                <Slide direction="up" in timeout={800 + idx * 150}>
                  <Card sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': { 
                      transform: 'translateY(-10px)',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                    }
                  }}>
                    {/* Image Header */}
                    <Box sx={{ 
                      height: '220px', 
                      backgroundImage: `url(${service.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}>
                      <Box sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.65))',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        pb: 4,
                        px: 3
                      }}>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            color: 'white', 
                            fontWeight: 'bold',
                            textAlign: 'center',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      p: 3 
                    }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: 3, 
                          color: '#444', 
                          lineHeight: 1.7,
                          flexGrow: 1
                        }}
                      >
                        {service.shortDesc}
                      </Typography>

                      {/* Detailed description */}
                      <Collapse in={isExpanded(globalIndex)}>
                        <Box sx={{ 
                          mt: 2,
                          p: 2,
                          bgcolor: 'rgba(139, 35, 50, 0.03)',
                          borderRadius: 1,
                          borderLeft: '4px solid #8b2332'
                        }}>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#333', 
                              lineHeight: 1.8
                            }}
                          >
                            {service.longDesc}
                          </Typography>
                        </Box>
                      </Collapse>

                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <Button 
                          variant="outlined"
                          size="medium"
                          fullWidth={false}
                          sx={{ 
                            borderColor: isExpanded(globalIndex) ? '#8b2332' : '#667eea',
                            color: isExpanded(globalIndex) ? '#8b2332' : '#667eea',
                            '&:hover': {
                              borderColor: isExpanded(globalIndex) ? '#6b1a27' : '#764ba2',
                              bgcolor: isExpanded(globalIndex) 
                                ? 'rgba(139, 35, 50, 0.08)' 
                                : 'rgba(102, 126, 234, 0.08)'
                            }
                          }}
                          onClick={() => handleLearnMoreClick(globalIndex)}
                        >
                          {isExpanded(globalIndex) ? 'Show Less' : 'Learn More'}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Fade>
  );
};

export default ServicesSection;