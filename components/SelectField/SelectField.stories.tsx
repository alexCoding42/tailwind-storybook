import { SelectField, SelectFieldProps } from './SelectField';
import { Meta, Story } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Components/SelectField',
  component: SelectField
} as Meta;

// With named export we define component's story
export const Default: Story<SelectFieldProps> = ({ label, border, focusBorder }) => (
  <div className="col-span-12 mb-4 sm:col-span-6 sm:mr-4">
    <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      id="theme"
      name="theme"
      autoComplete="theme"
      className={[
        border,
        focusBorder,
        'block w-full px-3 py-2 mt-1 overflow-hidden bg-white border rounded-md shadow-sm overflow-ellipsis focus:outline-none sm:text-sm'
      ].join(' ')}>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
  </div>
);

// Define default arguments for the Default story
Default.args = {
  label: 'Thème de votre question',
  border: 'border-gray-300',
  focusBorder: 'focus:border-indigo-500 focus:ring-indigo-500'
};

export const WithError: Story<SelectFieldProps> = ({ label, border, focusBorder }) => (
  <div className="col-span-12 mb-4 sm:col-span-6 sm:mr-4">
    <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      id="theme"
      name="theme"
      autoComplete="theme"
      className={[
        border,
        focusBorder,
        'block w-full px-3 py-2 mt-1 overflow-hidden bg-white border rounded-md shadow-sm overflow-ellipsis focus:outline-none sm:text-sm'
      ].join(' ')}>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
  </div>
);

WithError.args = {
  ...Default.args,
  border: 'border-red-500',
  focusBorder: 'focus:border-red-500 focus:ring-red-500'
};
