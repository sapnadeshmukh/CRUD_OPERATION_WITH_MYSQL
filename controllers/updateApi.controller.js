const Connection=require("../database/connection")
const express=require('express')
const app = express()
app.use(express.json())

module.exports.update_data=(req, res) => {
    let sql="UPDATE Mysql_Crud SET name='" +req.body.name+ " ',city='"+req.body.city+ "'WHERE id="+ req.params.id;
    let quary = Connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("updated successfully!!")
        res.send("updated suceefully!!!")
    })
}