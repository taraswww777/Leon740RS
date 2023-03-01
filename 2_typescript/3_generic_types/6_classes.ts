{
  // === Problem
  class Collection1 {
    constructor(private _items: any[]) {}

    fnAdd(value: any) {
      this._items.push(value);
    }

    get fnGetItems(): any[] {
      return this._items;
    }
  }

  const colLetters1 = new Collection1(['a', 'b', 'c']);
  console.log(colLetters1.fnGetItems);

  const colNumbers1 = new Collection1([1, 2, 3]);
  console.log(colNumbers1.fnGetItems);

  // Let's imagine it is a big codebase and a dev used not the array he needs. in this case, this array will be empty
  console.log(colLetters1.fnGetItems.filter((number: number) => number > 0));

  // === Solution
  class Collection2<T extends number | string> {
    constructor(private _items: T[]) {}

    fnAdd(value: T) {
      this._items.push(value);
    }

    get fnGetItems(): T[] {
      return this._items;
    }
  }

  const colLetters2 = new Collection2<string>(['a', 'b', 'c']);
  console.log(colLetters2.fnGetItems);

  const colNumbers2 = new Collection2<number>([1, 2, 3]);
  console.log(colNumbers2.fnGetItems);

  // Error
  // console.log(colLetters2.fnGetItems.filter((number: number) => number > 0));


  // === Example of inheritance
  class List<R> extends Collection2<string> {
    constructor(public type: R){
      super(['a']);
    }
  }

  const list1 = new List<string>('str');
  console.log(list1);

  const list2 = new List<number>(42);
  console.log(list2);
}