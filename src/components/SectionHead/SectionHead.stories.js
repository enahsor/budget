import React from "react";
import SectionHead from "./index";

const Template = (args) => <SectionHead {...args} />;

export default {
  title: "SectionHead",
  component: SectionHead,
  argTypes: {},
};

export const Default = Template.bind({});

Default.args = {
  name: "Budgets",
  onAdd: () => console.log("Calling add item function"),
};
