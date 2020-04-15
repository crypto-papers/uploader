import * as React from 'react';

import * as s from './Button.module.scss';

/* eslint-disable-next-line import/exports-last */
export enum ButtonColor {
  BLACK = 'black',
  BLUE = 'blue',
  DEFAULT = 'default',
  LIGHTBLUE = 'light-blue',
}

/* eslint-disable-next-line import/exports-last */
export enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

interface IButtonProps {
  color?: ButtonColor;
  disabled?: boolean;
  id?: string;
  label: string;
  name?: string;
  type?: ButtonType;
}

const Button: React.FC<IButtonProps> = ({
  color = ButtonColor.DEFAULT,
  disabled = false,
  id,
  label,
  name: buttonName,
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
    /* Disabling button-has-type rule since type is dynamically generated
       and hence does not conform to expected values */
    /* eslint-disable react/button-has-type */
    <button className={classes} disabled={disabled} id={id} name={buttonName} type={type}>
      {label}
    </button>
    /* eslint-enable react/button-has-type */
  );
};

Button.displayName = 'Button';

export default Button;
