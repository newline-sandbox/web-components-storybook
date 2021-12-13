import { HelloWorld } from "./HelloWorld";

const Template = () => `<hello-world></hello-world>`;

export default {
  component: HelloWorld,
  title: "Library/Components/HelloWorld",
};

export const Default = Template.bind({});
