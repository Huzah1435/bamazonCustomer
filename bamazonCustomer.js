var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Billabong681",
  database: "bamazon_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM products_db", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
console.log("  ")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout})
    readline.question(`enter id of product`, (id) => {
        console.log(`${id}!`)
        readline.close()});
    readline.question(`how many units`, (units) => {
            console.log(`${units}!`)
            readline.close()});
// con.query("SELECT * FROM products_db WHERE item_id ="+id, function (err, result, fields) {
//               if (err) throw err;
//               console.log(result);
//             });