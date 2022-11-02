import React from 'react';
import './RadioCheckBox.css';

interface RadioCheckBoxProps {
  type: 'radio' | 'checkbox';
  name: string;
  value: string;
  label: string;
  isChecked: boolean;
  onChange: () => void;
}
export const RadioCheckBox = ({
  type,
  name,
  value,
  label,
  isChecked,
  onChange,
}: RadioCheckBoxProps) => {
  return (
    <div className='radiocheckbox-wrapper'>
      <input
        type={type}
        name={name}
        value={value}
        className='radiocheckbox-input'
        checked={isChecked}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};
