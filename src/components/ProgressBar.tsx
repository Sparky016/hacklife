import React from 'react';

interface ProgressBarProps {
  label: string;
  progress: number;
  color: 'green' | 'red';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  progress, 
  color,
  className = '' 
}) => {
  const fillColor = color === 'green' ? 'bg-green-500' : 'bg-red-500';
  const borderColor = color === 'green' ? 'border-green-400' : 'border-red-400';

  return (
    <div className={`mb-2 ${className}`}>
      <div className="text-green-400 text-sm mb-1 font-mono">
        {label}: {progress}%
      </div>
      <div className={`border-2 ${borderColor} bg-black h-6 relative overflow-hidden`}>
        <div 
          className={`${fillColor} h-full transition-all duration-500 ease-out relative`}
          style={{ width: `${progress}%` }}
        >
          {/* Retro scan line effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
        </div>
        
        {/* Progress bar segments for retro look */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="flex-1 border-r border-gray-600 opacity-30"
              style={{ borderRightWidth: i === 19 ? '0' : '1px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};