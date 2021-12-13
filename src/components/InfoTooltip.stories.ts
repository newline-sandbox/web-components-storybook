import { InfoTooltip } from "./InfoTooltip";

const Template = ({ text }) =>
  `<info-tooltip><p slot="content">${text}</p></info-tooltip>`;

export default {
  component: InfoTooltip,
  title: "Library/Components/InfoTooltip",
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
};

export const Empty = Template.bind({});

Empty.args = {
  text: "",
};

export const SingleLine = Template.bind({});

SingleLine.args = {
  text: "Hello World!",
};

export const MultiLine = Template.bind({});

MultiLine.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
