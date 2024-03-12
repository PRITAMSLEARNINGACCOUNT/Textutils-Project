import React from "react";

function Alert_Component(props) {
  return (
    <>
        {/* A simple primary alert—check it out! */}
      <div className="alert alert-success" role="alert" hidden>
        {props.message}
      </div>
    </>
  );
}

export default Alert_Component;
