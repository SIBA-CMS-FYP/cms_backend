
const express=require('express');
const { end } = require('./connection');
const route=express.Router()
const con=require('./connection') 

route.post("/login", (req , res)=>{
    var cms=req.query.cms || req.body.cms || req.params.cms;
    var password=req.query.password || req.body.password || req.params.password;

        con.query("SELECT * FROM authentication WHERE cms=? AND password=?;",[cms,password],(error, row,column)=>{
           if(error) 
             console.log("ERROR OCCURED");
             console.log(row);
             
            if(row.length>0){
                res.send({success:true, data:row, message:'Loggedin successfully'})
            }
            else{
                res.send({success:false, message:'Invalid credentials'})
            }

    });         
    });
module.exports=route