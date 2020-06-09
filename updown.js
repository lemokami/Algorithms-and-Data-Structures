// The complexity of this program is  O(n+n), we can simplify it to O(n)
// 🤷‍♂️Question:
// Given 'n', print from 0 to n and then from n to 0
const updownN = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
};

updownN(2);
