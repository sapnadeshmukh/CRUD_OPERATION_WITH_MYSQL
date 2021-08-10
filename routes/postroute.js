const express=require("express")
const router=express.Router()
const createController=require('../controllers/postApi.controller')

router.post('/',createController.post_data)
module.exports=router