import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  onClick: () => prompt("hello"),
  title: "Submit",
  variant: "neutral",
};
export const Primary = Template.bind({});
Primary.args = {
  onClick: () => prompt("hello"),
  title: "Submit",
  variant: "primary",
};
