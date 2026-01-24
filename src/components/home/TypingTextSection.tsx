import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface TypingTextSectionProps {
  section: {
    id: number;
    text: string;
    subtitle: string;
  };
}

const TypingTextSection: React.FC<TypingTextSectionProps> = ({ section }) => {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<number | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  const startTyping = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setDisplayedText('');
    let i = 0;

    const typeNext = () => {
      if (i < section.text.length) {
        setDisplayedText((prev) => prev + section.text[i]);
        i++;
      } else {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    };

    typeNext();
    intervalRef.current = setInterval(typeNext, 35);
  };

  useEffect(() => {
    if (inView) {
      startTyping();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayedText('');
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView, section.text]);

  return (
    <Box ref={ref} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            py: { xs: 6, md: 10 },
            minHeight: '200px',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.2rem' },
              color: '#003366',
              lineHeight: 1.2,
              whiteSpace: 'pre-wrap',
              minHeight: '1.2em',
            }}
          >
            {displayedText}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              py: { xs: 1, md: 3 },
              fontSize: '1.35rem',
              lineHeight: 1.8,
              color: '#0b0258ff',
              maxWidth: { md: '900px' },
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            {section.subtitle}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TypingTextSection;