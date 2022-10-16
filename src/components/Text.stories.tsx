import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Text component",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Custom: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with {`<p>`} tag</p>,
  },
};
