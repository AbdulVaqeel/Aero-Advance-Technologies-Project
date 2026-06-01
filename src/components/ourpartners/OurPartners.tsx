import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Fade,
  Zoom,
  useTheme,
  alpha,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { partners } from './PartnersData';
import { PartnerCard } from './PartnerCard';

const OurPartners = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const primaryColor = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
        minHeight: '100vh',
        contain: 'paint',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1800&q=75&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          filter: 'brightness(0.85) contrast(1.05)',
          transform: 'translateZ(0)',
          willChange: 'auto',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          transform: 'translateZ(0)',
          background: `
            radial-gradient(circle at 30% 20%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 55%),
            radial-gradient(circle at 75% 80%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 50%),
            linear-gradient(160deg, rgba(0,0,0,0.72) 0%, rgba(5,8,22,0.80) 100%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box textAlign="center" mb={12}>
          <Fade in timeout={800}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: isArabic ? 0 : 3,
                fontWeight: 600,
                fontSize: '0.85rem',
                fontFamily: 'Montserrat, "DM Sans", Roboto, sans-serif',
                mb: 2,
                display: 'inline-block',
                background: alpha(primaryColor, 0.2),
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                px: '20px',
                py: '6px',
                mt: { xs: '50px', md: '20px' },
                borderRadius: '60px',
                color: '#b9e2ff',
                border: `1px solid ${alpha(primaryColor, 0.3)}`,
                transform: 'translateZ(0)',
                lineHeight: isArabic ? 1.8 : 1.4,
              }}
            >
              ✈️ {t('partners.badge')}
            </Typography>
          </Fade>

          <Zoom in timeout={900}>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ margin: 0 }}
            >
              <Typography
                variant="h3"
                fontWeight={800}
                gutterBottom
                sx={{
                  color: '#ffffff',
                  textShadow: '0 4px 20px rgba(0,0,0,0.6)',
                  fontSize: { xs: '2.2rem', md: '3.6rem' },
                  lineHeight: isArabic ? 1.5 : 1.2,
                }}
              >
                {t('partners.titlePrefix')}{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(135deg, #b3e0ff, ${primaryLight})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {t('partners.titleHighlight')}
                </Box>
              </Typography>
            </motion.h3>
          </Zoom>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                mt: 2,
                color: alpha('#ffffff', 0.82),
                fontSize: { xs: '1rem', md: '1.18rem' },
                fontWeight: 400,
                lineHeight: isArabic ? 2 : 1.75,
                textAlign: 'center',
              }}
            >
              {t('partners.subtitle')}
            </Typography>
          </motion.div>
        </Box>

        <Grid ref={gridRef} container spacing={4}>
          {partners.map((partner, index) => {
            const translatedPartner = {
              ...partner,
              description: t(partner.descriptionKey),
              category: t(partner.categoryKey),
            };

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={partner.name}>
                <PartnerCard
                  partner={translatedPartner}
                  index={index}
                  primaryColor={primaryColor}
                  isGridInView={isGridInView}
                />
              </Grid>
            );
          })}
        </Grid>

        <Box textAlign="center" mt={8}>
          <Box
            sx={{
              display: 'inline-block',
              px: 4,
              py: 2,
              borderRadius: '80px',
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
              transform: 'translateZ(0)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontStyle: 'italic',
                maxWidth: 720,
                color: '#eef5ff',
                lineHeight: isArabic ? 2 : 1.8,
                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                '& span': { color: primaryLight, fontWeight: 600 },
              }}
            >
              “{t('partners.trustMessageLine1')}
              <br />
              {t('partners.trustMessageLine2')}{' '}
              <Box component="span">{t('partners.trustMessageHighlight')}</Box>{' '}
              {t('partners.trustMessageLine3')}”
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurPartners;