import React from 'react';
import { Box, Typography, Grid, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.3,      
  });

  const stats = [
    { end: 50,  suffix: '+', label: 'Aircraft Supported' },
    { end: 25,  suffix: '+', label: 'Years of Excellence' },
    { end: 10000, suffix: '+', label: 'Projects Delivered' },
    { end: 100, suffix: '+', label: 'Expert Team' },
  ];

  return (
    <Box sx={{ textAlign: 'center', py: 6 }} ref={ref}>
      <Grid container spacing={4}>
        {stats.map((stat, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Fade in={inView} timeout={800 + idx * 300}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#146eed',
                    minHeight: '1.4em',
                  }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={2.2}
                      delay={0.3 + idx * 0.2}
                      separator=","
                      suffix={stat.suffix}
                      enableScrollSpy={false}
                    />
                  ) : (
                    "0" + stat.suffix
                  )}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ 
                    color: '#555', 
                    mt: 1, 
                    fontWeight: 500 
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;