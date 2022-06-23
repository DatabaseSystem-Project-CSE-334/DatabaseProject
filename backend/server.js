const { request, response } = require('express');
const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/home',(request,response)=>{
    
});