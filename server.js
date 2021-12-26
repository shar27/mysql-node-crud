const mysql = require("mysql");


const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pa$$w0rd01", 
  database: "mydb"

});

//create database
// mysqlConnection.connect(function(err){
//   if (err) throw err;
//   console.log("connected");
  
//   mysqlConnection.query("CREATE DATABASE mydb", function(err, result){
//     if (err) throw err;
//     console.log("DATABASE CREATED");
//   })
// });


//create table
// mysqlConnection.connect(function(err){
//   if (err) throw err;
//   console.log("connected");
//   const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   mysqlConnection.query(sql, function(err, result){
//     if (err) throw err;
//     console.log("table created!");
//   })
// })

//insert data
// mysqlConnection.connect(function(err){
//   if (err) throw err;
//   console.log("connected");
//   const sql = "INSERT INTO customers (name, address) VALUES ('Google' '123 lane London, UK')"
  
//   mysqlConnection.query(sql,function(err){
//     if (err) throw err;
//     console.log("data added: ");
//   });
// });


//insert multiple data 

// mysqlConnection.connect(function(err){
//   if (err) throw err;
//   console.log("connected");
//   const sql = "INSERT INTO customers (name, address) VALUES ?"
//   const data = [
//     ['google', 'homeway, 606 rye lane'],
//     ['nike', 'justdoit lane'],
//     ['adiddas', 'keep going']
//   ];
//   mysqlConnection.query(sql,[data],function(err, result){
//     if (err) throw err;
//     console.log("data added: " +  result.affectedRows);
//   });
// });

mysqlConnection.connect(function(err){
  if ( err) throw err;
  console.log('connected');
  const sql = "INSERT INTO customers (name, address) VALUES ('shar', 'the mooon 1')"
  mysqlConnection.query(sql, function(err, result){
    if (err) throw err;
    console.log("data added and ID:" + result.InsertID);
  });
});