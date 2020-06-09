"use strict";
// This program has O(n) complexity where 'n' is the length of the string
// Question: 👇🏻
// Find the frequency of alphanumeric characters in the string
const charCount = (str) => {
    let letter;
    let result = {};
    for (letter of str) {
        if (isAlphanum(letter)) {
            result[letter] = (result[letter] | 0) + 1;
        }
    }
    return result;
};
const isAlphanum = (char) => {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
};
console.log(charCount("Chrostopher Nolan"));
