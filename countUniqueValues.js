"use strict";
// This approach has a complexity of O(n) and use multiple pointers to find the answer
// Question: 👇🏻
// Given a sorted array of numbers. Find the no of unique values in that array
const countUniqueValues = (arr) => {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
};
console.log(countUniqueValues([1, 2, 3, 3, 4, 5, 6, 6, 7]));
