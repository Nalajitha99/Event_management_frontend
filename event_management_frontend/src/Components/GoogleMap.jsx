import React, { useEffect, useState } from "react";
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

    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error("Error getting location", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyB5Z65P9h9gbY-q_t83oKHmMUmj0aPmigg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
        {userLocation && <Marker position={userLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
