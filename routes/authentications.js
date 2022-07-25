
const express=require('express');
const { end } = require('./connection');
const route=express.Router()
const con=require('./connection') 

route.post("/login", (req , res)=>{
    var cms=req.body.cms;
    var password=req.body.password;
    con.connect(function(err){
        con.query("SELECT * FROM authentication WHERE cms=? AND password=?;",[cms,password],(error, row, column)=>{
           if(error) console.log("ERROR OCCURED");
           res.send(JSON.stringify({succes:true,message:column}))
    });         
    });

})


module.exports=route