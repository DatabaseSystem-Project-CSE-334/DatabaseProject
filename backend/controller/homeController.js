const {executeQuery} = require("../database");


const homeController = async(req,res)=>{
   //const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"sumon","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
       // const doctor = await executeQuery("select * from doctable2");
       // const doctorSp = await executeQuery("select * from doctable2 NATURAL JOIN speciality");
        //const doctorSp = await executeQuery("select * from ");
       // console.log(doctor);
       const src=req.body.search;
       const pp='%';
      const doctor = await executeQuery("select * from doctable2 where  F_Name LIKE ?",pp+src+pp);
      const doctorSp = await executeQuery("select * from doctable2 NATURAL JOIN speciality");
      const appList = await executeQuery("select * from patient NATURUL JOIN dotorapplist");
        console.log(src);
        console.log("in this post");
        var f=1;
        var f1=0;

   // res.render("home",{doctor,doctorSp});
  if(src==null&&f==1)
  {
   res.render('Epres',{})
   f=10;
   f1=2;
  }
  else if(src==null&&f1==2)
  {
   // const doctorSp2 = await executeQuery("DELETE FROM dotorapplist WHERE App_ID = ? ",5);
   //const appList = await executeQuery("select * from patient NATURUL JOIN dotorapplist");
   //res.render('home',{});
  res.redirect("/home")
 // f1=2;
 // f=0;
  }
  else
   {
      res.render('home',{doctor,doctorSp,appList});
   }
   console.log(f+" anik")
   // res.redirect('/home');
 

  
}

const homeController1 = async(req,res)=>{
   //const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"sumon","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
        const doctor = await executeQuery("select * from doctable2");
        const doctorSp = await executeQuery("select * from doctable2 NATURAL JOIN speciality");
        const appList = await executeQuery("select * from patient NATURAL JOIN dotorapplist");
        //const doctorSp = await executeQuery("select * from ");
       // console.log(appList);


        //console.log("sujoy")

    res.render("home",{doctor,doctorSp,appList});

  
}

const homeController2 = async(req,res)=>{
   //const setDoctor = await executeQuery("insert into doctable2 values(?,?,?,?,?,?,?,?,?,?,?)",[0,"sumon","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",2,300,"male"]);
        //const doctor = await executeQuery("select * from doctortable");
       // const doctor = await executeQuery("select * from doctable2");
        //const doctorSp = await executeQuery("select * from doctable2 NATURAL JOIN speciality");
        //const appList = await executeQuery("select * from patient NATURAL JOIN dotorapplist");
        //const doctorSp = await executeQuery("select * from ");
       // console.log(appList);


        //console.log("sujoy")
    //res.redirect("/home")
    res.render("Epres",{});

  
}


//exports.method = homeController();
//exports.othermethod = homeController1();


module.exports={homeController1,homeController,homeController2};
//module.exports=homeController();