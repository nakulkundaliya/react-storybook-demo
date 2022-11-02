import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioCheckBox } from './RadioCheckBox';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Example/RadioCheckBox',
  component: RadioCheckBox,
  argTypes: {},
} as ComponentMeta<typeof RadioCheckBox>;

const Template: ComponentStory<typeof RadioCheckBox> = ({
  onChange,
  ...args
}) => {
  const [{ isChecked }, updateArgs] = useArgs();

  return <RadioCheckBox onChange={() => updateArgs({isChecked: !isChecked})} {...args} />;
};

export const CheckBox = Template.bind({});
CheckBox.args = {
  type:'checkbox',
  name: 'male',
  value: 'male',
  label: 'Male',
  isChecked: false,
};


export const RadioButton = Template.bind({});
RadioButton.args = {
  type:'radio',
  name: 'male',
  value: 'male',
  label: 'Male',
  isChecked: false,
};
