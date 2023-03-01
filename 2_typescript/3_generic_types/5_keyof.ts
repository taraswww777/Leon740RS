{
  const OBJECT = { keyA: 1, keyB: 2, keyC: 3 };

  // === Problem
  // function fnGetObjValueByKey(object: object, key: string) {
    // Error
    // No index signature with a parameter of type 'string' was found on type '{}'.
    // return object[key];
  // }

  // === Solution
  function fnGetObjValueByKey<O extends object, K extends keyof O>(object: O, key: K) {
    return object[key];
  }

  console.log(fnGetObjValueByKey(OBJECT, "keyA"));
  console.log(fnGetObjValueByKey(OBJECT, "keyB"));
  // Error
  // Argument of type '"keySMTH"' is not assignable to parameter of type '"keyA" | "keyB" | "keyC"'.
  // console.log(fnGetObjValueByKey(OBJECT, "keySMTH"));
}