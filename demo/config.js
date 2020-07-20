const mysql = require('mysql');


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo",
    multipleStatements: true
});

db.connect (function (err) {
    if (err) {
        console.log(err)
        console.log("Error occured while connecting to demo database");
    } else{ 
        console.log("Successfully connected to demo database");
    }
});
module.exports = db;