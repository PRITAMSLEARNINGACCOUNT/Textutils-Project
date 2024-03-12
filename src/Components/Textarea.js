import React from "react";
import { Change_Text } from "../App";
export default function Textarea(props) {
  return (
    <>
      <div
        className="container"
        style={{
          color: props.styling.color,
        }}
      >
        <div className="mb-3">
          <h1>Enter Your Desired Text Below</h1>
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            rows="5"
            value={props.val}
            onChange={Change_Text}
          />
        </div>
      </div>
    </>
  );
}
