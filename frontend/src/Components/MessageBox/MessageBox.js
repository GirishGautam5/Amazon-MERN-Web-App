import React from "react";
import "./MessageBoxstyles.css";

export default function MessageBox(props) {
  return (
    <div className="message">
      <div className={`alert alert-${props.variant || "info"}`}>
        {props.children}
      </div>
    </div>
  );
}
