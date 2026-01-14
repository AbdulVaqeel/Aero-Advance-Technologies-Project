import React from 'react';
import { Container, Typography, Box, Grid, Card, Fade, Slide, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Translate } from '@mui/icons-material';

const AboutPage: React.FC = () => {
  const values = ['Innovation', 'Integrity', 'Excellence', 'Safety'];

  return (
    <>
      {/* Modern Hero Section with HD Flight Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '80vh', md: '100vh' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end', // Push content to bottom
          justifyContent: 'flex-start',
          backgroundImage: `url('https://images.stockcake.com/public/d/4/4/d44220a4-3789-4192-80a3-01af51aec9d2_large/sunset-military-jet-stockcake.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.6), 0 20px 60px rgba(0,0,0,0.5)', // Inner + outer shadow
        }}
      >
        {/* Stronger dark overlay (heavier at bottom for readability) */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            zIndex: -1,
          }}
        />

        {/* Content - Bottom Left */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pb: { xs: 6, md: 10 } }}>
          <Slide direction="up" in timeout={1200}>
            <Box sx={{ color: 'white', width: '100%' }}>
              {/* Clickable Breadcrumb */}
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  letterSpacing: '3px',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                <Link component={RouterLink} to="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  HOME
                </Link>
                {' > '}
                <Link component={RouterLink} to="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  ABOUT
                </Link>
              </Typography>

              {/* Main Title */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '3rem', md: '5.5rem' },
                  lineHeight: 1.1,
                  mb: 3,
                  textShadow: '0 4px 15px rgba(0,0,0,0.8)',
                }}
              >
                Who we are
              </Typography>

              {/* Description */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: '1.2rem', md: '1.8rem' },
                  lineHeight: 1.7,
                  opacity: 0.95,
                  // textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                  maxWidth: '100%',
                }}
              >
                We are dedicated to providing solutions that support our customers’ long-term 
                profitable growth. Our extensive experience and broad network of relationships 
                ensure the right product is delivered at the right time for your business.
              </Typography>
            </Box>
          </Slide>
        </Container>
      </Box>

      {/* Original Content Below (Unchanged) */}
      <Fade in timeout={1000}>
        <Container maxWidth="lg" sx={{ py: 8, mt:7 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              // fontWeight: 'bold',
              color: '#222',
              letterSpacing: '1px'
            }}
          >
            About Aero Advance Technologies
          </Typography>

    <Box sx={{ py: 10, textAlign: 'center', transform:'TranslateY(-90px)', position:'relative'}}>
    <Typography
    variant="h2"
    sx={{
      fontWeight: 'bold',
      color: '#146eedff',
      mb: 4,
      fontSize: { xs: '2.5rem', md: '4rem' },
      lineHeight: 1.2,
    }}
  >
    Accelerating Sustainable<br />Connections
  </Typography>

  {/* First Paragraph */}
  <Typography
    variant="body1"
    sx={{
      maxWidth: '900px',
      mx: 'auto',
      mb: 3,
      color: '#424242',
      fontSize: { xs: '1rem', md: '1.2rem' },
      lineHeight: 1.8,
    }}
  >
    We are passionate about regional connectivity and work to provide the best possible products, services and support to our customers. Since 1981 we have built and delivered aircraft to over 200 airlines, in 100 countries across the world, and supported these same airlines in providing essential links for passengers and communities.
  </Typography>

  {/* Second Paragraph */}
  <Typography
    variant="body1"
    sx={{
      maxWidth: '900px',
      mx: 'auto',
      color: '#424242',
      fontSize: { xs: '1rem', md: '1.2rem' },
      lineHeight: 1.8,
    }}
  >
    We supply essential regional connectivity for people, businesses and communities all over the world. Whether it is linking local business to capital cities, taking travellers deep into the heart of the world’s natural beauty or delivering vital medical aid and supplies to communities that cannot otherwise be accessed, our aircraft help bring people, ideas, goods and markets together.
  </Typography>
</Box>

