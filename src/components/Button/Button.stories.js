import React from "react";
import Button from "./index";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    onClick: () => console.log("Button clicked"),
    type: "primary",
    buttonText: "Hello World",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  buttonText: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  buttonText: "Secondary",
};

export const PrimaryNotFilled = Template.bind({});
PrimaryNotFilled.args = {
  type: "primary",
  filled: false,
  buttonText: "Primary",
};

export const SecondaryNotFilled = Template.bind({});
SecondaryNotFilled.args = {
  type: "secondary",
  filled: false,
  buttonText: "Secondary",
};
