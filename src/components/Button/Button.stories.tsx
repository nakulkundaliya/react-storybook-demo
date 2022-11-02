import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  label: 'Filter',
  startIcon: <Icon name={'filter'} fill={'#fff'} />
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Filter',
  startIcon: <Icon name={'filter'} fill={'#1967ff'} />,
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  label: 'Filter',
  startIcon: <Icon name={'filter'} fill={'#1967ff'} />,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Filter',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Filter',
};
