// import React from 'react';
// import { Container, Typography, Grid, Card, CardContent, Box, Button, Fade, Slide } from '@mui/material';


// const ServicesPage = () => {
//   const navigate = useNavigate();

//   const services = [
//     {
//       title: 'Private Charter',
//       desc: 'Luxury private jet charters tailored to your schedule. Experience personalized service with our premium fleet, offering comfort, privacy, and flexibility for business or leisure travel.',
//       gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
//     },
//     {
//       title: 'Aircraft Maintenance',
//       desc: 'Comprehensive maintenance and repair services by certified technicians. From routine inspections to major overhauls, we ensure your aircraft meets the highest safety and performance standards.',
//       gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
//     },
//     {
//       title: 'Flight Training',
//       desc: 'Professional pilot training programs with experienced instructors. FAA-certified courses for private, commercial, and instrument ratings using modern simulators and aircraft.',
//       gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
//     },
//     {
//       title: 'Aircraft Management',
//       desc: 'Full-service aircraft management solutions for owners. We handle scheduling, maintenance coordination, crew management, and regulatory compliance to maximize your investment.',
//       gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
//     },
//     {
//       title: 'Cargo Services',
//       desc: 'Reliable air cargo solutions for time-sensitive shipments. We provide secure, efficient freight services with real-time tracking and specialized handling for various cargo types.',
//       gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
//     },
//     {
//       title: 'Aviation Consulting',
//       desc: 'Expert consulting services for aviation businesses and operators. Strategic planning, regulatory compliance, safety management systems, and operational efficiency improvements.',
//       gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
//     }
//   ];

//   return (
//     <Fade in timeout={1000}>
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Typography variant="h3" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: '#333' }}>
//           Our Services
//         </Typography>
//         <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: '#666' }}>
//           Comprehensive aviation solutions tailored to your needs
//         </Typography>

//         <Grid container spacing={4}>
//           {services.map((service, idx) => (
//             <Grid item xs={12} md={6} key={idx}>
//               <Slide direction="up" in timeout={800 + idx * 150}>
//                 <Card sx={{ 
//                   height: '100%',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': { 
//                     transform: 'translateY(-10px)',
//                     boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
//                   }
//                 }}>
//                   <Box sx={{ 
//                     height: '200px', 
//                     background: service.gradient,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     position: 'relative',
//                     overflow: 'hidden'
//                   }}>
//                     <Typography variant="h4" sx={{ 
//                       color: 'white', 
//                       fontWeight: 'bold',
//                       zIndex: 1,
//                       textAlign: 'center',
//                       px: 2
//                     }}>
//                       {service.title}
//                     </Typography>
//                     <Box sx={{
//                       position: 'absolute',
//                       width: '100%',
//                       height: '100%',
//                       background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
//                     }} />
//                   </Box>
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography variant="body1" sx={{ mb: 2, color: '#555', lineHeight: 1.7 }}>
//                       {service.desc}
//                     </Typography>
//                     <Button 
//                       variant="outlined" 
//                       sx={{ 
//                         mt: 1,
//                         borderColor: '#667eea',
//                         color: '#667eea',
//                         '&:hover': {
//                           borderColor: '#764ba2',
//                           bgcolor: 'rgba(102, 126, 234, 0.1)'
//                         }
//                       }}
//                       onClick={() => setCurrentPage('services')}
//                     >
//                       Learn More
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Slide>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Additional Service Images */}
//         <Box sx={{ mt: 8 }}>
//           <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold', color: '#333' }}>
//             Service Excellence
//           </Typography>
//           <Grid container spacing={3}>
//             {[
//               { color: '#ff6b6b', title: 'Certified Mechanics' },
//               { color: '#4ecdc4', title: 'Modern Technology' },
//               { color: '#ffe66d', title: '24/7 Support' }
//             ].map((item, idx) => (
//               <Grid item xs={12} md={4} key={idx}>
//                 <Fade in timeout={1500 + idx * 300}>
//                   <Box sx={{ 
//                     height: '200px', 
//                     bgcolor: item.color,
//                     borderRadius: 2,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     transition: 'transform 0.3s',
//                     cursor: 'pointer',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&:hover': { 
//                       transform: 'scale(1.05)'
//                     }
//                   }}>
//                     <Typography variant="h5" sx={{ 
//                       color: 'white', 
//                       fontWeight: 'bold',
//                       zIndex: 1,
//                       textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
//                     }}>
//                       {item.title}
//                     </Typography>
//                     <Box sx={{
//                       position: 'absolute',
//                       width: '200%',
//                       height: '200%',
//                       background: 'radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 10%)',
//                       backgroundSize: '20px 20px'
//                     }} />
//                   </Box>
//                 </Fade>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Call to Action */}
//         <Box sx={{ 
//           mt: 8, 
//           p: 6, 
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           borderRadius: 2,
//           textAlign: 'center',
//           color: 'white'
//         }}>
//           <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
//             Ready to Elevate Your Aviation Experience?
//           </Typography>
//           <Typography variant="h6" sx={{ mb: 3 }}>
//             Contact us today to discuss your aviation needs
//           </Typography>
//           <Button 
//             variant="contained" 
//             size="large"
//             sx={{ 
//               bgcolor: 'white', 
//               color: '#667eea',
//               px: 4,
//               py: 1.5,
//               fontSize: '1.1rem',
//               '&:hover': { 
//                 bgcolor: '#f0f0f0',
//                 transform: 'scale(1.05)'
//               }
//             }}
//             onClick={() => setCurrentPage('contact')}
//           >
//             Get In Touch
//           </Button>
//         </Box>
//       </Container>
//     </Fade>
//   );
// };

