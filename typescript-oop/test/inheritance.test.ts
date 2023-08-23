describe("Intheritance", () => {
  // parent class
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  // child class
  class Manager extends Employee {}

  // child class
  class Director extends Employee {}

  it("should support inheritance", () => {
    const employee: Employee = new Employee("Muhammad");
    console.log(employee.name);

    const manager: Manager = new Manager("Kurnia");
    console.log(manager.name);

    const director: Director = new Director("Affandi");
    console.log(director.name);
  });
});
