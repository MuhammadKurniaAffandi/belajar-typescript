describe("Instanceof", () => {
  class Employee {}
  class Manager {}

  const kurnia = new Employee();
  const affandi = new Manager();

  it("should have problem using typeof", () => {
    console.log(typeof kurnia);
    console.log(typeof affandi);
  });

  it("should support instanceof", () => {
    expect(kurnia instanceof Employee).toBe(true);
    expect(kurnia instanceof Manager).toBe(false);

    expect(affandi instanceof Employee).toBe(false);
    expect(affandi instanceof Manager).toBe(true);
  });
});
