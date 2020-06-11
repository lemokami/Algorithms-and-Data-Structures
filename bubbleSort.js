"use strict";
const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};
const bubbleSort = (arr) => {
    let noOfswaps;
    for (let i = arr.length; i > 0; i--) {
        noOfswaps = 0;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noOfswaps++;
            }
        }
        if (noOfswaps == 0)
            break;
    }
    return arr;
};
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
