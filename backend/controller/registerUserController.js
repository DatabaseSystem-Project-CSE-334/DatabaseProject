const {executeQuery} = require("../database");
const {ll} = require("../server");


const registerUserController = async(req,res)=>{

    const PFName=req.body.PFName;
    const PLName=req.body.PLName;
    const PDOB=req.body.PDOB;
    const PBG=req.body.PBG;
    const PGen=req.body.PGen;
    const PPhone=req.body.PPhone;
    const PAdd=req.body.PAdd;
    const PEmail=req.body.PEmail;
    const PPass=req.body.PPass;
    console.log(PFName+PLName+PDOB+PBG+PGen+PPhone+PAdd+PEmail+PPass);
    const setP = await executeQuery("insert into patient values(?,?,?,?,?,?,?,?,?,?)",[0,PFName,PLName,PEmail,PBG,PDOB,PAdd,PGen,PPhone,PPass]);
        //const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);  

    //res.render("registerUser",{});
    res.redirect('./home');

  
}



 


module.exports=registerUserController;