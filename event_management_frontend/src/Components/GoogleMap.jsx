import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "60%",
  height: "500px",
  marginLeft: "20px",
  marginTop: "20px"
};

const center = {
    lat: 6.9271,
    lng: 79.8612,
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
