import React, { useRef, useEffect } from 'react';
import { Timer } from './Timer';
import { ProgressBar } from './ProgressBar';
import { GameState } from '../types/game';

interface GameScreenProps {
  gameState: GameState;
  onSubmitCommand: (command: string) => void;
  onInputChange: (input: string) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  gameState,
  onSubmitCommand,
  onInputChange
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-focus input when component mounts or challenge changes
    if (inputRef.current && gameState.gameStatus === 'playing') {
      inputRef.current.focus();
    }
  }, [gameState.currentChallenge, gameState.gameStatus]);

  useEffect(() => {
    // Auto-scroll to bottom when history updates
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [gameState.gameHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameState.currentInput.trim()) {
      onSubmitCommand(gameState.currentInput.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      {/* CRT Monitor Effect */}
      <div className="relative min-h-screen">
        {/* Scan lines effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900 to-transparent opacity-10 animate-pulse"></div>
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-green-500 opacity-20"
              style={{ top: `${(i * 2)}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="border-b border-green-600 pb-4 mb-4">
            <h1 className="text-2xl text-green-300 mb-2">HACKLIFE TERMINAL v1.0</h1>
            <p className="text-sm text-gray-400">Counter-Hack Protocol Active | Classification: TOP SECRET</p>
          </div>

          {/* Progress Bars */}
          <div className="mb-6">
            <ProgressBar 
              label="SYSTEMS SECURED" 
              progress={gameState.playerProgress} 
              color="green"
            />
            <ProgressBar 
              label="GLOBAL MELTDOWN IMMINENT" 
              progress={gameState.rivalProgress} 
              color="red"
            />
          </div>

          {/* Timer */}
          <Timer 
            timeRemaining={gameState.timeRemaining} 
            isActive={gameState.gameStatus === 'playing'}
          />

          {/* Game History */}
          <div 
            ref={historyRef}
            className="bg-black border border-green-600 p-4 h-96 overflow-y-auto mb-4 text-sm"
          >
            {gameState.gameHistory.map((line, index) => (
              <div key={index} className="mb-1 whitespace-pre-wrap">
                {line.startsWith('>') ? (
                  <span className="text-yellow-400">{line}</span>
                ) : line.startsWith('CHALLENGE') ? (
                  <span className="text-green-300 font-bold">{line}</span>
                ) : (
                  <span>{line}</span>
                )}
              </div>
            ))}
          </div>

          {/* Command Input */}
          {gameState.gameStatus === 'playing' && (
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex items-center">
                <span className="text-green-300 mr-2">C:\HACKLIFE&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={gameState.currentInput}
                  onChange={handleInputChange}
                  className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono"
                  placeholder="Enter command..."
                  disabled={gameState.gameStatus !== 'playing'}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="border-t border-green-600 mt-1"></div>
            </form>
          )}

          {/* Status Line */}
          <div className="text-xs text-gray-500 flex justify-between">
            <span>Progress: {gameState.challengesCompleted}/{gameState.totalChallenges} challenges</span>
            <span>Status: {gameState.gameStatus.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};