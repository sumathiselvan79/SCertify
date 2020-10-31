import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";

const SeedCertifier = () => {
  const [lotno, setLotno] = useState("");
  const [tqp, setTqp] = useState("");
  const [pd, setPD] = useState("");
  const [plotno, setVD] = useState("");
  const [pof, setPOF] = useState("");
  const [SC, setSC] = useState("");
  const [CN, setCN] = useState("");
  const [DOC, setDOC] = useState("");
  const [TS, setTS] = useState("");
  const [TIRS, setTIRS] = useState("");
  const [TIRT, setTIRT] = useState("");
  const [NOTI, setNOTI] = useState("");
  const [CVIM, setCVIM] = useState("");

  const handlesubmit = () =>{

  }

  return (
    <div className="homepage">
      <h2>Seed Certification Agency</h2>
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

        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Date</InputLabel>
          <Input
            onChange={(e) => {
              setPD(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Processing Date</FormHelperText>
        </FormControl>
      </div>

      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Date</InputLabel>
          <Input
            onChange={(e) => {
              setVD(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Verification Date</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Pass or Fail</InputLabel>
          <Input
            onChange={(e) => {
              setPOF(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Whether Sample passed or failed
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Certificate No</InputLabel>
          <Input
            onChange={(e) => {
              setCN(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Certificate Number
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Date</InputLabel>
          <Input
            onChange={(e) => {
              setDOC(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Date of certification
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Tag Series</InputLabel>
          <Input
            onChange={(e) => {
              setTS(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Tag Series</FormHelperText>
        </FormControl>
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Tag Issued range start</InputLabel>
          <Input
            onChange={(e) => {
              setTIRS(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Tag issued range start
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Tag issued range to</InputLabel>
          <Input
            onChange={(e) => {
              setTIRT(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Tag issued Range TO
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl>
          <InputLabel>No of tags issued</InputLabel>
          <Input
            onChange={(e) => {
              setNOTI(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">No of tags issued</FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Lot No</InputLabel>
          <Input
            onChange={(e) => {
              setLotno(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">LOT Number</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Certificate Validity</InputLabel>
          <Input
            onChange={(e) => {
              setCVIM(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Certificate validity in month
          </FormHelperText>
        </FormControl>
      </div>
      <Button onClick={() => handlesubmit()} variant="contained" color="secondary">
        SUBMIT
      </Button>
    </div>
  );
};

export default SeedCertifier;
