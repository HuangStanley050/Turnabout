import React from "react";

const imageIcon = props => {
  return (
    <img
      style={{ width: "96px", height: "96px", borderRadius: "50%" }}
      src={props.source}
    />
  );
};

export default imageIcon;
