import React, { useState } from "react";
import "./index.scss";
import SeedGrower from "../components/seedGrower/SeedGrower";
import SeedProcessor from "../components/seedProcessingPlant/SeedProcessor";
import SeedProducer from "./seedProducer/SeedProducer";
import SeedTester from "./seedTester/SeedTester";
import SeedCertifier from "./SeedCertifier/SeedCertifier";
import ViewData from "./ViewData/viewdata";

const Spa = () => {
  const [seedGrower, setSeedGrower] = useState(true);
  const [seedProcessor, setSeedProcessor] = useState(false);
  const [seedProducer, setSeedProducer] = useState(false);
  const [seedTester, setSeedTester] = useState(false);
  const [seedCertifier, setCertifier] = useState(false);
  const [viewdata, setviewdata] = useState(false);


  const [displayDasboard, setdisplayDashboard] = useState(false);
  return (
    <div className="decider">
      <div className="hide">
        <img
          style={
            displayDasboard
              ? {
                  marginTop: "20px",
                  marginLeft: "20px",
                  width: "35px",
                  cursor: "pointer",
                }
              : { display: "none" }
          }
          onClick={() => {
            setdisplayDashboard(!displayDasboard);
          }}
          src="https://www.flaticon.com/svg/static/icons/svg/3388/3388830.svg"
          alt="bur"
        />
      </div>
      <div
        className="main-dashboard"
        style={displayDasboard ? { display: "none" } : {}}
      >
        <div className="dashboard-heading">
          <div
            onClick={() => {
              setSeedGrower(true);
              setSeedProcessor(false);
              setCertifier(false);
              setSeedProducer(false);
              setSeedTester(false);
              setviewdata(false);

            }}
          >
            <h1>Dashboard</h1>
          </div>
          <div className="hide">
            <img
              onClick={() => {
                setdisplayDashboard(!displayDasboard);
              }}
              src="https://www.flaticon.com/svg/static/icons/svg/3388/3388830.svg"
              alt="bur"
            />
          </div>
        </div>
        <div className="options">
          <div
            className="option-list"
            onClick={() => {
              setSeedGrower(true);
              setSeedProcessor(false);
              setSeedProducer(false);
              setSeedTester(false);
              setCertifier(false);
              setviewdata(false);

            }}
          >
            <h3>Seed Grower</h3>
          </div>
          <div
            onClick={() => {
              setSeedProcessor(true);
              setSeedGrower(false);
              setSeedProducer(false);
              setSeedTester(false);
              setCertifier(false);
              setviewdata(false);

            }}
            className="option-list"
          >
            <h3>Seed Processing Plant</h3>
          </div>
          <div
            onClick={() => {
              setSeedProcessor(false);
              setSeedGrower(false);
              setSeedProducer(true);
              setSeedTester(false);
              setCertifier(false);
              setviewdata(false);

            }}
            className="option-list"
          >
            <h3>Search Producing Agency</h3>
          </div>
          <div
            onClick={() => {
              setSeedProcessor(false);
              setSeedGrower(false);
              setSeedProducer(false);
              setCertifier(true);
              setSeedTester(false);
              setviewdata(false);


            }}
            className="option-list"
          >
            <h3>Seed Certification Agency</h3>
          </div>
          <div
            onClick={() => {
              setSeedGrower(false);
              setSeedProcessor(false);
              setCertifier(false);
              setSeedProducer(false);
              setSeedTester(true);
              setviewdata(false);

            }}
            className="option-list"
          >
            <h3>Seed Testing Agency</h3>
          </div>
          <div
            onClick={() => {
              setSeedProcessor(false);
              setSeedGrower(false);
              setSeedProducer(false);
              setCertifier(false);
              setSeedTester(false);
              setviewdata(true);
            }}
            className="option-list"
          >
            <h3>View Data</h3>
          </div>
        </div>
      </div>
      <div className="rendered-component">
        {seedGrower ? <SeedGrower /> : <div></div>}
        {seedProcessor ? <SeedProcessor /> : <div></div>}
        {seedProducer ? <SeedProducer /> : <div></div>}
        {seedTester ? <SeedTester /> : <div></div>}
        {seedCertifier ? <SeedCertifier/> : <div></div>}
        {viewdata ? <ViewData/> : <div></div>}


      </div>
    </div>
  );
};
export default Spa;
