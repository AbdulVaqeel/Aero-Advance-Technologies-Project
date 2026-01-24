import React, { useState } from 'react';
import { Grid, Box, Typography, ButtonBase } from '@mui/material';

interface Sector {
  title: string;
  image: string;
  text: string;
  hoverColor: string;
}

interface InteractiveSectorSectionProps {
  sectors: Sector[];
  sectionIndex: number;
  reverse?: boolean;
  title?: string;
}

const InteractiveSectorSection: React.FC<InteractiveSectorSectionProps> = ({
  sectors,
  sectionIndex,
  reverse = false,
  title
}) => {
  const [activeSector, setActiveSector] = useState(0);
  const current = sectors[activeSector];

  const gridDirection = reverse ? 'row-reverse' : 'row';

  return (
    <Grid 
      container 
      spacing={6} 
      sx={{ mb: 10, mt: 6 }} 
      direction={gridDirection}
    >
      <Grid item xs={12} md={7}>
        <Box
          sx={{
            position: 'relative',
            height: { xs: 400, md: 550 },
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
            transition: 'all 0.4s ease',
          }}
        >
          <Box
            component="img"
            src={current.image}
            alt={current.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,30,40,0.3))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 5,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontSize: { xs: '1.1rem', md: '1.35rem' },
                lineHeight: 1.7,
                maxWidth: '85%',
              }}
            >
              {current.text}
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              position: 'absolute',
              bottom: 40,
              left: 40,
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: '3rem', md: '5rem' },
              textShadow: '0 4px 14px rgba(0,0,0,0.8)',
              pointerEvents: 'none',
            }}
          >
            {current.title}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={5}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          height: '100%', 
          justifyContent: { md: 'center' } 
        }}>
          {sectors.map((sector, idx) => (
            <ButtonBase
              key={idx}
              onMouseEnter={() => setActiveSector(idx)}
              onClick={() => setActiveSector(idx)}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: activeSector === idx ? 'rgba(20, 110, 237, 0.15)' : 'rgba(0,0,0,0.08)',
                color: activeSector === idx ? '#146eed' : '#333',
                fontWeight: activeSector === idx ? 'bold' : 'medium',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                '&:hover': { 
                  bgcolor: 'rgba(20, 110, 237, 0.25)', 
                  transform: 'translateX(8px)' 
                },
              }}
            >
              {sector.title}
            </ButtonBase>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default InteractiveSectorSection;