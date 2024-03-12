import React from "react";
import { click_2 } from "../App";
export default function Lower_Case_Button(props) {
  return (
    <div className="container my-2">
      <button
        type="button"
        onClick={click_2}
        className={`btn btn-${props.color}`}
      >
        Convert To LowerCase
      </button>
    </div>
  );
}
