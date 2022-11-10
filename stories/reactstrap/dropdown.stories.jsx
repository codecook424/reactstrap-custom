import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { within, userEvent } from "@storybook/testing-library";

function Subject({ direction, ...args }) {
  return (
    <div className="d-flex p-5">
      <UncontrolledDropdown
        // isOpen={dropdownOpen}
        // toggle={toggle}
        direction={direction}
      >
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>
            Action (disabled)
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}

export default {
  title: "Reactstrap/Dropdown",
  component: Subject,
};

export const Uncontrolled = {};

export const Open = {
  ...Uncontrolled,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Dropdown/i,
    });
    await userEvent.click(loginButton);
  },
};
