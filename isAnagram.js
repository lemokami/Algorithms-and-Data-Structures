"use strict";
const isAnagram = (string1, string2) => {
    let stringfreq = {};
    let letter;
    if (string1.length != string2.length) {
        return false;
    }
    for (letter of string1) {
        stringfreq[letter] = (stringfreq[letter] | 0) + 1;
    }
    console.log(stringfreq);
    for (letter of string2) {
        if (!stringfreq[letter]) {
            return false;
        }
        --stringfreq[letter];
    }
    console.log(stringfreq);
    return true;
};
// has O(n) complexity
