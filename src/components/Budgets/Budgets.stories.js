import React from "react";
import Budgets from "./index";

export default {
  title: "Example/Budgets",
  component: Budgets,
  argTypes: {},
};

const Template = (args) => <Budgets {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
