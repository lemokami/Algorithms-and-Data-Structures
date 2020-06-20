"use strict";
class treenode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
//binary search tree class
class BST {
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
    bfs() {
        let q = [];
        let traversed = [];
        let node;
        if (this.root === null)
            return traversed;
        q.push(this.root);
        while (q.length !== 0) {
            node = q.shift();
            if (node.left !== null)
                q.push(node.left);
            if (node.right !== null)
                q.push(node.right);
            traversed.push(node.val);
        }
        return traversed;
    }
}
const tree = new BST();
tree.insert(10);
tree.insert(11);
tree.insert(12);
tree.insert(7);
tree.insert(8);
tree.insert(9);
console.log(tree.bfs());
