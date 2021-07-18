import React from 'react';

interface CheckboxGroupoProps {
  values: string[];
  checkedList: string[];
  onChangeCheckedList: any;
}

export const CheckboxGroup = (props: CheckboxGroupoProps) => {
  const { values, checkedList, onChangeCheckedList } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!checkedList.includes(e.target.value)) {
      onChangeCheckedList(prev => [...prev, e.target.value]);
    } else {
      onChangeCheckedList(prev => {
        const filtered = prev.filter(v => v !== e.target.value);
        return filtered;
      });
    }
  };

  return (
    <div>
      {values.map(v => (
        <div key={v}>
          <input
            type='checkbox'
            id={v}
            name={v}
            onChange={handleChange}
            checked={checkedList.includes(v)}
            value={v}
          />
          <label htmlFor={v}>{v}</label>
        </div>
      ))}
    </div>
  );
};
