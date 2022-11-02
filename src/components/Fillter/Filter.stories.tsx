import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { Filter } from './Filter';

export default {
  title: 'Example/Filter',
  component: Filter,
  argTypes: {},
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = ({
  onChangeFilter,
  onClearFilter,
  ...args
}) => {
  const [{ items }, updateArgs] = useArgs();

  const handleFilter = (name: string, value: string) => {
    const updatedFilterItems = [...items];
    const indexOf = updatedFilterItems.findIndex((item) => item.name === name);
    if (indexOf > -1) {
      if (updatedFilterItems[indexOf].type === 'checkbox') {
        const indexOfSelectedItem = updatedFilterItems[indexOf][
          'selectedItems'
        ]?.findIndex((i: string) => i === value);
        if (indexOfSelectedItem > -1) {
          updatedFilterItems[indexOf]['selectedItems'].splice(
            indexOfSelectedItem,
            1
          );
        } else {
          updatedFilterItems[indexOf]['selectedItems'].push(value);
        }
      }
      if (updatedFilterItems[indexOf].type === 'radio') {
        updatedFilterItems[indexOf]['selectedItems'] = value;
      }
    }
    updateArgs({ items: updatedFilterItems });
  };

  const clearFilter = (name: string) => {
    const updatedFilterItems = [...items];
    const indexOf = updatedFilterItems.findIndex((item) => item.name === name);
    if (indexOf > -1) {
      let defaultValue = name === 'severity' ? [] : '';
      updatedFilterItems[indexOf]['selectedItems'] = defaultValue;
    }
    updateArgs({ items: updatedFilterItems });

  };

  return (
    <Filter
      onChangeFilter={handleFilter}
      onClearFilter={clearFilter}
      {...args}
    />
  );
};
const severityData = [
  {
    name: 'Low',
    value: 'low',
    label: 'Low',
  },
  {
    name: 'Medium',
    value: 'medium',
    label: 'Medium',
  },
  {
    name: 'High',
    value: 'high',
    label: 'High',
  },
];

const timeData = [
  {
    name: 'time',
    value: '24',
    label: 'Last 24 hours',
  },
  {
    name: 'time',
    value: '72',
    label: 'Last 72 hours',
  },
  {
    name: 'time',
    value: 'week',
    label: 'Last Week',
  },
  {
    name: 'time',
    value: '6month',
    label: 'Last 6 Month',
  },
];
export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'severity',
      title: 'Severify',
      type: 'checkbox',
      data: severityData,
      selectedItems: [],
    },
    {
      name: 'time',
      title: 'Time',
      type: 'radio',
      data: timeData,
      selectedItems: '',
    },
  ],
};
