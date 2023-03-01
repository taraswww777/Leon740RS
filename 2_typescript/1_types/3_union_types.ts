{
  // === Theory : | = or
  function fnGetNumSumOrConcatStr(arg1: number | string = '', arg2: number | string = '') : number | string {
    if (typeof(arg1) === "number" && typeof(arg2) === "number") {
      return arg1 + arg2;
    } else {
      return `${arg1} ${arg2}`;
    }
  }

  console.log(fnGetNumSumOrConcatStr(10, 1));
  console.log(fnGetNumSumOrConcatStr('Audi', 'A4'));

  type convertType = 'text' | 'json';

  function fnConvert(data: object, type: convertType) {
    if (type === 'text') {
      return JSON.stringify(data);
    } else if (type === 'json') {
      return { ...data };
    } else {
      return data;
    }
  }

  console.log(fnConvert({ a: 1 }, 'text'));
  console.log(fnConvert({ b: 2 }, 'json'));
  // === Theory : Argument of type '"smth"' is not assignable to parameter of type '"text" | "json"'
  // console.log(fnConvert({ c: 3 }, 'smth'));

  // === Theory : type = declare your type
  type Person = {
    name: string,
    age: number,
  }

  const objPerson : Person = {
    name: 'Leo',
    age: 21
  }
  console.log(objPerson);

  // === Theory : interface = use to declare types for object
  interface UserBasic {
    name: string,
    age: number,
    hobbies: string[]
    // === Theory : ? = not required
    birthday?: string,
  }

  interface UserAddress {
    city: string,
    street?: string,
    zip?: number
  }

  // === Theory : create 1 interface from multiple interfaces
  interface User extends UserBasic, UserAddress {
    id: number
  }

  const objUser : User = {
    id: 0,
    name: 'Leon',
    age: 21,
    hobbies: ['coding', 'painting', 'reading', 'overthinking - analyzing', 'driving'],
    city: 'Milan',
  }
  console.log(objUser);

  interface UserMap {
    [key: number] : User
  }

  const mapUsers : UserMap = {
    [objUser.id] : objUser
  };
  console.log(mapUsers);

  // === Theory : unknown, used in conditions
  const age : number = 21;
  const boolIsAdult: unknown = age >= 21;
  console.log(boolIsAdult);

  // === Theory : never, used in functions which never returns anything
  function fnThrowError(message : string) : never {
    throw new Error(message);
  }

  // === Theory : Type Guard
  // Used in type utilities = if you have utilities in your project which work with type checking

  function fnIsBoolean(value: any) : value is boolean {
    return typeof(value) === "boolean";
  }
  function fnIsString(value: any) : value is string {
    return typeof(value) === "string";
  }

  function fnLogFlag(flag: string | boolean) {
    if (fnIsBoolean(flag)) {
      console.log("boolean");
    } else if (fnIsString(flag)) {
      console.log("string");
    }
  }
  fnLogFlag(true);
}