"use strict";
// Question: Implement quick sort
//Complexity: Worst=> O(n^2) Best=> O(n log n) Avg=> O(n log n)
const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    let pivotval = arr[start];
    let pivotindex = start;
    for (let i = start; i <= end; i++) {
        if (arr[i] < pivotval) {
            pivotindex++;
            swap(arr, i, pivotindex);
        }
    }
    swap(arr, start, pivotindex);
    return pivotindex;
};
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const pivotindex = pivot(arr, left, right);
        quickSort(arr, left, pivotindex - 1);
        quickSort(arr, pivotindex + 1, right);
    }
    return arr;
};
// Remark: recursion has a limit so max array size is limited
