import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Fade,
  Zoom,
  useTheme,
  alpha,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';

const partners = [
  {
    name: 'Gulfstream',
    logo: 'https://logo.clearbit.com/gulfstream.com',
    description: 'World leader in business jet manufacturing',
    category: 'Aircraft Manufacturer',
  },
  {
    name: 'Bombardier',
    logo: 'https://logo.clearbit.com/bombardier.com',
    description: 'Premium business and commercial aircraft',
    category: 'Aircraft Manufacturer',
  },
  {
    name: 'Dassault Falcon',
    logo: 'https://logo.clearbit.com/dassaultfalcon.com',
    description: 'French excellence in business aviation',
    category: 'Aircraft Manufacturer',
  },
  {
    name: 'Honeywell',
    logo: 'https://logo.clearbit.com/honeywell.com',
    description: 'Aviation electronics & auxiliary power units',
    category: 'Avionics & Systems',
  },
  {
    name: 'Rolls-Royce',
    logo: 'https://logo.clearbit.com/rolls-royce.com',
    description: 'World-class aircraft engines',
    category: 'Engine Manufacturer',
  },
  {
    name: 'Garmin',
    logo: 'https://logo.clearbit.com/garmin.com',
    description: 'Advanced navigation & communication systems',
    category: 'Avionics',
  },
  {
    name: 'Universal Avionics',
    logo: 'https://logo.clearbit.com/uasc.com',
    description: 'Next-generation flight management systems',
    category: 'Avionics',
  },
  {
    name: 'Signature Flight Support',
    logo: 'https://logo.clearbit.com/signatureaviation.com',
    description: 'Global network of FBO services',
    category: 'Ground Services',
  },
];

// Fallback initials avatar when image fails to load
const LogoWithFallback: React.FC<{
  src: string;
  alt: string;
  name: string;
  primaryColor: string;
}> = ({ src, alt, name, primaryColor }) => {
  const [hasError, setHasError] = useState(false);
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (hasError) {
    return (
      <Box
        sx={{
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: alpha(primaryColor, 0.2),
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: 1,
          border: `1px solid ${alpha('#ffffff', 0.3)}`,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        {initials}
      </Box>
    );
  }

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      sx={{
        height: 90,
        maxWidth: '100%',
        objectFit: 'contain',
        mb: 3,
        filter: 'brightness(0.95) contrast(1.05)',
        transition: 'all 0.4s ease',
        '.MuiCard-root:hover &': {
          filter: 'brightness(1.1) contrast(1.1)',
          transform: 'scale(1.08)',
        },
      }}
    />
  );
};

// Per-card component with its own useInView
interface PartnerCardProps {
  partner: (typeof partners)[0];
  index: number;
  primaryColor: string;
  dividerColor: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  partner,
  index,
  primaryColor,
  dividerColor,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay: index * 0.1,
      }}
      style={{ height: '100%' }}
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.04 }}
        transition={{ duration: 0.4 }}
        style={{ height: '100%' }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            position: 'relative',
            background: 'rgba(20, 25, 40, 0.75)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${alpha('#ffffff', 0.18)}`,
            transition: 'all 0.3s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${alpha(primaryColor, 0.1)} 0%, transparent 60%)`,
              opacity: 0,
              transition: 'opacity 0.5s ease',
            },
            '&:hover::before': {
              opacity: 1,
            },
            '&:hover': {
              background: 'rgba(30, 38, 58, 0.85)',
              borderColor: alpha(primaryColor, 0.5),
            },
          }}
        >
          <Box
            sx={{
              p: 4,
              pb: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            <LogoWithFallback
              src={partner.logo}
              alt={`${partner.name} logo`}
              name={partner.name}
              primaryColor={primaryColor}
            />

            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                minHeight: 64,
                display: 'flex',
                alignItems: 'center',
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {partner.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: primaryColor,
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              {partner.category}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: alpha('#ffffff', 0.85),
                mt: 'auto',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              {partner.description}
            </Typography>
          </Box>
        </Card>
      </motion.div>
    </motion.div>
  );
};

// Main section with HD Video Background
const OurPartners = () => {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* HD Video Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
          poster="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1600"
        >
          {/* High-quality aviation video sources */}
          <source
            src="https://cdn.pixabay.com/video/2022/10/31/136370-766432757_tiny.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.pixabay.com/video/2023/03/14/155242-811402045_large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark gradient overlay for better text readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)',
            backdropFilter: 'blur(2px)',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content Layer */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={10}>
          <Fade in timeout={800}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 3,
                fontWeight: 600,
                fontSize: '0.85rem',
                fontFamily: 'Montserrat, "DM Sans", Roboto, sans-serif',
                mb: 2,
                display: 'inline-block',
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.25)}, ${alpha(
                  theme.palette.primary.dark,
                  0.4
                )})`,
                backdropFilter: 'blur(8px)',
                padding: '6px 20px',
                mt: { xs: '50px', md: '20px'},
                borderRadius: '60px',
                color: '#b9e2ff',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              }}
            >
              ✈️ TRUSTED COLLABORATIONS
            </Typography>
          </Fade>

          <Zoom in timeout={900}>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ margin: 0 }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: '#ffffff',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  fontSize: { xs: '2.2rem', md: '3.5rem' },
                }}
              >
                Our Strategic{' '}
                <span
                  style={{
                    background: `linear-gradient(135deg, #b3e0ff, ${theme.palette.primary.light})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Aviation Partners
                </span>
              </Typography>
            </motion.h3>
          </Zoom>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typography
              variant="h6"
              sx={{
                maxWidth: 720,
                mx: 'auto',
                mt: 3,
                color: alpha('#ffffff', 0.9),
                textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 400,
              }}
            >
              We collaborate with the industry's most respected manufacturers, technology providers
              and service companies to deliver exceptional aviation solutions.
            </Typography>
          </motion.div>
        </Box>

        {/* Partners Grid */}
        <Grid container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={partner.name}>
              <PartnerCard
                partner={partner}
                index={index}
                primaryColor={theme.palette.primary.main}
                dividerColor={theme.palette.divider}
              />
            </Grid>
          ))}
        </Grid>

        {/* Trust message */}
        <Box textAlign="center" mt={12}>
          <Box
            sx={{
              background: alpha('#000000', 0.35),
              backdropFilter: 'blur(12px)',
              borderRadius: '80px',
              display: 'inline-block',
              padding: '8px 28px',
              border: `1px solid ${alpha('#ffffff', 0.2)}`,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontStyle: 'italic',
                maxWidth: 760,
                mx: 'auto',
                color: '#eef5ff',
                textShadow: '0 1px 5px rgba(0,0,0,0.5)',
                '& span': {
                  color: theme.palette.primary.light,
                  fontWeight: 600,
                },
              }}
            >
              "Strong partnerships are the foundation of exceptional service in aviation.
              <br />
              We are proud to work with the <span>best in class</span> across the industry."
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurPartners;