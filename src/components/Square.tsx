import { SquareProps } from './interfaces';

const Square = ({ value, onClick }: SquareProps) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