// export default ServicesPage;

import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Button, 
  Fade, 
  Slide 
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // This is correct!

const ServicesPage = () => {
  const navigate = useNavigate(); // Works perfectly inside routed components

  const services = [
    {
      title: 'Private Charter',
      desc: 'Luxury private jet charters tailored to your schedule. Experience personalized service with our premium fleet, offering comfort, privacy, and flexibility for business or leisure travel.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Aircraft Maintenance',
      desc: 'Comprehensive maintenance and repair services by certified technicians. From routine inspections to major overhauls, we ensure your aircraft meets the highest safety and performance standards.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Flight Training',
      desc: 'Professional pilot training programs with experienced instructors. FAA-certified courses for private, commercial, and instrument ratings using modern simulators and aircraft.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Aircraft Management',
      desc: 'Full-service aircraft management solutions for owners. We handle scheduling, maintenance coordination, crew management, and regulatory compliance to maximize your investment.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Cargo Services',
      desc: 'Reliable air cargo solutions for time-sensitive shipments. We provide secure, efficient freight services with real-time tracking and specialized handling for various cargo types.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Aviation Consulting',
      desc: 'Expert consulting services for aviation businesses and operators. Strategic planning, regulatory compliance, safety management systems, and operational efficiency improvements.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  return (
    <Fade in timeout={1000}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: '#333' }}>
          Our Services
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: '#666' }}>
          Comprehensive aviation solutions tailored to your needs
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Slide direction="up" in timeout={800 + idx * 150}>
                <Card sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': { 
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                  }
                }}>
                  <Box sx={{ 
                    height: '200px', 
                    background: service.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <Typography variant="h4" sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      zIndex: 1,
                      textAlign: 'center',
                      px: 2
                    }}>
                      {service.title}
                    </Typography>
                    <Box sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
                    }} />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="body1" sx={{ mb: 2, color: '#555', lineHeight: 1.7 }}>
                      {service.desc}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        mt: 1,
                        borderColor: '#667eea',
                        color: '#667eea',
                        '&:hover': {
                          borderColor: '#764ba2',
                          bgcolor: 'rgba(102, 126, 234, 0.1)'
                        }
                      }}
                      onClick={() => navigate('/services')}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        {/* Service Excellence Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold', color: '#333' }}>
            Service Excellence
          </Typography>
          <Grid container spacing={3}>
            {[
              { color: '#ff6b6b', title: 'Certified Mechanics' },
              { color: '#4ecdc4', title: 'Modern Technology' },
              { color: '#ffe66d', title: '24/7 Support' }
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Fade in timeout={1500 + idx * 300}>
                  <Box sx={{ 
                    height: '200px', 
                    bgcolor: item.color,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': { 
                      transform: 'scale(1.05)'
                    }
                  }}>
                    <Typography variant="h5" sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      zIndex: 1,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ 
          mt: 8, 
          p: 6, 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 2,
          textAlign: 'center',
          color: 'white'
        }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            Ready to Elevate Your Aviation Experience?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Contact us today to discuss your aviation needs
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: 'white', 
              color: '#667eea',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': { 
                bgcolor: '#f0f0f0',
                transform: 'scale(1.05)'
              }
            }}
            onClick={() => navigate('/contact us')}
          >
            Get In Touch
          </Button>
        </Box>
      </Container>
    </Fade>
  );
};

export default ServicesPage;