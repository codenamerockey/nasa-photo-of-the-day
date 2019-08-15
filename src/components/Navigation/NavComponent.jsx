import React from "react";
import { Button, Menu } from "semantic-ui-react";

function NavComponent() {
  return (
    <Menu>
      <Menu.Item>
        <Button primary>Home</Button>
      </Menu.Item>

      <Menu.Item>
        <Button>About</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Visit Space</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Black Holes</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Contact</Button>
      </Menu.Item>
    </Menu>
  );
}

export default NavComponent;
