const mysql = require("mysql");


let Connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Sapna@2104",
    database : "Navgurukul"
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