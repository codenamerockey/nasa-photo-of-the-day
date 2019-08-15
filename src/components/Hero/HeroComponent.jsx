import React from "react";
import HeroImage from "./HeroImage";

function HeroComponent(props) {
  return (
    <div className="container">
      <div>
        <HeroImage img={props.img} />
      </div>
    </div>
  );
}

export default HeroComponent;
