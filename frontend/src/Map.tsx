import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Button from "@mui/material/Button";
import { GOOGLE_MAP_API_KEY } from "./config";
import "./App.css";

function Map() {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div>
      <div className="tabs">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#5a5a5a",
          }}
        >
          Add A Spot
        </Button>
      </div>
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13.5}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  );
}
export default Map;
