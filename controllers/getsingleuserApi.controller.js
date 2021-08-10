const Connection=require("../database/connection")

module.exports.get_singleuser_data=(req,res)=> {
    let sql = "SELECT * FROM Mysql_Crud WHERE id=" + req.params.id;
    var query = Connection.query(sql,(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
}