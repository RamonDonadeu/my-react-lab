import React from "react";
import "./ViewSelection.css";
import { useState } from "react";

const ViewSection = () => {
  const [display, setDisplay] = useState(
    <div className="selectExperiment">Select an Experiment to display here</div>
  );
  return (
    <div className="viewSection">
      <div className="view">{display}</div>
      <div className="gotoSelector">
        <div className="goto--icon"></div>
      </div>
      <div className="selector">
        <div className="filter">
          <div className="experimentList"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewSection;
