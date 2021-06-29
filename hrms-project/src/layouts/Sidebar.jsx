import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Products</Menu.Header>

          <Menu.Menu>
            <Menu.Item as={NavLink} to="/applied-job-adverts" name="başvurulan ilanlar" />
            <Menu.Item name="consumer" />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item name="shared" />
            <Menu.Item name="dedicated" />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item name="email">E-mail Support</Menu.Item>

            <Menu.Item name="faq">FAQs</Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  );
}
