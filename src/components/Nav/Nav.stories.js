import React from "react";
import Nav from "./index";

export default {
  title: "Nav",
  component: Nav,
  argTypes: {},
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});

Default.args = {};
