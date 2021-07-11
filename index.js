const Engineer = require('');
const Intern = require('');
const Manager = require('');
const fs = require('fs');
const inquirer = require('inquirer')
const Manager1 = [];
const Intern1 = [];
const Engineer1 = [];

const addTeamMember= () => {
    inquirer
        .prompt([
            {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add another team member?',
            },
        ])
        .then ((answers) => {
            if (answers.addTeamMember === true) {
            firstQuestion();
            }
            else {
            console.log(manager1, engineer1, intern1);
            module.exports= manager1;
            module.exports= engineers1;
            module.exports= intern1;
            return answers;
            }
        });
}
const firstQuestion= () => {
    inquirer
        .prompt ([
            {
            type:'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then ((answers) => {
            if (answers.role === 'Manager') {
            managerQuestions();
            }
            else if (answers.role === 'Engineer') {
            engineerQuestions();
            }
            else if (answers.role === 'Intern') {
            internQuestions();
            }
        });
};
firstQuestion();