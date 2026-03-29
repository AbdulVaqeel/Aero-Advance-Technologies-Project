// import React, { useRef, useMemo } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   Fade,
//   Zoom,
//   useTheme,
//   alpha,
// } from '@mui/material';
// import { motion, useInView } from 'framer-motion';

// // ── Partner data ──────────────────────────────────────────────────────────────
// const partners = [
//   {
//     name: 'Gulfstream',
//     logo: 'https://logo.clearbit.com/gulfstream.com',
//     image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=480&q=70&auto=format&fit=crop',
//     description: 'World leader in business jet manufacturing',
//     category: 'Aircraft Manufacturer',
//   },
//   {
//     name: 'Bombardier',
//     logo: 'https://logo.clearbit.com/bombardier.com',
//     image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=480&q=70&auto=format&fit=crop',
//     description: 'Premium business and commercial aircraft',
//     category: 'Aircraft Manufacturer',
//   },
//   {
//     name: 'Dassault Falcon',
//     logo: 'https://logo.clearbit.com/dassaultfalcon.com',
//     image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=70&auto=format&fit=crop',
//     description: 'French excellence in business aviation',
//     category: 'Aircraft Manufacturer',
//   },
//   {
//     name: 'Honeywell',
//     logo: 'https://logo.clearbit.com/honeywell.com',
//     image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=480&q=70&auto=format&fit=crop',
//     description: 'Aviation electronics & auxiliary power units',
//     category: 'Avionics & Systems',
//   },
//   {
//     name: 'Rolls-Royce',
//     logo: 'https://logo.clearbit.com/rolls-royce.com',
//     image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=480&q=70&auto=format&fit=crop',
//     description: 'World-class aircraft engines',
//     category: 'Engine Manufacturer',
//   },
//   {
//     name: 'Garmin',
//     logo: 'https://logo.clearbit.com/garmin.com',
//     image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=480&q=70&auto=format&fit=crop',
//     description: 'Advanced navigation & communication systems',
//     category: 'Avionics',
//   },
//   {
//     name: 'Universal Avionics',
//     logo: 'https://logo.clearbit.com/uasc.com',
//     image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=480&q=70&auto=format&fit=crop',
//     description: 'Next-generation flight management systems',
//     category: 'Avionics',
//   },
//   {
//     name: 'Signature Flight',
//     logo: 'https://logo.clearbit.com/signatureaviation.com',
//     image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=480&q=70&auto=format&fit=crop',
//     description: 'Global network of FBO services',
//     category: 'Ground Services',
//   },
// ];

// // ── Logo badge with fallback initials ─────────────────────────────────────────
// const LogoBadge = React.memo<{
//   src: string;
//   alt: string;
//   name: string;
//   primaryColor: string;
// }>(({ src, alt, name, primaryColor }) => {
//   const [hasError, setHasError] = React.useState(false);

//   const initials = useMemo(
//     () => name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase(),
//     [name]
//   );

//   return (
//     <Box
//       sx={{
//         width: 48,
//         height: 48,
//         borderRadius: '50%',
//         background: 'rgba(255,255,255,0.95)',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexShrink: 0,
//         overflow: 'hidden',
//         transform: 'translateZ(0)', // own GPU layer
//       }}
//     >
//       {hasError ? (
//         <Typography sx={{ fontWeight: 700, fontSize: '0.72rem', color: primaryColor }}>
//           {initials}
//         </Typography>
//       ) : (
//         <Box
//           component="img"
//           src={src}
//           alt={alt}
//           loading="lazy"
//           decoding="async"
//           onError={() => setHasError(true)}
//           sx={{ width: 30, height: 30, objectFit: 'contain' }}
//         />
//       )}
//     </Box>
//   );
// });
// LogoBadge.displayName = 'LogoBadge';

// // ── Partner card ──────────────────────────────────────────────────────────────
// interface PartnerCardProps {
//   partner: (typeof partners)[0];
//   index: number;
//   primaryColor: string;
//   isGridInView: boolean;
// }

