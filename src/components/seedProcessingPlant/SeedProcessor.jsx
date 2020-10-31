import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";

const SeedProcessor = () => {
  const [sppname, setSppname] = useState("");
  const [sppid, setSppid] = useState("");
  const [tqp, setTqp] = useState("");
  const [pd, setPD] = useState("");
  const [plotno, setVD] = useState("");
  const [lotno, setLotno] = useState("");

  const handlesubmit = () =>{
  }

  return (
    <div className="homepage">
      <h2>Seed Processing Information</h2>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => {
              setSppname(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Name of the SPP.</FormHelperText>
        </FormControl>

        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Id</InputLabel>
          <Input
            onChange={(e) => {
              setSppid(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">SPP ID</FormHelperText>
        </FormControl>
      </div>

      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>TQP</InputLabel>
          <Input
            onChange={(e) => {
              setTqp(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Total Quantity Processed
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Processing Date</InputLabel>
          <Input
            onChange={(e) => {
              setPD(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Date at which it should be processed
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Verification Date</InputLabel>
          <Input
            onChange={(e) => {
              setVD(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            When was it verified
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Lot NO</InputLabel>
          <Input
            onChange={(e) => {
              setLotno(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">LOT Number</FormHelperText>
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

export default SeedProcessor;
