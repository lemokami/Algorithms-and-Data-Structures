"use strict";
class maxHeap {
    constructor() {
        this.values = [];
    }
    bubbleup() {
        let index = this.values.length - 1;
        let parentindex = Math.floor((index - 1) / 2);
        while (this.values[index] > this.values[parentindex]) {
            [this.values[index], this.values[parentindex]] = [this.values[parentindex], this.values[index]];
            index = parentindex;
            parentindex = Math.floor((index - 1) / 2);
        }
    }
    bubbledown() {
        let parentIndex = 0;
        let element = this.values[parentIndex];
        const length = this.values.length;
        let left;
        let right;
        let swap = null;
        let leftchild, rightchild;
        while (true) {
            left = parentIndex * 2 + 1;
            right = parentIndex * 2 + 2;
            if (length > left) {
                leftchild = this.values[left];
                if (element < leftchild) {
                    swap = left;
                }
            }
            if (length > right) {
                rightchild = this.values[right];
                if ((element < rightchild && swap === null) || (swap !== null && leftchild < rightchild)) {
                    swap = right;
                }
            }
            if (swap === null)
                break;
            this.values[parentIndex] = this.values[swap];
            this.values[swap] = element;
            parentIndex = swap;
            swap = null;
        }
    }
    insert(val) {
        this.values.push(val);
        this.bubbleup();
    }
    remove() {
        this.values[0] = this.values[this.values.length - 1];
        const popped = this.values.pop();
        this.bubbledown();
        return popped;
    }
}
const myheap = new maxHeap();
myheap.insert(41);
myheap.insert(39);
myheap.insert(33);
myheap.insert(18);
myheap.insert(27);
myheap.insert(12);
myheap.insert(55);
myheap.remove();
console.log(myheap);
myheap.remove();
console.log(myheap);
myheap.remove();
console.log(myheap);
myheap.remove();
console.log(myheap);
myheap.remove();
console.log(myheap);
myheap.remove();
console.log(myheap);
myheap.remove();
console.log(myheap);
myheap.remove();
console.log(myheap);
//values: [ 55, 39, 41, 18,27, 12, 33]
