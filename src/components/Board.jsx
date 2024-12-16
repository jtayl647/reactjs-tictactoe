import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mx-auto mb-4 max-w-xs">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;