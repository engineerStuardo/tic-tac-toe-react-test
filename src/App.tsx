import Board from './components/Board';
import Moves from './components/Moves';
import { useCalculation } from './hooks/useCalculation';

function App() {
  const { history, stepNumber, handleClick, jumpTo, winner, xO } =
    useCalculation();

  return (
    <>
      <h1 data-testid='title'>Tic Tac Toe - React Test</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div data-testid='info-wrapper' className='info-wrapper'>
        <div>
          <h3>History</h3>
          <Moves history={history} jumpTo={jumpTo} />
        </div>
        <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + xO}</h3>
      </div>
    </>
  );
}

export default App;
