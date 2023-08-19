describe("Class", () => {
  class Customer {
    constructor() {
      console.log("Customer created");
    }
  }
  class Order {}

  // create object from Class
  it("should can create Class", () => {
    const customer: Customer = new Customer();
    const order: Order = new Order();
  });

  // call constructor of Class
  it("should can create constructors", () => {
    new Customer();
    new Customer();
  });
});
