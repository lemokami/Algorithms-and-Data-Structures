"use strict";
// Question: Implement Linear search 🔎
// Inputs are an array and the value to be searched in the array
// Complexity: O(n)
const linearSearch = (arr, val) => {
    let i;
    for (i = 0; i < arr.length; i++) {
        if (val == arr[i])
            return i;
    }
    return -1;
};
