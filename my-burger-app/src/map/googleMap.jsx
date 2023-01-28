import { useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

import "./style.css";

const API = "AIzaSyCFwsubpc23kmPRyod5Sdhaw0AjysK2bdw";
const locations = [
  {
    id: 1,
    text: "Extreme Retro Burgers 'Arena City', Velyka Vasylkivska St, 5",
    position: { lat: 50.44193553497491, lng: 30.520792884420192 },
  },
  {
    id: 2,
    text: "Extreme Retro Burgers Sichovykh Stril'tsiv St, 13",
    position: { lat: 48.91989178094135, lng: 24.707741740182474 },
  },
  {
    id: 3,
    text: "Extreme Retro Burgers Volodymyra Velykoho St, 14А",
    position: { lat: 49.812163728552896, lng: 24.00434655556012 },
  },
];

export default function MyGoogleMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({lat:50.013330028298064, lng:32.11143592292393}), []);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return (
    <GoogleMap
      zoom={6}
      center={center}
      mapContainerClassName="first-map"
      onClick={() => setActiveMarker(null)}
    >
      {locations.map(({ id, text, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className="info">{text}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}
