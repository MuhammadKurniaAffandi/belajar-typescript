"use strict";
describe("Loop", () => {
    // for loop
    it("should support Loop", () => {
        const names = ["Muhammad", "Kurnia", "Affandi"];
        // for cara 1
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        // for cara 2
        for (const name of names) {
            console.info(name);
        }
        // for cara 3
        for (const key in names) {
            console.info(names[key]);
        }
    });
    // while loop
    it("should suppor while loop", () => {
        let counter = 0;
        while (counter < 10) {
            console.log(counter);
            counter++;
        }
    });
    // do while loop
    it("should support do while loop", () => {
        let counter = 0;
        do {
            console.log(counter);
            counter++;
        } while (counter < 10);
    });
    // break and continue
    it("should support break and continue", () => {
        let counter = 0;
        do {
            counter++;
            if (counter === 10) {
                break;
            }
            if (counter % 2 === 0) {
                continue;
            }
            console.log(counter);
        } while (true);
    });
});
