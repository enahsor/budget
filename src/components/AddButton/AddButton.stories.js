import React from "react";
import { secondary } from "styles/fonts";
import AddButton from "./index";

export default {
  title: "Example/AddButton",
  component: AddButton,
  argTypes: {
    type: "primary",
    onClick: () => console.log("I was clicked"),
    label: "Default add button label",
  },
};

const Template = (args) => <AddButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  onClick: () => console.log("Clicked a primary add button"),
  label: "Primary AddButton label",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  onClick: () => console.log("Clicked a secondary add button"),
  label: "Secondary AddButton label",
};
