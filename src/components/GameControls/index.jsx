import React, { useState } from 'react';

const GameControls = ({ onStartBattle, onStopBattle }) => {
  const [isBattleActive, setIsBattleActive] = useState(false);

  const handleButtonClick = () => {
    if (isBattleActive) {
      onStopBattle();
    } else {
      onStartBattle();
    }
    setIsBattleActive(!isBattleActive);
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handleButtonClick}
        className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {isBattleActive ? 'Stop!' : 'Battle!'}
      </button>
    </div>
  );
};

export default GameControls;
