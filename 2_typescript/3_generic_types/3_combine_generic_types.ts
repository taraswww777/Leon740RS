{
  const OBJ_A = { a: 0 };
  const OBJ_B = { b: 1 };

  // === Problem
  // object works as any
  function fnMerge1(a: object, b: object): object {
    return Object.assign({}, a, b);
  }
  const obj1 = fnMerge1(OBJ_A, OBJ_B);
  console.log(obj1);

  // Error
  // Property 'b' does not exist on type 'object'.
  // obj1.b = 3;
  // console.log(obj1);

  // === Solution
  // Combine generic types
  // function functionName<GT1, GT2>(arg1: GT1, arg2: GT2): GT1 & GT2
  // function with 2 generic types, accepts arg1 as GT1, arg2 as GT2, returns data as a combination of GT1 & GT2 types
  function fnMerge2<F, S>(a: F, b: S): F & S {
    return Object.assign({}, a, b);
  }
  const obj2 = fnMerge2(OBJ_A, OBJ_B);
  console.log(obj2);

  obj2.b = 3;
  console.log(obj2);
}