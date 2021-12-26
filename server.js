const mysql = require("mysql");


const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pa$$w0rd01"

});

mysqlConnection.connect(function(err){
  if (err) throw err;
  console.log("connected");
  mysqlConnection.query("CREATE DATABASE mydb", function(err, result){
    if (err) throw err;
    console.log("DATABASE CREATED");
  })
});