import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";

const SeedGrower = () => {
  const [seedGrowerName, setSeedGrowerName] = useState("");
  const [seedGrowerAddress, setSeedGrowerAddress] = useState("");
  const [cropName, setCropName] = useState("");
  const [cropVariety, setCropVariety] = useState("");
  const [plotno, setPlotno] = useState("");
  const [area, setArea] = useState("");
  const [breeder, setBreeder] = useState("");
  const [foundation, setFoundation] = useState("");
  const [certified, setCertified] = useState("");
  const [date, setDate] = useState("");
  const [lotno, setLotno] = useState("");
  const [owner, setOwner] = useState("");

  const handlesubmit = () =>{
    const seedgrowerobject =  {
      
    }
  }

  return (
    <div className="homepage">
      <h2>Seed Grower Information</h2>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => {
              setSeedGrowerName(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Name of the seed grower.
          </FormHelperText>
        </FormControl>

        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Address</InputLabel>
          <Input
            onChange={(e) => {
              setSeedGrowerAddress(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Address of the seed grower.
          </FormHelperText>
        </FormControl>
      </div>

      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Crop Name</InputLabel>
          <Input
            onChange={(e) => {
              setCropName(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Name of the crop.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Crop Variety</InputLabel>
          <Input
            onChange={(e) => {
              setCropVariety(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Variety of the crop.
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Plot No</InputLabel>
          <Input
            onChange={(e) => {
              setPlotno(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Land Details</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Area</InputLabel>
          <Input
            onChange={(e) => {
              setArea(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Land Details</FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Breeder</InputLabel>
          <Input
            onChange={(e) => {
              setBreeder(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Class of the seed</FormHelperText>
        </FormControl>
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Foundation</InputLabel>
          <Input
            onChange={(e) => {
              setFoundation(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Land Details</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Certified</InputLabel>
          <Input
            onChange={(e) => {
              setCertified(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Land Details</FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl>
          <InputLabel>Date</InputLabel>
          <Input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Date of Sowing</FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Lot No </InputLabel>
          <Input
            onChange={(e) => {
              setLotno(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">LOT Number</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => {
              setOwner(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Name of the Owner</FormHelperText>
        </FormControl>
      </div>
      <Button onClick={() => handlesubmit()} variant="contained" color="secondary">
        SUBMIT
      </Button>
    </div>
  );
};

export default SeedGrower;
