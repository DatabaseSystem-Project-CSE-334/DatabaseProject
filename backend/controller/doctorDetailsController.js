const {executeQuery} = require("../database");
const { response } = require("../server");



const doctorDetailsController = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        const doctor = await executeQuery("select * from doctable2 where D_ID=43");
        const doctorSp = await executeQuery("select * from speciality where D_ID=48");
        //const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
        

    res.render("doctorDetails",{doctor,doctorSp});

  
}
const doctorDetailsController3 = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctable2 where D_ID=43");
        //const doctorSp = await executeQuery("select * from speciality where D_ID=48");
        //const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
       const DisName=req.body.DisName;
       console.log(DisName+"   Anik");
     res.redirect('/home');
    //res.render("doctorDetails",{});

}



module.exports={doctorDetailsController,doctorDetailsController3};