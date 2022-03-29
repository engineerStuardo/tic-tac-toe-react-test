import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Square from '../components/Square';

const value = 'X';
const handleClick = jest.fn();

describe('Square component', () => {
  test('Should match a snapshot', () => {
    const { container } = render(
      <Square value={value} onClick={handleClick} />
    );
    expect(container).toMatchSnapshot();
  });

  test('Should display value text in button', () => {
    render(<Square value={value} onClick={handleClick} />);
    expect(screen.getByText('X')).toBeTruthy();
  });

  test('Calls onClick prop when clicked', () => {
    render(<Square onClick={handleClick} value={value} />);
    fireEvent.click(screen.getByText(/X/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
