
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port:8889,
    user:"root",
    password:"root",
    database:"bamazon"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("connection succesful");
    loadTable();
})

var loadTable = function(){
    connection.query("SELECT * FROM products", function(err,res){
        if (err) throw err;
            console.table(res);
        
    })
}