export interface Challenge {
  id: string;
  description: string;
  correctCommand: {
    windows: string;
    bash: string;
  };
  explanation?: string;
}

export type CommandLanguage = 'windows' | 'bash';

export interface GameState {
  currentChallenge: Challenge | null;
  commandLanguage: CommandLanguage;
  playerProgress: number;
  rivalProgress: number;
  timeRemaining: number;
  gameStatus: 'start' | 'language-select' | 'playing' | 'won' | 'lost';
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