// const PartnerCard = React.memo<PartnerCardProps>(
//   ({ partner, index, primaryColor, isGridInView }) => (
//     <motion.div
//       initial={{ opacity: 0, y: 32 }}
//       animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
//       // easeOut tween — far cheaper than spring across 8 simultaneous animations
//       transition={{ duration: 0.42, ease: 'easeOut', delay: index * 0.07 }}
//       style={{ height: '100%', willChange: 'transform, opacity' }}
//     >
//       <motion.div
//         whileHover={{ y: -8, scale: 1.025 }}
//         transition={{ duration: 0.2, ease: 'easeOut' }}
//         style={{ height: '100%' }}
//       >
//         <Card
//           sx={{
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             borderRadius: 4,
//             overflow: 'hidden',
//             position: 'relative',
//             // Dark glass card — pre-composited per-card, never recalculates on scroll
//             background: 'rgba(10, 14, 28, 0.72)',
//             backdropFilter: 'blur(14px) saturate(130%)',
//             WebkitBackdropFilter: 'blur(14px) saturate(130%)',
//             border: '1px solid rgba(255,255,255,0.12)',
//             boxShadow: '0 4px 28px rgba(0,0,0,0.45)',
//             transition: 'box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease',
//             '&:hover': {
//               background: 'rgba(20, 28, 50, 0.82)',
//               borderColor: alpha(primaryColor, 0.5),
//               boxShadow: '0 16px 52px rgba(0,0,0,0.6)',
//             },
//             // Shimmer top bar on hover — cheap pseudo-element, no layout cost
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               top: 0, left: 0, right: 0,
//               height: '2px',
//               background: `linear-gradient(90deg, transparent, ${alpha(primaryColor, 0.95)}, transparent)`,
//               opacity: 0,
//               transition: 'opacity 0.3s ease',
//               zIndex: 2,
//             },
//             '&:hover::before': { opacity: 1 },
//             // Key: own GPU compositing layer per card
//             // Blur is pre-rendered — scroll just moves the layer, no re-blur
//             transform: 'translateZ(0)',
//             willChange: 'transform',
//           }}
//         >
//           {/* Card image */}
//           <Box sx={{ position: 'relative', height: 155, overflow: 'hidden', flexShrink: 0 }}>
//             <Box
//               component="img"
//               src={partner.image}
//               alt={partner.name}
//               loading="lazy"
//               decoding="async"
//               sx={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 display: 'block',
//                 // transform only — GPU composited, zero layout cost
//                 transition: 'transform 0.45s ease',
//                 '.MuiCard-root:hover &': { transform: 'scale(1.06)' },
//               }}
//             />
//             {/* Dark scrim over image */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 inset: 0,
//                 background: 'linear-gradient(to top, rgba(5,8,20,0.82) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
//                 pointerEvents: 'none',
//               }}
//             />
//             {/* Category pill */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 10, left: 10,
//                 px: 1.2, py: 0.3,
//                 borderRadius: 10,
//                 // Small isolated blur — own layer via translateZ
//                 background: 'rgba(0,0,0,0.5)',
//                 backdropFilter: 'blur(6px)',
//                 WebkitBackdropFilter: 'blur(6px)',
//                 border: '1px solid rgba(255,255,255,0.15)',
//                 zIndex: 1,
//                 transform: 'translateZ(0)',
//               }}
//             >
//               <Typography
//                 variant="caption"
//                 sx={{ color: '#fff', fontWeight: 600, letterSpacing: 0.4, fontSize: '0.67rem' }}
//               >
//                 {partner.category}
//               </Typography>
//             </Box>
//           </Box>

//           {/* Card content */}
//           <Box sx={{ p: 2.5, pt: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
//               <LogoBadge
//                 src={partner.logo}
//                 alt={`${partner.name} logo`}
//                 name={partner.name}
//                 primaryColor={primaryColor}
//               />
//               <Typography
//                 variant="subtitle1"
//                 component="h3"
//                 fontWeight={700}
//                 sx={{ color: '#fff', lineHeight: 1.25, fontSize: '0.97rem' }}
//               >
//                 {partner.name}
//               </Typography>
//             </Box>
//             <Typography
//               variant="body2"
//               sx={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.6, mt: 'auto', fontSize: '0.81rem' }}
//             >
//               {partner.description}
//             </Typography>
//           </Box>
//         </Card>
//       </motion.div>
//     </motion.div>
//   )
// );
// PartnerCard.displayName = 'PartnerCard';

