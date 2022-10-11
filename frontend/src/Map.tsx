import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Button from "@mui/material/Button";
import { GOOGLE_MAP_API_KEY } from "./config";
import "./App.css";
import Modal from "./Modal";
import { TextField } from "@mui/material";

function Map() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

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
      <Modal onClose={handleModalClose} open={open}>
        <h2 className="h2-submit">Submit a spot!</h2>
        <div className="form">
          <div className="text-field-form">
            <TextField
              id="outlined-textarea"
              label="Street Address"
              placeholder="Street Address"
            />
          </div>
          <div className="text-field-form">
            <TextField
              id="outlined-textarea"
              label="Film Title"
              placeholder="Film Title"
            />
          </div>
        </div>
        <div className="button-submit">
          <Button variant="contained" onClick={handleModalClose}>
            Submit
          </Button>
        </div>
      </Modal>
      <div className="tabs">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#5a5a5a",
            "&:hover": {
              backgroundColor: "#D9DDDC",
            },
          }}
          onClick={handleModalOpen}
        >
          Add A Spot
        </Button>
      </div>
      <div>
        <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13.5}
            center={defaultCenter}
          />
        </LoadScript>
      </div>
    </div>
  );
}
export default Map;
