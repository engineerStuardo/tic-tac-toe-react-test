import { MouseEventHandler } from 'react';

export interface SquareProps {
  value: string | number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export interface BoardProps {
  squares: number[];
  onClick: (i: number) => void;
}
