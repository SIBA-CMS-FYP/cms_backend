
const express=require('express')
const route=express.Router()
const con=require('./connection') 

route.post("/", (req , res)=>{
    var course_id=req.query.course_id;
    var cms=req.query.cms;
    var teacher_id=req.query.teacher_id;
    var enroll_id=req.query.enroll_id;
    console.log(course_id)
    // con.connect(function(err){
    //     if(err){
    //         console.log("ERROR "+err.message)
    //         return;
    //     }
        con.query("INSERT INTO withdraw (course_id, cms, teacher_id, enroll_id) VALUES (?,?,?,?)",[course_id,cms,teacher_id,enroll_id],(error, row, column)=>{
      if(error)
            return res.send("ERROR OCCURED")

        res.send(JSON.stringify({succes:true,message:column}))
    })         
    })    
// })


module.exports=route