export const validateCommand = (input: string, correct: string): boolean => {
  // Normalize both strings: trim whitespace and convert to lowercase
  const normalizedInput = input.trim().toLowerCase();
  const normalizedCorrect = correct.trim().toLowerCase();
  
  // Direct match
  if (normalizedInput === normalizedCorrect) {
    return true;
  }
  
  // Handle common variations
  const inputParts = normalizedInput.split(/\s+/);
  const correctParts = normalizedCorrect.split(/\s+/);
  
  // If the base command is the same, check for reasonable variations
  if (inputParts[0] === correctParts[0]) {
    // For simple commands with no parameters, exact match required
    if (correctParts.length === 1) {
      return inputParts.length === 1;
    }
    
    // For commands with parameters, be more flexible
    if (correctParts.length === inputParts.length) {
      return inputParts.every((part, index) => {
        // Allow flexibility in file paths and parameters
        return part === correctParts[index] || 
               (correctParts[index].includes('.') && part.includes('.')) ||
               (correctParts[index].startsWith('/') && part.startsWith('/')) ||
               (correctParts[index].startsWith('-') && part.startsWith('-'));
      });
    }
  }
  
  return false;
};