import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onStart();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="text-center max-w-4xl">
        {/* ASCII Art Title */}
        <pre className="text-green-300 text-xs sm:text-sm mb-8 leading-tight">
{`
 ██░ ██  ▄▄▄       ▄████▄   ██ ▄█▀    ██▓     ██▓  █████▒▓█████ 
▓██░ ██▒▒████▄    ▒██▀ ▀█   ██▄█▒    ▓██▒    ▓██▒▓██   ▒ ▓█   ▀ 
▒██▀▀██░▒██  ▀█▄  ▒▓█    ▄ ▓███▄░    ▒██░    ▒██▒▒████ ░ ▒███   
░▓█ ░██ ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄    ▒██░    ░██░░▓█▒  ░ ▒▓█  ▄ 
░▓█▒░██▓ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄   ░██████▒░██░░▒█░    ░▒████▒
 ▒ ░░▒░▒ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒   ░ ▒░▓  ░░▓   ▒ ░    ░░ ▒░ ░
 ▒ ░▒░ ░  ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░   ░ ░ ▒  ░ ▒ ░ ░       ░ ░  ░
 ░  ░░ ░  ░   ▒   ░        ░ ░░ ░      ░ ░    ▒ ░ ░ ░       ░   
 ░  ░  ░      ░  ░░ ░      ░  ░          ░  ░ ░             ░  ░
                  ░                                              
`}
        </pre>

        <div className="text-left space-y-2 mb-8 text-sm">
          <p className="text-green-300">CLASSIFIED: PROJECT HACKLIFE</p>
          <p className="text-yellow-400">STATUS: CRITICAL SECURITY BREACH DETECTED</p>
          <p>────────────────────────────────────────────────</p>
          <p>INTELLIGENCE REPORT:</p>
          <p>• Rival hacker "NYX" has penetrated global infrastructure</p>
          <p>• System meltdown imminent in T-minus 200 seconds</p>
          <p>• Only a master of command-line operations can stop the attack</p>
          <p>• You must successfully execute 20 security protocols</p>
          <p>• Each challenge has a 20-second time limit</p>
          <p>• Failure will advance Nyx's devastating attack</p>
          <p>────────────────────────────────────────────────</p>
          <p className="text-yellow-400">MISSION OBJECTIVE:</p>
          <p>Learn and master Windows command-line operations</p>
          <p>Type commands quickly and accurately to save the world!</p>
          <p>────────────────────────────────────────────────</p>
        </div>

        <div className="text-center">
          <p className="text-green-300 mb-4 animate-pulse">Press ENTER to begin the counter-hack...</p>
          <div 
            className="inline-block px-6 py-2 border-2 border-green-400 cursor-pointer hover:bg-green-400 hover:text-black transition-all duration-200"
            onClick={onStart}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            [ START MISSION ]
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          <p>System Version: HackLife v1.0 | Security Level: MAXIMUM</p>
          <p>Educational Game • Learn Windows Commands • Save The World</p>
        </div>
      </div>
    </div>
  );
};