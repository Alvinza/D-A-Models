import React from "react";

const Title = (props) => {
  return (
    <div className="mt-10" style={{marginTop: "5rem"}}>
      <h1
        className="text-center text-gray-900 title"
        style={{ fontFamily: "monospace" }}
      >
        {props.title} {/* Display dynamic title text */}
      </h1>
    </div>
  );
};

export default Title;
