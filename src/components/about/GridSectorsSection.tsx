import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';

interface Sector {
  title: string;
  image: string;
  text: string;    
  hoverColor: string;
}

interface GridSectorsSectionProps {
  sectors: Sector[];
  title?: string;     // we ignore this prop now
  mb?: number;
}

const GridSectorsSection: React.FC<GridSectorsSectionProps> = ({ sectors, mb = 0 }) => {
  return (
    <Box sx={{ mb }}>
      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
        {sectors.map((sector, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                height: '100%',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 16px 48px ${sector.hoverColor}30`,
                },
              }}
            >
              <CardMedia
                component="img"
                image={sector.image}
                alt={sector.title}
                sx={{
                  width: '100%',
                  height: { xs: 280, sm: 320, md: 360 }, // taller on larger screens
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />

              {/* Bottom overlay + centered title */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                  py: { xs: 3, md: 4 },
                  px: 3,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                    textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                    letterSpacing: 0.5,
                  }}
                >
                  {sector.title}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridSectorsSection;