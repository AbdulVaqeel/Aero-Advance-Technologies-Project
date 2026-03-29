import React, { useMemo } from 'react';
import { Box, Card, Typography, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { Partner } from './PartnersData';

// ── Logo badge with fallback initials ─────────────────────────────────────────
export const LogoBadge = React.memo<{
  src: string;
  alt: string;
  name: string;
  primaryColor: string;
}>(({ src, alt, name, primaryColor }) => {
  const [hasError, setHasError] = React.useState(false);

  const initials = useMemo(
    () => name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase(),
    [name]
  );

  return (
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      {hasError ? (
        <Typography sx={{ fontWeight: 700, fontSize: '0.72rem', color: primaryColor }}>
          {initials}
        </Typography>
      ) : (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          sx={{ width: 30, height: 30, objectFit: 'contain' }}
        />
      )}
    </Box>
  );
});
LogoBadge.displayName = 'LogoBadge';

// ── Partner card ──────────────────────────────────────────────────────────────
export interface PartnerCardProps {
  partner: Partner;
  index: number;
  primaryColor: string;
  isGridInView: boolean;
}

export const PartnerCard = React.memo<PartnerCardProps>(
  ({ partner, index, primaryColor, isGridInView }) => (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.42, ease: 'easeOut', delay: index * 0.07 }}
      style={{ height: '100%', willChange: 'transform, opacity' }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.025 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ height: '100%' }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            background: 'rgba(10, 14, 28, 0.72)',
            backdropFilter: 'blur(14px) saturate(130%)',
            WebkitBackdropFilter: 'blur(14px) saturate(130%)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 4px 28px rgba(0,0,0,0.45)',
            transition: 'box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease',
            '&:hover': {
              background: 'rgba(20, 28, 50, 0.82)',
              borderColor: alpha(primaryColor, 0.5),
              boxShadow: '0 16px 52px rgba(0,0,0,0.6)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${alpha(primaryColor, 0.95)}, transparent)`,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              zIndex: 2,
            },
            '&:hover::before': { opacity: 1 },
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          {/* Card image */}
          <Box sx={{ position: 'relative', height: 155, overflow: 'hidden', flexShrink: 0 }}>
            <Box
              component="img"
              src={partner.image}
              alt={partner.name}
              loading="lazy"
              decoding="async"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.45s ease',
                '.MuiCard-root:hover &': { transform: 'scale(1.06)' },
              }}
            />
            {/* Dark scrim */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(5,8,20,0.82) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
            {/* Category pill */}
            <Box
              sx={{
                position: 'absolute',
                top: 10, left: 10,
                px: 1.2, py: 0.3,
                borderRadius: 10,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.15)',
                zIndex: 1,
                transform: 'translateZ(0)',
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: '#fff', fontWeight: 600, letterSpacing: 0.4, fontSize: '0.67rem' }}
              >
                {partner.category}
              </Typography>
            </Box>
          </Box>

          {/* Card content */}
          <Box sx={{ p: 2.5, pt: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <LogoBadge
                src={partner.logo}
                alt={`${partner.name} logo`}
                name={partner.name}
                primaryColor={primaryColor}
              />
              <Typography
                variant="subtitle1"
                component="h3"
                fontWeight={700}
                sx={{ color: '#fff', lineHeight: 1.25, fontSize: '0.97rem' }}
              >
                {partner.name}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.6, mt: 'auto', fontSize: '0.81rem' }}
            >
              {partner.description}
            </Typography>
          </Box>
        </Card>
      </motion.div>
    </motion.div>
  )
);
PartnerCard.displayName = 'PartnerCard';