const express = require('express');
//const {executeQuery} = require("../database");
const homeController1 = require('./controller/homeController');
//const homeController = require('./controller/homeController');
const loginController =require('./controller/loginController');
const registerController =require('./controller/registerController');
const registerDoctorController =require('./controller/registerDoctorController');
const registerUserController= require('./controller/registerUserController');
const userRouter=require('./routes/user.routes');
//const {executeQuery} = require("../database");
const app = express();
app.use(userRouter);
const path = require('path');
const userAppntListController = require('./controller/userAppntListController');
const doctorDetailsController = require('./controller/doctorDetailsController');
const userProfileController = require('./controller/userProfileController');
const EpresController = require('./controller/EpresController');


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname + '/views'));

app.use(express.static(path.join(__dirname + '/public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/home', homeController1.homeController1);
app.get('/login', loginController.loginController);
app.get('/register',registerController);
app.get('/userAppntList',userAppntListController);
app.get('/doctorDetails',doctorDetailsController.doctorDetailsController)
app.get('/userProfile',userProfileController.userProfileController)
app.get('/Epres',homeController1.homeController2);



app.get('/registerDoctor',async(req,res)=>{

    res.render("registerDoctor",{});
 }
 )


app.get('/registerUser',async(req,res)=>{

   res.render("registerUser",{});
}
)
//app.post('/registerUser',registerUserController)

app.post('/registerDoctor',userProfileController.userProfileController6);


app.post('/home',homeController1.homeController);
//app.post('/Epres',homeController1.homeController2);

app.post('/login',userProfileController.userProfileController2)
app.post('/registerUser',userProfileController.userProfileController5)
app.post('/userProfile',userProfileController.userProfileController3)
app.post('/doctorDetails',userProfileController.userProfileController4)

/*
//For search text
app.post('/home',(req,res)=>{
    const src=req.body.search;
    console.log(src);
    res.redirect('/home');
}); */




const registerUserController1 = async(req,res)=>{
    const setDoctor = await registerUser.registerUserControllerexecuteQuery("insert into patient values(?,?,?,?,?,?,?,?,?,?)",[0,"anik","Mac","sjklslsdh@gmail.com","343","23233","O-","45/44/3",'2',"male"]);
         //const doctor = await executeQuery("select * from doctortable");
         //const doctor = await executeQuery("select * from doctable2");
         
        console.log("HI summon");
     res.render("registerUser",{});
 
   
 }




app.listen(4010,()=>{
    console.log(path.join(__dirname + '/views'))
    console.log("server is running");
})

module.exports=app;