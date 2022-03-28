import React from 'react';

import Board from './components/Board';
import { useCalculation } from './hooks/useCalculation';

function App() {
  const { history, stepNumber } = useCalculation();

  return (
    <>
      <h1 data-testid='title'>Tic Tac Toe - React Test</h1>
      <Board squares={history[stepNumber]} />
      <div data-testid='info-wrapper' className='info-wrapper'>
        <div>
          <h3>History</h3>
          {/* Build moves history component */}
        </div>
        {/* Showing winnier or next player */}
      </div>
    </>
  );
}

export default App;
