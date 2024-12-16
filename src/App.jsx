import React, { useState } from 'react';
import Status from './components/Status';
import Board from './components/Board';
import Confetti from 'react-confetti'; // Import confetti
import './index.css';

const App = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null); // Track winner state

  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[historyCopy.length - 1];
    const squares = current.squares.slice();

    if (squares[i] || winner) return; // Don't continue if there's a winner

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(historyCopy.concat([{ squares }]));
    setStepNumber(historyCopy.length);
    setXIsNext(!xIsNext);

    const currentWinner = calculateWinner(squares);
    if (currentWinner) {
      setWinner(currentWinner); // Set winner when found
    }
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    setWinner(null); // Reset winner on jump
  };

  const current = history[stepNumber];
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="h-screen flex justify-center items-center bg-blue-200">
      <div className="p-6 bg-white rounded-lg shadow-2xl border-4 border-blue-400">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">TicTacToe</h1>

        {/* Celebration Confetti when winner is present */}
        {winner && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}

        {/* Status and Board Components */}
        <Status status={status} />
        <Board squares={current.squares} onClick={handleClick} />

        <div className="mt-4 text-center">
          <button
            onClick={() => jumpTo(0)}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to calculate winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
