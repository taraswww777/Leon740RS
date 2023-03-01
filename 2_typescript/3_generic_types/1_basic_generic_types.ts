{
  const arr1 : Array<string> = ['a', 'b', 'c'];
  const arr2 : string[] = ['a', 'b', 'c'];

  const arr3 : [boolean, string, ...number[]] = [true, 'str', 1, 2, 3];
  const arr4 : Array<boolean | string | number> = [true, 'str', 1, 2, 3];

  const promise = new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 1000)
  });
}