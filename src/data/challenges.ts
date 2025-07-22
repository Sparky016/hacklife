import { Challenge } from '../types/game';

export const challenges: Challenge[] = [
  {
    id: '1',
    description: 'Find your computer\'s IP address configuration.',
    correctCommand: {
      windows: 'ipconfig',
      bash: 'ifconfig'
    },
    explanation: 'ipconfig displays the IP configuration for all network adapters'
  },
  {
    id: '2',
    description: 'Check the connection to the main server (google.com).',
    correctCommand: {
      windows: 'ping google.com',
      bash: 'ping google.com'
    },
    explanation: 'ping tests network connectivity to a specific host'
  },
  {
    id: '3',
    description: 'Display all files and folders in the current directory.',
    correctCommand: {
      windows: 'dir',
      bash: 'ls'
    },
    explanation: 'dir lists the contents of the current directory'
  },
  {
    id: '4',
    description: 'Create a new directory named "SECURE".',
    correctCommand: {
      windows: 'mkdir SECURE',
      bash: 'mkdir SECURE'
    },
    explanation: 'mkdir creates a new directory with the specified name'
  },
  {
    id: '5',
    description: 'Clear the screen to hide our tracks.',
    correctCommand: {
      windows: 'cls',
      bash: 'clear'
    },
    explanation: 'cls clears the command prompt screen'
  },
  {
    id: '6',
    description: 'Show all active network connections.',
    correctCommand: {
      windows: 'netstat -an',
      bash: 'netstat -an'
    },
    explanation: 'netstat -an displays all network connections and listening ports'
  },
  {
    id: '7',
    description: 'Display the current date and time.',
    correctCommand: {
      windows: 'date',
      bash: 'date'
    },
    explanation: 'date displays or sets the system date'
  },
  {
    id: '8',
    description: 'Show the current working directory path.',
    correctCommand: {
      windows: 'cd',
      bash: 'pwd'
    },
    explanation: 'cd without parameters shows the current directory'
  },
  {
    id: '9',
    description: 'Copy the file "data.txt" to "backup.txt".',
    correctCommand: {
      windows: 'copy data.txt backup.txt',
      bash: 'cp data.txt backup.txt'
    },
    explanation: 'copy duplicates files from one location to another'
  },
  {
    id: '10',
    description: 'Display detailed IP configuration including DNS.',
    correctCommand: {
      windows: 'ipconfig /all',
      bash: 'ifconfig -a'
    },
    explanation: 'ipconfig /all shows detailed configuration for all adapters'
  },
  {
    id: '11',
    description: 'Trace the route packets take to reach microsoft.com.',
    correctCommand: {
      windows: 'tracert microsoft.com',
      bash: 'traceroute microsoft.com'
    },
    explanation: 'tracert shows the path packets take to reach a destination'
  },
  {
    id: '12',
    description: 'Show system information about this computer.',
    correctCommand: {
      windows: 'systeminfo',
      bash: 'uname -a'
    },
    explanation: 'systeminfo displays detailed configuration of the computer'
  },
  {
    id: '13',
    description: 'List all running processes on the system.',
    correctCommand: {
      windows: 'tasklist',
      bash: 'ps aux'
    },
    explanation: 'tasklist displays all currently running processes'
  },
  {
    id: '14',
    description: 'Change to the parent directory.',
    correctCommand: {
      windows: 'cd ..',
      bash: 'cd ..'
    },
    explanation: 'cd .. moves up one directory level'
  },
  {
    id: '15',
    description: 'Display help information for the "dir" command.',
    correctCommand: {
      windows: 'help dir',
      bash: 'man ls'
    },
    explanation: 'help displays detailed information about commands'
  },
  {
    id: '16',
    description: 'Delete the file named "temp.log".',
    correctCommand: {
      windows: 'del temp.log',
      bash: 'rm temp.log'
    },
    explanation: 'del removes specified files'
  },
  {
    id: '17',
    description: 'Rename "oldfile.txt" to "newfile.txt".',
    correctCommand: {
      windows: 'ren oldfile.txt newfile.txt',
      bash: 'mv oldfile.txt newfile.txt'
    },
    explanation: 'ren renames files and directories'
  },
  {
    id: '18',
    description: 'Display the contents of "config.txt".',
    correctCommand: {
      windows: 'type config.txt',
      bash: 'cat config.txt'
    },
    explanation: 'type displays the contents of text files'
  },
  {
    id: '19',
    description: 'Show which user account is currently logged in.',
    correctCommand: {
      windows: 'whoami',
      bash: 'whoami'
    },
    explanation: 'whoami displays the current username'
  },
  {
    id: '20',
    description: 'Display the computer\'s hostname.',
    correctCommand: {
      windows: 'hostname',
      bash: 'hostname'
    },
    explanation: 'hostname shows the name of the computer'
  },
  {
    id: '21',
    description: 'Find all text files in the current directory.',
    correctCommand: {
      windows: 'dir *.txt',
      bash: 'ls *.txt'
    },
    explanation: 'dir with wildcards finds files matching patterns'
  },
  {
    id: '22',
    description: 'Display the PATH environment variable.',
    correctCommand: {
      windows: 'echo %PATH%',
      bash: 'echo $PATH'
    },
    explanation: 'echo displays environment variables and text'
  },
  {
    id: '23',
    description: 'Create an empty file called "log.txt".',
    correctCommand: {
      windows: 'echo. > log.txt',
      bash: 'touch log.txt'
    },
    explanation: 'echo with redirection creates files'
  },
  {
    id: '24',
    description: 'Show disk usage for all drives.',
    correctCommand: {
      windows: 'wmic logicaldisk get size,freespace,caption',
      bash: 'df -h'
    },
    explanation: 'wmic provides detailed system information'
  },
  {
    id: '25',
    description: 'Force kill the process "notepad.exe".',
    correctCommand: {
      windows: 'taskkill /f /im notepad.exe',
      bash: 'pkill notepad'
    },
    explanation: 'taskkill terminates running processes'
  },
  {
    id: '26',
    description: 'Move "document.txt" to the "Archive" folder.',
    correctCommand: {
      windows: 'move document.txt Archive',
      bash: 'mv document.txt Archive'
    },
    explanation: 'move relocates files and directories'
  },
  {
    id: '27',
    description: 'Display the first 10 lines of "logfile.txt".',
    correctCommand: {
      windows: 'more logfile.txt',
      bash: 'head logfile.txt'
    },
    explanation: 'more displays file contents page by page'
  },
  {
    id: '28',
    description: 'Compare two files: "file1.txt" and "file2.txt".',
    correctCommand: {
      windows: 'fc file1.txt file2.txt',
      bash: 'diff file1.txt file2.txt'
    },
    explanation: 'fc compares files and shows differences'
  },
  {
    id: '29',
    description: 'Create a directory structure "Project\\Data\\Files".',
    correctCommand: {
      windows: 'mkdir Project\\Data\\Files',
      bash: 'mkdir -p Project/Data/Files'
    },
    explanation: 'mkdir can create nested directory structures'
  },
  {
    id: '30',
    description: 'Display detailed file information in the current directory.',
    correctCommand: {
      windows: 'dir /Q',
      bash: 'ls -la'
    },
    explanation: 'dir /Q shows file ownership information'
  },
  {
    id: '31',
    description: 'Find the location of the "notepad" executable.',
    correctCommand: {
      windows: 'where notepad',
      bash: 'which nano'
    },
    explanation: 'where locates files in the system PATH'
  },
  {
    id: '32',
    description: 'Release and renew the IP address.',
    correctCommand: {
      windows: 'ipconfig /release && ipconfig /renew',
      bash: 'sudo dhclient -r && sudo dhclient'
    },
    explanation: 'ipconfig /release and /renew reset network configuration'
  },
  {
    id: '33',
    description: 'Display the routing table.',
    correctCommand: {
      windows: 'route print',
      bash: 'route -n'
    },
    explanation: 'route print shows the network routing table'
  },
  {
    id: '34',
    description: 'Show memory usage statistics.',
    correctCommand: {
      windows: 'wmic OS get TotalVisibleMemorySize,FreePhysicalMemory',
      bash: 'free -h'
    },
    explanation: 'wmic can query detailed system memory information'
  },
  {
    id: '35',
    description: 'Check the integrity of the C: drive.',
    correctCommand: {
      windows: 'chkdsk C:',
      bash: 'fsck /dev/sda1'
    },
    explanation: 'chkdsk verifies file system integrity'
  }
];