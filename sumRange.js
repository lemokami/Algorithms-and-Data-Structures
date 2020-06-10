"use strict";
// 🥶Question: Given a number 'n'
// print the sum of numbers upto 'n' using recursion
const sumRange = (n) => {
    if (n == 1)
        return 1;
    return n + sumRange(n - 1);
};
//😜same as Sum2n but uses recursion
