describe("Method Overriding", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      super.sayHello(name);
      console.log("And, I am your manager");
    }
  }
  it("should support Method Overriding", () => {
    const employee = new Employee("Muhammad");
    employee.sayHello("Kurnia");

    const manager = new Manager("Kurnia");
    manager.sayHello("Affandi");
  });
});
