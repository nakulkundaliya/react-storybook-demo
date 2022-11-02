import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBoxGroup } from './CheckBoxGroup'
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Example/CheckBoxGroup',
  component: CheckBoxGroup,
  argTypes: {},
} as ComponentMeta<typeof CheckBoxGroup>;

const Template: ComponentStory<typeof CheckBoxGroup> = ({
  onChange,
  ...args
}) => {
  const [{ selectedItems }, updateArgs] = useArgs();
  const handleOnChange = (value: string) => {
    const updatedSelectedItems = [...selectedItems];
    const indexOf = selectedItems.findIndex((item: string) => item === value);
    if (indexOf > -1) {
      updatedSelectedItems.splice(indexOf, 1);
    } else {
      updatedSelectedItems.push(value);
    }
    updateArgs({ selectedItems: updatedSelectedItems });
  };
  return <CheckBoxGroup onChange={handleOnChange} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: 'low', value: 'low', label: 'Low' },
    { name: 'medium', value: 'medium', label: 'Medium' },
    { name: 'high', value: 'high', label: 'High' },
  ],
  selectedItems: ['low'],
};
