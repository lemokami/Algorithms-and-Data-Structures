"use strict";
class node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newnode = new node(val);
        if (!this.head || !this.tail) {
            this.head = newnode;
            this.tail = newnode;
        }
        else {
            this.tail.next = newnode;
            newnode.prev = this.tail;
            this.tail = newnode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length <= 0)
            return undefined;
        const popnode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = popnode.prev;
            this.tail.next = null;
        }
        popnode.prev = null;
        this.length--;
        return popnode.val;
    }
}
const mydoblist = new DoublyLinkedList();
mydoblist.push(22);
mydoblist.push(23);
console.log(mydoblist.pop());
console.log(mydoblist.pop());
console.log(mydoblist.pop());
console.log(mydoblist.pop());
