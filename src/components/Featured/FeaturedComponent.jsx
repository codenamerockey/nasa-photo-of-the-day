import React from "react";
import styled from "styled-components";

function FeaturedComponent(props) {
  const BackgroundColor = styled.div`
    font-family: sans-serif;
    text-align: center;
    background: #333;
    color: white;
  `;

  const newsTitle = "Featured News";
  return (
    <BackgroundColor>
      <h2>{newsTitle}</h2>
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
    </BackgroundColor>
  );
}

export default FeaturedComponent;
