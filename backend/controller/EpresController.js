const {executeQuery} = require("../database");



const EpresController = async(req,res)=>{
  // const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
        //const doctor = await executeQuery("select * from doctable2");
       // console.log(doctor);
        

    res.render("Epres",{});

  
}




module.exports=EpresController;