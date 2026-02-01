import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySliderProps {
  title: string;
  images: GalleryImage[];
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
}

const GallerySlider: React.FC<GallerySliderProps> = ({
  title,
  images,
  currentSlide,
  onNext,
  onPrev,
  onDotClick,
}) => {
  // Safeguard against invalid index
  const safeIndex = Math.max(0, Math.min(currentSlide, images.length - 1));

  return (
    <Box sx={{ my: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg" sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
            fontWeight: 700,
            color: '#031852ff',
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
      </Container>

      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          mx: 'auto',
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'white',
          boxShadow: 4,
          borderRadius: { xs: 2, md: 4 },
        }}
      >
        {/* Slide container */}
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(-${safeIndex * 100}%)`,
          }}
        >
          {images.map((img, idx) => (
            <Box
              key={idx}
              sx={{
                flex: '0 0 100%',
                height: { xs: '50vh', sm: '65vh', md: '80vh' },
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
              />
            </Box>
          ))}
        </Box>

        {/* Previous Button */}
        <IconButton
          onClick={onPrev}
          disabled={safeIndex === 0}
          sx={{
            position: 'absolute',
            left: { xs: 12, md: 32 },
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(0,0,0,0.55)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
            '&.Mui-disabled': { opacity: 0.35, cursor: 'not-allowed' },
            zIndex: 10,
          }}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>

        {/* Next Button */}
        <IconButton
          onClick={onNext}
          disabled={safeIndex === images.length - 1}
          sx={{
            position: 'absolute',
            right: { xs: 12, md: 32 },
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(0,0,0,0.55)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
            '&.Mui-disabled': { opacity: 0.35, cursor: 'not-allowed' },
            zIndex: 10,
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>

        {/* Dots */}
        {images.length > 1 && (
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 16, md: 32 },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: { xs: 1.5, md: 2 },
              zIndex: 10,
            }}
          >
            {images.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => onDotClick(idx)}
                sx={{
                  width: { xs: 12, md: 14 },
                  height: { xs: 12, md: 14 },
                  borderRadius: '50%',
                  bgcolor: safeIndex === idx ? '#1338ddff' : 'rgba(255,255,255,0.65)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '2px solid white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  '&:hover': {
                    bgcolor: safeIndex === idx ? '#1239e6ff' : 'white',
                    transform: 'scale(1.25)',
                  },
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GallerySlider;