<Grid container spacing={6} sx={{ my: 1, px: { xs: 2, md: 4 }, transform: 'translateY(-150px)' }} >
  {/* Left: Airbus */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        ml:-30,
        height: { xs: 350, md: 550 },
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .title': {
          color: '#d32f2f',
        },
      }}
    >
      <Box
        component="img"
        src="https://www.ainonline.com/cdn-cgi/image/width=1200,format=webp,quality=85/https://backend.ainonline.com/sites/default/files/styles/fpsc_1200x630/public/uploads/2017/06/566-airbus-formation-flight_web.jpg?h=bd39bd4d&itok=p6yzfNXc"
        alt="Airbus aircraft formation flight"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 30, 40, 0.85)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.8,
            maxWidth: '90%',
          }}
        >
          Airbus is a global leader in aeronautics, space and related services.
          In 2019, it generated revenues of 70 billion euros and employed a
          workforce of around 135,000. Airbus offers the most comprehensive range
          of passenger airliners and is also a European leader in defence and
          space systems.
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        className="title"
        variant="h4"
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          textShadow: '0 4px 10px rgba(0,0,0,0.7)',
          transition: 'color 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        Airbus
      </Typography>
    </Box>
  </Grid>

  {/* Right: Leonardo */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        height: { xs: 350, md: 550 },
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .title': {
          color: '#d32f2f',
        },
      }}
    >
      <Box
        component="img"
        src="https://www.aerotime.aero/images/2025/02/ATR-factory.JPG"
        alt="Leonardo ATR aircraft in front of hangar"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 30, 40, 0.85)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.8,
            maxWidth: '90%',
          }}
        >
          Leonardo is a global high-tech company and one of the key players
          worldwide in aerospace, defence and security. With headquarters in
          Italy and over 50,000 employees, Leonardo has a strong industrial
          presence across Europe and the USA.
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        className="title"
        variant="h4"
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          textShadow: '0 4px 10px rgba(0,0,0,0.7)',
          transition: 'color 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        Leonardo
      </Typography>
    </Box>
  </Grid>
</Grid>

<Grid container spacing={6} sx={{ my: 1, px: { xs: 2, md: 4 }, transform: 'translateY(-150px)' }} >
  {/* Left: Airbus */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        ml:-30,
        height: { xs: 350, md: 550 },
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .title': {
          color: '#d32f2f',
        },
      }}
    >
      <Box
        component="img"
        src="https://www.ainonline.com/cdn-cgi/image/width=1200,format=webp,quality=85/https://backend.ainonline.com/sites/default/files/styles/fpsc_1200x630/public/uploads/2017/06/566-airbus-formation-flight_web.jpg?h=bd39bd4d&itok=p6yzfNXc"
        alt="Airbus aircraft formation flight"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 30, 40, 0.85)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.8,
            maxWidth: '90%',
          }}
        >
          Airbus is a global leader in aeronautics, space and related services.
          In 2019, it generated revenues of 70 billion euros and employed a
          workforce of around 135,000. Airbus offers the most comprehensive range
          of passenger airliners and is also a European leader in defence and
          space systems.
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        className="title"
        variant="h4"
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          textShadow: '0 4px 10px rgba(0,0,0,0.7)',
          transition: 'color 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        Airbus
      </Typography>
    </Box>
  </Grid>

  {/* Right: Leonardo */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        height: { xs: 350, md: 550 },
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .title': {
          color: '#d32f2f',
        },
      }}
    >
      <Box
        component="img"
        src="https://www.aerotime.aero/images/2025/02/ATR-factory.JPG"
        alt="Leonardo ATR aircraft in front of hangar"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 30, 40, 0.85)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.8,
            maxWidth: '90%',
          }}
        >
          Leonardo is a global high-tech company and one of the key players
          worldwide in aerospace, defence and security. With headquarters in
          Italy and over 50,000 employees, Leonardo has a strong industrial
          presence across Europe and the USA.
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        className="title"
        variant="h4"
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          textShadow: '0 4px 10px rgba(0,0,0,0.7)',
          transition: 'color 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        Leonardo
      </Typography>
    </Box>
  </Grid>
