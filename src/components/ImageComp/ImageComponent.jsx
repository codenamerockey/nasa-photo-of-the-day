import React from "react";

function NasaImage(props) {
  return (
    <div>
      <img
        src={props.img}
        alt="of a planet"
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
}

export default NasaImage;
