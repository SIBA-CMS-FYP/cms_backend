
const express = require('express')
const route = express.Router()
const con = require('./connection')

route.post("/techerlogin", (req, res) => {
    var teacher_id = req.query.teacher_id;
    var password = req.query.password;

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
            res.send({ success: true, data: row[0], message: 'Loggedin successfully' })
        }
        else {
            res.send({ success: false, message: 'Invalid credentials' })
        }
    })
})
// })


module.exports = route