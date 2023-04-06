import React, { useState } from 'react';
import ConfigPanel from './components/ConfigPanel';
import GameControls from './components/GameControls';
import Arena from './components/Arena';
import Leaderboard from './components/Leaderboard';
import GameClock from './components/GameClock';
import LogPanel from './components/LogPanel';
import { useRecoilState, useRecoilValue } from 'recoil';
import { arenaState, botsState } from './states/gameState';
import Bot from './game/bots';

const defaultBots = [
  {
    name: 'Bot 1',
    booleanValue: true,
    operation: 'AND',
    speed: 1,
    direction: 'UP',
    position: { x: 4, y: 0 },
    wins: 0,
    losses: 0,
  },
  {
    name: 'Bot 2',
    booleanValue: false,
    operation: 'OR',
    speed: 1,
    direction: 'RIGHT',
    position: { x: 0, y: 4 },
    wins: 0,
    losses: 0,
  },
  {
    name: 'Bot 3',
    booleanValue: true,
    operation: 'AND',
    speed: 1,
    direction: 'DOWN',
    position: { x: 2, y: 2 },
    wins: 0,
    losses: 0,
  },
  {
    name: 'Bot 4',
    booleanValue: false,
    operation: 'OR',
    speed: 1,
    direction: 'LEFT',
    position: { x: 3, y: 1 },
    wins: 0,
    losses: 0,
  },
];

function App() {
  const [bots, setBots] = useRecoilState(botsState);
  const handleStartBattle = () => {
    console.log('Battle started');

    const newBots = defaultBots.map((bot) => {
      const newBot = new Bot(bot.name, bot.booleanValue, bot.operation, bot.speed, bot.direction, bot.position);
      return newBot;
    });
    setBots(newBots);
    // Implement logic for starting the battle
  };

  const handleStopBattle = () => {
    console.log('Battle stopped');
    // Implement logic for stopping the battle
  };

  const logs = ['Bot 1 collided with Bot 2', 'Bot 3 collided with Bot 4'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">Boole Bots Game</h1>
      {/* <ConfigPanel /> */}
      <GameControls onStartBattle={handleStartBattle} onStopBattle={handleStopBattle} />
      <Arena />
      <Leaderboard bots={bots} />
      <GameClock />
      <LogPanel logs={logs} />
    </div>
  );
}

export default App;
