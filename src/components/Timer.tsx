import React from 'react';

interface TimerProps {
  timeRemaining: number;
  isActive: boolean;
}

export const Timer: React.FC<TimerProps> = ({ timeRemaining, isActive }) => {
  const urgentColor = timeRemaining <= 3 ? 'text-red-400' : 'text-yellow-400';
  
  return (
    <div className={`font-mono text-lg mb-2 ${isActive ? urgentColor : 'text-gray-500'}`}>
      TIME REMAINING: [{timeRemaining.toString().padStart(2, '0')}]
      {timeRemaining <= 3 && isActive && (
        <span className="ml-2 animate-pulse text-red-500">⚠ CRITICAL ⚠</span>
      )}
    </div>
  );
};