import * as React from 'react';

import * as s from './Button.module.scss';

export enum ButtonColor {
  BLACK = 'black',
  BLUE = 'blue',
  DEFAULT = 'default',
  LIGHTBLUE = 'light-blue',
}

export enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

const Button: React.FC<{ color: ButtonColor; label: string; type: ButtonType }> = ({
  color = ButtonColor.DEFAULT,
  label,
  type = ButtonType.BUTTON,
}) => {
  let classes;

  switch (color) {
    case 'black':
      classes = `${s.button} ${s.black}`;
      break;
    case 'blue':
      classes = `${s.button} ${s.blue}`;
      break;
    case 'light-blue':
      classes = `${s.button} ${s.lightBlue}`;
      break;
    default:
      classes = `${s.button} ${s.default}`;
  }

  return (
    /* eslint-disable react/button-has-type */
    <button className={classes} type={type}>
      {label}
    </button>
    /* eslint-enable react/button-has-type */
  );
};

Button.displayName = 'Button';

export default Button;
