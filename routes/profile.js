
const express=require('express')
const route=express.Router()
const con=require('./connection')   

route.get('/', (req , res)=>{
    var cms=req.query.cms;
    console.log(cms)
        con.query("SELECT * FROM student_profile WHERE cms=?;",[cms],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED")
            
        console.log(JSON.stringify(row[0]));
         res.send(JSON.stringify(row[0]))
    })         
    })    
// })


module.exports=route