"use strict";
class treenode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
class binaryST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newnode = new treenode(value);
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
    DFSPre() {
        if (this.root === null)
            return [];
        let traversed = [];
        const nodeWalker = (node) => {
            traversed.push(node.val);
            if (node.left)
                nodeWalker(node.left);
            if (node.right)
                nodeWalker(node.right);
        };
        nodeWalker(this.root);
        return traversed;
    }
    DFSPost() {
        if (this.root === null)
            return [];
        let traversed = [];
        const nodeWalker = (node) => {
            if (node.left)
                nodeWalker(node.left);
            if (node.right)
                nodeWalker(node.right);
            traversed.push(node.val);
        };
        nodeWalker(this.root);
        return traversed;
    }
    DFSIn() {
        if (this.root === null)
            return [];
        let traversed = [];
        const nodeWalker = (node) => {
            if (node.left)
                nodeWalker(node.left);
            traversed.push(node.val);
            if (node.right)
                nodeWalker(node.right);
        };
        nodeWalker(this.root);
        return traversed;
    }
}
const dfstr = new binaryST();
const arr = [100, 90, 110, 80, 91, 105, 115, 104, 108, 113, 116];
let x;
for (x of arr) {
    dfstr.insert(x);
}
console.log(dfstr.DFSPre());
console.log(dfstr.DFSPost());
console.log(dfstr.DFSIn());
