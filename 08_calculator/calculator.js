const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numbers) {
  return numbers.reduce((accumulator, current) => {
    const num = Number(current); // Convert current to a number
    return isNaN(num) ? accumulator : accumulator + num; // Ignore invalid numbers
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, current) => {
    const num = Number(current); // Convert current to a number
    return isNaN(num) ? accumulator : accumulator * num; // Ignore invalid numbers
  }, 1);
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function(n) {
	let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
