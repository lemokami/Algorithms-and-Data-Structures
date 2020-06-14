"use strict";
//Implement radix sort
//Complexity: O(nk)
const getDig = (num, place) => {
    const digit = Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    return digit;
};
const noOfDig = (num) => {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};
const maxDig = (numarr) => {
    let maxDig = 0;
    numarr.forEach((val) => (maxDig = Math.max(maxDig, noOfDig(val))));
    return maxDig;
};
const radixSort = (numarr) => {
    const maxDigitnum = maxDig(numarr);
    for (let k = 0; k < maxDigitnum; k++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < numarr.length; i++) {
            let digit = getDig(numarr[i], k);
            buckets[digit].push(numarr[i]);
        }
        numarr = []; //this is done to remove ts warning
        numarr.concat(...buckets);
    }
    return numarr;
};
console.log(radixSort([9, 8, 7, 6, 5, 4, 1, 32, 2]));
