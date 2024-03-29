import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../components/Button';
import { ButtonType } from '../../components/Button/Button.d';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      options:  Object.values(ButtonType),
      type: 'string',
    }
  },
  args: {
    type: ButtonType.PRIMARY,
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryButton: Story = {
  args: {
    children: 'Label',
    type: ButtonType.PRIMARY,
  },
};

export const SecondaryButton: Story = {
  args: {
    children: 'Label',
    type: ButtonType.SECONDARY,
  },
};

export const TertiaryButton: Story = {
  args: {
    children: 'Label',
    type: ButtonType.TERTIARY,
  },
};