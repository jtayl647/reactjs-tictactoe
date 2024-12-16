import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 text-3xl font-bold bg-white border-4 border-gray-600 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {value}
    </button>
  );
};

export default Square;