{
  // === Concept
  // namespace is the same as module

  namespace nmspcLibrary {
    export const num: number = 42;
    export const str:string = 'str';

    export interface intUser {
      name: string,
      age: number
    }``
  }

  console.log(nmspcLibrary.num);
  console.log(nmspcLibrary.str);

  const userObj:nmspcLibrary.intUser = {
    name: 'Leonid',
    age: 21
  };
  console.log(userObj);
}