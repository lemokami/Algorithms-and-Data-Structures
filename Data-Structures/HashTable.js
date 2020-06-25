"use strict";
class HashTable {
    constructor(size = 50) {
        this.values = new Array((size = size));
    }
    _hash(key) {
        let hash = 0;
        let char;
        for (char of key) {
            hash = (hash + char.charCodeAt(0) - 96) * 31;
            // multiplying by a prime number to make hash more unique🦄
        }
        hash = hash % this.values.length;
        console.log(hash);
        return hash;
    }
    set(key, value) {
        const hashindex = this._hash(key);
        if (!this.values[hashindex])
            this.values[hashindex] = [];
        this.values[hashindex].push([key, value]);
    }
    get(key) {
        const valindex = this._hash(key);
        const hashvalues = this.values[valindex];
        console.log(hashvalues);
        if (hashvalues) {
            for (let arr of hashvalues) {
                if (arr[0] === key)
                    return arr;
            }
        }
        return undefined;
    }
}
const myHash = new HashTable(10);
myHash.set("apple", "pie");
myHash.set("banana", "shake");
myHash.set("blubberry", "muffin");
myHash.set("blueberry", "bomb");
myHash.get("blueberry");
