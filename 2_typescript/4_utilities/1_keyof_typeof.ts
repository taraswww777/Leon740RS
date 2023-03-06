{
  // Ex. 1
  interface IntUser1 {
    name: string,
    age: number
  }

  type TypeUserKey1 = keyof IntUser1;

  const strUserKeyName:TypeUserKey1 = 'name';

  // Ex. 2
  const str1:string = 'str1';

  type Str = typeof str1;

  const str2:Str = 'str2';

  // Ex.3
  interface IntUser2 {
    name: string,
    age: number
  }

  const objLeonid: IntUser2 = { name: 'Leonid', age: 21 };

  type TypeObjLeonidKey = keyof typeof objLeonid;
  
  const objLeonidKeyName: TypeObjLeonidKey = 'name';
}