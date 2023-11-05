const express=require('express');
//const loginController = require('../controller/loginController');
const router=express.Router();
var database =require('../database');


router.get("/",(req,res)=>{
    res.send("I am in home route");
})

/*
router.get("/login",(req,res)=>{
    res.send();
})
*/
/*
router.get("/register",(req,res)=>{
    res.send("I am in home route");
})
*/
/*
router.get('/',function(req,res,next){
    var query="select * from doctortable where D_ID=1";
    console.log(query);
    database.query(query,function(error,data1){

        if(error){
            throw error;
        }
        else{
            res.render('home',{data1});
        }

    });
});
*/

module.exports=router;