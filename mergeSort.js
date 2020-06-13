"use strict";
const merge = (arr1, arr2) => {
    let result = [];
    let [i, j] = [0, 0];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    result.push(...arr2.splice(j));
    result.push(...arr1.splice(i));
    return result;
};
const mergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};
