import React, { useState } from 'react';
import CollapseIcon from '../../assets/Icon/CollapseIcon.svg';
import CollapseCloseIcon from '../../assets/Icon/CollapseCloseIcon.svg';
import './Collapse.css';

interface CollapseProps {
  title: string;
  children?: React.ReactNode;
}
export const Collapse = ({ title, children }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='panel-default'>
      <div className='panel-heading' onClick={() => setIsOpen(!isOpen)}>
        <h4 className='panel-title'>{title}</h4>
        {isOpen ? (
          <img src={CollapseIcon} alt='' />
        ) : (
          <img src={CollapseCloseIcon} alt='' />
        )}
      </div>
      <div className={isOpen ? 'panel-collapse' : 'panel-collapse panel-close'}>
        {children}
      </div>
    </div>
  );
};
