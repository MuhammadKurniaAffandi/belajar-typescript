describe("Static", () => {
  class Configuration {
    static NAME: string = "Belajar Typescript OOP";
    static Version: number = 1.0;
    static AUTHOR: string = "Muhammad Kurnia Affandi";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }
  }

  it("should support static method", () => {
    console.log(MathUtil.sum(1, 2, 3, 4, 5));
  });
  it("Should support static", () => {
    console.log(Configuration.NAME);
    console.log(Configuration.Version);
    console.log(Configuration.AUTHOR);
  });
});
