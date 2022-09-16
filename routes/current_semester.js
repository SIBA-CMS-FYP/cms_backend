const express = require('express')
const route = express.Router()
const con = require('./connection')

route.get('/Semester', (req, res) => {
    var cms = req.query.cms;
    console.log(cms);
    con.query("SELECT courses.course_Title as title, current_semester.enroll_ID, current_semester.cms FROM current_semester JOIN courses ON current_semester.course_Code=courses.course_Code Where cms=?;", [cms], (error, row, column) => {
        if (error)
            return res.send("ERROR OCCURED")

        res.send(JSON.stringify({ row }))
    })
})
route.get('/enrollID', (req, res) => {
    var cms = req.query.cms;
    console.log(cms);
    con.query("SELECT courses.course_Title as title, current_semester.enroll_ID, current_semester.cms FROM current_semester JOIN courses ON current_semester.course_Code=courses.course_Code Where cms=?;", [cms], (error, row, column) => {
        if (error)
            return res.send("ERROR OCCURED")

        res.send(JSON.stringify( row[0].enroll_ID ))
    })
});

route.get('/forWithdraw', (req, res) => {
    var cms = req.query.cms;
    console.log(cms+"xxx");
    con.query("SELECT courses.course_Title as title,courses.course_Code,teachers.teacher_id, current_semester.enroll_ID, current_semester.cms, current_semester.isWithdraw, current_semester.isTeacherAcp,current_semester.isHODAcept,current_semester.CGPA FROM current_semester JOIN courses ON current_semester.course_Code=courses.course_Code Join teachers ON courses.course_id=teachers.course_id Where cms=?", [cms], (error, row, column) => {
        if (error)
            return res.send("ERROR OCCURED"+error.message)

        res.send(JSON.stringify({data:row}))
    })
});

route.post('/withdrawCResponse', (req , res)=>{
    var cms=req.body.cms;
    var course_code=req.body.course_Code;
    console.log( cms+ " course ID "+ course_code)
        con.query("Update current_semester SET isTeacherAcp=true WHERE cms=? AND course_code=?;",[cms,course_code],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED"+error.message)
            
        // console.log(row["affectedRows"]);
         res.send(JSON.stringify(row["affectedRows"]))
    })         
    })    
    route.post('/withdrawTCResponse', (req , res)=>{
        var cms=req.body.cms;
        var Course_Code=req.body.Course_Code;
        console.log( cms+ " course ID "+ Course_Code)
            con.query("Update current_semester SET isHODAcept=true WHERE cms=? AND course_code=?;",[cms,Course_Code],(error, row, column)=>{
         if(error)
                return res.send("ERROR OCCURED"+error.message)
                
            // console.log(row["affectedRows"]);
             res.send(JSON.stringify(row["affectedRows"]))
        })         
        }) 
        route.post('/withdrawTCResponseCancel', (req , res)=>{
            var cms=req.body.cms;
            var Course_Code=req.body.Course_Code;
            console.log( cms+ " course ID "+ Course_Code)
                con.query("Update current_semester SET isTeacherAcp=false WHERE cms=? AND course_code=?;",[cms,Course_Code],(error, row, column)=>{
             if(error)
                    return res.send("ERROR OCCURED"+error.message)
                    
                // console.log(row["affectedRows"]);
                 res.send(JSON.stringify(row["affectedRows"]))
            })         
            }) 
        route.post('/withdrawHCResponse', (req , res)=>{
            var cms=req.body.cms;
            var Course_Code=req.body.Course_Code;
            console.log( cms+ " course ID "+ Course_Code)
                con.query("Update current_semester SET isWithdraw=true WHERE cms=? AND course_code=?;",[cms,Course_Code],(error, row, column)=>{
             if(error)
                    return res.send("ERROR OCCURED"+error.message)
                    
                // console.log(row["affectedRows"]);
                 res.send(JSON.stringify(row["affectedRows"]))
            })         
            }) 
            route.post('/withdrawHCResponseCancel', (req , res)=>{
                var cms=req.body.cms;
                var Course_Code=req.body.Course_Code;
                console.log( cms+ " course ID "+ Course_Code)
                    con.query("Update current_semester SET isTeacherAcp=false,isHODAcept=false  WHERE cms=? AND course_code=?;",[cms,Course_Code],(error, row, column)=>{
                 if(error)
                        return res.send("ERROR OCCURED"+error.message)
                        
                    // console.log(row["affectedRows"]);
                     res.send(JSON.stringify(row["affectedRows"]))
                })         
                }) 
module.exports = route