import React from 'react';

interface RadioGroupProps {
  values: string[];
  name: string;
  defaultValue: string;
  onChangeRadio: (v: string) => void;
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { values, name, defaultValue, onChangeRadio } = props;

  const handleChange = e => {
    const { value } = e.target;
    onChangeRadio(value);
  };

  return (
    <div>
      {values.map(v => (
        <div key={v}>
          <input
            type='radio'
            id={v}
            name={name}
            value={v}
            checked={defaultValue === v}
            onChange={handleChange}
          />
          <label htmlFor={v}>{v}</label>
        </div>
      ))}
    </div>
  );
};
