describe("Relationship", () => {
  class Person {
    constructor(public name: string) {}
  }

  class Customer {
    constructor(public name: string) {}
  }

  it("should support Class Relationship", () => {
    const person: Person = new Customer("Kurnia");
    console.log(person.name);
  });
});
