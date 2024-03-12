import React from "react";

function About(props) {
  return (
    <>
      <div className="container my-5">
        <strong style={{ fontSize: "20px", color: props.styling }}>
          TextUtils is a ReactJs website built primarily to do various
          operations on regular typed text. You can safely use WordPad or
          NotePad for text drafting, and saving, but TextUtils offers much more
          than simple text drafting and formatting. TextUtils can convert your
          text to any case in just one simple click of a button.
        </strong>
      </div>
    </>
  );
}

export default About;
