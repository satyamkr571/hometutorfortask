import React from "react";
import "./premiumform.scss";
import Card from "../../../Card/card";

export default function Premiumform() {
  return (
    <div className="container cardDiv">
      <Card
        className=""
        header={
          <h1 style={{ color: "grey", textAlign: "center" }}>
            Book your personalized faculty{" "}
          </h1>
        }
        body={
          <div className="card-body">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </div>
        }
        footer="call us"
      />
    </div>
  );
}
