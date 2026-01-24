import React from 'react';
import { 
  Grid, 
  Box, 
  Typography, 
  Slide, 
  Card,
  Container 
} from '@mui/material';
import { Flight } from '@mui/icons-material';

interface AboutContentSectionProps {
  showFullContent?: boolean;
}

const AboutContentSection: React.FC<AboutContentSectionProps> = ({ 
  showFullContent = false 
}) => {
  const values = ['Innovation', 'Integrity', 'Excellence', 'Safety'];

  if (showFullContent) {
    return (
      <>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            color: '#051833',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            mb: 4,
            fontSize: { xs: '2.5rem', md: '4rem' },
          }}
        >
          Accelerating Sustainable<br />Connections
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: 900, 
            mx: 'auto', 
            mb: 4, 
            color: '#424242', 
            lineHeight: 1.8, 
            fontSize: { xs: '1rem', md: '1.2rem' } 
          }}
        >
          We are passionate about regional connectivity and provide top-tier products, services, and support. Since 1981, we have delivered aircraft to over 200 airlines across 100+ countries, enabling essential links for passengers and communities worldwide.
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            maxWidth: 900, 
            mx: 'auto', 
            mb: 4, 
            color: '#424242', 
            lineHeight: 1.8, 
            fontSize: { xs: '1rem', md: '1.2rem' } 
          }}
        >
          We are passionate about regional connectivity and provide top-tier products, services, and support. Since 1981, we have delivered aircraft to over 200 airlines across 100+ countries, enabling essential links for passengers and communities worldwide.
        </Typography>

        {/* Story + Timeline, Mission, Vision, Values */}
        <Grid container spacing={5} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Slide direction="right" in timeout={1000}>
              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 'bold', 
                    color: '#146eed' 
                  }}
                >
                  Our Successful Story
                </Typography>
                <Typography 
                  paragraph 
                  sx={{ 
                    color: '#555', 
                    lineHeight: 1.9 
                  }}
                >
                  Founded with a vision for excellence, we have grown into a trusted partner in aviation, marine, industrial, and automotive sectors across the GCC and beyond. Founded with a vision for excellence, we have grown into a trusted partner in aviation, marine, industrial, and automotive sectors across the GCC and beyond.
                </Typography>
                <Typography 
                  paragraph 
                  sx={{ 
                    color: '#555', 
                    lineHeight: 1.9 
                  }}
                >
                  Founded with a vision for excellence, we have grown into a trusted partner in aviation, marine, industrial, and automotive sectors across the GCC and beyond. Founded with a vision for excellence, we have grown into a trusted partner in aviation, marine, industrial, and automotive sectors across the GCC and beyond.
                </Typography>
              </Box>
            </Slide>
          </Grid>

          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={1200}>
              <Box
                sx={{
                  height: 400,
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundImage: `url('https://ca-times.brightspotcdn.com/dims4/default/11a635c/2147483647/strip/true/crop/2000x1050+0+38/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8e%2F47%2Fad9dc445971eadea14ea8cf1c073%2Fla-1489117919-0mmgi8qnkl-snap-photo')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                }}
              >
                <Box sx={{ 
                  position: 'absolute', 
                  inset: 0, 
                  bgcolor: 'rgba(0,0,0,0.4)' 
                }} />
              </Box>
            </Slide>
          </Grid>
        </Grid>

        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              p: 5, 
              height: '100%', 
              borderRadius: 3, 
              boxShadow: 3, 
              transition: '0.3s', 
              '&:hover': { transform: 'translateY(-8px)' } 
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 'bold', 
                  color: '#146eed' 
                }}
              >
                Our Mission
              </Typography>
              <Typography sx={{ lineHeight: 1.9 }}>
                To deliver world-class multi-sector solutions through innovation, safety, and unmatched customer support.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              p: 5, 
              height: '100%', 
              borderRadius: 3, 
              boxShadow: 3, 
              transition: '0.3s', 
              '&:hover': { transform: 'translateY(-8px)' } 
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 'bold', 
                  color: '#146eed' 
                }}
              >
                Our Vision
              </Typography>
              <Typography sx={{ lineHeight: 1.9 }}>
                To lead regionally and globally in sustainable, efficient solutions across aviation, marine, industrial, and automotive domains.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              fontWeight: 'bold' 
            }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <Slide direction="up" in timeout={1000 + idx * 200}>
                  <Card
                    sx={{
                      p: 4,
                      bgcolor: '#146eed',
                      color: 'white',
                      borderRadius: 3,
                      transition: '0.4s',
                      '&:hover': { 
                        bgcolor: '#0d47a1', 
                        transform: 'scale(1.08)', 
                        boxShadow: 6 
                      },
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      align="center" 
                      sx={{ fontWeight: 'bold' }}
                    >
                      {value}
                    </Typography>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  }

  return (
    <>
      <Typography 
        variant="h3" 
        align="center" 
        sx={{
          textAlign: 'center',
          mb: 6,
          fontWeight: 'bold',
          color: '#222',
          fontFamily: "'Poppins', 'Inter', 'sans-serif'",
          letterSpacing: '1px'
        }}
      >
        A Global Leader in Aviation & <br /> Multi-Sector Solutions <Flight />
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          maxWidth: '1100px',
          mx: 'auto',
          mb: 3,
          color: '#424242',
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.8,
        }}
      >
        We are a leading provider of aviation and marine solutions in the Kingdom of Saudi Arabia and the wider GCC region, established to support the growing demand for safe, efficient, and reliable air and maritime operations. With a strong regional presence and adherence to international standards, we serve airlines, marine operators, ports, and offshore industries, contributing to regional connectivity and economic development.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: '1100px',
          mx: 'auto',
          mb: 8,
          color: '#424242',
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.8,
        }}
      >
        We are a trusted industrial and automotive solutions provider in Saudi Arabia and the GCC, established to meet the requirements of industrial, manufacturing, and mobility sectors. Our operations are aligned with regional regulations and international best practices, enabling us to support major infrastructure, industrial, and automotive projects across the Kingdom.
      </Typography>
    </>
  );
};

export default AboutContentSection;