{
  // === Theory : Number
  const numNumber1: number = 40;

  function fnGetSumOfNumbers1(numA: number, numB: number): number {
    return numA + numB;
  }
  console.log(fnGetSumOfNumbers1(1, 10));

  // === Theory : default function arguments
  function fnGetSumOfNumbers2(numA: number = 40, numB: number = 2) : number {
    return numA + numB;
  }
  console.log(fnGetSumOfNumbers2());

  const numA: number = 42;
  console.log(numA);
  const numB: number = Infinity;
  console.log(numB);
  const numC: number = NaN;
  console.log(numC);
  const numD: number = 0x2;
  console.log(numD);
  const numE: number = 0.1;
  console.log(numE);

  // === Theory : String
  function fnGetStrInUpperCase(str: string = '') : string {
    return str.toUpperCase();
  }
  console.log(fnGetStrInUpperCase('Typescript'));

  // === Theory : Boolean
  function fnGetStrInCase(str: string = '', isUpperCase: boolean = false) {
    return isUpperCase ? str.toUpperCase() : str.toLowerCase();
  }
  console.log(fnGetStrInCase('Typescript', false));

  // === Theory : Object
  const objPerson1 : {
    firstName: string,
    lastName: string,
    age: number,
    address: {
      street: string,
      city: string,
      zip: number,
    }
  } = {
    firstName: 'Leonid',
    lastName: 'Dobrinov',
    age: 21,
    address: {
      street: '1812 Street Name',
      city: 'Fremont',
      zip: 08110
    }
  };
  // === Theory : Type 'string' is not assignable to type 'number'
  // objPerson.age = '21';

  function fnGetPersonFullName1(firstName: string = 'firstName', lastName: string = 'lastName') : string {
    return `${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)} `
  }
  console.log(fnGetPersonFullName1());

  const objPerson2 = {
    firstName: 'firstName',
    lastName: 'lastName',
  };

  function fnGetPersonFullName2(obj: { firstName : string, lastName : string}) {
    // === Theory : Property 'age' does not exist on type '{ firstName: string; lastName: string; }
    // console.log(obj.age);
    return `${obj.firstName[0].toUpperCase()}${obj.firstName.slice(1)} ${obj.lastName[0].toUpperCase()}${obj.lastName.slice(1)} `
  }
  console.log(fnGetPersonFullName2(objPerson2));

  // === Theory : Array
  const arrFriends: string[] = ['Grisha', 'Vova'];
  // === Theory : Argument of type 'number' is not assignable to parameter of type 'string'
  // arrFriends.push(42);
  // To fix = any. any is a bad practice, because it ignores the typing
  // const arrFriends: any[] = ['Grisha', 'Vova'];

  const arrContacts : { name: string, number: number }[] = [
    {
      name: 'Grisha',
      number: 380663827881
    },
    {
      name: 'Vova',
      number: 380664597656
    }
  ];
  arrContacts.push({ name: 'Danil', number: 380991692176 });

  // === Theory : Tuple
  // console.log(Tuple.from([1, 2, 3]));
  const tuple1 : readonly [number, string] = [100, 'str'];
  // === Theory : Property 'push' does not exist on type 'readonly [number, string]'
  // tuple.push(200);
  console.log(tuple1);

  const tuple2 : [boolean, string, ...number[]] = [false, 'str', 1, 2, 3];
  console.log(tuple2);
}
