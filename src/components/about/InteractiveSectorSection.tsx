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
  title,
}) => {
  const [activeSector, setActiveSector] = useState(0);
  const current = sectors[activeSector];

  const gridDirection = reverse ? 'row-reverse' : 'row';

  return (
    <Box sx={{ mb: 12 }}>
      {title && (
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 5, md: 7 },
            fontWeight: 700,
            fontSize: { xs: '2.2rem', md: '3.2rem' },
          }}
        >
          {title}
        </Typography>
      )}

      <Grid container spacing={{ xs: 4, md: 6 }} direction={gridDirection}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              position: 'relative',
              height: { xs: '460px', sm: '520px', md: '620px' }, // taller → more room for text
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
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
                transition: 'transform 0.7s ease',
              }}
            />

            {/* Overlay – structured with flex column */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 70%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                p: { xs: 4, md: 6 },
                pb: { xs: 5, md: 7 },
              }}
            >
              {/* Large title – smaller on mobile, no overlap */}
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  fontSize: { xs: '2.4rem', sm: '3rem', md: '4.8rem' },
                  lineHeight: 1,
                  mb: { xs: 2, md: 3 },
                  textShadow: '0 4px 16px rgba(0,0,0,0.7)',
                  pointerEvents: 'none',
                }}
              >
                {current.title}
              </Typography>

              {/* Description – scrollable container if too long */}
              <Box
                sx={{
                  overflowY: 'auto',
                  maxHeight: { xs: '180px', md: '240px' }, // adjust based on your longest text
                  WebkitOverflowScrolling: 'touch',
                  pr: 1.5, // space for scrollbar
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '1.05rem', md: '1.3rem' },
                    lineHeight: 1.65,
                    maxWidth: '92%',
                  }}
                >
                  {current.text}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1.5, md: 2.5 },
              height: '100%',
              justifyContent: { md: 'center' },
              pt: { xs: 3, md: 0 },
            }}
          >
            {sectors.map((sector, idx) => (
              <ButtonBase
                key={idx}
                onMouseEnter={() => setActiveSector(idx)}
                onClick={() => setActiveSector(idx)}
                focusRipple
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  borderRadius: 3,
                  bgcolor: activeSector === idx ? `${sector.hoverColor}15` : 'rgba(0,0,0,0.06)',
                  color: activeSector === idx ? sector.hoverColor : 'text.primary',
                  fontWeight: activeSector === idx ? 700 : 500,
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  border: activeSector === idx ? `2px solid ${sector.hoverColor}` : '1px solid transparent',
                  '&:hover': {
                    bgcolor: `${sector.hoverColor}25`,
                    transform: 'translateX(6px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  },
                }}
              >
                {sector.title}
              </ButtonBase>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InteractiveSectorSection;