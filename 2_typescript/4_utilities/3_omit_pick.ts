{
  interface User {
    name: string,
    age: number,
    hobbies: string[]
  }
  
  // === Omit
  // Skip object keys
  type userWithoutHobbies = Omit<User, 'hobbies'>;
  const objLeonidWithoutHobbies: userWithoutHobbies = { name: 'Leonid', age: 21 };
  
  // === Pick
  // Picks object keys
  type userHobbies = Pick<User, 'hobbies'>;
  const arrLeonidHobbies: userHobbies = { hobbies: [ 'coding', 'driving' ] };
}