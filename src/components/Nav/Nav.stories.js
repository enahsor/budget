import React from "react";
import Nav from "./index";

export default {
  title: "Example/Nav",
  component: Nav,
  argTypes: {},
};

const Template = (args) => <Nav {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
