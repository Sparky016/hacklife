import React from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import { StartScreen } from './components/StartScreen';
import { LanguageSelectScreen } from './components/LanguageSelectScreen';
import { GameScreen } from './components/GameScreen';
import { EndScreen } from './components/EndScreen';

function App() {
  const { gameState, selectLanguage, startGame, submitCommand, resetGame, setCurrentInput } = useGameLogic();

  const renderScreen = () => {
    switch (gameState.gameStatus) {
      case 'start':
        return <StartScreen onStart={() => selectLanguage('windows')} />;
      
      case 'language-select':
        return <LanguageSelectScreen onSelectLanguage={(lang) => {
          selectLanguage(lang);
          setTimeout(startGame, 100);
        }} />;
      
      case 'playing':
        return (
          <GameScreen
            gameState={gameState}
            onSubmitCommand={submitCommand}
            onInputChange={setCurrentInput}
          />
        );
      
      case 'won':
      case 'lost':
        return (
          <EndScreen
            isWin={gameState.gameStatus === 'won'}
            onRestart={resetGame}
            playerProgress={gameState.playerProgress}
            rivalProgress={gameState.rivalProgress}
            challengesCompleted={gameState.challengesCompleted}
          />
        );
      
      default:
        return <StartScreen onStart={() => selectLanguage('windows')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {renderScreen()}
    </div>
  );
}

export default App;