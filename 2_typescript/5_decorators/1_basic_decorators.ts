{
  function FnClassDecorator1(target: Function) {
    console.log('Decorator 1', target);
  }
  function FnClassDecorator2(target: Function) {
    console.log('Decorator 2', target);
  }
  
  @FnClassDecorator2
  @FnClassDecorator1
  class clsUser {
    constructor(public isProgrammer: boolean = false) {} 
  }
}