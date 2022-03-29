import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('Game component', () => {
  test('Should match a snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('Should display title in h1 tag', () => {
    render(<App />);
    expect(screen.getByTestId('title')).toBeTruthy();
  });

  test('Title should be "React Tic Tac Toe - With Hooks"', () => {
    render(<App />);
    expect(screen.getByText('Tic Tac Toe - React Test')).toBeTruthy();
  });

  test('Should have one "info-wrapper" class', () => {
    render(<App />);
    expect(screen.getByTestId('info-wrapper')).toBeTruthy();
  });

  test('"History" text should be in the screen', () => {
    render(<App />);
    expect(screen.getByText('History')).toBeTruthy();
  });

  test('"Next Player: X" text should be in the screen when the game starts', () => {
    render(<App />);
    expect(screen.getByText('Next Player: X')).toBeTruthy();
  });
});
