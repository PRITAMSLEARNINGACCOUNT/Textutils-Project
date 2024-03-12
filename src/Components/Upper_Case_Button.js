import React from "react";
import { click } from "../App";
export default function Upper_Case_Button(props) {
  return (
    <div className="container my-2">
      <button
        type="button"
        onClick={click}
        className={`btn btn-${props.color}`}
      >
        Convert To UpperCase
      </button>
    </div>
  );
}
