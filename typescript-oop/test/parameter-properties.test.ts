describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }
  it("should support Parameter Properties", () => {
    const person = new Person("Fandi");
    console.log(person.name);

    person.name = "Kurnia";
    console.log(person.name);
  });
});
