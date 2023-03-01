"use strict";
class Collection1 {
    constructor(_items) {
        this._items = _items;
    }
    fnAdd(value) {
        this._items.push(value);
    }
    get fnGetItems() {
        return this._items;
    }
}
const colLetters1 = new Collection1(['a', 'b', 'c']);
console.log(colLetters1.fnGetItems);
const colNumbers1 = new Collection1([1, 2, 3]);
console.log(colNumbers1.fnGetItems);
console.log(colLetters1.fnGetItems.filter((number) => number > 0));
class Collection2 {
    constructor(_items) {
        this._items = _items;
    }
    fnAdd(value) {
        this._items.push(value);
    }
    get fnGetItems() {
        return this._items;
    }
}
const colLetters2 = new Collection2(['a', 'b', 'c']);
console.log(colLetters2.fnGetItems);
const colNumbers2 = new Collection2([1, 2, 3]);
console.log(colNumbers2.fnGetItems);
class List extends Collection2 {
    constructor(type) {
        super(['a']);
        this.type = type;
    }
}
const list1 = new List('string');
console.log(list1);
const list2 = new List(42);
console.log(list2);
