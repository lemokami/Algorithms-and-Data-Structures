"use strict";
// Question: implement binary search🔍
// Complexity: O(log n)🤩
const binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(end / 2);
    while (arr[mid] !== val && start <= end) {
        if (arr[mid] < val)
            start = mid + 1;
        else if (arr[mid] > val)
            end = mid - 1;
        mid = Math.floor((start + end) / 2);
    }
    return arr[mid] == val ? mid : -1;
};
