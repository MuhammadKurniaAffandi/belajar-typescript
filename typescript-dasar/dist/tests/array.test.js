"use strict";
describe("Array", function () {
    it("should same with javascript ", () => {
        const names = ["Muhammad", "Kurnia", "Affandi"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    // array dengan ReadonlyArray
    // array yang hanya bisa dibaca, tidak bisa diubah ataupun dimanipulasi
    it("should support read only array", () => {
        const hobbies = ["Membaca", "menulis"];
        console.log(hobbies);
    });
    // Tupple
    it("should support tupple", () => {
        const person = ["Kurnia", "Fandi", 3];
        console.log(person);
    });
});
