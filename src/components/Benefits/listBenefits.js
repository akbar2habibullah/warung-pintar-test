import React from "react";
import Benefit from "./benefit";

export default function ListBenefit() {
  return (
    <div className="box shadow-box">
      <h1>Benefits of Odigo</h1>
      <div className="benefit-list">
        <Benefit images="benefit-icon-01.png" title="Welcome to Odigo!"/>
        <Benefit images="benefit-icon-02.png" title="Your Personal Japan Guide"/>
        <Benefit images="benefit-icon-03.png" title="Promoting Local Bussinesses"/>
      </div>
    </div>
  )
}
