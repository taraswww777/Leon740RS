{
  interface LifeCycle {
    onInit(): void
  
    // optional field
    onDestroy?(abort: boolean) : void
  }
  
  interface ComponentOnChange {
    onChange(data: number) : boolean
  }
  
  // implements : use interface object structure
  class Component implements LifeCycle, ComponentOnChange {
    onInit(): void {
      console.log("onInit");
    }
    onDestroy(abort: boolean): boolean {
      console.log("onDestroy");
      if (abort) {
        return true;
      }
      return false;
    }
    onChange(data: number): boolean {
      console.log("onChange");
      if (data > 1) {
        return true;
      }
      return false;
    }
  }
  
  const component = new Component();
  console.log(component.onInit());
  console.log(component.onDestroy(true));
  console.log(component.onChange(2));
}