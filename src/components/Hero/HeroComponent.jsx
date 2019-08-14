import React from "react";
import HeroImage from "./HeroImage";

function HeroComponent(props) {
  if (!props.photoOfTheDay) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div className="container">
        <div>
          <HeroImage img={props.img} />
        </div>
      </div>
    );
  }
}

export default HeroComponent;
