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

function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    });
}

function viewRoles() {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    });
}

function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What is the name of the department you would like to add?'
            }
        ])
        .then((answer) => {
            connection.query('INSERT INTO department SET ?', { name: answer.department }, (err, res) => {
                if (err) throw err;
                console.log('Department added!');
                startApp();
            });
        });
    }

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'role',
                message: 'What is the name of the role you would like to add?'
            }
        ])
        .then((answer) => {
            connection.query('INSERT INTO role SET ?', { name: answer.role }, (err, res) => {
                if (err) throw err;
                console.log('Role added!');
                startApp();
            });
        });
    }

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employee',
                message: 'What is the name of the employee you would like to add?'
            }
        ])
        .then((answer) => {
            connection.query('INSERT INTO employee SET ?', { name: answer.employee }, (err, res) => {
                if (err) throw err;
                console.log('Employee added!');
                startApp();
            });
        });
    }

    function updateEmployeeRole() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'employee',
                    message: 'What is the name of the employee you would like to update?'
                }
            ])
            .then((answer) => {
                connection.query('UPDATE employee SET ?', { name: answer.employee }, (err, res) => {
                    if (err) throw err;
                    console.log('Employee updated!');
                    startApp();
                });
            });
        }

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    startApp();
}   );
