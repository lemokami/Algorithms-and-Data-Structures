"use strict";
class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }
    push(val) {
        let newNode = new node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        if (!this.tail)
            return undefined;
        let curr = this.head;
        let pre = curr;
        while (curr.next) {
            pre = curr;
            curr = curr.next;
        }
        const popval = curr.val;
        pre.next = null;
        this.tail = pre;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return popval;
    }
    shift() {
        if (!this.head)
            return undefined;
        const currhead = this.head;
        this.head = currhead.next;
        this.length--;
        if (this.length === 0)
            this.tail = null;
        return currhead.val;
    }
    unshift(val) {
        const newnode = new node(val);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        }
        else {
            newnode.next = this.head;
            this.head = newnode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let curr_element = this.head;
        for (let i = 0; i < index; i++) {
            curr_element = curr_element.next;
        }
        return curr_element;
    }
    set(index, value) {
        const getnode = this.get(index);
        if (getnode) {
            getnode.val = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            this.unshift(value);
        if (index === this.length) {
            this.push(value);
        }
        else {
            const prevnode = this.get(index - 1);
            const currnode = this.get(index);
            const newnode = new node(value);
            prevnode.next = newnode;
            newnode.next = currnode;
        }
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        if ((index = 0))
            return this.shift();
        if ((index = this.length - 1))
            return this.pop();
        const prevnode = this.get(index - 1);
        const popnode = prevnode.next;
        prevnode.next = popnode.next;
        this.length--;
        return popnode.val;
    }
    reverse() {
        let prevnode = this.head;
        let nextnode = this.head.next;
        let currnode = this.head;
        [this.head, this.tail] = [this.tail, this.head];
    }
}
let mylist = new SinglyLinkedList();
mylist.push(1);
mylist.push(2);
mylist.push(3);
mylist.push(4);
mylist.push(5);
mylist.push(6);
