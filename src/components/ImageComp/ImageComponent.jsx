import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

// function (props) {
//   return (
//     <div>
//       <img
//         src={}
//         alt="of a planet"
//         style={{ width: "300px", height: "300px" }}
//       />
//     </div>
//   );
// }

const NasaImage = props => (
  <Card>
    <Image src={props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>The Moon: How did it happen?</Card.Header>
      <Card.Meta>
        <span className="date">Written in 2019</span>
      </Card.Meta>
      <Card.Description>
        Matthew is an astronomy expert from Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="user" />
      22 blogs writtn by Mathew
    </Card.Content>
  </Card>
);

export default NasaImage;
