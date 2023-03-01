{
  // === Concept
  // The function works only with number and string
  function log<T extends string | number>(data: T): T {
    console.log(data);
    return data;
  }

  const number : number = log(42);
  console.log(number);

  const string = <string>log('string');
  console.log(string);

  // Error
  // Argument of type '{ a: number; }' is not assignable to parameter of type 'string | number'.
  // const object = log({ a: 0 });
  // console.log(object);
}