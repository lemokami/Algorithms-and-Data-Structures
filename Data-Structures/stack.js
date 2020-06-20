"use strict";
// Implements stack with linked list
class item {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newitem = new item(val);
        if (this.size === 0) {
            this.first = newitem;
            this.last = this.first;
        }
        else {
            newitem.next = this.first;
            this.first = newitem;
        }
        return ++this.size;
    }
    pop() {
        if (this.size === 0) {
            console.log('Stack Empty');
            return undefined;
        }
        const popnode = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return popnode.val;
    }
}
const mystack = new stack();
// Complexity:
// Insertion: O(1)
// Removal: O(1)
// Searching:  O(n)
// Acessing: O(n)
