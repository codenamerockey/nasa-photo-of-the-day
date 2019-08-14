import React from "react";

function FeaturedComponent(props) {
  return (
    <div>
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
    </div>
  );
}

export default FeaturedComponent;
