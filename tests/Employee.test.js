  
const Employee = require("../TeamMembers/Employee");

describe("Employee", () => {
    it("should contain a name string", () => {
        const name = "Paul";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe("Paul");
    });

    it("should contain a id number", () =>{
        const id = 1;
        const newEmployee = new Employee("name", id);
        expect(newEmployee.id).toBe(1);
    });

    it("should contain a email string", () =>{
        const email = "Email@email.com"
        const newEmployee = new Employee("name", 1, email);
        expect(newEmployee.email).toBe("Email@email.com");
    });
})