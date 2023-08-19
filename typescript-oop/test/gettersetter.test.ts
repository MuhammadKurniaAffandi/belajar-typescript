describe("Getter and Setter", () => {
  class Category {
    _name?: string;

    // Getter
    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }

    // Setter
    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  // Getter and Setter
  it("should support Getter and Setter", () => {
    const category: Category = new Category();
    console.log(category.name);

    category.name = "Foods";
    console.log(category.name);

    category.name = "";
    console.log(category.name);
  });
});
