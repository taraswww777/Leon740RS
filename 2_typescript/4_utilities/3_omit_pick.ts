{
  interface IntUser {
    name: string,
    age: number,
    hobbies: string[]
  }
  
  // === Omit
  // Skip object keys
  type TypeUserWithoutHobbies = Omit<IntUser, 'hobbies'>;
  const objLeonidWithoutHobbies: TypeUserWithoutHobbies = { name: 'Leonid', age: 21 };
  
  // === Pick
  // Picks object keys
  type TypeUserHobbies = Pick<IntUser, 'hobbies'>;
  const arrLeonidHobbies: TypeUserHobbies = { hobbies: [ 'coding', 'driving' ] };
}