var mysql = require('mysql');
var inquirer = require('inquirer');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Billabong681",
  database: "bamazon_db"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM products_db", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
inquirer.prompt(questions).then(answer => console.log(answer))