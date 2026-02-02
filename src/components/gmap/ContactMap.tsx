import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

import {
  Box,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ContactMapProps {
  lat: number;
  lng: number;
  address: string;
  zoom?: number;
  height?: { xs: number | string; md: number | string };  // support px, vh, etc.
  markerColor?: 'primary' | 'error' | 'secondary' | 'success';
}

export default function ContactMap({
  lat,
  lng,
  address,
  zoom = 15,
  height = { xs: 340, md: 500 },  // ← feel free to increase md value here
  markerColor = 'primary',
}: ContactMapProps) {
  const theme = useTheme();
  const position: [number, number] = [lat, lng];

  useEffect(() => {
    // Trigger resize more reliably
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        height: '100%',        
        width: '200%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flex: 1,              
          minHeight: 500,        
          '& .leaflet-container': {
            height: '200% !important',
            width: '200% !important',
            fontFamily: theme.typography.fontFamily,
          },
        }}
      >
        <MapContainer
          center={position}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup closeButton={false}>
              <Box sx={{ minWidth: 180, p: 0.5 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  <LocationOnIcon
                    color={markerColor}
                    sx={{ verticalAlign: 'middle', mr: 0.8, fontSize: '1.4rem' }}
                  />
                  Our Location
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {address}
                </Typography>
              </Box>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Paper>
  );
}