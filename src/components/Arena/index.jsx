import React from 'react';

const Tile = () => {
  return <div className="h-8 w-8 border border-gray-300 bg-gray-200" />;
};

const Arena = () => {
  const arenaSize = 8;

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-semibold">Game Arena</h2>
      <div className="flex w-auto flex-wrap border border-gray-500">
        {[...Array(arenaSize * arenaSize)].map((_, index) => (
          <Tile key={index} />
        ))}
      </div>
    </div>
  );
};

export default Arena;
