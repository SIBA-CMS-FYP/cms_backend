
const express=require('express')
const route=express.Router()
const con=require('./connection')   

route.get('/getResult', (req , res)=>{
    var cms=req.query.cms;
    var enroll_id=req.query.enroll_id;
        con.query("SELECT courses.course_title as Course,result.firstMid,result.secondMid,result.sessional,result.finalExam FROM result JOIN courses ON result.course_id=courses.course_id WHERE result.cms=? AND result.enroll_id=? ;",[cms,enroll_id],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED in Query"+error.message)
        
        console.log(row);
         res.send(JSON.stringify({row}))
    })         
    })    
// })


module.exports=route