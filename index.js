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

const engineerQuestions = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is your ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
        },
        {
          type: "input",
          name: "github",
          message: "What is your Github username?",
        },
      ])
      .then((answers) => {
        const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        Engineer1.push(newEngineer);
        addTeamMember();
      })
  };

  const internQuestions= () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do you attend?',
            },
        ])
        .then ((answers) => {
            const newIntern= new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            );
            Intern1.push(newIntern);
            addTeamMember();
        });
}

const managerQuestions= () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Email?',
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
            },
        ])
        .then ((answers) => {
            const newManager= new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.office,
            );
            Manager1.push(newManager);
            addTeamMember();
        })
};