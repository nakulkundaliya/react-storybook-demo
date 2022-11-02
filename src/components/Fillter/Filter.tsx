import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { CheckBoxGroup } from '../CheckBoxGroup/CheckBoxGroup';
import { Collapse } from '../Collapse/Collapse';
import { Icon } from '../Icon/Icon';
import { RadioButtonGroup } from '../RadioButtonGroup/RadioButtonGroup';
import './Filter.css';

interface FilterProps {
  items: any; //TODO
  onChangeFilter: (name: string, value: string) => void;
  onClearFilter: (name: string) => void;
}

export const Filter = ({
  items,
  onChangeFilter,
  onClearFilter,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [severifyLabelText, setSeverifyLabelText] = useState<string>('');
  const [timeLabelText, setTimeLabelText] = useState<string>('');

  useEffect(() => {
    let severifyText = '';
    let timeText = '';
    items.forEach((item: any) => {
      if (item.name === 'severity') {
        severifyText = severifyText + item.selectedItems.join(', ');
      }
      if (item.name === 'time') {
        timeText = timeText + item.selectedItems;
      }
    });
    setTimeLabelText(timeText);
    setSeverifyLabelText(severifyText);
  }, [items]);

  return (
    <div className='filter-wrapper'>
      <div className='filter-container'>
        <Button
          variant={isOpen ? 'contained' : 'outlined'}
          label='Filter'
          startIcon={
            <Icon name={'filter'} fill={isOpen ? '#fff' : '#1967FF'} />
          }
          onClick={() => setIsOpen(!isOpen)}
        />
        {severifyLabelText && (
          <Button
            backgroundColor='#344054'
            color='white'
            label={`Severity: ${severifyLabelText}`}
            variant='outlined'
            startIcon={<Icon name={'close'} fill={'#fff'} />}
            onClick={() => onClearFilter('severity')}
          />
        )}
        {timeLabelText && (
          <Button
            backgroundColor='#344054'
            color='white'
            label={`Time:  ${timeLabelText}`}
            variant='outlined'
            startIcon={<Icon name={'close'} fill={'#fff'} />}
            onClick={() => onClearFilter('time')}
          />
        )}
      </div>
      <div>
        {isOpen && (
          <>
            <div className='filter-header'>
              <div className='filter-subheader'>
                <h3>Filter data by</h3>
                <div className='reset-button'>
                  <Button
                    color='#4785FF'
                    label='Reset'
                    variant='default'
                    resetIcon={<Icon name={'reset'} fill={'#4785FF'} />}
                    onClick={() => {
                      onClearFilter('severity')
                      onClearFilter('time')
                    }}
                  />
                </div>
              </div>

              {items.map((item: any, index: string) => {
                // TODO
                const { title, name, type, data, selectedItems } = item;
                return (
                  <div className='collapse-container'>
                    <Collapse title={title} key={index}>
                      {type === 'checkbox' && (
                        <CheckBoxGroup
                          items={data}
                          selectedItems={selectedItems}
                          onChange={(value) => onChangeFilter(name, value)}
                        />
                      )}
                      {type === 'radio' && (
                        <RadioButtonGroup
                          items={data}
                          selectedItem={selectedItems}
                          onChange={(value) => onChangeFilter(name, value)}
                        />
                      )}
                    </Collapse>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
