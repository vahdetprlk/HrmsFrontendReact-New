import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Menu, DropdownDivider } from "semantic-ui-react";

export default function Login() {
  return (
    <div>
      <Menu.Item>
        <Button primary>
          <Dropdown text="Giriş Yap">
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/login">Giriş Yap</Dropdown.Item>
              <DropdownDivider/>
              <Dropdown.Item as={NavLink} to="/signup">Yeni Üyelik Oluştur</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button>
      </Menu.Item>
    </div>
  );
}
