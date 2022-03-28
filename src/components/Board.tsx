import Square from './Square';

import { BoardProps } from './interfaces';

const Board = ({ squares, onClick }: BoardProps) => (
  <div data-testid='board' className='board'>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
