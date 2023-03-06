{
  // Ex. 1
  interface User1 {
    name: string,
    age: number
  }

  type userKey1 = keyof User1;

  const strUserKeyName:userKey1 = 'name';

  // Ex. 2
  const str1:string = 'str1';

  type str = typeof str1;

  const str2:str = 'str2';

  // Ex.3
  interface User2 {
    name: string,
    age: number
  }

  const objLeonid: User2 = { name: 'Leonid', age: 21 };

  type objLeonidKey = keyof typeof objLeonid;
  
  const objLeonidKeyName: objLeonidKey = 'name';
}