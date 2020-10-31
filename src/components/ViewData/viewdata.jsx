import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";

const ViewData = () => {
  const [lotno, setLotno] = useState("");
  const handlesubmit = () => {};

  return (
    <div className="homepage">
        <div>
            <h2> View Report</h2>
        </div>
      <div>
        <FormControl>
          <InputLabel>LOT NUMBER</InputLabel>
          <Input
            onChange={(e) => {
              setLotno(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Enter lot number to get details 
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

export default ViewData;
