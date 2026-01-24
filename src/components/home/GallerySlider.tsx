import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySliderProps {
  title: string;
  currentSlide: number;
  galleryImages: GalleryImage[];
  nextSlide: () => void;
  prevSlide: () => void;
  setCurrentSlide: (index: number) => void;
}

const GallerySlider: React.FC<GallerySliderProps> = ({
  title,
  currentSlide,
  galleryImages,
  nextSlide,
  prevSlide,
  setCurrentSlide
}) => {
  return (
    <Box sx={{ my: { xs: 6, md: 10, transform: 'TranslateY(-80px)' } }}>
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Typography variant="h2" align="center" sx={{ fontSize: '2vm', color: '#031852ff' }}>
          {title}
        </Typography>
      </Container>

      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          bgcolor: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.8s ease-in-out',
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {galleryImages.map((img, idx) => (
            <Box key={idx} sx={{ minWidth: '100%', height: { xs: '40vh', sm: '60vh', md: '80vh' } }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>

        <IconButton 
          onClick={prevSlide} 
          sx={{ 
            position: 'absolute', 
            left: { xs: 8, md: 32 }, 
            top: '50%', 
            transform: 'translateY(-50%)', 
            bgcolor: 'rgba(0,0,0,0.5)', 
            color: 'white', 
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, 
            zIndex: 10 
          }}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>

        <IconButton 
          onClick={nextSlide} 
          sx={{ 
            position: 'absolute', 
            right: { xs: 8, md: 32 }, 
            top: '50%', 
            transform: 'translateY(-50%)', 
            bgcolor: 'rgba(0,0,0,0.5)', 
            color: 'white', 
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }, 
            zIndex: 10 
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>

        <Box sx={{ 
          position: 'absolute', 
          bottom: { xs: 16, md: 32 }, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex', 
          gap: 1.5, 
          zIndex: 10 
        }}>
          {galleryImages.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              sx={{
                width: 14,
                height: 18,
                bgcolor: currentSlide === idx ? 'white' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GallerySlider;