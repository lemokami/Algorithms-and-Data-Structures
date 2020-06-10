"use strict";
// Question :👌🏻
// Given an array and the subset size, find the largest subarray
// in the array which has the highest sum and print the sum else return null
const maxSubArraySum = (arr, subsize) => {
    if (subsize > arr.length) {
        return null;
    }
    let maxSum;
    let tempSum = 0;
    for (let i = 0; i < subsize; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (let i = subsize; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - subsize];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};
// Complexity: O(n)
