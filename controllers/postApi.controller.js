const Connection=require("../database/connection")


module.exports.post_data=(req, res) => {
    let data={ id:req.body.id,
        name:req.body.name,
        city:req.body.city};

        var sql = "INSERT INTO Mysql_Crud SET ?";
        let query=Connection.query(sql,data,(err,result)=>{
            if(err) throw err;
            console.log("Data has insertd!!!")
            res.send("Data has inserted!!!")
            
        })
}