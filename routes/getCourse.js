
const express = require('express')
const route = express.Router()
const con = require('./connection')
route.get('/', (req, res) => {
    var cms = req.query.cms;
    var enroll_id = req.query.enroll_id
    con.query("SELECT courses.course_Title as title, semester_reg.cms as cms, semester_reg.enroll_id FROM courses JOIN semester_reg ON courses.course_Code=semester_reg.course1 Where cms=? AND enroll_id=? ;", [cms, enroll_id], (error, row, column) => {
        if (error)
            return res.send("ERROR OCCURED")

        res.send(JSON.stringify({ row }))
    })
})
route.get('/forWithdraw', (req, res) => {
    var cms = req.query.cms;
    var enroll_id = req.query.enroll_id
    con.query("SELECT courses.course_Title as title, semester_reg.cms as cms, semester_reg.enroll_id,FROM courses JOIN semester_reg ON courses.course_Code=semester_reg.course1 Join Where cms=? AND enroll_id=? ;", [cms, enroll_id], (error, row, column) => {
        if (error)
            return res.send("ERROR OCCURED")

        res.send(JSON.stringify({ row }))
    })
})

module.exports = route