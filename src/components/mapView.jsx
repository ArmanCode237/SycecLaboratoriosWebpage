// src/components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrección de íconos para Leaflet + Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapView = () => {
  return (
    <MapContainer
      center={[18.6486606, -91.778864]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: '300px', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[18.6486606, -91.778864]}>
        <Popup>
          Calle Santo Domingo No. 102<br />
          Residencial Mediterráneo, Cd. del Carmen, Campeche
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
