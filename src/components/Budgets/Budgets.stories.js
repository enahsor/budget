import React from "react";
import Budgets from "./index";

export default {
  title: "Budgets",
  component: Budgets,
  argTypes: {},
};

const Template = (args) => <Budgets {...args} />;

export const Default = Template.bind({});
Default.args = {};
