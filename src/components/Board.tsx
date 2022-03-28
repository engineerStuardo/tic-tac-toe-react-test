import Square from './Square';

import { BoardProps } from './interfaces';

const Board = ({ squares }: BoardProps) => (
  <div data-testid='board' className='board'>
    {squares.map((square, i) => (
      <Square key={i} value={square} />
    ))}
  </div>
);

export default Board;
