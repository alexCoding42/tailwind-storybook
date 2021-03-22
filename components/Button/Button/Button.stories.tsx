import { Button, ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Components/Button',
  component: Button
} as Meta;

// With named export we define component's story
export const Default: Story<ButtonProps> = ({ backgroundColor, hover, focus, label }) => (
  <button
    type="submit"
    className={[
      backgroundColor,
      hover,
      focus,
      'inline-flex justify-center px-16 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
    ].join(' ')}>
    {label}
  </button>
);
// Define default arguments for the Default story
Default.args = {
  label: 'Save',
  backgroundColor: 'bg-green-600',
  hover: 'hover:bg-green-700',
  focus: 'focus:ring-green-500'
};

export const NotRounded: Story<ButtonProps> = ({ backgroundColor, hover, focus, label }) => (
  <button
    type="submit"
    className={[
      backgroundColor,
      hover,
      focus,
      'inline-flex justify-center px-16 py-2 text-sm font-medium text-white border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
    ].join(' ')}>
    {label}
  </button>
);
// Define default arguments for the Default story
NotRounded.args = {
  ...Default.args
};

export const WithShadow: Story<ButtonProps> = ({ backgroundColor, hover, focus, label }) => (
  <button
    type="submit"
    className={[
      backgroundColor,
      hover,
      focus,
      'inline-flex justify-center px-16 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2'
    ].join(' ')}>
    {label}
  </button>
);
// Define default arguments for the Default story
WithShadow.args = {
  ...Default.args
};
