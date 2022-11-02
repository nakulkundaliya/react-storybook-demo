import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Collapse } from './Collapse';
import { RadioButtonGroup } from '../RadioButtonGroup/RadioButtonGroup';

export default {
  title: 'Example/Collapse',
  component: Collapse,
  argTypes: {},
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = ({ ...args }) => {
  return (
    <Collapse {...args}>
      <RadioButtonGroup
        onChange={() => {}}
        items={[
          { name: 'low', value: 'low', label: 'Low' },
          { name: 'medium', value: 'medium', label: 'Medium' },
          { name: 'high', value: 'high', label: 'High' },
        ]}
        selectedItem='medium'
      />    
    </Collapse>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Severity',
};
