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
        return popnode;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        const shiftnode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = shiftnode.next;
            this.head.prev = null;
            shiftnode.next = null;
        }
        this.length--;
        return shiftnode;
    }
    unshift(val) {
        const newnode = new node(val);
        if (this.length === 0) {
            this.head = newnode;
            this.tail = newnode;
        }
        else {
            newnode.next = this.head;
            this.head.prev = newnode;
            this.head = newnode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        const mid = Math.round(this.length / 2);
        let nodewalker;
        if (index <= mid) {
            nodewalker = this.head;
            for (let i = 0; i < index; i++) {
                nodewalker = nodewalker.next;
            }
        }
        else {
            nodewalker = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                nodewalker = nodewalker.prev;
            }
        }
        return nodewalker;
    }
    set(index, val) {
        const reqnode = this.get(index);
        if (reqnode !== null)
            reqnode.val = val;
        else
            return false;
        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            this.unshift(val);
        if (index === this.length)
            this.push(val);
        else {
            const newnode = new node(val);
            const prevnode = this.get(index - 1);
            const nextnode = prevnode.next;
            newnode.prev = prevnode;
            prevnode.next = newnode;
            newnode.next = nextnode;
            nextnode.prev = newnode;
        }
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();
        const rmnode = this.get(index);
        const nextnode = rmnode.next;
        const prevnode = rmnode.prev;
        rmnode.next = null;
        rmnode.prev = null;
        nextnode.prev = prevnode;
        prevnode.next = nextnode;
        this.length--;
        return rmnode;
    }
}
// Complexity:
// Insertion: O(1)
// Removal: O(1)
// Searching:  O(n) //O(n/2) is more precise but it is considered O(n)
// Acessing: O(n)
// Remark: Doubly Linked list is a Singly linked list with an extra pointer
// and has faster removal time as well as faster searching times
