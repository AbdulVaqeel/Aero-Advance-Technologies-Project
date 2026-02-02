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
          Aero Advance Technologies is a forward-thinking start-up driven by a passion for advancing aviation and regional connectivity. We deliver high-quality products, reliable services, and dedicated support to meet the evolving needs of our clients, suppliers, and customers. With a strong focus on innovation, performance, and trust, we help create smarter solutions that strengthen connections and enable seamless operations for communities and businesses worldwide.
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
         we believe strong connectivity and reliable aviation solutions drive progress. We provide premium products, professional services, and dedicated support to ensure our customers receive the best experience from start to finish. Our team is passionate about helping clients and suppliers achieve success through quality, responsiveness, and continuous improvement.
        </Typography>

        {/* Story + Timeline, Mission, Vision, Values */}
        <Grid container spacing={5} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Slide direction="right" in timeout={1000}>
              <Box>
                <Typography 
                  variant="h4" 
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
                  Founded with a clear vision to deliver excellence and innovation, Aero Advance Technologies is steadily growing into a trusted name in the industry. As a start-up with strong ambition and purpose, we focus on providing high-quality products, reliable services, and professional support that meet the highest standards. Our commitment to performance, safety, and customer satisfaction continues to drive our success and strengthen our reputation.
                </Typography>
                <Typography 
                  paragraph 
                  sx={{ 
                    color: '#555', 
                    lineHeight: 1.9 
                  }}
                >
                  Through dedication, expertise, and a passion for advanced solutions, Aero Advance Technologies is building long-term partnerships with clients, suppliers, and customers. We are expanding our presence by delivering dependable aviation-focused products and services that create real value and lasting impact. With every project, we aim to support progress, enhance connectivity, and become a leading partner in the aviation sector and beyond.
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
                  mt:5,
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