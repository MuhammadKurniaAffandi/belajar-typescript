describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string;
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    // method
    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  // properties
  it("should can have properties", () => {
    const customer: Customer = new Customer(1, "Fandi");
    customer.age = 27;

    console.log(customer.id);
    console.log(customer.name);
    console.log(customer.age);
    console.log(customer);
  });

  // method
  it("should can have method", () => {
    const customer: Customer = new Customer(1, "Kurnia");

    customer.sayHello("Muhammad");
  });
});
