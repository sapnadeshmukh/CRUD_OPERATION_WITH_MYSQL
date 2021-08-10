const mysql = require("mysql");
require('dotenv').config()


let Connection = mysql.createConnection({
    host : process.env.db,
    user : process.env.user,
    password : process.env.password,
    database : process.env.db_name
});
Connection.connect((err,result)=>{
    if(err)throw err
    console.log("Database connected!!!")
})

var sql = "create table if not exists Mysql_Crud (id  int(11) NOT NULL auto_increment, name  varchar(233), city varchar(355),   primary key (id))";
Connection.query(sql,(err,result)=>{
    if(err) throw err
    console.log("Table has created!!")
})

module.exports=Connection