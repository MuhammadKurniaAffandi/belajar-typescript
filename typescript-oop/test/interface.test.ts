describe("Interface", () => {
  interface HasName {
    name: string;
  }

  interface CanSayHello {
    sayHello(name: string): void;
  }

  // kalau inheritance untuk interface, menggunakan kata kunci "implements"
  // sedangkan inheritance untuk class, menggunakan kata kunci "extends"
  class Person implements HasName, CanSayHello {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it("should support interface", () => {
    const person: Person = new Person("Kurnia");
    person.sayHello("Affandi");
  });
});
