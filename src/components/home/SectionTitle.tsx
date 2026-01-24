import React from 'react';
import { Typography, Box } from '@mui/material';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  color = '#8B4513',
  align = 'left' 
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: color,
          mb: 2,
          fontSize: { xs: '2rem', md: '3rem' },
          textAlign: align,
        }}
      >
        {title}
      </Typography>
      <Box 
        sx={{ 
          height: 4, 
          width: 100, 
          bgcolor: '#D4AF37', 
          mb: 4,
          mx: align === 'center' ? 'auto' : 'inherit',
          ml: align === 'right' ? 'auto' : 'inherit',
        }} 
      />
      {subtitle && (
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '1.25rem', 
            lineHeight: 1.8, 
            color: '#444',
            textAlign: align,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;