const inquirer = require('inquirer');
const mysql = require('mysql12');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
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
}