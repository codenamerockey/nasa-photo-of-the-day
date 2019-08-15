import React from "react";
import styled from "styled-components";

function SideBarComponent(props) {
  const WrapperDiv = styled.div`
    font-family: sans-serif;
    text-align: center;
    width: 100%;
  `;
  return (
    <WrapperDiv>
      <h2>What's New</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam iusto
        delectus accusamus ab, sit quibusdam dignissimos omnis sequi
        repellendus, nihil adipisci a iste eos aliquam aperiam. Reprehenderit,
        nam? Sed rem nobis debitis ipsa tenetur quia repellendus quam blanditiis
        perspiciatis illo saepe, numquam optio. Quam tempore veritatis maiores
        rem provident, ullam quis itaque expedita sed repellat? Fuga accusamus
        laboriosam sapiente. Beatae suscipit nemo, modi voluptates repellendus
        eum nostrum expedita hic voluptatum animi quaerat magnam quod ullam?
      </p>
    </WrapperDiv>
  );
}

export default SideBarComponent;
