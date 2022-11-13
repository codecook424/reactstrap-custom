import * as React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

let sharedBooleanDefaults = {
  type: "boolean",
  defaultValue: false,
  table: { defaultValue: { summary: false } },
};

let propDescriptions = {
  active:
    "Convey the active state to assistive technologies. Use the aria-current attribute — using the page value for the current page, or true for the current item in a set.",
  header: "Label sections of actions in any dropdown menu.",
  divider: "Mark visible items as disabled.",
  disabled: "Indicade that available options are disabled.",
  text: "Place any freeform text within a dropdown menu with text and use spacing utilities.",
};

export default {
  title: "Components/DropdownItem",
  component: DropdownItem,
  render: Template,
  args: { children: "A dropdown item" },
  argTypes: {
    active: {
      ...sharedBooleanDefaults,
      description: propDescriptions.active,
    },
    children: {
      type: "string",
      description: "Element content (React.node)",
      defaultValue: "A dropdown item",
      table: { defaultValue: { summary: undefined } },
    },
    divider: {
      ...sharedBooleanDefaults,
      description: propDescriptions.divider,
    },
    disabled: {
      ...sharedBooleanDefaults,
      description: propDescriptions.disabled,
    },
    header: {
      ...sharedBooleanDefaults,
      description: propDescriptions.header,
    },
    text: {
      ...sharedBooleanDefaults,
      description: propDescriptions.text,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "An universal element for adding items, groupings, and dividers to dropdown menus.",
      },
    },
  },
  decorators: [withMinHeight],
};

export const Default = {};

export const Active = {
  args: {
    active: true,
    children: "An active dropdown item",
    "aria-current": true,
  },
  ...addDocsDescription(propDescriptions.active),
};

export const Disabled = {
  args: {
    disabled: true,
    children: "A disabled dropdown item",
  },
  ...addDocsDescription(propDescriptions.disabled),
};

export const Header = {
  args: {
    header: true,
    children: "A header",
  },
  ...addDocsDescription(propDescriptions.header),
};

export const Text = {
  args: {
    text: true,
    children: "A text dropdown item (can't click)",
  },
  ...addDocsDescription(propDescriptions.text),
};

export const Divider = {
  args: {
    divider: true,
    children: "A text dropdown item (can't click)",
  },
  ...addDocsDescription(propDescriptions.divider),
};

// private

function addDocsDescription(description) {
  return {
    parameters: {
      docs: {
        description: {
          story: description,
        },
      },
    },
  };
}

function Template(args) {
  return (
    <div>
      <DropdownItem {...args} />
      <DropdownItem>A dropdown item</DropdownItem>
    </div>
  );
}

function withMinHeight(Story) {
  function DemoLayout(props) {
    return <div style={{ minHeight: "5rem" }} {...props} />;
  }

  return <DemoLayout>{Story()}</DemoLayout>;
}
