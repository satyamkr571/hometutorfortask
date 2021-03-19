import React from "react";
import "./enquiry.scss";
import TabBar from "./TabBar/tabbar";

export default function Enquiry() {
  return (
    <div className="enquiryform">
      <div>
        <h1 className="enquiryformhed" style={{ textAlign: "center" }}>
          {" "}
          Book Your Expert
        </h1>
        <span>
          <h5 style={{ textAlign: "center", color: "red" }}>
            Lower Price & Best Solution.
          </h5>
        </span>
      </div>
      <TabBar />
    </div>
  );
}
