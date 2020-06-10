"use strict";
//Question:👻 Make a countdown using recursion
//💡Just print from the given number 'n' to 0
const countDown = (n) => {
    if (n <= 0) {
        console.log("----------Finished----------");
        return;
    }
    console.log(n);
    countDown(n - 1);
};
//📝 There is a limit for recursion
// Recursion exits if the call stack becomes full in mycase it was 11307+ calls
