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
    recursiveDFS(start) {
        if (!this.isvalid(start))
            return null;
        const vertices = [];
        const traversed = {};
        const walker = (vertex) => {
            vertices.push(vertex);
            traversed[vertex] = true;
            for (let node of this.adjacencylist[vertex]) {
                if (!traversed[node])
                    walker(node);
            }
        };
        walker(start);
        return vertices;
    }
    iterativeDFS(start) {
        if (!this.isvalid(start))
            return null;
        const result = [];
        const stack = [start];
        const visited = {};
        let pvertex;
        visited[start] = true;
        while (stack.length) {
            pvertex = stack.pop();
            result.push(pvertex);
            this.adjacencylist[pvertex].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }
    BFS(start) {
        if (!this.isvalid(start))
            return null;
        const queue = [start];
        const visited = {};
        const result = [];
        let curr_vertex;
        visited[start] = true;
        while (queue.length) {
            curr_vertex = queue.shift();
            result.push(curr_vertex);
            this.adjacencylist[curr_vertex].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        console.log(result);
        return result;
    }
}
const myG = new graph();
myG.addVertex("A");
myG.addVertex("B");
myG.addVertex("C");
myG.addVertex("D");
myG.addVertex("E");
myG.addVertex("F");
myG.addEdge("A", "B");
myG.addEdge("A", "C");
myG.addEdge("B", "D");
myG.addEdge("C", "E");
myG.addEdge("D", "E");
myG.addEdge("D", "F");
myG.addEdge("E", "F");
myG.BFS("A");
