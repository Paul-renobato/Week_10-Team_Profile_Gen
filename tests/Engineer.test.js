const Engineer = require("../TeamMembers/Engineer");

describe("Engineer", () => {
    it("should contain a github string", () => {
        const github = "Paul-renobato";
        const newEngineer = new Engineer("name", 1, "email", github);
        expect(newEngineer.github).toBe(github);
    })
})