"use strict";
class graph {
    constructor() {
        this.adjacencylist = {};
    }
    isvalid(vertex) {
        return this.adjacencylist[vertex];
    }
    addVertex(name) {
        if (!this.isvalid(name))
            this.adjacencylist[name] = [];
    }
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        if (this.adjacencylist[vertex1].indexOf(vertex2) === -1) {
            this.adjacencylist[vertex1].push(vertex2);
            this.adjacencylist[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.isvalid(vertex1)) {
            this.adjacencylist[vertex1] = this.adjacencylist[vertex1].filter((v) => v !== vertex2);
        }
        if (this.isvalid(vertex2)) {
            this.adjacencylist[vertex2] = this.adjacencylist[vertex2].filter((v) => v !== vertex1);
        }
    }
    removeVertex(vertex) {
        if (this.isvalid(vertex)) {
            for (let element of this.adjacencylist[vertex]) {
                this.removeEdge(vertex, element);
            }
            delete this.adjacencylist[vertex];
        }
    }
}
const myG = new graph();
myG.addVertex("apple");
myG.addVertex("peach");
myG.addVertex("banana");
myG.addEdge("apple", "pie");
myG.addEdge("banana", "pie");
myG.addEdge("banana", "shake");
myG.addEdge("peach", "juice");
console.log(myG.adjacencylist);
console.log(myG.adjacencylist);
