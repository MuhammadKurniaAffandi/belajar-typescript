describe("Error Handling", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function doubleIt(value: number): number {
    if (value < 0) {
      throw new ValidationError("Invalid Number");
    }
    return value * 2;
  }
  it("should support Error Handling", () => {
    try {
      const result = doubleIt(-1);
      console.log(result);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log(error.message);
      }
    }
  });
});
