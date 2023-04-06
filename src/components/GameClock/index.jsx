import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { arenaState } from '../../states/gameState';

const GameClock = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-2 text-2xl font-semibold">Game Clock</h2>
      <div className="rounded-md bg-gray-100 p-4 text-black shadow-md">
        <span>Elapsed Time: {elapsedTime} seconds</span>
      </div>
    </div>
  );
};

export default GameClock;
