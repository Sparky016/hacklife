import { Challenge } from '../types/game';

export const challenges: Challenge[] = [
  {
    id: '1',
    description: 'Find your computer\'s IP address configuration.',
    correctCommand: 'ipconfig',
    explanation: 'ipconfig displays the IP configuration for all network adapters'
  },
  {
    id: '2',
    description: 'Check the connection to the main server (google.com).',
    correctCommand: 'ping google.com',
    explanation: 'ping tests network connectivity to a specific host'
  },
  {
    id: '3',
    description: 'Display all files and folders in the current directory.',
    correctCommand: 'dir',
    explanation: 'dir lists the contents of the current directory'
  },
  {
    id: '4',
    description: 'Create a new directory named "SECURE".',
    correctCommand: 'mkdir SECURE',
    explanation: 'mkdir creates a new directory with the specified name'
  },
  {
    id: '5',
    description: 'Clear the screen to hide our tracks.',
    correctCommand: 'cls',
    explanation: 'cls clears the command prompt screen'
  },
  {
    id: '6',
    description: 'Show all active network connections.',
    correctCommand: 'netstat -an',
    explanation: 'netstat -an displays all network connections and listening ports'
  },
  {
    id: '7',
    description: 'Display the current date and time.',
    correctCommand: 'date',
    explanation: 'date displays or sets the system date'
  },
  {
    id: '8',
    description: 'Show the current working directory path.',
    correctCommand: 'cd',
    explanation: 'cd without parameters shows the current directory'
  },
  {
    id: '9',
    description: 'Copy the file "data.txt" to "backup.txt".',
    correctCommand: 'copy data.txt backup.txt',
    explanation: 'copy duplicates files from one location to another'
  },
  {
    id: '10',
    description: 'Display detailed IP configuration including DNS.',
    correctCommand: 'ipconfig /all',
    explanation: 'ipconfig /all shows detailed configuration for all adapters'
  },
  {
    id: '11',
    description: 'Trace the route packets take to reach microsoft.com.',
    correctCommand: 'tracert microsoft.com',
    explanation: 'tracert shows the path packets take to reach a destination'
  },
  {
    id: '12',
    description: 'Show system information about this computer.',
    correctCommand: 'systeminfo',
    explanation: 'systeminfo displays detailed configuration of the computer'
  },
  {
    id: '13',
    description: 'List all running processes on the system.',
    correctCommand: 'tasklist',
    explanation: 'tasklist displays all currently running processes'
  },
  {
    id: '14',
    description: 'Change to the parent directory.',
    correctCommand: 'cd ..',
    explanation: 'cd .. moves up one directory level'
  },
  {
    id: '15',
    description: 'Display help information for the "dir" command.',
    correctCommand: 'help dir',
    explanation: 'help displays detailed information about commands'
  },
  {
    id: '16',
    description: 'Delete the file named "temp.log".',
    correctCommand: 'del temp.log',
    explanation: 'del removes specified files'
  },
  {
    id: '17',
    description: 'Rename "oldfile.txt" to "newfile.txt".',
    correctCommand: 'ren oldfile.txt newfile.txt',
    explanation: 'ren renames files and directories'
  },
  {
    id: '18',
    description: 'Display the contents of "config.txt".',
    correctCommand: 'type config.txt',
    explanation: 'type displays the contents of text files'
  },
  {
    id: '19',
    description: 'Show which user account is currently logged in.',
    correctCommand: 'whoami',
    explanation: 'whoami displays the current username'
  },
  {
    id: '20',
    description: 'Display the computer\'s hostname.',
    correctCommand: 'hostname',
    explanation: 'hostname shows the name of the computer'
  },
  {
    id: '21',
    description: 'Find all text files in the current directory.',
    correctCommand: 'dir *.txt',
    explanation: 'dir with wildcards finds files matching patterns'
  },
  {
    id: '22',
    description: 'Display the PATH environment variable.',
    correctCommand: 'echo %PATH%',
    explanation: 'echo displays environment variables and text'
  },
  {
    id: '23',
    description: 'Create an empty file called "log.txt".',
    correctCommand: 'echo. > log.txt',
    explanation: 'echo with redirection creates files'
  },
  {
    id: '24',
    description: 'Show disk usage for all drives.',
    correctCommand: 'wmic logicaldisk get size,freespace,caption',
    explanation: 'wmic provides detailed system information'
  },
  {
    id: '25',
    description: 'Force kill the process "notepad.exe".',
    correctCommand: 'taskkill /f /im notepad.exe',
    explanation: 'taskkill terminates running processes'
  },
  {
    id: '26',
    description: 'Move "document.txt" to the "Archive" folder.',
    correctCommand: 'move document.txt Archive',
    explanation: 'move relocates files and directories'
  },
  {
    id: '27',
    description: 'Display the first 10 lines of "logfile.txt".',
    correctCommand: 'more logfile.txt',
    explanation: 'more displays file contents page by page'
  },
  {
    id: '28',
    description: 'Compare two files: "file1.txt" and "file2.txt".',
    correctCommand: 'fc file1.txt file2.txt',
    explanation: 'fc compares files and shows differences'
  },
  {
    id: '29',
    description: 'Create a directory structure "Project\\Data\\Files".',
    correctCommand: 'mkdir Project\\Data\\Files',
    explanation: 'mkdir can create nested directory structures'
  },
  {
    id: '30',
    description: 'Display detailed file information in the current directory.',
    correctCommand: 'dir /Q',
    explanation: 'dir /Q shows file ownership information'
  },
  {
    id: '31',
    description: 'Find the location of the "notepad" executable.',
    correctCommand: 'where notepad',
    explanation: 'where locates files in the system PATH'
  },
  {
    id: '32',
    description: 'Release and renew the IP address.',
    correctCommand: 'ipconfig /release && ipconfig /renew',
    explanation: 'ipconfig /release and /renew reset network configuration'
  },
  {
    id: '33',
    description: 'Display the routing table.',
    correctCommand: 'route print',
    explanation: 'route print shows the network routing table'
  },
  {
    id: '34',
    description: 'Show memory usage statistics.',
    correctCommand: 'wmic OS get TotalVisibleMemorySize,FreePhysicalMemory',
    explanation: 'wmic can query detailed system memory information'
  },
  {
    id: '35',
    description: 'Check the integrity of the C: drive.',
    correctCommand: 'chkdsk C:',
    explanation: 'chkdsk verifies file system integrity'
  }
];