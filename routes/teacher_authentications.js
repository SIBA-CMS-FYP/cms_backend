
const express = require('express')
const route = express.Router()
const con = require('./connection')

route.post("/techerlogin", (req, res) => {
    var teacher_id =req.body.teacher_id;
    var password = req.body.password;
    console.log("teacher CMS "+teacher_id+" Password "+password)
    // con.connect(function(err){
    //     if(err){
    //         console.log("ERROR "+err.message)
    //         return;
    //     }
    con.query("SELECT * FROM techer_auth WHERE teacher_id=? AND password=?;", [teacher_id, password], (error, row, column) => {

        if (error)
            console.log("ERROR OCCURED");
        console.log(row[0]);

        if (row.length > 0) {
            res.send(true)
        }
        else {
            res.send(false)
        }
    })
})
// })


module.exports = route