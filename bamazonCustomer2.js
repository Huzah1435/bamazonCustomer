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
con.query("SELECT * FROM products_db", function (err, result, fields) {
    // if (err) throw err;
    console.log(result);
});
// });
var questions = [{
    type: 'input',
    name: 'product_id',
    message: "What product id would you like?",
},
{
    type: 'input',
    name: 'quantity',
    message: "How many of the items would you like?",
}];
async function init() {

    await sleep(1000)
}
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
init();


inquirer.prompt(questions).then(answer => {
    console.log(answer)
    id = answer["product_id"];
    qoo = answer["quantity"];
    con.query("SELECT * FROM products_db WHERE item_id = " + id, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        qi = result[0].stock_quantity;
        console.log(qi);
        if (qoo > qi) {
            console.log("Insufficient quantity!")
        }
        else {
            price = result[0].price;
            price = price * qoo;
            console.log("order processed, product = " + id + " quantity = " + qoo + " price = " + price);
            txt = "UPDATE products_db SET stock_quantity = " + (qi - qoo) + " WHERE item_id = " + id;
            console.log(txt);
            con.query(txt, function (err, result) {
                if (err) throw err;
            })
        }
    });
});
con.end();
