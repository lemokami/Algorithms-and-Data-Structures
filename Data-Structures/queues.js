"use strict";
class qitem {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val) {
        const newitem = new qitem(val);
        if (this.size === 0) {
            this.head = newitem;
            this.tail = newitem;
        }
        else {
            this.tail.next = newitem;
            this.tail = newitem;
        }
        this.size++;
        return this;
    }
    dequeue() {
        if (this.size === 0)
            return null;
        const dequeued = this.head;
        if (this.size === 1) {
            this.tail = null;
        }
        this.head = dequeued.next;
        this.size--;
        return this;
    }
}
const q = new queue();
// Complexity:
// Insertion: O(1)
// Removal: O(1)
// Searching:  O(n)
// Acessing: O(n)
