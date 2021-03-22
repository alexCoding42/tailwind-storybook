import React, { FC, HTMLAttributes } from 'react';

export interface SelectFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  border?: string;
  focusBorder?: string;
}

export const SelectField: FC<SelectFieldProps> = ({ label, border, focusBorder }) => {
  return (
    <div className="col-span-12 mb-4 sm:col-span-6 sm:mr-4">
      <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id="theme"
        name="theme"
        autoComplete="theme"
        className={[border, focusBorder].join(' ')}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  );
};
