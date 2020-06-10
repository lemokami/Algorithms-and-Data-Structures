"use strict";
//Question: 👇🏻
// You're given an array of numbers
// Find the prod of all elements using recursion
const productOfArray = (arr) => {
    let prod = 1;
    const helperfn = (arr) => {
        if (arr.length == 1)
            return arr[0];
        return (prod *= arr[0] * helperfn(arr.splice(1)));
    };
    helperfn(arr);
    return prod;
};
console.log(productOfArray([1, 2, 1, 2, 2, 3]));
