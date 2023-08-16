"use strict";
describe('Any', () => {
    it('should support in type script', function () {
        const person = {
            id: 1,
            name: 'Muhammad Kurnia Affandi',
            age: 27
        };
        person.age = 25;
        person.address = 'Indoensia';
        console.info(person);
    });
});
