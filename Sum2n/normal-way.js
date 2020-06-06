// This version of the program has a complexity of O(n)

const getSum = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(getSum(5));