</Grid>

<Grid container spacing={6} sx={{ my: 1, px: { xs: 2, md: 4 }, transform: 'translateY(-150px)' }} >
  {/* Left: Airbus */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        ml:-30,
        height: { xs: 350, md: 550 },
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .title': {
          color: '#d32f2f',
        },
      }}
    >
      <Box
        component="img"
        src="https://www.ainonline.com/cdn-cgi/image/width=1200,format=webp,quality=85/https://backend.ainonline.com/sites/default/files/styles/fpsc_1200x630/public/uploads/2017/06/566-airbus-formation-flight_web.jpg?h=bd39bd4d&itok=p6yzfNXc"
        alt="Airbus aircraft formation flight"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 30, 40, 0.85)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.8,
            maxWidth: '90%',
          }}
        >
          Airbus is a global leader in aeronautics, space and related services.
          In 2019, it generated revenues of 70 billion euros and employed a
          workforce of around 135,000. Airbus offers the most comprehensive range
          of passenger airliners and is also a European leader in defence and
          space systems.
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        className="title"
        variant="h4"
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          textShadow: '0 4px 10px rgba(0,0,0,0.7)',
          transition: 'color 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        Airbus
      </Typography>
    </Box>
  </Grid>

  {/* Right: Leonardo */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        height: { xs: 350, md: 550 },
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .title': {
          color: '#d32f2f',
        },
      }}
    >
      <Box
        component="img"
        src="https://www.aerotime.aero/images/2025/02/ATR-factory.JPG"
        alt="Leonardo ATR aircraft in front of hangar"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 30, 40, 0.85)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.8,
            maxWidth: '90%',
          }}
        >
          Leonardo is a global high-tech company and one of the key players
          worldwide in aerospace, defence and security. With headquarters in
          Italy and over 50,000 employees, Leonardo has a strong industrial
          presence across Europe and the USA.
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        className="title"
        variant="h4"
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          textShadow: '0 4px 10px rgba(0,0,0,0.7)',
          transition: 'color 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        Leonardo
      </Typography>
    </Box>
  </Grid>
</Grid>

<Grid container spacing={6} sx={{ my: 1, px: { xs: 2, md: 4 }, transform: 'translateY(-150px)' }} >
  {/* Left: Airbus */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        ml:-30,
        height: { xs: 350, md: 550 },
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .title': {
          color: '#d32f2f',
        },
      }}
    >
      <Box
        component="img"
        src="https://www.ainonline.com/cdn-cgi/image/width=1200,format=webp,quality=85/https://backend.ainonline.com/sites/default/files/styles/fpsc_1200x630/public/uploads/2017/06/566-airbus-formation-flight_web.jpg?h=bd39bd4d&itok=p6yzfNXc"
        alt="Airbus aircraft formation flight"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 30, 40, 0.85)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.8,
            maxWidth: '90%',
          }}
        >
          Airbus is a global leader in aeronautics, space and related services.
          In 2019, it generated revenues of 70 billion euros and employed a
          workforce of around 135,000. Airbus offers the most comprehensive range
          of passenger airliners and is also a European leader in defence and
          space systems.
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        className="title"
        variant="h4"
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          textShadow: '0 4px 10px rgba(0,0,0,0.7)',
          transition: 'color 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        Airbus
      </Typography>
    </Box>
  </Grid>

  {/* Right: Leonardo */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: 'relative',
        width: '150%',
        height: { xs: 350, md: 550 },
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        '&:hover .overlay': {
          opacity: 1,
        },
        '&:hover .title': {
          color: '#d32f2f',
        },
      }}
    >
      <Box
        component="img"
        src="https://www.aerotime.aero/images/2025/02/ATR-factory.JPG"
        alt="Leonardo ATR aircraft in front of hangar"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 30, 40, 0.85)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.3rem' },
            lineHeight: 1.8,
            maxWidth: '90%',
          }}
        >
          Leonardo is a global high-tech company and one of the key players
          worldwide in aerospace, defence and security. With headquarters in
          Italy and over 50,000 employees, Leonardo has a strong industrial
          presence across Europe and the USA.
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        className="title"
        variant="h4"
        sx={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '4rem' },
          textShadow: '0 4px 10px rgba(0,0,0,0.7)',
          transition: 'color 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        Leonardo
      </Typography>
    </Box>
  </Grid>
