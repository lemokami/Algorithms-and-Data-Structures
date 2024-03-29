"use strict";
// Implement a Hash Table
// The following code is for a basic hash table.
// This is just to show how a Hash table work
class HashTable {
    constructor(size = 50) {
        this.maps = new Array((size = size));
    }
    _hash(key) {
        let hash = 0;
        let char;
        for (char of key) {
            hash = (hash + char.charCodeAt(0) - 96) * 31;
            // multiplying by a prime number to make hash more unique🦄
        }
        hash = hash % this.maps.length;
        return hash;
    }
    set(key, value) {
        const hashindex = this._hash(key);
        if (!this.maps[hashindex])
            this.maps[hashindex] = [];
        this.maps[hashindex].push([key, value]);
    }
    get(key) {
        const valindex = this._hash(key);
        const hashvalues = this.maps[valindex];
        if (hashvalues) {
            for (let arr of hashvalues) {
                if (arr[0] === key)
                    return arr;
            }
        }
        return undefined;
    }
    keys() {
        const keys = [];
        for (let value of this.maps) {
            if (value)
                for (let item of value) {
                    if (keys.indexOf(item[0]) === -1)
                        keys.push(item[0]);
                }
        }
        return keys;
    }
    values() {
        const keys = [];
        for (let value of this.maps) {
            if (value)
                for (let item of value) {
                    if (keys.indexOf(item[1]) === -1)
                        keys.push(item[1]);
                }
        }
        return keys;
    }
}
const myHash = new HashTable(10);
//Complexity👌🏻 (Average):
// Insertion: O(1)
// Deletion: O(1)
// Access: O(1)
