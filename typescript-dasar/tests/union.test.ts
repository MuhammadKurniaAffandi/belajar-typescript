describe("Union Type", () => {
  it("should support in Typescript", () => {
    let sample: number | string | boolean = "Fandi";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  // union type pada parameter function atau method
  it("should support typeof operator", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Fandi")).toBe("FANDI");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
