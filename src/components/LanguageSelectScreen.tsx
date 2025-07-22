import React from 'react';
import { CommandLanguage } from '../types/game';

interface LanguageSelectScreenProps {
  onSelectLanguage: (language: CommandLanguage) => void;
}

export const LanguageSelectScreen: React.FC<LanguageSelectScreenProps> = ({ onSelectLanguage }) => {
  const handleKeyPress = (e: React.KeyboardEvent, language: CommandLanguage) => {
    if (e.key === 'Enter') {
      onSelectLanguage(language);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="text-center max-w-4xl">
        {/* ASCII Art Title */}
        <pre className="text-green-300 text-xs sm:text-sm mb-8 leading-tight">
{`
 ██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗ 
██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗
██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║
██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ 
                                                                  
██╗      █████╗ ███╗   ██╗ ██████╗ ██╗   ██╗ █████╗  ██████╗ ███████╗
██║     ██╔══██╗████╗  ██║██╔════╝ ██║   ██║██╔══██╗██╔════╝ ██╔════╝
██║     ███████║██╔██╗ ██║██║  ███╗██║   ██║███████║██║  ███╗█████╗  
██║     ██╔══██║██║╚██╗██║██║   ██║██║   ██║██╔══██║██║   ██║██╔══╝  
███████╗██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝██║  ██║╚██████╔╝███████╗
╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
`}
        </pre>

        <div className="text-left space-y-2 mb-8 text-sm">
          <p className="text-green-300">SYSTEM INITIALIZATION COMPLETE</p>
          <p className="text-yellow-400">COMMAND INTERFACE SELECTION REQUIRED</p>
          <p>────────────────────────────────────────────────</p>
          <p>AVAILABLE COMMAND LANGUAGES:</p>
          <p>• WINDOWS: Learn Windows Command Prompt (CMD) operations</p>
          <p>• BASH: Master Unix/Linux terminal commands</p>
          <p>────────────────────────────────────────────────</p>
          <p className="text-yellow-400">SELECT YOUR PREFERRED COMMAND LANGUAGE:</p>
          <p>Choose the command-line interface you want to master</p>
          <p>Both modes feature the same challenges with language-specific commands</p>
          <p>────────────────────────────────────────────────</p>
        </div>

        <div className="flex justify-center space-x-8">
          <div 
            className="px-8 py-4 border-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-black transition-all duration-200 text-center"
            onClick={() => onSelectLanguage('windows')}
            onKeyDown={(e) => handleKeyPress(e, 'windows')}
            tabIndex={0}
          >
            <div className="text-blue-300 font-bold mb-2">WINDOWS</div>
            <div className="text-xs">Command Prompt</div>
            <div className="text-xs">C:\{'>'}</div>
          </div>

          <div 
            className="px-8 py-4 border-2 border-green-400 cursor-pointer hover:bg-green-400 hover:text-black transition-all duration-200 text-center"
            onClick={() => onSelectLanguage('bash')}
            onKeyDown={(e) => handleKeyPress(e, 'bash')}
            tabIndex={0}
          >
            <div className="text-green-300 font-bold mb-2">BASH</div>
            <div className="text-xs">Unix/Linux Terminal</div>
            <div className="text-xs">user@host:~$</div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          <p>System Version: HackLife v2.0 | Multi-Platform Command Training</p>
          <p>Educational Game • Learn Command Line • Save The World</p>
        </div>
      </div>
    </div>
  );