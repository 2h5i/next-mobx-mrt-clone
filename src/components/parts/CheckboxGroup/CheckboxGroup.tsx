import React from 'react';

interface CheckboxGroupoProps {
  values: string[];
  checkedList: string[];
  onChangeCheckedList: (v: string[]) => void;
}

export const CheckboxGroup = (props: CheckboxGroupoProps) => {
  const { values, checkedList, onChangeCheckedList } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(checkedList);
    const pushed = checkedList.push(e.target.value);
    onChangeCheckedList(checkedList);
    console.log(checkedList, '??');
    console.log(pushed, 'PUSHED');
    console.log(e.target);
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
            checked={checkedList.indexOf(v) !== -1 ? true : false}
            value={v}
          />
          <label htmlFor={v}>{v}</label>
        </div>
      ))}
    </div>
  );
};
