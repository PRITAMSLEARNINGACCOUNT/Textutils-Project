import React from "react";
import { Special_Charecter_Remover } from "../App";
export default function Copy_Button(props) {
  return (
    <div className="container my-2">
      <button
        type="button"
        onClick={Special_Charecter_Remover}
        className={`btn`}
        style={props.color
    }
      >
        Remove Special Charecters
      </button>
    </div>
  );
}
