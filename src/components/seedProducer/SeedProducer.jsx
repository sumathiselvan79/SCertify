import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";

const SeedProducer = () => {
  const [owner, setOwner] = useState("");
  const [sourceStoreHouseName, setSourceStoreHouseName] = useState("");
  const [destStoreHouseName, setDestStoreHouseName] = useState("");
  const [sourceQuantity, setSourceQuantity] = useState("");
  const [sourceDateOfIssue, setSourceDateOfIssue] = useState("");
  const [STD, setSTD] = useState("");
  const [SP, setSP] = useState("");
  const [DIC, setDIC] = useState("");
  const [FY, setFY] = useState("");
  const [season, setseason] = useState("");
  const [CN, setCN] = useState("");
  const [lotno, setLotno] = useState("");

  const handlesubmit = () =>{

  }

  return (
    <div className="homepage">
      <h2>Seed Producing Agency Information</h2>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Owner</InputLabel>
          <Input
            onChange={(e) => {
              setOwner(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Name of the owner</FormHelperText>
        </FormControl>

        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>SS House Name</InputLabel>
          <Input
            onChange={(e) => {
              setSourceStoreHouseName(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Source Store House Name
          </FormHelperText>
        </FormControl>
      </div>

      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>DS House Name</InputLabel>
          <Input
            onChange={(e) => {
              setDestStoreHouseName(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Destination Store House Name
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Source Quantity</InputLabel>
          <Input
            onChange={(e) => {
              setSourceQuantity(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Quantity of the store
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Date of Issue</InputLabel>
          <Input
            onChange={(e) => {
              setSourceDateOfIssue(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Source Date of Issue
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Sample Test Date</InputLabel>
          <Input
            onChange={(e) => {
              setSTD(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            The test date of the sample
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Sample Passed</InputLabel>
          <Input
            onChange={(e) => {
              setSP(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">The sample passed</FormHelperText>
        </FormControl>
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Certificate Number</InputLabel>
          <Input
            onChange={(e) => {
              setCN(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            The number of the certificate
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Date Of Issue</InputLabel>
          <Input
            onChange={(e) => {
              setDIC(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Date of Issue of Certificate
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Financial Year</InputLabel>
          <Input
            onChange={(e) => {
              setFY(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            The financial Year
          </FormHelperText>
        </FormControl>
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
          <InputLabel>Season</InputLabel>
          <Input
            onChange={(e) => {
              setseason(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Producing agency season
          </FormHelperText>
        </FormControl>
      </div>
      <Button
        onClick={() => handlesubmit()}
        variant="contained"
        color="secondary"
      >
        SUBMIT
      </Button>
    </div>
  );
};

export default SeedProducer;
