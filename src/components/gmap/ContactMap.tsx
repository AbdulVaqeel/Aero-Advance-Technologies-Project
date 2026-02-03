import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

import {
  Box,
  Paper,
  Typography,
  useTheme,
  CircularProgress,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ContactMapProps {
  lat: number;
  lng: number;
  address: string;
  zoom?: number;
  height?: { xs: number | string; md: number | string };
  markerColor?: 'primary' | 'error' | 'secondary' | 'success';
}

interface MarkerData {
  position: [number, number];
  address: string;
  isLoading: boolean;
  isDefault: boolean;
}

// Component to handle map clicks
function LocationMarker({ 
  onLocationClick 
}: { 
  onLocationClick: (lat: number, lng: number) => void 
}) {
  useMapEvents({
    click(e) {
      onLocationClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function ContactMap({
  lat,
  lng,
  address,
  zoom = 15,
  height = { xs: 350, md: 600 },
  markerColor = 'primary',
}: ContactMapProps) {
  const theme = useTheme();
  const defaultPosition: [number, number] = [lat, lng];
  
  const [markers, setMarkers] = useState<MarkerData[]>([
    {
      position: defaultPosition,
      address: address,
      isLoading: false,
      isDefault: true,
    }
  ]);

  // Custom marker icons
  const defaultIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const clickedIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Reverse geocoding function using Nominatim (OpenStreetMap)
  const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
        {
          headers: {
            'Accept-Language': 'en',
          }
        }
      );
      const data = await response.json();
      
      if (data.display_name) {
        return data.display_name;
      } else {
        return `Location: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      return `Location: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
    }
  };

  // Handle map click
  const handleLocationClick = async (latitude: number, longitude: number) => {
    const newPosition: [number, number] = [latitude, longitude];
    
    // Add marker with loading state
    const newMarker: MarkerData = {
      position: newPosition,
      address: 'Loading address...',
      isLoading: true,
      isDefault: false,
    };
    
    setMarkers(prev => [...prev, newMarker]);

    // Fetch address
    const fetchedAddress = await getAddressFromCoordinates(latitude, longitude);
    
    // Update marker with fetched address
    setMarkers(prev => 
      prev.map((marker, idx) => 
        idx === prev.length - 1 
          ? { ...marker, address: fetchedAddress, isLoading: false }
          : marker
      )
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 0,
        overflow: 'hidden',
        height: { xs: height.xs, md: height.md },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: '100%',
          '& .leaflet-container': {
            height: '100% !important',
            width: '100% !important',
            fontFamily: theme.typography.fontFamily,
            cursor: 'crosshair',
          },
          '& .leaflet-popup-content-wrapper': {
            borderRadius: '12px',
            boxShadow: '0 3px 14px rgba(0,0,0,0.4)',
          },
          '& .leaflet-popup-tip': {
            display: 'none',
          },
        }}
      >
        <MapContainer
          center={defaultPosition}
          zoom={zoom}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <LocationMarker onLocationClick={handleLocationClick} />
          
          {markers.map((marker, idx) => (
            <Marker 
              key={idx} 
              position={marker.position}
              icon={marker.isDefault ? defaultIcon : clickedIcon}
            >
              <Popup>
                <Box sx={{ minWidth: 200, maxWidth: 300, p: 1 }}>
                  <Typography 
                    variant="subtitle1" 
                    fontWeight="bold" 
                    gutterBottom
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      color: marker.isDefault ? '#d32f2f' : '#1976d2'
                    }}
                  >
                    <LocationOnIcon
                      sx={{ 
                        mr: 1, 
                        fontSize: '1.5rem',
                        color: marker.isDefault ? '#d32f2f' : '#1976d2'
                      }}
                    />
                    {marker.isDefault ? 'Your Location' : 'Selected Location'}
                  </Typography>
                  
                  {marker.isLoading ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <CircularProgress size={16} sx={{ mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        Loading address...
                      </Typography>
                    </Box>
                  ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {marker.address}
                    </Typography>
                  )}
                </Box>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Paper>
  );
}