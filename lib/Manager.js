// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const Manager = require("./Manager");
class Manager extends Employee {
    constructor(name,id, email,github) {
      super(name,id, email);
      this.officeNumber = (officeNumber);
    };
        
        getOfficeNumber(officeNumber) {
      
          return this.officeNumber;
        };
        getRole(role) {
      
          return "Manager";
        };
    }
    module.exports = Manager;