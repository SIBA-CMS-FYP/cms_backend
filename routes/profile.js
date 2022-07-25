
const express=require('express')
const route=express.Router()
const con=require('./connection')   

route.get('/', (req , res)=>{
    var cms=req.query.cms;
    console.log(cms)
    // con.connect(function(err){
    //     if(err){
    //         return console.log("ERROR "+err.message)
    //     }
        con.query("SELECT * FROM student_profile WHERE cms=?;",[cms],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED")
            
           
         res.send(JSON.stringify({row}))
    })         
    })    
// })


module.exports=route