// // ── Main section ──────────────────────────────────────────────────────────────
// const OurPartners = () => {
//   const theme = useTheme();

//   // ONE observer for the whole grid — replaces 8 separate useInView hooks
//   const gridRef = useRef<HTMLDivElement>(null);
//   const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

//   // Stable color refs — computed once, not inside child renders
//   const primaryColor = theme.palette.primary.main;
//   const primaryLight = theme.palette.primary.light;

//   return (
//     <Box
//       component="section"
//       sx={{
//         position: 'relative',
//         py: { xs: 6, md: 10 },
//         overflow: 'hidden',
//         minHeight: '100vh',
//         // Isolates scroll repaints to this section only
//         contain: 'paint',
//       }}
//     >
//       {/* ── BACKGROUND IMAGE ─────────────────────────────────────────────────
//           • Own GPU layer via translateZ(0) — isolated from card animations
//           • backgroundAttachment: 'scroll' NOT 'fixed' — fixed forces full-page
//             repaint on every scroll frame
//           • brightness(0.55) — image visible but dark enough for white text
//       ──────────────────────────────────────────────────────────────────────── */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           zIndex: 0,
//           backgroundImage: `url('https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1800&q=75&auto=format&fit=crop')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'scroll',
//           filter: 'brightness(0.85) contrast(1.05)',
//           transform: 'translateZ(0)',
//           willChange: 'auto',
//         }}
//       />

//       {/* ── DARK OVERLAY ─────────────────────────────────────────────────────
//           Pure CSS gradient only — NO backdropFilter on this overlay.
//           Applying backdropFilter to a 100vw×100vh element was the #1 cause
//           of scroll jank in the original code. A CSS gradient costs zero on scroll.
//       ──────────────────────────────────────────────────────────────────────── */}
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           zIndex: 1,
//           pointerEvents: 'none',
//           transform: 'translateZ(0)',
//           background: `
//             radial-gradient(circle at 30% 20%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 55%),
//             radial-gradient(circle at 75% 80%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 50%),
//             linear-gradient(160deg, rgba(0,0,0,0.72) 0%, rgba(5,8,22,0.80) 100%)
//           `,
//         }}
//       />

//       {/* ── CONTENT ──────────────────────────────────────────────────────────── */}
//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>

//         {/* Header */}
//         <Box textAlign="center" mb={12}>
//           <Fade in timeout={800}>
//             <Typography
//               variant="overline"
//               sx={{
//                 letterSpacing: 3,
//                 fontWeight: 600,
//                 fontSize: '0.85rem',
//                 fontFamily: 'Montserrat, "DM Sans", Roboto, sans-serif',
//                 mb: 2,
//                 display: 'inline-block',
//                 // Small pill — backdropFilter is safe here because it's a tiny
//                 // element on its own compositing layer (translateZ below)
//                 background: alpha(primaryColor, 0.2),
//                 backdropFilter: 'blur(8px)',
//                 WebkitBackdropFilter: 'blur(8px)',
//                 px: '20px',
//                 py: '6px',
//                 mt: { xs: '50px', md: '20px' },
//                 borderRadius: '60px',
//                 color: '#b9e2ff',
//                 border: `1px solid ${alpha(primaryColor, 0.3)}`,
//                 transform: 'translateZ(0)',
//               }}
//             >
//               ✈️ TRUSTED COLLABORATIONS
//             </Typography>
//           </Fade>

