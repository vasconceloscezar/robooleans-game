import { atom, selector } from 'recoil';
import { Arena, Bot } from '../models';

// Define the atom for the arena state
export const arenaState = atom<Arena>({
  key: 'arenaState',
  default: {
    width: 10,
    height: 10,
    bots: [],
    getBots: () => [],
    updateBotPosition: (bot: Bot) => {},
    checkCollisions: () => {},
    update: () => {},
  },
});

export const botsState = atom<Bot[]>({
  key: 'botsState',
  default: [],
});

export const updateArenaState = selector<Arena>({
  key: 'updateArenaState',
  get: ({ get }) => get(arenaState),
  set: ({ set }, newArena) => set(arenaState, newArena),
});

// Define a selector for updating the bots state
export const updateBotsState = selector<Bot[]>({
  key: 'updateBotsState',
  get: ({ get }) => get(botsState),
  set: ({ set }, newBots) => set(botsState, newBots),
});
