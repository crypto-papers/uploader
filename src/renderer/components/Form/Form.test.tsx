import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

import Form from './Form';

describe('<Form> component', () => {
  it('is accessible', async () => {
    const { container } = render(<Form />);

    const axeReport = await axe(container);

    expect(axeReport).toHaveNoViolations();
  });
});
