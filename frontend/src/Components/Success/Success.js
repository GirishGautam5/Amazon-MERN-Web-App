import React from "react";
import Navbar from "../Home/Navbar";
import "./successstyles.css";

function Successpage(props) {
  return (
    <div>
      <Navbar />
      <div className="success-screen">
        <div className="card">
          <div className="tick">
            <i className="checkmark">✓</i>
          </div>
          <h1 className="h1class">Success</h1>
          <p className="pclass">
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Successpage;
