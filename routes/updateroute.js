const express=require("express")
const router=express.Router()
const updateController=require('../controllers/updateApi.controller')

router.put('/:id',updateController.update_data)
module.exports=router