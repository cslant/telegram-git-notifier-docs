import React from "react";
import "./style.scss";
export default function Feature({ title, description }) {
  return (
    <div className="col col--3 feature__container">
      <div className="text--center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
