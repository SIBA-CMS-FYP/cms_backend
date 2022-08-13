
const express=require('express')
const route=express.Router()
const con=require('./connection') 

route.post("/sendWithdrawReq", (req , res)=>{
    var course_id=req.body.course_id;
    var cms=req.body.cms;
    var teacher_id=req.body.teacher_id;
    var enroll_id=req.body.enroll_id;
    var isWithdraw=(course_id+enroll_id);
    console.log(course_id+" "+ cms+ " "+teacher_id+ " "+enroll_id)
        con.query("INSERT INTO withdraw (course_id,isWithdraw,teacher_status,Hod_status, cms, teacher_id, enroll_id) VALUES (?,?,?,?,?,?,?)",[course_id,isWithdraw,0,0,cms,teacher_id,enroll_id],(error, row, column)=>{
      if(error)
            return res.send("ERROR OCCURED"+error.message)

        res.send(JSON.stringify({succes:true,message:row}))
    })         
    })    



module.exports=route