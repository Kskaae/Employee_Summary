// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const Intern = require("./intern");
class Intern extends Employee {
    constructor(name,id, email,github) {
      super(name,id, email);
      this.school = school;
    };
        
        getSchool(school) {
      
          return this.school;
        };
        getRole(role) {
      
          return "Intern";
        };
    }
    module.exports = Intern;