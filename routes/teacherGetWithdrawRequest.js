
const { Console } = require('console');
const express=require('express')
const route=express.Router()
const con=require('./connection')   

route.get('/Request', (req , res)=>{
    var teacher_id=req.query.teacher_id;
        console.log("teacher_id call"+teacher_id)
        con.query("SELECT concat(s.first_name,' ',s.last_name) as Name,s.cms as CMS, c.course_title,cs.Course_Code,cs.isWithdraw,cs.isTeacherAcp,cs.isHODAcept FROM student_profile As s JOIN current_semester as cs ON s.cms=cs.cms JOIN courses as c ON cs.course_Code=c.course_code Where teacher_id=?;",[teacher_id],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED"+error.message)
            
           
         res.send(JSON.stringify({data:row}))
    })         
    })    
    route.get('/HRequest', (req , res)=>{
        var hodcms=req.query.hodcms;
            console.log("Hod cms call"+hodcms)
            con.query("SELECT concat(s.first_name,' ',s.last_name) as Name,s.cms as CMS, c.course_title,cs.Course_Code,cs.isWithdraw,cs.isTeacherAcp,cs.isHODAcept FROM student_profile As s JOIN current_semester as cs ON s.cms=cs.cms JOIN courses as c ON cs.course_Code=c.course_code Where hodcms=?;",[hodcms],(error, row, column)=>{
         if(error)
                return res.send("ERROR OCCURED"+error.message)
                
               
             res.send(JSON.stringify({data:row}))
        })         
        })  


module.exports=route