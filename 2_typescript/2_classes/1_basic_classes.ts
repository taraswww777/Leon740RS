class Human {
  birthDate: string;

  constructor(birthDate: string = '') {
    this.birthDate = birthDate;
  }

  isProgramer(): boolean {
    return false;
  }
}

class User extends Human {
  _name: string;
  _hobbies: string[] = [];

  constructor(name: string = 'Name', birthDate: string = '') {
    super(birthDate);
    this._name = name;
  }

  get getHobbies(): string[] {
    return this._hobbies;
  }

  set setName(name: string) {
    this._name = name;
  }

  fnAddHobby(hobby: string): void {
    this.getHobbies.push(hobby);
  }

  fnUpdateName(name: string) : this {
    this._name = name;
    return this;
  }

  // === Theory: override parent class method
  // override isProgramer(): boolean {
  //   return true;
  // }

  // === Theory: inherit parent class method
  override isProgramer(): boolean {
    console.log(super.isProgramer());
    return true;
  }
}

const objLeonid = new User('Leonid', '05/07/2000'); 

objLeonid.fnAddHobby('reading');

objLeonid.fnUpdateName('Leo').fnAddHobby('driving');
console.log(objLeonid.getHobbies);

objLeonid.setName = 'Leonardo';
console.log(objLeonid);

console.log(objLeonid.isProgramer());