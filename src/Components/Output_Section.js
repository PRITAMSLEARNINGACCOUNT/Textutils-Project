import React from "react";

export default function Output_Section(props) {
  return (
    <>
      <div className="container my-3" style={{ color: props.styling.color }}>
        <h1>Output :-</h1>
        <p className="my-3">{props.Para}</p>
      </div>
    </>
  );
}
