import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Text size="sm">Accept the terms of use</Text>
      </div>
    ),
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
