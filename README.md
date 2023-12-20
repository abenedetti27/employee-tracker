# employee-tracker

# README Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description <a name="description"></a>

This command-line application will allow the user to view and manage the departments, roles, and employees of a company.

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation <a name="installation"></a>
This command-line application accepts input from the user. WHen they start the application
the user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

When the user chooses to view all departments,
they are presented with a formatted table showing department names and department ids. When they choose to view all roles, they are presented with the job title, role id, the department that role belongs to, and the salary for that role.

When the user chooses to view all employees, they are presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

When the user chooses to add a department, they are prompted to enter the name of the department and that department is added to the database. When they choose to add a role the user is prompted to enter the name, salary, and department for the role and that role is added to the database.

When the user chooses to add an employee, they are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database. WHen they choose to update an employee role, they are prompted to select an employee to update and their new role and this information is updated in the database.

```
const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Expelliarmus103*',
    database: 'employee_db'
});

function startApp() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'start',
                message: 'What would you like to do?',
                choices: [
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'View Departments',
                    'View Roles',
                    'View Employees',
                    'Update Employee Role',
                    'Exit'
                ]
            }
        ])
        .then((answer) => {
            switch (answer.start) {
                case 'Add Department':
                    addDepartment();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'View Departments':
                    viewDepartments();
                    break;

                case 'View Roles':
                    viewRoles();
                    break;

                case 'View Employees':
                    viewEmployees();
                    break;

                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;

                case 'Exit':
                    connection.end();
                    break;
            }
        });
}

```

## Usage <a name="usage"></a>
This application is meant to be used to view and manage the departments, roles, and employees in a company to organize and plan business.


## License <a name="license"></a>
MIT License


## Questions <a name="questions"></a>

GitHub Profile: [github](https://github.com/abenedetti27)

Please direct any questions to:

Email: abenedetti27@gmail.com
