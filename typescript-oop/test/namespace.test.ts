import { MathUtils } from "../src/math-utils";

describe("Namespace", () => {
  it("should support Namespace", () => {
    console.log(MathUtils.PI);
    console.log(MathUtils.sum(1, 2, 3, 4, 5));
  });
});
