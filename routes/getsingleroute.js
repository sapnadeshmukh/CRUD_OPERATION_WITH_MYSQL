const express=require("express")
const router=express.Router()
const getSingleController=require('../controllers/getsingleuserApi.controller')

router.get('/:id',getSingleController.get_singleuser_data)
module.exports=router