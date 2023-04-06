import React from 'react';

const LogPanel = ({ logs }) => {
  return (
    <div className="mt-4">
      <h2 className="mb-4 text-2xl font-semibold">Log Panel</h2>
      <div className="rounded-md bg-gray-100 p-4 text-black shadow-md">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default LogPanel;
