import React from "react";
import Summary from "./index";

export default {
  title: "Summary",
  component: Summary,
  argTypes: {
    income: Number,
    expense: Number,
  },
};

const Template = (args) => <Summary {...args} />;

export const Default = Template.bind({});
Default.args = {
  income: 1000,
  expense: 900,
};
