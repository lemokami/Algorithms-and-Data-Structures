"use strict";
//Question: Implement BubbleSort🔢
//Complexity😱: Worst=>O(n^2); For nearly sorted array=> O(n)
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
//Remark: Note that widely used as other sorting algorithms due to
// its performance