//           <Zoom in timeout={900}>
//             <motion.h3
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: 'easeOut' }}
//               style={{ margin: 0 }}
//             >
//               <Typography
//                 variant="h3"
//                 fontWeight={800}
//                 gutterBottom
//                 sx={{
//                   color: '#ffffff',
//                   textShadow: '0 4px 20px rgba(0,0,0,0.6)',
//                   fontSize: { xs: '2.2rem', md: '3.6rem' },
//                 }}
//               >
//                 Our Strategic{' '}
//                 <Box
//                   component="span"
//                   sx={{
//                     background: `linear-gradient(135deg, #b3e0ff, ${primaryLight})`,
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}
//                 >
//                   Aviation Partners
//                 </Box>
//               </Typography>
//             </motion.h3>
//           </Zoom>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.35, duration: 0.5 }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 maxWidth: 700,
//                 mx: 'auto',
//                 mt: 2,
//                 color: alpha('#ffffff', 0.82),
//                 fontSize: { xs: '1rem', md: '1.18rem' },
//                 fontWeight: 400,
//                 lineHeight: 1.75,
//               }}
//             >
//               We collaborate with the industry's most respected manufacturers, technology providers
//               and service companies to deliver exceptional aviation solutions.
//             </Typography>
//           </motion.div>
//         </Box>

//         {/* Partners Grid — single ref = single IntersectionObserver for all 8 cards */}
//         <Grid ref={gridRef} container spacing={4}>
//           {partners.map((partner, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={partner.name}>
//               <PartnerCard
//                 partner={partner}
//                 index={index}
//                 primaryColor={primaryColor}
//                 isGridInView={isGridInView}
//               />
//             </Grid>
//           ))}
//         </Grid>

//         {/* Trust message */}
//         <Box textAlign="center" mt={8}>
//           <Box
//             sx={{
//               display: 'inline-block',
//               px: 4,
//               py: 2,
//               borderRadius: '80px',
//               // Small element — backdropFilter safe on its own layer
//               background: 'rgba(0,0,0,0.45)',
//               backdropFilter: 'blur(12px)',
//               WebkitBackdropFilter: 'blur(12px)',
//               border: '1px solid rgba(255,255,255,0.15)',
//               boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
//               transform: 'translateZ(0)',
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 fontStyle: 'italic',
//                 maxWidth: 720,
//                 color: '#eef5ff',
//                 lineHeight: 1.8,
//                 textShadow: '0 1px 4px rgba(0,0,0,0.5)',
//                 '& span': { color: primaryLight, fontWeight: 600 },
//               }}
//             >
//               "Strong partnerships are the foundation of exceptional service in aviation.
//               <br />
//               We are proud to work with the <span>best in class</span> across the industry."
//             </Typography>
//           </Box>
//         </Box>

//       </Container>
//     </Box>
//   );
// };

// export default OurPartners;

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
import { partners } from './PartnersData';
import { PartnerCard } from './PartnerCard';

const OurPartners = () => {
  const theme = useTheme();

  // ONE observer for the whole grid — not one per card
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  // Stable color refs — computed once, not inside child renders
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
      }}
    >
      {/* Background image — own GPU layer, never triggers repaint on scroll */}
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

      {/* Dark overlay — pure CSS gradient, zero scroll cost (no backdropFilter) */}
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

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <Box textAlign="center" mb={12}>
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
              }}
            >
              ✈️ TRUSTED COLLABORATIONS
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
                }}
              >
                Our Strategic{' '}
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(135deg, #b3e0ff, ${primaryLight})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Aviation Partners
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
                lineHeight: 1.75,
              }}
            >
              We collaborate with the industry's most respected manufacturers, technology providers
              and service companies to deliver exceptional aviation solutions.
            </Typography>
          </motion.div>
        </Box>

        {/* Partners Grid — single ref = single IntersectionObserver for all cards */}
        <Grid ref={gridRef} container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={partner.name}>
              <PartnerCard
                partner={partner}
                index={index}
                primaryColor={primaryColor}
                isGridInView={isGridInView}
              />
            </Grid>
          ))}
        </Grid>

        {/* Trust message */}
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
                lineHeight: 1.8,
                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                '& span': { color: primaryLight, fontWeight: 600 },
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