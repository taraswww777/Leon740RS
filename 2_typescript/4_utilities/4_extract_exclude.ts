{
  // === Extract
  // select type based on a condition from the list of types
  // type1 | type2, type to select

  // number, 42
  type TypeNumber = Extract<'name' | 'age' | string | string[] | 42 | number, number>
  const num: TypeNumber = 31;

  // 'name', 'age', string
  type TypeString = Extract<'name'| 'age' | string | false | 42, string>
  const str: TypeString = 'str';

  interface IntUser {
    name: string,
    age: number,
    hobbies: string[]
  }

  // 'name', 'age' object keys
  type TypeStringUserKeys = Extract<'name' | 'age', keyof IntUser>
  const stringUserKeys: TypeStringUserKeys = 'age';

  // === Exclude
  // exclude type based on a condition from the list of types
  // type1 | type2, type to exclude

  type TypeNotNumber = Exclude<string | number | boolean, number>
  const notNumber1: TypeNotNumber = 'str';
  const notNumber2: TypeNotNumber = false;

  type TypeNotUserKey = Exclude<'key' | 'age' | 'hobbies', keyof IntUser> // key
}