class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(this.name);
  }

  sayAge() {
    console.log(this.age);
  }
}

class Developer extends Human {
  constructor(name, age, availableLanguages) {
    super(name, age);
    this.availableLanguages = availableLanguages;
    }
    showAvailableLanguages() {
        console.log(this.availableLanguages);
    }
}

const dev1 = new Developer('정연찬', 26, 'HTML, CSS, JS');
dev1.showAvailableLanguages();
dev1.sayAge();
dev1.sayName();