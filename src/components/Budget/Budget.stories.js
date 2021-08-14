import React from "react";
import Budget from "./index";

export default {
  title: "Budget",
  component: Budget,
  argTypes: {
    data: { name: "Budget 1", income: 99, date: "10/21" },
  },
};

const Template = (args) => <Budget {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: { name: "Budget 1", income: 100, date: "08/20" },
};
