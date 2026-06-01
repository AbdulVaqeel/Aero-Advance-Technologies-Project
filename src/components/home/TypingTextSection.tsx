import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

interface TypingTextSectionProps {
  section: {
    id: number;
    text: string;
    subtitle: string;
  };
}

const TypingTextSection: React.FC<TypingTextSectionProps> = ({ section }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef<number>(0);

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
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current < section.text.length) {
        const currentChar = section.text[indexRef.current];
        setDisplayedText((prev) => prev + currentChar);
        indexRef.current++;
      } else {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, isArabic ? 45 : 35);
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
      indexRef.current = 0;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [inView, section.text, isArabic]);

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'white',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
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
              lineHeight: isArabic ? 1.45 : 1.2,
              whiteSpace: 'pre-wrap',
              minHeight: '1.2em',
              textAlign: 'center',
            }}
          >
            {displayedText}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              py: { xs: 1, md: 3 },
              fontSize: '1.35rem',
              lineHeight: isArabic ? 2 : 1.8,
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