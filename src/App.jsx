import React from 'react';
import ConfigPanel from './components/ConfigPanel';
import GameControls from './components/GameControls';
import Arena from './components/Arena';
import Leaderboard from './components/Leaderboard';
import GameClock from './components/GameClock';
import LogPanel from './components/LogPanel';

function App() {
  const handleStartBattle = () => {
    console.log('Battle started');
    // Implement logic for starting the battle
  };

  const handleStopBattle = () => {
    console.log('Battle stopped');
    // Implement logic for stopping the battle
  };
  const bots = [
    { name: 'Bot 1', wins: 5, losses: 3 },
    { name: 'Bot 2', wins: 4, losses: 4 },
    { name: 'Bot 3', wins: 3, losses: 5 },
    { name: 'Bot 4', wins: 2, losses: 6 },
  ];

  const logs = ['Bot 1 collided with Bot 2', 'Bot 3 collided with Bot 4'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">Boole Bots Game</h1>
      <ConfigPanel />
      <GameControls onStartBattle={handleStartBattle} onStopBattle={handleStopBattle} />
      <Arena />
      <Leaderboard bots={bots} />
      <GameClock />
      <LogPanel logs={logs} />
    </div>
  );
}

export default App;
