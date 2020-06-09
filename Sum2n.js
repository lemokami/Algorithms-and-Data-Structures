// This version of the program has a complexity of O(1)
// Question: ⏬
// Given 'n' a number, find the sum of all the numbers upto 'n'
const getSum = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(getSum(5));
