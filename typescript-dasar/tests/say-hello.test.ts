import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello fandi", function () {
    expect(sayHello("fandi")).toBe("Hello fandi");
  });
});
