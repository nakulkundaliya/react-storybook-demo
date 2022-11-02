import React from 'react';
import './Button.css';

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  variant: 'contained' | 'outlined' | 'default';
  startIcon?: any;
  endIcon?: any;
  resetIcon?:any;
  onClick?: () => void;
}
export const Button = ({
  size = 'medium',
  backgroundColor,
  color,
  label,
  variant = 'contained',
  startIcon,
  endIcon,
  resetIcon,
  ...props
}: ButtonProps) => {
  const mode = `button--${variant}`;

  return (
    <div className='button-wrapper'>
      <button
        type='button'
        className={['button', `button--${size}`, mode].join(' ')}
        style={{ backgroundColor, color }}
        {...props}
      >
        {startIcon}
        {resetIcon}
        {label}
        {endIcon}
      </button>
    </div>
  );
};
