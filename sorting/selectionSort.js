"use strict";
//Question: Implement Selection sort🔢
//Complexity🥶: O(n^2)
const swapThem = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};
const selectionSort = (arr) => {
    let mindex;
    for (let i = 0; i < arr.length; i++) {
        mindex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[mindex] > arr[j])
                mindex = j;
        }
        if (arr[i] !== arr[mindex])
            swapThem(arr, i, mindex);
    }
    return arr;
};
//Remark: Selection sort is much worse compared to Bubble Sort
