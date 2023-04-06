export interface Bot {
  name: string;
  booleanValue: number;
  operation: string;
  speed: number;
  direction: string;
  position: { x: number; y: number };
  wins: number;
  losses: number;
  ties: number;
  move(): void;
  changeDirection(): void;
  performBooleanOperation(value: number): number | null;
  incrementWins(): void;
  incrementLosses(): void;
  incrementTies(): void;
}
