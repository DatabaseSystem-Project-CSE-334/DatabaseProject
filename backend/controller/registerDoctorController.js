const {executeQuery} = require("../database");



const registerDoctorController = async(req,res)=>{

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


    res.redirect('/home')

  
}




module.exports=registerDoctorController;