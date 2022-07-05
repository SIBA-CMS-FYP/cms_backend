
const express=require('express')
const route=express.Router()
const con=require('./connection')   

route.post('/withdrawResponse', (req , res)=>{
    var cms=req.query.cms;
    var course_id=req.query.course_id;
    var withdrawStatus=req.query.withdrawStatus
    console.log(cms)
    con.connect(function(err){
        if(err){
            return console.log("ERROR "+err.message)
        }
        con.query("Update Withdraw SET Status=? WHERE cms=? AND course_id=?;",[withdrawStatus,cms,course_id],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED")
            
           
         res.send(JSON.stringify({row}))
    })         
    })    
})


module.exports=route