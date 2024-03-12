import React from "react";
import { Word_Counter } from "../App";
export default function Word_Count_Button(props) {
  return (
    <div className="container my-2">
      <button
        type="button"
        onClick={Word_Counter}
        className={`btn btn-${props.color}`}
      >
        Count Words
      </button>
    </div>
  );
}
