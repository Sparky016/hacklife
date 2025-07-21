export interface Challenge {
  id: string;
  description: string;
  correctCommand: string;
  explanation?: string;
}

export interface GameState {
  currentChallenge: Challenge | null;
  playerProgress: number;
  rivalProgress: number;
  timeRemaining: number;
  gameStatus: 'start' | 'playing' | 'won' | 'lost';
  challengesCompleted: number;
  totalChallenges: number;
  gameHistory: string[];
  currentInput: string;
}

export interface GameStats {
  challengesAttempted: number;
  challengesSuccess: number;
  averageTime: number;
}