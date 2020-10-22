const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [{
    name: "name",
    type: "input",
    message: "Employee Name"
},
{
    name: "Position",
    type: "list",
    choices:["Manager, Engineer, Intern"], 
    message: " What is your Position?"
},
{
    name: "id",
    type: "input",
    message: "What is your ID Number?"
},
{
    name: "Email",
    type: "input",
    message: "What is your Email Address?"
},

];
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!





// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

//Ask user if they would like to add a manager, engineer or intern.
// in the .then of the response trigger another inquirer prompt function based on
// whether they chose manager , engineer or intern.
// each function for manager engineer or intern will not only ask standard 
// employee questions but also , custom questions to the particular role. 
// Once we recive employee information, use the "new" keyword to create a class

//Imagine we have collected employee data in the response object 
// let name = answers.name
// let id = answers.id 
// let email  = answers.email
// let classInstance = new Engineer(name, id, email)


// instance and add instanced object to an array.
// Finally, ask the user if they want to add another employee. If so , 
// trigger the first function to start over. 
// Once all employee class instances have been added to the array
// pass array to render function. 



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
