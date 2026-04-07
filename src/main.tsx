import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './rtl.css';
import './App.css';
import App from './App';
import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);