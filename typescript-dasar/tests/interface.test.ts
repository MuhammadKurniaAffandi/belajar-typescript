import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", () => {
  // interface
  it("should support interface in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko bunga",
      nib: "12312312",
      npwp: "123821938",
    };

    console.info(seller);
  });

  // interface untuk function
  it("should support interface function", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }
    const add: AddFunction = (value1: number, value2: number) => {
      return value1 + value2;
    };

    expect(add(1, 2)).toBe(3);
  });

  // indexable interface
  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Muhammad", "Kurnia", "Affandi"];

    console.info(names);
  });

  // indexable interface for non number index
  it("should support indexable interface for non number index", () => {
    interface StringDictinory {
      [key: string]: string;
    }

    const dictinory: StringDictinory = {
      name: "Fandi",
      address: "Indonesia",
    };

    expect(dictinory["name"]).toBe("Fandi");
    expect(dictinory["address"]).toBe("Indonesia");
  });

  // implemtasi extends interface
  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Fandi",
      division: "SI",
    };

    console.info(employee);

    const manager: Manager = {
      id: "1",
      name: "Kurnia",
      division: "SI",
      numberOfEmployee: 12,
    };
    console.info(manager);
  });

  // function in interface
  it("should support function in interface", () => {
    const person: Person = {
      name: "Fandi",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Kurnia"));
  });

  // intersection type
  it("should support intersection type", () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Fandi",
    };

    console.info(domain);
  });

  // type assertions
  it("should support type assertions", () => {
    const person: any = {
      name: "Fandi",
      age: 27,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
