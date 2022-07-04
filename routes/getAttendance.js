const express=require('express')
const route=express.Router()
const con=require('./connection')
route.get('/userAttendance',(req,res)=>{
    var cms=req.query.cms;
    var enroll_id=req.query.enroll_id;
    var course_id=req.query.course_id;
    console.log( cms+" "+ enroll_id)
    con.connect(function(err){
        if(err){
            return console.log("ERROR"+err.message)
        }
        con.query("SELECT * FROM attendance WHERE course_id=? AND CMS=? AND enroll_id=? ;",[course_id,cms,enroll_id],(error,row,column)=>{
            if(error)
                return res.send("ERROR OCCURED")

            res.send(JSON.stringify({row}))
        })
    })
})

module.exports=route