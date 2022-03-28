import { SquareProps } from './interfaces';

const Square = ({ value }: SquareProps) => {
  const style = value ? `squares ${value}` : `squares`;

  return <button className={style}>{value}</button>;
};

export default Square;
