import React from "react";
import { Extra_Spaces_Remover } from "../App";
export default function Copy_Button(props) {
  return (
    <div className="container my-2">
      <button
        type="button"
        onClick={Extra_Spaces_Remover}
        className={`btn`}
        style={props.color}
      >
        Remove Extra Spaces
      </button>
    </div>
  );
}
