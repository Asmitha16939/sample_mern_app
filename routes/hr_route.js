let express=require('express');
let router=express.Router();

let {users} =require('../models/users');
router.get("/viewemp", async (req,res)=>{
    let result=await users.find();
    res.send(result);
})
//open postman choose  get method
//localhost:3000/api/hr/viewemp
router.delete("/deleteemp/:id", async (req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id);
    if(result){
        res.send("record deleted success");
    }
  
})


module.exports=router;