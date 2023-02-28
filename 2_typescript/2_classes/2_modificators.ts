{
  class Figure {
    // the same as public size: number = 10;
    size: number = 10;
    color: string = 'red';
    // private : available only in this class
    private id: number;
  
    constructor() {
      this.id = Math.random();
    }
  
    // getter for reading id
    protected get getId() : number {
      // protected : available only in children classes
      return this.id;
    }
  }
  
  class Box extends Figure {
    public getInfo() {
      return {
        size: this.size,
        color: this.color,
        id: this.getId
      }
    }
  }
  
  const box = new Box();
  // box.getId();
}