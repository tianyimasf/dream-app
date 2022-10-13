import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Button from "@mui/material/Button";
import { GOOGLE_MAP_API_KEY } from "./config";
import Modal from "./Modal";
import { TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import "./App.css";

function Map() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [timeStampFrom, setTimeStampFrom] = React.useState<Dayjs | null>(
    dayjs("2022-04-07")
  );
  const [timeStampTo, setTimeStampTo] = React.useState<Dayjs | null>(
    dayjs("2022-04-07")
  );

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
        <h3 className="h3-submit">Submit a spot!</h3>
        <div className="form">
          <div className="text-field-form">
            <p className="form-label">Street Address: </p>
            <TextField
              id="outlined-textarea"
              label="Street Address"
              size="small"
              placeholder="Street Address"
            />
          </div>
          <div className="text-field-form">
            <p className="form-label">Film Title: </p>
            <TextField
              id="outlined-textarea"
              label="Film Title"
              size="small"
              placeholder="Film Title"
            />
          </div>
          <p className="form-label">
            <strong>Time Stamp</strong>
          </p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="time-picker">
              <p className="form-label">From: </p>
              <TimePicker
                ampm={false}
                openTo="hours"
                views={["hours", "minutes", "seconds"]}
                inputFormat="HH:mm:ss"
                mask="__:__:__"
                label="Timestamp From"
                value={timeStampFrom}
                onChange={(newValue) => {
                  setTimeStampFrom(newValue);
                }}
                disableOpenPicker={true}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </div>
            <div className="time-picker">
              <p className="form-label">To: </p>
              <TimePicker
                ampm={false}
                openTo="hours"
                views={["hours", "minutes", "seconds"]}
                inputFormat="HH:mm:ss"
                mask="__:__:__"
                label="To"
                value={timeStampTo}
                onChange={(newValue) => {
                  setTimeStampTo(newValue);
                }}
                disableOpenPicker={true}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </div>
          </LocalizationProvider>
        </div>
        <div className="div-submit">
          <div className="button-submit">
            <Button variant="contained" onClick={handleModalClose}>
              Close
            </Button>
          </div>
          <div className="button-submit">
            <Button variant="contained" onClick={handleModalClose}>
              Submit
            </Button>
          </div>
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
