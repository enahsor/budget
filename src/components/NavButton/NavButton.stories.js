import React from "react";
import NavButton from "./NavButton";
import { FaAward } from "react-icons/fa";

export default {
  title: "Example/NavButton",
  component: NavButton,
  argTypes: {
    active: Boolean,
    label: "Default",
  },
};

const Template = (args) => <NavButton {...args} />;

export const ActiveNavButton = Template.bind({});
ActiveNavButton.args = {
  active: true,
  Icon: FaAward,
  label: "Active",
};
export const InactiveNavButton = Template.bind({});

InactiveNavButton.args = {
  active: false,
  Icon: FaAward,
  label: "Inactive",
};
