
const express=require('express')
const route=express.Router()
const con=require('./connection') 

route.post("/login", (req , res)=>{
    var cms=req.body.cms;
    var password=req.body.password;
    con.connect(function(err){
        if(err){
            console.log("ERROR "+err.message)
            return;
        }
        con.query("SELECT * FROM authentication WHERE cms=? AND password=?;",[cms,password],(error, row, column)=>{
      if(error)
            return res.send("ERROR OCCURED")

        res.send(JSON.stringify({succes:true,message:column}))
    })         
    })    
})


module.exports=route