{
  function fnLog(data: string[], num: number): boolean {
    console.log(data, num);
    return false;
  }
  
  // get type of the function return
  type TypeFnLogReturn = ReturnType<typeof fnLog>;
  
  // get type of the function parameters
  type TypeFnLogParams = Parameters<typeof fnLog>;
  
  // Ex.
  class User {
    constructor(public name: string, public age?:number) {}
  }
  
  type TypeUserParams = ConstructorParameters<typeof User>;
}