import React from 'react';
import { render } from '@testing-library/react';

import Button, { ButtonColor, ButtonType } from './Button';

describe('<Button> component', () => {
  const defaultBtn = <Button label="Test" />;
  const configuredBtn = (
    <Button
      color={ButtonColor.LIGHTBLUE}
      disabled
      id="test-id"
      label="Test"
      name="test-name"
      type={ButtonType.SUBMIT}
    />
  );

  it('renders button with default values', () => {
    const { getByText } = render(defaultBtn);

    const button = getByText('Test');

    expect(button).toBeEnabled();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toHaveAttribute('id');
    expect(button).not.toHaveAttribute('name');
    expect(button).toHaveClass('button-1cs1RpCHfa default-386EA-fdDb');
  });

  it('renders button configured with props', () => {
    const { getByText } = render(configuredBtn);

    const button = getByText('Test');

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('id', 'test-id');
    expect(button).toHaveAttribute('name', 'test-name');
    expect(button).toHaveClass('button-1cs1RpCHfa lightBlue-24V0Dt8AvR');
  });
});
