import React from "react";

function HeroImage(props) {
  return (
    <div>
      <img src={props.img} alt="of a planet" />
    </div>
  );
}

export default HeroImage;
