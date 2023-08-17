"use strict";
describe("Object", () => {
    it("should support in typescript", () => {
        const person = {
            id: "1",
            name: "Kurnia",
        };
        console.info(person);
        person.id = "2";
        person.name = "Fandi";
        console.info(person);
    });
});
