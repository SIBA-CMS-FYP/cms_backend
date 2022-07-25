
const express=require('express')
const route=express.Router()
const con=require('./connection')   

route.get('/Request', (req , res)=>{
    var teacher_id=req.query.teacher_id;

    // con.connect(function(err){
    //     if(err){
    //         return console.log("ERROR "+err.message)
    //     }
        con.query("SELECT courses.course_title as Title,CONCAT(student_profile.first_name,' ',student_profile.last_name) As Name From courses JOIN withdraw ON courses.course_id=withdraw.course_id JOIN student_profile ON withdraw.cms=student_profile.cms WHERe withdraw.teacher_id=?",[teacher_id],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED")
            
           
         res.send(JSON.stringify({row}))
    })         
    })    
// })


module.exports=route