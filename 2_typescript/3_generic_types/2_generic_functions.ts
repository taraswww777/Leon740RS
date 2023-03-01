{
  const ARR_LETTERS = ['a', 'b', 'c'];
  const ARR_NUMBERS = [1, 2, 3];

  // === Problem
  function fnDoubleArray1(array: any) {
    return array.concat(array);
  }

  const arrLetters1 = fnDoubleArray1(ARR_LETTERS);
  console.log(arrLetters1);

  const arrNumbers1 = fnDoubleArray1(ARR_NUMBERS);
  console.log(arrNumbers1);

  // Let's imagine it is a big codebase and a dev used not the array he needs. in this case, this array will be empty
  const arrRes1 = arrLetters1.filter((number: number) => number > 0);
  console.log(arrRes1);

  // === Solution
  // === Concept
  // function functionName<genericType>(arg: genericType[]): genericType[] {}
  // function which works with generic type, accepts array of this type, returns array of this type
  function fnDoubleArray2<T>(array: T[]): T[] {
    return array.concat(array);
  }

  const arrLetters2 = fnDoubleArray2(ARR_LETTERS);
  console.log(arrLetters2);

  const arrNumbers2 = fnDoubleArray2(ARR_NUMBERS);
  console.log(arrNumbers2);

  // Error
  // const arrRes2 = arrLetters2.filter((number: number) => number > 0);
  // console.log(arrRes2);
}



{
  const ARRAY = [1, 2, 3];

  // === Problem
  function fnFillArray1(array: any[], value: any): any[] {
    const arr = [...array];
    return arr.fill(value);
  }

  const arrFilledA = fnFillArray1(ARRAY, 'a');
  console.log(arrFilledA);

  const arrFilled1 = fnFillArray1(ARRAY, 1);
  console.log(arrFilled1);

  // Let's imagine it is a big codebase and a dev used not the array he needs. in this case, this array will be empty
  const arrRes1 = arrFilledA.filter((number: number) => number > 0);
  console.log(arrRes1);

  // === Solution
  function fnFillArray2<T>(array: any[], value: T): T[] {
    const arr = [...array];
    return arr.fill(value);
  }

  const arrFilledB = fnFillArray2(ARRAY, 'b');
  console.log(arrFilledB);

  const arrFilled2 = fnFillArray2(ARRAY, 2);
  console.log(arrFilled2);

  // Error
  // const arrRes2 = arrFilledB.filter((number: number) => number > 0);
  // console.log(arrRes2);
}