import React from 'react';
import './Icon.css';

interface FilterProps {
  fill?: string;
}
interface IconsProps {
  name: 'filter' | 'close' | 'reset';
  fill?: string;
}
const FilterIcon = ({ fill = '#1967FF' }: FilterProps) => {
  return (
    <svg
      width='18'
      height='12'
      viewBox='0 0 18 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z' fill={fill} />
    </svg>
  );
};

const CloserIcon = ({ fill = '#1967FF' }: FilterProps) => {
  return (
    <svg
      width='10'
      height='10'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.66665 1.27331L8.72665 0.333313L4.99998 4.05998L1.27331 0.333313L0.333313 1.27331L4.05998 4.99998L0.333313 8.72665L1.27331 9.66665L4.99998 5.93998L8.72665 9.66665L9.66665 8.72665L5.93998 4.99998L9.66665 1.27331Z'
        fill={fill}
      />
    </svg>
  );
};

const ResetIcon = ({ fill = '#1967FF' }: FilterProps) => {
  return (
    <svg
      width='12'
      height='14'
      viewBox='0 0 12 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.5 7.96375C1.5 6.72624 2.0025 5.60125 2.82 4.78375L1.755 3.71875C0.675 4.80625 0 6.30624 0 7.96375C0 11.0237 2.2875 13.5437 5.25 13.9112V12.3962C3.1275 12.0362 1.5 10.1912 1.5 7.96375ZM12 7.96375C12 4.64875 9.315 1.96375 6 1.96375C5.955 1.96375 5.91 1.97125 5.865 1.97125L6.6825 1.15375L5.625 0.0887451L3 2.71375L5.625 5.33875L6.6825 4.28125L5.8725 3.47125C5.9175 3.47125 5.9625 3.46375 6 3.46375C8.4825 3.46375 10.5 5.48125 10.5 7.96375C10.5 10.1912 8.8725 12.0362 6.75 12.3962V13.9112C9.7125 13.5437 12 11.0237 12 7.96375Z'
        fill={fill}
      />
    </svg>
  );
};

export const Icon = ({ name, fill }: IconsProps) => {
  return (
    <div className='icon'>
      {name === 'filter' && <FilterIcon fill={fill} />}
      {name === 'close' && <CloserIcon fill={fill} />}
      {name === 'reset' && <ResetIcon fill={fill} />}
    </div>
  );
};
