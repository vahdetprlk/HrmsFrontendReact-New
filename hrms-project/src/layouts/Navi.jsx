import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import Login from "./Login";

export default function Navi() {
  return (
    <div>
      <Menu fixed="top" inverted size="large">
        <Container>
          <Menu.Item as={NavLink} to="/home" name="home"  />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Login />

            <Menu.Item as={NavLink} to="/employer-signup" >
              <Button primary>Eleman Arıyorum</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
