import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Modal, { ModalProps } from "../components/Modal";

export default {
  title: "Example/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <div>Hello there, welcome to modal component</div>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  handleShow: () => prompt("close me"),
  title: "Hello World",
  hasHeader: true,
  hasFooter: false,
  loading: false,
  show: true,
};

export const hasFooter = Template.bind({});
hasFooter.args = {
  handleShow: () => prompt("close me"),
  title: "Hello There",
  hasHeader: true,
  hasFooter: true,
  loading: false,
  show: true,
};
