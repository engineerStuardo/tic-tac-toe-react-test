import { useState } from 'react';

export const useCalculation = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);

  return { history, stepNumber };
};
