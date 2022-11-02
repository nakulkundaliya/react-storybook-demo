import React from 'react';
import { RadioCheckBox } from '../RadioCheckBox/RadioCheckBox';
import './CheckBoxGroup.css';

interface CheckBoxProps {
  name: string,
  label: string,
  value: string
}
interface CheckBoxGroupProps {
  items: CheckBoxProps[];
  selectedItems: (string | number)[];
  onChange: (value: string) => void
}

export const CheckBoxGroup = ({ items, selectedItems, onChange }: CheckBoxGroupProps) => {
  const isChecked = (value: string) => {
    const index = selectedItems.findIndex(item => item === value)
    return index > -1
  };
  return (
    <div>
      {items.map((item, index) => {
        const {name, value, label } = item
        return (
          <RadioCheckBox
            key={index}
            type="checkbox"
            name={name}
            value={value}
            label={label}
            isChecked={isChecked(value)}
            onChange={() => onChange(value)}
          />
        );
      })}
    </div>
  );
};
