let express=require('express');
let router=express.Router();

router.get('/viewemp',(req,res)=>{
    res.send("Employee registered successfully");
});
router.post('/login',(req,res)=>{
    res.send("Employee logged in successfully");
});
router.delete('/deleteemp',(req,res)=>{
    res.send("Employee deleted successfully");
});
router.get('/viewtask',(req,res)=>{
    res.send("Employee task viewed successfully");
});