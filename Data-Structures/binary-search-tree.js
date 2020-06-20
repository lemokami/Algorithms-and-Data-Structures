"use strict";
class leaf {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
class binarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newnode = new leaf(value);
        if (this.root === null) {
            this.root = newnode;
            return this;
        }
        let currnode = this.root;
        while (true) {
            if (value === currnode.val)
                return undefined;
            if (value < currnode.val) {
                if (currnode.left === null) {
                    currnode.left = newnode;
                    return this;
                }
                currnode = currnode.left;
            }
            else if (value > currnode.val) {
                if (currnode.right === null) {
                    currnode.right = newnode;
                    return this;
                }
                currnode = currnode.right;
            }
        }
    }
    find(val) {
        if (this.root === null)
            return false;
        let currnode = this.root;
        while (true) {
            if (currnode.val === val)
                return true;
            if (currnode.val > val) {
                if (currnode.left === null)
                    return false;
                currnode = currnode.left;
            }
            else if (currnode.val < val) {
                if (currnode.right === null)
                    return false;
                currnode = currnode.right;
            }
        }
    }
}
