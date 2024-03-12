import React from "react";
import { Copy } from "../App";
export default function Copy_Button(props) {
  return (
    <div className="container my-2">
      <button type="button" onClick={Copy} disabled={props.disable} className={`btn btn-${props.color}`}>
        Copy To Clipboard
      </button>
    </div>
  );
}
