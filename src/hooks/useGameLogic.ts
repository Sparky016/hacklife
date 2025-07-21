import { useState, useEffect, useCallback } from 'react';
import { GameState, Challenge } from '../types/game';
import { challenges } from '../data/challenges';
import { validateCommand } from '../utils/commandValidator';

const TIMER_DURATION = 20;
const CHALLENGES_TO_WIN = 20;
const RIVAL_PROGRESS_PER_FAILURE = 12;
const PLAYER_PROGRESS_PER_SUCCESS = 5;

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentChallenge: null,
    playerProgress: 0,
    rivalProgress: 0,
    timeRemaining: TIMER_DURATION,
    gameStatus: 'start',
    challengesCompleted: 0,
    totalChallenges: CHALLENGES_TO_WIN,
    gameHistory: [],
    currentInput: ''
  });

  const [usedChallenges, setUsedChallenges] = useState<Set<string>>(new Set());

  const getRandomChallenge = useCallback((): Challenge => {
    const availableChallenges = challenges.filter(c => !usedChallenges.has(c.id));
    
    if (availableChallenges.length === 0) {
      // Reset if all challenges have been used
      setUsedChallenges(new Set());
      return challenges[Math.floor(Math.random() * challenges.length)];
    }
    
    const randomIndex = Math.floor(Math.random() * availableChallenges.length);
    const selectedChallenge = availableChallenges[randomIndex];
    
    setUsedChallenges(prev => new Set([...prev, selectedChallenge.id]));
    return selectedChallenge;
  }, [usedChallenges]);

  const addToHistory = useCallback((message: string) => {
    setGameState(prev => ({
      ...prev,
      gameHistory: [...prev.gameHistory, message]
    }));
  }, []);

  const startGame = useCallback(() => {
    const firstChallenge = getRandomChallenge();
    setGameState(prev => ({
      ...prev,
      gameStatus: 'playing',
      currentChallenge: firstChallenge,
      timeRemaining: TIMER_DURATION,
      gameHistory: [
        '> SYSTEM BREACH DETECTED',
        '> RIVAL HACKER "NYX" ATTEMPTING GLOBAL MELTDOWN',
        '> INITIATING COUNTER-HACK PROTOCOL...',
        '> YOU MUST COMPLETE 20 SECURITY CHALLENGES TO STOP NYX',
        '',
        `CHALLENGE 1: ${firstChallenge.description}`
      ]
    }));
  }, [getRandomChallenge]);

  const nextChallenge = useCallback(() => {
    if (gameState.challengesCompleted >= CHALLENGES_TO_WIN) {
      setGameState(prev => ({
        ...prev,
        gameStatus: 'won'
      }));
      return;
    }

    const nextChal = getRandomChallenge();
    setGameState(prev => ({
      ...prev,
      currentChallenge: nextChal,
      timeRemaining: TIMER_DURATION
    }));
    
    addToHistory(`CHALLENGE ${gameState.challengesCompleted + 1}: ${nextChal.description}`);
  }, [gameState.challengesCompleted, getRandomChallenge, addToHistory]);

  const handleSuccess = useCallback(() => {
    const newPlayerProgress = Math.min(100, gameState.playerProgress + PLAYER_PROGRESS_PER_SUCCESS);
    const newChallengesCompleted = gameState.challengesCompleted + 1;
    
    addToHistory(`> SUCCESS! Command executed successfully.`);
    addToHistory(`> SYSTEMS SECURED: ${newPlayerProgress}%`);
    
    setGameState(prev => ({
      ...prev,
      playerProgress: newPlayerProgress,
      challengesCompleted: newChallengesCompleted,
      currentInput: ''
    }));

    if (newChallengesCompleted >= CHALLENGES_TO_WIN) {
      setTimeout(() => {
        setGameState(prev => ({ ...prev, gameStatus: 'won' }));
      }, 1000);
    } else {
      setTimeout(nextChallenge, 1500);
    }
  }, [gameState.playerProgress, gameState.challengesCompleted, addToHistory, nextChallenge]);

  const handleFailure = useCallback((reason: 'timeout' | 'wrong') => {
    const newRivalProgress = Math.min(100, gameState.rivalProgress + RIVAL_PROGRESS_PER_FAILURE);
    
    if (reason === 'timeout') {
      addToHistory(`> TIME OUT! Nyx advances the attack.`);
    } else {
      addToHistory(`> INCORRECT COMMAND! Nyx exploits your mistake.`);
    }
    
    if (gameState.currentChallenge) {
      addToHistory(`> Correct command was: ${gameState.currentChallenge.correctCommand}`);
      if (gameState.currentChallenge.explanation) {
        addToHistory(`> Info: ${gameState.currentChallenge.explanation}`);
      }
    }
    
    addToHistory(`> GLOBAL MELTDOWN PROGRESS: ${newRivalProgress}%`);
    
    setGameState(prev => ({
      ...prev,
      rivalProgress: newRivalProgress,
      currentInput: ''
    }));

    if (newRivalProgress >= 100) {
      setTimeout(() => {
        setGameState(prev => ({ ...prev, gameStatus: 'lost' }));
      }, 1000);
    } else {
      setTimeout(nextChallenge, 2000);
    }
  }, [gameState.rivalProgress, gameState.currentChallenge, addToHistory, nextChallenge]);

  const submitCommand = useCallback((command: string) => {
    if (!gameState.currentChallenge || gameState.gameStatus !== 'playing') return;

    if (validateCommand(command, gameState.currentChallenge.correctCommand)) {
      handleSuccess();
    } else {
      handleFailure('wrong');
    }
  }, [gameState.currentChallenge, gameState.gameStatus, handleSuccess, handleFailure]);

  const resetGame = useCallback(() => {
    setGameState({
      currentChallenge: null,
      playerProgress: 0,
      rivalProgress: 0,
      timeRemaining: TIMER_DURATION,
      gameStatus: 'start',
      challengesCompleted: 0,
      totalChallenges: CHALLENGES_TO_WIN,
      gameHistory: [],
      currentInput: ''
    });
    setUsedChallenges(new Set());
  }, []);

  // Timer effect
  useEffect(() => {
    if (gameState.gameStatus !== 'playing' || !gameState.currentChallenge) return;

    if (gameState.timeRemaining <= 0) {
      handleFailure('timeout');
      return;
    }

    const timer = setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        timeRemaining: prev.timeRemaining - 1
      }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameState.timeRemaining, gameState.gameStatus, gameState.currentChallenge, handleFailure]);

  return {
    gameState,
    startGame,
    submitCommand,
    resetGame,
    setCurrentInput: (input: string) => 
      setGameState(prev => ({ ...prev, currentInput: input }))
  };
};