var mysql = require('mysql');
var inquirer = require('inquirer');

var conection = mysql.createConnection({
    host:"localhost",
    port:8889,
    user:"root",
    password:"root",
    database:"bamazon"
})