</Grid>



          {/* Story + Timeline Section */}
          <Grid container spacing={5} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Slide direction="right" in timeout={1000}>
                <Box>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#667eea' }}>
                    Our Successful Story
                  </Typography>
                  <Typography paragraph sx={{ color: '#555', lineHeight: 1.9, fontSize: '1.05rem' }}>
                    Founded in 1995, SkyTech Aviation has been at the forefront of aviation excellence for over 25 years. We started with a single aircraft and a vision to revolutionize air travel and aircraft services.
                  </Typography>
                  <Typography paragraph sx={{ color: '#555', lineHeight: 1.9 }}>
                    Today, we operate a fleet of 50+ aircraft and serve clients worldwide with comprehensive aviation solutions including charter services, maintenance, and consulting.
                  </Typography>
                  <Typography paragraph sx={{ color: '#555', lineHeight: 1.9 }}>
                    Our commitment to innovation and safety has made us a trusted partner for businesses, government agencies, and individuals seeking exceptional aviation services.
                  </Typography>
                </Box>
              </Slide>
            </Grid>

            <Grid item xs={12} md={6}>
              <Slide direction="left" in timeout={1200}>
                <Box
                  sx={{
                    height: '380px',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                    backgroundImage: `url('/Gulfair_Parts.avif')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Slide>
            </Grid>
          </Grid>

          {/* Mission & Vision, Core Values, Stats remain exactly the same */}
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 5, bgcolor: '#f8f9fa', height: '100%', borderRadius: 3, boxShadow: 3, '&:hover': { transform: 'translateY(-8px)', transition: '0.4s' } }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#667eea' }}>Our Mission</Typography>
                  <Typography sx={{ color: '#444', lineHeight: 1.9 }}>
                    To provide world-class aviation services that exceed expectations through innovation, dedication, and an unwavering commitment to safety and customer satisfaction.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 5, bgcolor: '#f8f9fa', height: '100%', borderRadius: 3, boxShadow: 3, '&:hover': { transform: 'translateY(-8px)', transition: '0.4s' } }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#667eea' }}>Our Vision</Typography>
                  <Typography sx={{ color: '#444', lineHeight: 1.9 }}>
                    To be the global leader in aviation services, recognized for operational excellence, technological innovation, and creating lasting value for our clients and stakeholders.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: '#222' }}>Our Core Values</Typography>
            <Grid container spacing={3}>
              {values.map((value, idx) => (
                <Grid item xs={6} md={3} key={idx}>
                  <Slide direction="up" in timeout={1000 + idx * 200}>
                    <Card
                      sx={{
                        p: 4,
                        bgcolor: '#667eea',
                        color: 'white',
                        borderRadius: 3,
                        transition: 'all 0.4s',
                        '&:hover': { bgcolor: '#5a67d8', transform: 'scale(1.08)', boxShadow: '0 15px 30px rgba(102,126,234,0.4)' }
                      }}
                    >
                      <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                        {value}
                      </Typography>
                    </Card>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Grid container spacing={4}>
              {[
                { number: '50+', label: 'Aircraft Fleet' },
                { number: '25+', label: 'Years Experience' },
                { number: '10K+', label: 'Happy Clients' },
                { number: '100+', label: 'Expert Staff' }
              ].map((stat, idx) => (
                <Grid item xs={6} md={3} key={idx}>
                  <Fade in timeout={1400 + idx * 300}>
                    <Box>
                      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#667eea' }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#555', mt: 1 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Fade>
    </>
  );
};

export default AboutPage;