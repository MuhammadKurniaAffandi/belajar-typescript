"use strict";
describe("If Statement", () => {
    // if statement
    it("should support if statement", () => {
        const examValue = 90;
        if (examValue > 80) {
            console.info("Good");
        }
        else if (examValue > 60) {
            console.info("Not Bad");
        }
        else {
            console.info("Try Again");
        }
    });
    // ternary operator
    it("should support ternary operator", () => {
        const examValue = 90;
        const say = examValue >= 75 ? "Congratulation" : "Try Again";
        console.info(say);
    });
    // switch statement
    it("should support switch", () => {
        const sayHello = (name) => {
            switch (name) {
                case "Kurnia":
                    return `Hello Kurnia`;
                    break;
                case "Fandi":
                    return `Hello Fandi`;
                    break;
                default:
                    return `Hello`;
                    break;
            }
        };
        console.info(sayHello("Fandi"));
    });
});
