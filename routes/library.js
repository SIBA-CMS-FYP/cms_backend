
const express=require('express')
const route=express.Router()
const con=require('./connection')   
route.get('/getLibrary', (req , res)=>{
   
    var cms=req.query.cms;
    console.log(cms)

        con.query("SELECT * FROM library WHERE cms=? ;",[cms],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED")
            res.send(JSON.stringify({row}))
    })         
    })    


module.exports=route