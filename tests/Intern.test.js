const Intern = require("../TeamMembers/Intern");

describe("Intern", () => {
    it("should contain a school string", () => {
        const school = "Texas AM";
        const newIntern = new Intern("name", 1, "email", school);
        expect(newIntern.school).toBe(school);
    })
})