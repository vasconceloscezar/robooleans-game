import React, { useEffect, useState } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import Arena from '../../game/arena';
import { arenaState, botsState } from '../../states/gameState';

const GameArena = () => {
  const bots = useRecoilValue(botsState);
  const arena = useRecoilValue(arenaState);
  const [gameInterval, setGameInterval] = useState(null);

  // console.log('Arena size', arena.width, arena.height);
  // console.log('Arena bots', bots);

  const addArenaBot = useRecoilCallback(({ set }) => (bot) => {
    set(arenaState, (prev) => {
      const newArenaClass = new Arena(8, 8, []);
      newArenaClass.bots = [...prev.bots, bot]; // copy the old array and add the new item
      return newArenaClass;
    });
  });

  const addAllBotsToArena = () => {
    bots.forEach((bot) => {
      addArenaBot(bot);
    });
  };

  useEffect(() => {
    if (gameInterval === null) {
      // Game is not running
      return;
    }

    const update = () => {
      // Update arena and bot positions
      arena.update();

      // Cause a re-render by updating the component state
      setGameInterval((gameInterval) => gameInterval + 1);
    };

    const intervalId = setInterval(update, 1000 / 2); // Update 2 times per second
    return () => clearInterval(intervalId); // Clean up interval when component is unmounted
  }, [gameInterval, arena]);

  const handleStartBattle = () => {
    if (gameInterval === null) {
      // Start the game
      addAllBotsToArena();
      setGameInterval(0);
    } else {
      // Stop the game
      setGameInterval(null);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="mb-4 text-2xl font-semibold">Arena</h2>
      <div className="rounded-md bg-gray-100 p-4 shadow-md">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${arena.width}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${arena.height}, minmax(0, 1fr))`,
          }}
        >
          {arena.getBots().map((bot) => (
            <div
              key={bot.name}
              className="h-full w-full border border-red-800 p-1"
              style={{
                gridColumn: bot.position.x + 1,
                gridRow: bot.position.y + 1,
              }}
            >
              <div className="h-full w-full bg-blue-500 text-center text-xs text-white">{bot.name}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-4 rounded bg-blue-500 px-4 py-2 font-semibold text-white" onClick={() => handleStartBattle()}>
        {gameInterval === null ? 'Start' : 'Stop'}
      </button>
    </div>
  );
};

export default GameArena;
