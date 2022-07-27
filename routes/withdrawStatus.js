
const express=require('express')
const route=express.Router()
const con=require('./connection')   

route.get('/withdrawStatus', (req , res)=>{
    var cms=req.query.cms;
    var enroll_id=req.query.enroll_id;
    console.log(cms)
    // con.connect(function(err){
    //     if(err){
    //         return console.log("ERROR "+err.message)
    //     }
        con.query("SELECT Status FROM withdraw WHERE cms=? AND enroll_id=?;",[cms,enroll_id],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED")
            
           
         res.send(JSON.stringify({row}))
    })         
    })    
// })


module.exports=route