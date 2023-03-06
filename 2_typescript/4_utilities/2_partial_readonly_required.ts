{
  interface IntUser {
    id?: number,
    name: string,
    age: number
  }
  
  function fnCreateAndValidateUser(name: string, age: number): IntUser {
    // === Partial
    // Make the object keys to be optional
    const objUser: Partial<IntUser> = {};
  
    if (name.length > 0) {
      objUser.name = name;
    }
  
    if (age > 0) {
      objUser.age = age;
    }
  
    // use as to tell that some keys may be missing 
    return objUser as IntUser;
  }
  
  // === Readonly
  // Remove the option to update the object
  const objLeonid: Readonly<IntUser> = { name: 'Leonid', age: 21 };
  // objLeonid.name = 'Ford';
  
  // === Required
  // Make all of the object fields required
  const objGrigoriy: Required<IntUser> = { id: 0, name: 'Grigoriy', age: 22 };
}