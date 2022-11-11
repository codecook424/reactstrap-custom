import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { within, userEvent } from "@storybook/testing-library";

function Template(args) {
  return (
    <UncontrolledDropdown {...args}>
      <DropdownToggle caret>Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default {
  title: "Components/Dropdown",
  component: UncontrolledDropdown,
  render: Template,
  argTypes: {
    direction: {
      options: ["up", "down", "left", "right"],
      control: { type: "select" },
    },
  },
};

export const Default = {};

export const Open = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Dropdown/i,
    });
    await userEvent.click(loginButton);
  },
};
