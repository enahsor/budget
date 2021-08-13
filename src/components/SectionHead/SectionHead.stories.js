import React from "react";
import SectionHead from "./index";

const Template = (args) => <SectionHead {...args} />;

export default {
  title: "Example/SectionHead",
  component: SectionHead,
  argTypes: {},
};

export const Normal = Template.bind({});

Normal.args = {
  name: "Budgets",
  onAdd: () => console.log("Calling add item function"),
};
