const {executeQuery} = require("../database");
const loginController =require('./loginController');

var patient;
var pID;

const userProfileController = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
        //const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
        
    //patient=loginController.LEmail;
    //const patient = await executeQuery("select * from patient where PEmail= ? ",LEmail);
    //console.log(patient)
    //console.log("sumon "+patient)
    //console.log(patient);

    res.render("userProfile",{patient});

  
}
const userProfileController2 = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
       // const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
       const LEmail=req.body.LEmail;
       //console.log("world "+LEmail);
       //exports.email={LEmail};
       //console.log(email);
       const LPass=req.body.LPass;
       patient = await executeQuery("select * from patient where PEmail= ? ",LEmail);
       //console.log(patient);
       pID=patient[0].P_ID
    res.redirect("/home");
    //res.render("userProfile",{patient});

  
}

const userProfileController3 = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
       // const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
       const uFName=req.body.uFName;
       const uLName=req.body.uLName;
       const uPhone=req.body.uPhone;
       console.log("world "+uFName);
       //exports.email={LEmail};
       //console.log(email);
       const uAdd=req.body.uAdd;
      // patient = await executeQuery("select * from patient where PEmail= ? ",LEmail);
       //console.log(patient);
   // const updateUser1 = await executeQuery("UPDATE patient SET  FirstName= ?,LastName= ? ,PPhone= ?,PAddress= ? WHERE P_ID= ? ",uFNam);
    const updateUser = await executeQuery("UPDATE patient SET  FirstName= ?,LastName= ? ,PPhone= ?,PAddress= ? WHERE P_ID= ? ",[uFName,uLName,uPhone,uAdd,pID]);
    //res.redirect("/userProfile");
    patient = await executeQuery("select * from patient where P_ID= ? ",pID);
    res.render("userProfile",{patient});

  
}

const userProfileController4 = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctable2 where D_ID=43");
        //const doctorSp = await executeQuery("select * from speciality where D_ID=48");
        //const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
       const DisName=req.body.DisName;
       const instappt = await executeQuery("insert into dotorapplist(D_ID,P_ID,DieaName,APP_ID) values(?,?,?,?)",[43,pID,DisName,0]);
       //console.log(DisName+"   Anik");
     res.redirect('/home');
    //res.render("doctorDetails",{});

}
const userProfileController5 = async(req,res)=>{
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
    const setp = await executeQuery("insert into patient values(?,?,?,?,?,?,?,?,?,?)",[0,PFName,PLName,PEmail,PBG,PDOB,PAdd,PGen,PPhone,PPass]);
        //const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);  

    //res.render("registerUser",{});
      // const LEmail=req.body.PEmail;
       //exports.email={LEmail};
       //console.log(email);
       //const LPass=req.body.LPass;
       patient = await executeQuery("select * from patient where PEmail= ? ",PEmail);
       //console.log(patient);
       console.log(patient);
       pID=patient[0].P_ID
    res.redirect("/home");
    //res.render("userProfile",{patient});

  
}

const userProfileController6 = async(req,res)=>{

  const DFName=req.body.DFName;
  const DLName=req.body.DLName;
  const DDOB=req.body.DDOB;
  const DBG=req.body.DBG;
  const DGen=req.body.DGen;
  const DONum=req.body.DONum;
  const DPNum=req.body.DPNum;
  const DVFee=req.body.DVFee;
  const DExp=req.body.DExp;
  const DSpe=req.body.DSpe;
  const DInsName=req.body.DInsName;
  const DRoomNo=req.body.DRoomNo;
  const DBNo=req.body.DBNo;
  const DPName=req.body.DPName;
  const DCName=req.body.DCName;
  const DEmail=req.body.DEmail;
  const DPass=req.body.DPass;
  console.log(DFName+DLName+DDOB+DBG+DGen+DONum+DPass);
  const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,DFName,DLName,DEmail,DPNum,DONum,DBG,DDOB,DExp,DVFee,DGen]);
  const id = await executeQuery("select D_ID from doctable2 WHERE Email = ?",DEmail);
  //console.log("Doctor id "+id[0].D_ID);
  const setDoctor1 = await executeQuery("insert into institute values(?,?,?,?,?,?)",[0,DInsName,DRoomNo,DPName,DCName,id[0].D_ID]);
  const setDoctor2 = await executeQuery("insert into speciality values(?,?)",[id[0].D_ID,DSpe]);

  patient = await executeQuery("select * from doctable2 where D_ID = ? ",id[0].D_ID);
       //console.log(patient);
       //console.log(patient);
       pID=id[0].D_ID
    res.redirect('/home')

  
}







module.exports={userProfileController,userProfileController2,userProfileController3,userProfileController4,userProfileController5,userProfileController6}