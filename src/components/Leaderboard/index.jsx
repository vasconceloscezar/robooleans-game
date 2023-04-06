import React from 'react';

const Leaderboard = ({ bots }) => {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-semibold">Leaderboard</h2>
      <div className="rounded-md bg-gray-100 p-4 shadow-md">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="font-semibold">Bot Name</th>
              <th className="font-semibold">Wins</th>
              <th className="font-semibold">Losses</th>
            </tr>
          </thead>
          <tbody>
            {bots.map((bot, index) => (
              <tr key={index}>
                <td>{bot.name}</td>
                <td>{bot.wins}</td>
                <td>{bot.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
