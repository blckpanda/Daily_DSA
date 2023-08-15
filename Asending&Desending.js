const number = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(number.length); //[3, 1, 4, 1, 5, 9, 2,

const sortedAsending = number.sort((a, b) => a - b);
console.log(sortedAsending);

const sortedDesending = number.sort((a, b) => b - a)
console.log(sortedDesending);