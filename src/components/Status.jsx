import React from 'react';

const Status = ({ status }) => {
  return (
    <div className="text-center mb-4">
      <p className="text-2xl font-semibold text-gray-800">{status}</p>
    </div>
  );
};

export default Status;