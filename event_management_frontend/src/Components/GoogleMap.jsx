import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  marginLeft: "20px",
  marginTop: "20px"
};

// Default center point (Colombo, Sri Lanka)
const defaultCenter = {
    lat: 6.9271,
    lng: 79.8612,
};

const GoogleMaps = ({ venues = [] }) => {
    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                    setLoading(false);
                },
                (error) => {
                    console.error("Error getting location", error);
                    setLoading(false);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            setLoading(false);
        }
    }, []);

    // Determine the map center based on user location
    const center = userLocation ? userLocation : defaultCenter;

    return (
        <LoadScript googleMapsApiKey="AIzaSyB5Z65P9h9gbY-q_t83oKHmMUmj0aPmigg">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                <Marker position={defaultCenter} title="Default Center" />
                {userLocation && <Marker position={userLocation} title="Your Location" />}
                
                {/* Render markers for each venue */}
                {venues.map((venue, index) => (
                    <Marker 
                        key={index} 
                        position={{ lat: venue.latitude, lng: venue.longitude }} 
                        title={venue.name} // Assuming venue has a name property
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMaps;
