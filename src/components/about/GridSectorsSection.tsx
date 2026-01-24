import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

interface Sector {
  title: string;
  image: string;
  text: string;
  hoverColor: string;
}

interface GridSectorsSectionProps {
  sectors: Sector[];
  title: string;
  mb?: number;
}

const GridSectorsSection: React.FC<GridSectorsSectionProps> = ({
  sectors,
  title,
  mb = 6
}) => {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb,
          fontWeight: 'bold',
          color: '#222',
        }}
      >
        {title}
      </Typography>

      <Grid container spacing={4}>
        {sectors.map((sector, idx) => (
          <Grid item xs={4} sm={4} md={4} key={idx}>
            <Box
              sx={{
                position: 'relative',
                height: 280,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <Box
                component="img"
                src={sector.image}
                alt={sector.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  p: 3,
                  pt: 6,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                  }}
                >
                  {sector.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridSectorsSection;