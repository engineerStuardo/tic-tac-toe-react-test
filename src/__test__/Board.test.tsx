import React from 'react';
import { render, screen } from '@testing-library/react';

import Board from '../components/Board';

const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onClick = jest.fn();

describe('Board component', () => {
  test('Should match a snapshot', () => {
    const { container } = render(<Board squares={squares} onClick={onClick} />);
    expect(container).toMatchSnapshot();
  });

  test('Should be a "board" class in the component', () => {
    render(<Board squares={squares} onClick={onClick} />);
    expect(screen.getByTestId('board')).toBeTruthy();
  });
});
