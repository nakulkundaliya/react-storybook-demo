import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButtonGroup } from './RadioButtonGroup'
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Example/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {},
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = ({
  onChange,
  ...args
}) => {
  const [{ selectedItem }, updateArgs] = useArgs();
  const handleOnChange = (value: string) => {
    updateArgs({ selectedItem: value });
  };
  return <RadioButtonGroup onChange={handleOnChange} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: 'last 24 hours', value: 'last 24 hours', label: 'Last 24 hours' },
    { name: 'last 72 hours', value: 'last 72 hours', label: 'Last 72 hours' },
    { name: 'last week', value: 'last week', label: 'Last week' },
    { name: 'last 6 months', value: 'last 6 months', label: 'Last 6 months' },
  ],
  selectedItem: 'last 72 hours',
};
