import React from 'react';
import { RadioCheckBox } from '../RadioCheckBox/RadioCheckBox';
import './RadioButtonGroup.css';

interface CheckBoxProps {
  name: string,
  label: string,
  value: string
}
interface RadioButtonGroupProps {
  items: CheckBoxProps[];
  selectedItem: string | number;
  onChange: (value: string) => void
}

export const RadioButtonGroup = ({ items, selectedItem, onChange }: RadioButtonGroupProps) => {
  return (
    <div>
      {items.map((item, index) => {
        const {name, value, label } = item
        return (
          <RadioCheckBox
            key={index}
            type='radio'
            name={name}
            value={value}
            label={label}
            isChecked={selectedItem === value}
            onChange={() => onChange(value)}
          />
        );
      })}
    </div>
  );
};
