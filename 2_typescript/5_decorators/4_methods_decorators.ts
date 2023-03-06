{
  function FnDecoratorAutoBind(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(name);
    console.log(descriptor);
    const newDescriptor: PropertyDescriptor = {
      enumerable: false,
      configurable: true,
      get() {
        return descriptor.value.bind(this)
      }
    }
  
    return newDescriptor;
  }
  
  class User {
    constructor(public name: string = ' name') {}
  
    @FnDecoratorAutoBind
    fnSayMyName() {
      console.log(this.name);
    }
  }
  
  const objLeonid: User = new User('Leonid');
  
  function fnNameSayer(fn: Function) {
    fn()
  }
  fnNameSayer(objLeonid.fnSayMyName);
}