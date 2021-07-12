const Engineer = require('./TeamMembers/Engineer');
const Intern = require('./TeamMembers/Intern');
const Manager = require('./TeamMembers/Manager');
const Employee = require('./TeamMembers/Employee');
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
            console.log(Manager1, Engineer1, Intern1);
            module.exports= Manager1;
            module.exports= Engineer1;
            module.exports= Intern1;
            topHtmlFile();
            engineerGenerator();
            managerGenerator();
            internGenerator();
            bottomHtmlFile();
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
const generateTopHtml = () => {
return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class= "jumbotron jumbotron-fluid bg-danger">
        <div class= "container">
            <h1 class= "display-4 text-center">My Team</h1>
        </div>
    </div>`
    };
const generateManagerCard = (Managers) => {
return`<div class= "row justify-content-center">
        <div class= "card bg-light mb-4" style="max-width: 18rem;">
        <div class= "card-header">${Managers.name}</div>
        <div class= "card-header">Manager</div>
        <div class= "card-body">
            <div class= "list-group">
                <li class= "list-group-item">ID:${Managers.id} </li>
                <li class= "list-group-item">Email:${Managers.email} </li>
                <li class= "list-group-item">Office:${Managers.office} </li>
            </div>
        </div>
    </div>`
    };
const generateEngineerCard = (Engineers) => {
    return`
    <div class= "card bg-light mb-4" style="max-width: 18rem;">
    <div class= "card-header">${Engineers.name}</div>
    <div class= "card-header">Engineer</div>
    <div class= "card-body">
        <div class= "list-group">
            <li class= "list-group-item">ID:${Engineers.id} </li>
            <li class= "list-group-item">Email:${Engineers.email} </li>
            <li class= "list-group-item">Github:${Engineers.github} </li>
        </div>
    </div>
    </div>`
    };
    const generateInternCard = (Interns) => {
    return`<div class= "card bg-light mb-4" style="max-width: 18rem;">
        <div class= "card-header">${Interns.name}</div>
        <div class= "card-header">Intern</div>
        <div class= "card-body">
            <div class= "list-group">
                <li class= "list-group-item">ID:${Interns.id} </li>
                <li class= "list-group-item">Email:${Interns.email} </li>
                <li class= "list-group-item">School:${Interns.school} </li>
            </div>
        </div>
        </div>
</div>`
    };
const generateBottomHtml = () => {
    return`</body>
    </html>`
};
const topHtmlFile = () => {
    fs.appendFileSync("index.html", generateTopHtml());
};
const managerGenerator = () => {
Manager1.forEach((Managers => {
    fs.appendFileSync("index.html", generateManagerCard(Managers))
}))};
const engineerGenerator = () => {
Engineer1.forEach((Engineers => {
    fs.appendFileSync("index.html", generateEngineerCard(Engineers))
}))};
const internGenerator = () => {
Intern1.forEach((Interns => {
    fs.appendFileSync("index.html", generateInternCard(Interns))
}))};
const bottomHtmlFile = () => {
    fs.appendFileSync("index.html", generateBottomHtml());
}