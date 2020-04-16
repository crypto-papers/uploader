import * as React from 'react';

import './Button.module.scss';

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
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  type?: ButtonType;
}

const Button: React.FC<IButtonProps> = ({
  color = ButtonColor.DEFAULT,
  disabled = false,
  id,
  label,
  name: buttonName,
  onClick,
  type = ButtonType.BUTTON,
}) => {
  let classes;

  switch (color) {
    case 'black':
      classes = 'button black';
      break;
    case 'blue':
      classes = 'button blue';
      break;
    case 'light-blue':
      classes = 'button lightBlue';
      break;
    default:
      classes = 'button default';
  }

  return (
    /* Disabling button-has-type rule since type is dynamically generated
       and hence does not conform to expected values */
    /* eslint-disable react/button-has-type */
    <button
      disabled={disabled}
      id={id}
      name={buttonName}
      styleName={classes}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
    /* eslint-enable react/button-has-type */
  );
};

Button.displayName = 'Button';

export default Button;
