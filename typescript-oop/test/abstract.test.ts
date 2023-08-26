describe("Abstract", () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.log(`Hello`);
    }
    abstract sayHello(name: string): void;
  }

  class RegulerCustomer extends Customer {
    name: string;
    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }
    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it("should support Abstract ", () => {
    const customer1 = new RegulerCustomer(1, "Kurnia");
    customer1.sayHello("Fandi");
  });
});
