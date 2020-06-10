"use strict";
// Question: Find the fibanocci number at  given 'n'th place using recursion🙂
const fibanocci = (n) => {
    if (n <= 2)
        return 1;
    return fibanocci(n - 1) + fibanocci(n - 2);
};
console.log(fibanocci(7));
