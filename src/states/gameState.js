import { atom, selector } from 'recoil';
import Arena from '../game/arena';

export const botsState = atom({
  key: 'botsState',
  default: [],
});

export const arenaState = atom({
  key: 'arenaState',
  default: new Arena(8, 8, []),
});

export const leaderboardState = selector({
  key: 'leaderboardState',
  get: ({ get }) => {
    const bots = get(botsState);
    return bots.slice().sort((a, b) => (a.wins > b.wins ? -1 : a.wins < b.wins ? 1 : 0));
  },
});
