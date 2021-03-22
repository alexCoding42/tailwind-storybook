import React, { FC, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  backgroundColor?: string;
  hover?: string;
  focus?: string;
}

export const Button: FC<ButtonProps> = ({ backgroundColor, hover, focus, label }) => {
  return (
    <button type="submit" className={[backgroundColor, hover, focus].join(' ')}>
      {label}
    </button>
  );
};
