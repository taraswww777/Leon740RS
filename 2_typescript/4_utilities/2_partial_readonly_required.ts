{
  interface User {
    id?: number,
    name: string,
    age: number
  }
  
  function fnCreateAndValidateUser(name: string, age: number): User {
    // === Partial
    // Make the object keys to be optional
    const objUser: Partial<User> = {};
  
    if (name.length > 0) {
      objUser.name = name;
    }
  
    if (age > 0) {
      objUser.age = age;
    }
  
    // use as to tell that some keys may be missing 
    return objUser as User;
  }
  
  // === Readonly
  // Remove the option to update the object
  const objLeonid: Readonly<User> = { name: 'Leonid', age: 21 };
  // objLeonid.name = 'Ford';
  
  // === Required
  // Make all of the object fields required
  const objGrigoriy: Required<User> = { id: 0, name: 'Grigoriy', age: 22 };
}