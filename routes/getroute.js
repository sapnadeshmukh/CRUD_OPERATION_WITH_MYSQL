const express=require("express")
const router=express.Router()
const getController=require('../controllers/getApi.controller')

router.get('/',getController.get_data)
module.exports=router