// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { useTranslation } from 'react-i18next';

// interface HeroSectionProps {
//   navigate: (path: string) => void;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ navigate }) => {
//   const { t, i18n } = useTranslation();

//   const isArabic = i18n.language === 'ar';

//   return (
//     <Box
//       sx={{
//         height: { xs: '70vh', md: '90vh' },
//         minHeight: '800px',
//         position: 'relative',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         color: 'white',
//         overflowX: 'hidden',
//         overflowY: 'auto',
//         width: '100%',
//         direction: isArabic ? 'rtl' : 'ltr',
//       }}
//     >
//       <Box
//         component="video"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         src="https://www.pexels.com/download/video/34003527/"
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           filter: 'brightness(1.2)',
//           zIndex: 0,
//         }}
//       />

//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
//           zIndex: 1,
//         }}
//       />

//       <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
//         <Typography
//           variant="h2"
//           sx={{
//             fontWeight: 800,
//             fontSize: { xs: '2.8rem', sm: '3.5rem', md: '6rem' },
//             lineHeight: 1.1,
//             textShadow: '0 4px 20px rgba(0,0,0,0.9)',
//             hyphens: 'auto',
//             maxWidth: '100%',
//             mx: 'auto',
//           }}
//         >
//           {t('home.hero.title')}
//         </Typography>

//         <Typography
//           variant="h5"
//           sx={{
//             mb: 4,
//             textShadow: '0 2px 10px rgba(0,0,0,0.9)',
//             fontWeight: 500,
//           }}
//         >
//           {t('home.hero.subtitle')}
//         </Typography>

//         <Button
//           variant="contained"
//           size="large"
//           onClick={() => navigate('/contact')}
//           sx={{
//             bgcolor: 'white',
//             color: '#0066cc',
//             fontWeight: 'bold',
//             px: 6,
//             py: 2,
//             mt: 6,
//             borderRadius: '50px',
//             fontSize: '1.3rem',
//             boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
//             transition: 'all 0.3s ease',
//             '&:hover': {
//               transform: 'translateY(-5px)',
//               boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
//               bgcolor: 'white',
//             },
//           }}
//         >
//           {t('home.hero.cta')}
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;



import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  navigate: (path: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ navigate }) => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <Box
      sx={{
        height: { xs: '70vh', md: '90vh' },
        minHeight: '800px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        overflowX: 'hidden',
        overflowY: 'auto',
        width: '100%',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="homepage_flight2.mp4"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(1.2)',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
          zIndex: 1,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2.8rem', sm: '3.5rem', md: '6rem' },
            lineHeight: 1.1,
            textShadow: '0 4px 20px rgba(0,0,0,0.9)',
            hyphens: 'auto',
            maxWidth: '100%',
            mx: 'auto',
          }}
        >
          {t('home.hero.title')}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 4,
            textShadow: '0 2px 10px rgba(0,0,0,0.9)',
            fontWeight: 500,
          }}
        >
          {t('home.hero.subtitle')}
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/contact')}
          sx={{
            bgcolor: 'white',
            color: '#0066cc',
            fontWeight: 'bold',
            px: 6,
            py: 2,
            mt: 6,
            borderRadius: '50px',
            fontSize: '1.3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
              bgcolor: 'white',
            },
          }}
        >
          {t('home.hero.cta')}
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;