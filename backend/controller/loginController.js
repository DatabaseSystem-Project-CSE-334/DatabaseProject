const {executeQuery} = require("../database");


const loginController = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
        const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
        

    res.render("login",{});

  
}

//var LEmail='';

const loginController2 = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
       // const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
       console.log("world");
       const LEmail=req.body.LEmail;
       //exports.email={LEmail};
       //console.log(email);
       const LPass=req.body.LPass;
       const patient = await executeQuery("select * from patient where PEmail= ? ",LEmail);
       //console.log(patient);
    res.redirect("/home");
    //res.render("userProfile",{patient});

  
}

//console.log(LEmail)


module.exports={loginController,loginController2};