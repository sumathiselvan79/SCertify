import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ReactTransliterate } from "react-transliterate";

const SeedTester = () => {
  const [dost, setDost] = useState("");
  const [pof, setPOF] = useState("");
  const [SC, setSC] = useState("");
  const [TN, setTN] = useState("");
  const [sq, setsq] = useState("");
  const [sourcec, setsourceclass] = useState("");
  const [dc, setdc] = useState("");
  const [lang,setLang] = useState("en");
  const handlesubmit = () =>{
    // alert(dost+""+pof+""+SC+""+TN+""+sq+""+sourcec+""+dc+""+lang)
    var final = {
      date :dost,
      pf :pof,
      tag:TN,
      sq:sq,
      sc:SC,
      dc:dc,
      sec:sourcec
    }
    fetch('http://127.0.0.1:5000/uploadData', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(final)
 
})
alert("successfully uploaded")
  }

  return (
    <div className="homepage">
      <h2>Seed Testing Agency</h2>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          onChange={(e)=>{
            setLang(e.target.value)
          }}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"hi"}>Hindi</MenuItem>
          <MenuItem value={"ta"}>Tamil</MenuItem>
        </Select>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <h4>Date</h4>
          <ReactTransliterate
          value={dost}
          onChange={(e) => {
            setDost(e.target.value);
          }}
      lang={lang}
      />
          <FormHelperText id="my-helper-text">
            Date of Samaple test:
          </FormHelperText>
        </FormControl>

        <FormControl style={{ marginRight: "25px" }}>
          <h4>Pass or Fail</h4>
          <ReactTransliterate
          value={pof}
      onChange={(e) => {
        setPOF(e.target.value);
      }}
      lang={lang}
      />


          {/* <Input
            onChange={(e) => {
              setPOF(e.target.value);
            }}
            aria-describedby="my-helper-text"
          /> */}
          <FormHelperText id="my-helper-text">
            Whether sample test passed or failed
          </FormHelperText>
        </FormControl>
      </div>

      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <h4>Tag no </h4>
          <ReactTransliterate
          value ={TN}
          onChange={(e) => {
            setTN(e.target.value);
          }}
            lang = {lang}
          />
          <FormHelperText id="my-helper-text">Source Tag Number</FormHelperText>
        </FormControl>
        <FormControl>
          <h4>Source Quantity</h4>
          <ReactTransliterate
          value ={sq}
            onChange={(e) => {
              setsq(e.target.value);
            }}
            lang = {lang}
          />
          <FormHelperText id="my-helper-text">
            Quantity of the source
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <h4>Source Class</h4>
          <ReactTransliterate
          value ={sourcec}
          onChange={(e) => {
            setsourceclass(e.target.value);
          }}
            lang = {lang}
          />
          <FormHelperText id="my-helper-text">Source Class</FormHelperText>
        </FormControl>
        <FormControl style={{ marginRight: "25px" }}>
          <h4>Destination Class</h4>
          <ReactTransliterate
          value = {dc}
            onChange={(e) => {
              setdc(e.target.value);
            }}
            lang= {lang}
          />
          <FormHelperText id="my-helper-text">Destination Class</FormHelperText>
        </FormControl>
        <FormControl>
          <h4>Secret code</h4>
          <ReactTransliterate
          value = {SC}
            onChange={(e) => {
              setSC(e.target.value);
            }}
            lang = {lang}
          />
          <FormHelperText id="my-helper-text">
            Sample Secret Code
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

export default SeedTester;
