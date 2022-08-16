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
    console.log(cms);
    con.query("SELECT courses.course_Title as title,courses.course_Code,teachers.teacher_id, current_semester.enroll_ID, current_semester.cms, current_semester.isWithdraw FROM current_semester JOIN courses ON current_semester.course_Code=courses.course_Code Join teachers ON courses.course_id=teachers.course_id Where cms=?", [cms], (error, row, column) => {
        if (error)
            return res.send("ERROR OCCURED"+error.message)

        res.send(JSON.stringify({data:row}))
    })
});

route.post('/withdrawCResponse', (req , res)=>{
    var cms=req.body.cms;
    var course_code=req.body.course_Code;
    console.log("Value Nahi aarahi "+ cms+ " course ID "+ course_code)
        con.query("Update current_semester SET isWithdraw=true WHERE cms=? AND course_code=?;",[cms,course_code],(error, row, column)=>{
     if(error)
            return res.send("ERROR OCCURED"+error.message)
            
        // console.log(row["affectedRows"]);
         res.send(JSON.stringify(row["affectedRows"]))
    })         
    })    
module.exports = route