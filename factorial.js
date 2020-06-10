"use strict";
// Question: Find the factorial of a given number 'n' using recursion
const factorial = (n) => {
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
};
console.log(factorial(5));
// 😁'Pretty Easy, Barely an Inconvience'
