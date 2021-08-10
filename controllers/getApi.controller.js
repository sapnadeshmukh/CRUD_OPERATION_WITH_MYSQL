const Connection=require("../database/connection")

module.exports.get_data=(req,res)=> {
    var sql = "SELECT * FROM Mysql_Crud";
    var query = Connection.query(sql,(err,data)=>{
        if(err) throw err;
        console.log(data)
        res.send(data)
    })
}