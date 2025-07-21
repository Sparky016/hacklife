import React from 'react';

interface EndScreenProps {
  isWin: boolean;
  onRestart: () => void;
  playerProgress: number;
  rivalProgress: number;
  challengesCompleted: number;
}

export const EndScreen: React.FC<EndScreenProps> = ({ 
  isWin, 
  onRestart, 
  playerProgress,
  rivalProgress,
  challengesCompleted
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onRestart();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="text-center max-w-4xl">
        {isWin ? (
          <>
            {/* Victory ASCII Art */}
            <pre className="text-green-300 text-xs sm:text-sm mb-6 leading-tight">
{`
██╗   ██╗██╗ ██████╗████████╗ ██████╗ ██████╗ ██╗   ██╗
██║   ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
██║   ██║██║██║        ██║   ██║   ██║██████╔╝ ╚████╔╝ 
╚██╗ ██╔╝██║██║        ██║   ██║   ██║██╔══██╗  ╚██╔╝  
 ╚████╔╝ ██║╚██████╗   ██║   ╚██████╔╝██║  ██║   ██║   
  ╚═══╝  ╚═╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
`}
            </pre>
            
            <div className="text-left space-y-2 mb-8 text-sm">
              <p className="text-green-300">MISSION STATUS: COMPLETE</p>
              <p className="text-yellow-400">GLOBAL SYSTEMS: SECURED</p>
              <p>────────────────────────────────────────────────</p>
              <p>MISSION REPORT:</p>
              <p>• Nyx's attack successfully neutralized</p>
              <p>• {challengesCompleted} security protocols executed</p>
              <p>• Systems secured: {playerProgress}%</p>
              <p>• You have mastered the command line!</p>
              <p>• Global infrastructure is safe</p>
              <p>────────────────────────────────────────────────</p>
              <p className="text-green-400">CONGRATULATIONS, CYBER HERO!</p>
              <p>Your command-line skills have saved the world.</p>
              <p>You are now certified in Windows command operations!</p>
            </div>
          </>
        ) : (
          <>
            {/* Defeat ASCII Art */}
            <pre className="text-red-400 text-xs sm:text-sm mb-6 leading-tight">
{`
 ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝
`}
            </pre>
            
            <div className="text-left space-y-2 mb-8 text-sm">
              <p className="text-red-400">MISSION STATUS: FAILED</p>
              <p className="text-yellow-400">GLOBAL SYSTEMS: COMPROMISED</p>
              <p>────────────────────────────────────────────────</p>
              <p>MISSION REPORT:</p>
              <p>• Nyx has completed the global meltdown</p>
              <p>• {challengesCompleted} challenges completed out of 20</p>
              <p>• Your progress: {playerProgress}%</p>
              <p>• Nyx's attack progress: {rivalProgress}%</p>
              <p>• Command-line training is essential for success</p>
              <p>────────────────────────────────────────────────</p>
              <p className="text-yellow-400">DON'T GIVE UP!</p>
              <p>Every failure is a step toward mastery.</p>
              <p>Study the commands and try again!</p>
            </div>
          </>
        )}

        <div className="text-center">
          <p className="text-green-300 mb-4 animate-pulse">Press ENTER to try again...</p>
          <div 
            className="inline-block px-6 py-2 border-2 border-green-400 cursor-pointer hover:bg-green-400 hover:text-black transition-all duration-200"
            onClick={onRestart}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            [ RESTART MISSION ]
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          <p>Keep practicing Windows commands to become a true command-line master!</p>
        </div>
      </div>
    </div>
  );
};