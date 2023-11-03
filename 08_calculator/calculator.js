const add = function(a,b) {
	return a + b;
};

const subtract = function(...arr) {
	return arr.reduce((sum, current) => sum - current, (arr[0] * 2));
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
  if (a === 0) return 1;
  for(let i = 1; a >= i; i++) {
    total *= i;
  }
  return total;
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
