const palindromes = function (str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Check if the cleaned string is the same forwards and backwards
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
    
};

// Do not edit below this line
module.exports = palindromes;
