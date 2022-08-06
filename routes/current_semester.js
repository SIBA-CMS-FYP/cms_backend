const express = require('express')
const route = express.Router()
const con = require('./connection')

route.get('/Semester', (req, res) => {
    var cms = req.query.cms;
    console.log(cms);
    con.query("SELECT courses.course_Title as title FROM current_semester JOIN courses ON current_semester.course_Code=courses.course_Code Where cms=?;", [cms], (error, row, column) => {
        if (error)
            return res.send("ERROR OCCURED")

        res.send(JSON.stringify({ row }))
    })
})

module.exports = route