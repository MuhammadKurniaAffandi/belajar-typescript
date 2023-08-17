describe("Interface", () => {
    // interface
    it("should support interface in typescript", () => {
        const seller = {
            id: 1,
            name: "Toko bunga",
            nib: "12312312",
            npwp: "123821938",
        };
        console.info(seller);
    });
    // interface untuk function
    it("should support interface function", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
    });
    // indexable interface
    it("should support indexable interface", () => {
        const names = ["Muhammad", "Kurnia", "Affandi"];
        console.info(names);
    });
    // indexable interface for non number index
    it("should support indexable interface for non number index", () => {
        const dictinory = {
            name: "Fandi",
            address: "Indonesia",
        };
        expect(dictinory["name"]).toBe("Fandi");
        expect(dictinory["address"]).toBe("Indonesia");
    });
    // implemtasi extends interface
    it("should support extends interface", () => {
        const employee = {
            id: "1",
            name: "Fandi",
            division: "SI",
        };
        console.info(employee);
        const manager = {
            id: "1",
            name: "Kurnia",
            division: "SI",
            numberOfEmployee: 12,
        };
        console.info(manager);
    });
    // function in interface
    it("should support function in interface", () => {
        const person = {
            name: "Fandi",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Kurnia"));
    });
});
export {};
