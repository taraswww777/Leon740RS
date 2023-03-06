{
  function validateMaxChildrenFn(limit: number) {
    return function(target: object, key: string) {
      let value: number;
  
      const get = () => value;
      const set = (newValue: number) => {
        if (newValue > limit) {
          value = limit;
          console.warn(`The entered value ${newValue} is over limit ${limit}`);
        } else {
          value = newValue;
        }
      };
  
      Object.defineProperty(target, key, {
        get, set
      })
  
      console.log(target);
    }
  }
  
  class User {
    @validateMaxChildrenFn(10)
    children: number
  
    constructor(children: number) {
      this.children = children;
    }
  }
  
  const userObj1 = new User(5);
  console.log(userObj1);
  console.log(userObj1.children);
  
  const userObj2 = new User(15);
  console.log(userObj2);
  console.log(userObj2.children);
}