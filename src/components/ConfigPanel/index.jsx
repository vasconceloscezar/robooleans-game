import React, { useState } from 'react';

const BotPanel = ({ index }) => {
  const [botName, setBotName] = useState('');
  const [booleanValue, setBooleanValue] = useState('0');
  const [booleanOperation, setBooleanOperation] = useState('AND');
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState('North');

  return (
    <div className="bg-slate space-y-2 rounded-lg border p-4 text-black shadow-md">
      <h3 className="text-xl font-semibold">Bot {index + 1}</h3>
      <div className="flex items-center">
        <label htmlFor={`botName${index}`} className="w-32">
          Name:
        </label>
        <input
          type="text"
          id={`botName${index}`}
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="w-full rounded-md border p-1"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor={`booleanValue${index}`} className="w-32">
          Boolean Value:
        </label>
        <select
          id={`booleanValue${index}`}
          value={booleanValue}
          onChange={(e) => setBooleanValue(e.target.value)}
          className="w-full rounded-md border p-1"
        >
          <option value="0">0</option>
          <option value="1">1</option>
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor={`booleanOperation${index}`} className="w-32">
          Operation:
        </label>
        <select
          id={`booleanOperation${index}`}
          value={booleanOperation}
          onChange={(e) => setBooleanOperation(e.target.value)}
          className="w-full rounded-md border p-1"
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="XOR">XOR</option>
          <option value="NOT">NOT</option>
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor={`speed${index}`} className="w-32">
          Speed:
        </label>
        <input
          type="range"
          min="1"
          max="5"
          id={`speed${index}`}
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor={`direction${index}`} className="w-32">
          Direction:
        </label>
        <select
          id={`direction${index}`}
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
          className="w-full rounded-md border p-1"
        >
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>
    </div>
  );
};

const ConfigPanel = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {[0, 1, 2, 3].map((index) => (
        <BotPanel key={index} index={index} />
      ))}
    </div>
  );
};

export default ConfigPanel;
