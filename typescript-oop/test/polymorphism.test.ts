describe("Polymorphism", () => {
  // parent class
  class Employee {
    constructor(public name: string) {}
  }
  class Manager extends Employee {}
  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.log(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.log(`Hello Manager ${manager.name}`);
    } else {
      console.log(`Hello Employee ${employee.name}`);
    }
  }
  it("should support polymorphism", () => {
    let employee: Employee = new Employee("Kurnia");
    console.log(employee);

    employee = new Manager("Affandi");
    console.log(employee);

    employee = new VicePresident("Muhammad");
    console.log(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Muhammad"));
    sayHello(new Manager("Kurnia"));
    sayHello(new VicePresident("Affandi"));
  });
});
