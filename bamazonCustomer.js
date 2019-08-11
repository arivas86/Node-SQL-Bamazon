
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
});

var loadTable = function(){
    connection.query("SELECT * FROM products", function(err,res) {
        if (err) throw err;
        console.table(res);
    
        customerPrompt(res);
    });
}

var customerPrompt = function(res){
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message:"What would you like to buy?"
    }]).then(function(answer){
        var correct = false;
        for (var i=0; i < res.lenght; i++){
            if(res[i].product_name==answer.choice){
                correct=true;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    type:'input',
                    name:'quantity',
                    message:"How many would you like?",
                    validate:function(value){
                        if(isNaN(value)==false){
                            return true;
                        }else{
                            return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].stock_qty - answer.quantity)>0){
                        connection.query("UPDATE products SET stock_qty='"+(res[id].stock_qty-answer.quantity)+
                    "' WHERE product_name='"+product+"'", function(err, res2){
                        console.log("Item Purchased");
                        loadTable();
                    });
                    }else{
                        console.log("Quantity must be less or equal to stock quantity");
                        customerPrompt(res);
                    }
                });
            }
        }
    });
}

  