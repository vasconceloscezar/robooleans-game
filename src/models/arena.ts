import { Bot } from "./bot";

export interface Arena {
  width: number;
  height: number;
  bots: Bot[];
  getBots(): Bot[];
  updateBotPosition(bot: Bot): void;
  checkCollisions(): void;
  update(): void;
}
