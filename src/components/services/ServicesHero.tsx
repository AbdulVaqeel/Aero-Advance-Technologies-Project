// // import React from 'react';
// // import { Box, Container, Typography, Slide } from '@mui/material';
// // import { useTranslation } from 'react-i18next';

// // const ServicesHero: React.FC = () => {
// //   const { t, i18n } = useTranslation();

// //   const isArabic = i18n.language === 'ar';

// //   return (
// //     <Box
// //       sx={{
// //         position: 'relative',
// //         height: { xs: 'auto', md: '650px' },
// //         backgroundImage: 'url(https://images.pexels.com/photos/16926516/pexels-photo-16926516.jpeg)',
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         display: 'flex',
// //         alignItems: 'center',
// //         py: { xs: 12, md: 0 },
// //         direction: isArabic ? 'rtl' : 'ltr',
// //         '&::before': {
// //           content: '""',
// //           position: 'absolute',
// //           top: 0,
// //           left: 0,
// //           right: 0,
// //           bottom: 0,
// //           // bgcolor: 'rgba(50, 27, 1, 0.75)',
// //         },
// //       }}
// //     >
// //       <Slide direction="up" in timeout={1200}>
// //         <Container
// //           maxWidth="lg"
// //           sx={{
// //             position: 'relative',
// //             zIndex: 1,
// //             pb: { xs: 6, md: 10 },
// //             textAlign: isArabic ? 'right' : 'left',
// //           }}
// //         >
// //           <Typography
// //             variant="h2"
// //             sx={{
// //               fontWeight: 'bold',
// //               fontSize: { xs: '3rem', md: '5.5rem' },
// //               lineHeight: isArabic ? 1.3 : 1.1,
// //               mt: 40,
// //               color: 'white',
// //             }}
// //           >
// //             {t('services.hero.title')}
// //           </Typography>

// //           <Typography
// //             variant="h5"
// //             sx={{
// //               fontWeight: 400,
// //               fontSize: { xs: '1.2rem', md: '1.8rem' },
// //               lineHeight: isArabic ? 2 : 1.7,
// //               maxWidth: '800px',
// //               color: 'white',
// //               ml: isArabic ? 'auto' : 0,
// //               mr: isArabic ? 0 : 'auto',
// //             }}
// //           >
// //             {t('services.hero.subtitle')}
// //           </Typography>
// //         </Container>
// //       </Slide>
// //     </Box>
// //   );
// // };

// // export default ServicesHero;


// import React from 'react';
// import { Box, Container, Typography, Slide } from '@mui/material';
// import { useTranslation } from 'react-i18next';

// const ServicesHero: React.FC = () => {
//   const { t, i18n } = useTranslation();

//   const isArabic = i18n.language === 'ar';

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         minHeight: { xs: '60vh', md: '700px' },
//         display: 'flex',
//         alignItems: 'center',
//         overflow: 'hidden',
//         direction: isArabic ? 'rtl' : 'ltr',

//         backgroundImage:
//           'url(https://images.pexels.com/photos/16926516/pexels-photo-16926516.jpeg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',

//         '&::before': {
//   content: '""',
//   position: 'absolute',
//   inset: 0,
//   background:
//     'linear-gradient(to right, rgba(8,25,45,0.75), rgba(8,25,45,0.45), rgba(8,25,45,0.25))',
//   zIndex: 0,
// },
//       }}
//     >
//       <Slide direction="up" in timeout={1000}>
//         <Container
//           maxWidth="lg"
//           sx={{
//             position: 'relative',
//             zIndex: 2,
//             textAlign: isArabic ? 'right' : 'left',
//             py: { xs: 10, md: 12 },
//           }}
//         >
//           <Typography
//             variant="h1"
//             sx={{
//               fontWeight: 800,
//               fontFamily: '"Poppins", sans-serif',
//               color: '#fff',

//               fontSize: {
//                 xs: '2.6rem',
//                 sm: '3.3rem',
//                 md: '5rem',
//                 lg: '5.8rem',
//               },

//               lineHeight: 1.1,
//               letterSpacing: '-1px',

//               maxWidth: '900px',

//               textShadow:
//                 '0 4px 18px rgba(0,0,0,0.55)',

//               mb: 3,
//             }}
//           >
//             {t('services.hero.title')}
//           </Typography>

//           <Typography
//             sx={{
//               color: 'rgba(255,255,255,0.95)',

//               fontFamily: '"Poppins", sans-serif',
//               fontWeight: 400,

//               fontSize: {
//                 xs: '1.1rem',
//                 md: '1.45rem',
//               },

//               lineHeight: 1.8,

//               maxWidth: '720px',

//               textShadow:
//                 '0 2px 10px rgba(0,0,0,0.45)',
//             }}
//           >
//             {t('services.hero.subtitle')}
//           </Typography>
//         </Container>
//       </Slide>
//     </Box>
//   );
// };

// export default ServicesHero;




import React from 'react';
import { Box, Container, Typography, Slide } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ServicesHero: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 'auto', md: '650px' },
        backgroundImage:
          'url(products2.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 12, md: 0 },
        direction: isArabic ? 'rtl' : 'ltr',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.70), rgba(0,0,0,0.45), rgba(0,0,0,0.20))',
          zIndex: 0,
        },
      }}
    >
      <Slide direction="up" in timeout={1200}>
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            pb: { xs: 6, md: 10 },
            textAlign: isArabic ? 'right' : 'left',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', md: '5.5rem' },
              lineHeight: isArabic ? 1.3 : 1.1,
              mt: 40,
              color: '#fff',

              textShadow:
                '0 3px 8px rgba(0,0,0,0.7), 0 8px 20px rgba(0,0,0,0.5)',

              letterSpacing: '-0.5px',
            }}
          >
            {t('services.hero.title')}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              lineHeight: isArabic ? 2 : 1.7,
              maxWidth: '800px',
              color: 'rgba(255,255,255,0.98)',

              textShadow: '0 2px 8px rgba(0,0,0,0.65)',

              ml: isArabic ? 'auto' : 0,
              mr: isArabic ? 0 : 'auto',
            }}
          >
            {t('services.hero.subtitle')}
          </Typography>
        </Container>
      </Slide>
    </Box>
  );
};

export default ServicesHero;