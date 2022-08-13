
const express = require('express')
const route = express.Router()
const con = require('./connection')

route.post("/techerlogin", (req, res) => {
    var teacher_id =req.body.teacher_id;
    var password = req.body.password;
    console.log("teacher CMS "+teacher_id+" Password "+password)
    con.query("SELECT * FROM techer_auth WHERE teacher_id=? AND password=?;", [teacher_id, password], (error, row, column) => {
        if (error)
            console.log("ERROR OCCURED");
        console.log(row[0]);
        if (row.length > 0) {
            res.send({success:true,message:"login Successfull"})
        }
        else {
            res.send({success:false,message:"Invalide credential"})
        }
    })
})

route.post("/hodlogin", (req, res) => {
    var hodcms =req.body.hodcms;
    var password = req.body.password;
    console.log("hod CMS "+ hodcms+" Password "+password)
    con.query("SELECT * FROM hod_authentication WHERE hodcms=? AND password=?;", [hodcms, password], (error, row, column) => {

        if (error)
            console.log("ERROR OCCURED");
        console.log(row[0]);


        if (row.length > 0) {
            res.send({success:true,message:"login Successfull"})
        }
        else {

            res.send({success:false,message:"Invalid credential"})
        }
    })
})


module.exports = route