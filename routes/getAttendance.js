const express=require('express')
const route=express.Router()
const con=require('./connection')
route.get('/userAttendance',(req,res)=>{
    var cms=req.query.cms;
    var enroll_id=req.query.enroll_id;
    console.log( cms+" "+ enroll_id)
        con.query("Select c.Course_title, a.Course_code as courseCode, sum(if(a.attendance='1',1,0)) as Present, sum(if(a.attendance='0',1,0)) as Absent From courses as c JOIN attendance As a ON c.course_id=a.course_code Where a.cms=? and enroll_id=? Group By c.course_title Order by c.course_code;",[cms,enroll_id],(error,row,column)=>{
            if(error)
                return res.send("ERROR OCCURED"+error.message)

                res.send(JSON.stringify({data:row}))
        })
    })
    route.get('/bySubAttendance',(req,res)=>{
        var cms=req.query.cms;
        var enroll_id=req.query.enroll_id;
        var course_code=req.query.course_Code;
        console.log(cms+ " "+ enroll_id+" "+course_code);
            con.query("Select attendance, Date From attendance Where cms=? and enroll_id=? And course_code=?;",[cms,enroll_id,course_code],(error,row)=>{
                if(error)
                    return res.send("ERROR OCCURED"+error.message)
    
                    res.send(JSON.stringify({row}))
            })
        })

module.exports=route