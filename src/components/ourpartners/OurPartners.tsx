// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Fade,
//   Zoom,
//   useTheme,
//   alpha,
// } from '@mui/material';
// import { motion } from 'framer-motion';

// // You can replace these with your real partner logos
// const partners = [
//   {
//     name: 'Gulfstream',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gulfstream_Aerospace_logo.svg/512px-Gulfstream_Aerospace_logo.svg.png',
//     description: 'World leader in business jet manufacturing',
//     category: 'Aircraft Manufacturer',
//   },
//   {
//     name: 'Bombardier',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bombardier_logo_2022.svg/512px-Bombardier_logo_2022.svg.png',
//     description: 'Premium business and commercial aircraft',
//     category: 'Aircraft Manufacturer',
//   },
//   {
//     name: 'Dassault Falcon',
//     logo: 'https://www.dassault-aviation.com/wp-content/themes/dassault/img/logo-dassault-aviation.svg',
//     description: 'French excellence in business aviation',
//     category: 'Aircraft Manufacturer',
//   },
//   {
//     name: 'Honeywell',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Honeywell_Logo.svg/512px-Honeywell_Logo.svg.png',
//     description: 'Aviation electronics & auxiliary power units',
//     category: 'Avionics & Systems',
//   },
//   {
//     name: 'Rolls-Royce',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rolls-Royce_logo.svg/512px-Rolls-Royce_logo.svg.png',
//     description: 'World-class aircraft engines',
//     category: 'Engine Manufacturer',
//   },
//   {
//     name: 'Garmin',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Garmin_logo.svg/512px-Garmin_logo.svg.png',
//     description: 'Advanced navigation & communication systems',
//     category: 'Avionics',
//   },
//   {
//     name: 'Universal Avionics',
//     logo: 'https://www.uasc.com/images/logo.png',
//     description: 'Next-generation flight management systems',
//     category: 'Avionics',
//   },
//   {
//     name: 'Signature Flight Support',
//     logo: 'https://www.signatureflight.com/images/logo-signature.png',
//     description: 'Global network of FBO services',
//     category: 'Ground Services',
//   },
// ];

// const OurPartners = () => {
//   const theme = useTheme();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <Box
//       component="section"
//       sx={{
//         py: { xs: 6, md: 10 },
//         background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.dark, 0.08)} 100%)`,
//         overflow: 'hidden',
//         position: 'relative',
//       }}
//     >
//       {/* Decorative background elements */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '100%',
//           background: `radial-gradient(circle at 20% 30%, ${alpha(theme.palette.primary.light, 0.12)} 0%, transparent 40%)`,
//           pointerEvents: 'none',
//         }}
//       />

//       <Container maxWidth="lg">
//         {/* Header */}
//         <Box textAlign="center" mb={10}>
//           <Fade in timeout={800}>
//             <Typography
//               variant="overline"
//               color="primary"
//               sx={{
//                 letterSpacing: 3,
//                 fontWeight: 600,
//                 fontSize: '3rem',
//                 fontFamily: 'Montserrat, "DM Sans", Roboto, sans-serif',
//                 mb: 2,
//                 display: 'block',
//               }}
//             >
//               TRUSTED COLLABORATIONS
//             </Typography>
//           </Fade>

//           <Zoom in timeout={900}>
//             <Typography
//               variant="h3"
//               component={motion.h3}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               fontWeight="bold"
//               gutterBottom
//             >
//               Our Strategic Partners
//             </Typography>
//           </Zoom>

//           <Typography
//             variant="h6"
//             color="text.secondary"
//             sx={{
//               maxWidth: 720,
//               mx: 'auto',
//               mt: 3,
//             }}
//             component={motion.p}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             We collaborate with the industry's most respected manufacturers, technology providers
//             and service companies to deliver exceptional aviation solutions.
//           </Typography>
//         </Box>

//         {/* Partners Grid */}
//         <Grid
//           container
//           spacing={4}
//           component={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {partners.map((partner) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               key={partner.name}
//               component={motion.div}
//               variants={itemVariants}
//             >
//               <Card
//                 component={motion.div}
//                 whileHover={{
//                   y: -12,
//                   scale: 1.04,
//                   transition: { duration: 0.4 },
//                 }}
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
//                   transition: 'all 0.4s ease',
//                   position: 'relative',
//                   background: 'rgba(255,255,255,0.9)',
//                   backdropFilter: 'blur(8px)',
//                   border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
//                   '&::before': {
//                     content: '""',
//                     position: 'absolute',
//                     inset: 0,
//                     background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.06)} 0%, transparent 60%)`,
//                     opacity: 0,
//                     transition: 'opacity 0.5s ease',
//                   },
//                   '&:hover::before': {
//                     opacity: 1,
//                   },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     p: 4,
//                     pb: 3,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     flexGrow: 1,
//                     textAlign: 'center',
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={partner.logo}
//                     alt={`${partner.name} logo`}
//                     sx={{
//                       height: 90,
//                       maxWidth: '100%',
//                       objectFit: 'contain',
//                       mb: 3,
//                       filter: 'grayscale(0.7) contrast(0.9)',
//                       transition: 'all 0.4s ease',
//                       '.MuiCard-root:hover &': {
//                         filter: 'grayscale(0) contrast(1.05)',
//                         transform: 'scale(1.08)',
//                       },
//                     }}
//                   />

//                   <Typography
//                     variant="h5"
//                     component="h3"
//                     fontWeight="bold"
//                     gutterBottom
//                     sx={{
//                       minHeight: 64,
//                       display: 'flex',
//                       alignItems: 'center',
//                     }}
//                   >
//                     {partner.name}
//                   </Typography>

//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{
//                       mb: 2,
//                       fontWeight: 500,
//                       color: theme.palette.primary.main,
//                     }}
//                   >
//                     {partner.category}
//                   </Typography>

//                   <Typography variant="body2" color="text.secondary" sx={{ mt: 'auto' }}>
//                     {partner.description}
//                   </Typography>
//                 </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Trust message */}
//         <Box textAlign="center" mt={12}>
//           <Typography
//             variant="body1"
//             color="text.secondary"
//             sx={{
//               fontStyle: 'italic',
//               maxWidth: 760,
//               mx: 'auto',
//               '& span': {
//                 color: theme.palette.primary.main,
//                 fontWeight: 600,
//               },
//             }}
//           >
//             "Strong partnerships are the foundation of exceptional service in aviation.
//             <br />
//             We are proud to work with the <span>best in class</span> across the industry."
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default OurPartners;