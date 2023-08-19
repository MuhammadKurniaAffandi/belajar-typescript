"use strict";
describe("Function", () => {
    it("should support in typescript", () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Fandi")).toBe("Hello Fandi");
        const printHello = (name) => {
            console.info(`Hallo ${name}`);
        };
        printHello("Kurnia");
    });
    // default value parameter
    it("should support default value parameter", () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Fandi")).toBe("Hello Fandi");
    });
    // rest parameter
    it("should support rest parameter", () => {
        const sum = (...values) => {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        };
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    // optional parameter
    it("should support optional parameter", () => {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            return `Hello ${firstName}`;
        }
        expect(sayHello("Fandi")).toBe("Hello Fandi");
        expect(sayHello("Fandi", "Kurnia")).toBe("Hello Fandi Kurnia");
    });
    // function overloading
    it("should support function overloading", () => {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toLowerCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("FandI")).toBe("fandi");
    });
    // function as parameter
    it("should support function as parameter", () => {
        const sayHello = (name, filter) => {
            return `Hello ${filter(name)}`;
        };
        const toUpper = (name) => {
            return name.toUpperCase();
        };
        expect(sayHello("Fandi", toUpper)).toBe("Hello FANDI");
        // anonymus function at parameter
        expect(sayHello("Fandi", function (name) {
            return name.toUpperCase();
        })).toBe("Hello FANDI");
        // anonymus arrow function at parameter
        expect(sayHello("Fandi", (name) => name.toUpperCase())).toBe("Hello FANDI");
    });
});
