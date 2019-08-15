import React from "react";
import HeroImage from "./HeroImage";

function HeroComponent(props) {
  return (
    <div>
      <HeroImage img={props.img} />
    </div>
  );
}

export default HeroComponent;
