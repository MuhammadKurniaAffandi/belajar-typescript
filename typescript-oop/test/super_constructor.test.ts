describe("Super Constructor", () => {
  // parent class
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  // child class
  class Employee extends Person {
    departemen: string;

    constructor(name: string, departemen: string) {
      super(name);
      this.departemen = departemen;
    }
  }

  it("should support super constructur", () => {
    const employee: Employee = new Employee("Fandi", "Tech");
    console.log(employee.name);
    console.log(employee.departemen);
  });
});
