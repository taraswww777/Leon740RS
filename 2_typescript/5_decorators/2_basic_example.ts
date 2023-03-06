{
  interface InterfaceComponentProps {
    selector: string,
    template: string
  }
  
  function FnDecoratorComponent(props: InterfaceComponentProps) {
    return function(constructor: any) {
      const node = document.querySelector(props.selector);
      const instance = new constructor('Leonid');
  
      if (node) {
        node.insertAdjacentHTML('afterbegin', props.template);
        node.querySelector('span')!.textContent = instance.name;
      }
    }
  }
  
  @FnDecoratorComponent({
    selector: '#app',
    template: `<h1>This is <span></span> Component</h1>`
  })
  class ComponentUser {
    constructor(public name: string = 'name') {}
  }
  
  const objectUserLeonid = new ComponentUser('Leonid');
  console.log(objectUserLeonid);
}