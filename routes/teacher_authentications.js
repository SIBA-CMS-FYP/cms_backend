
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
route.post("/hodLogin", (req, res) => {
    var hodcms =req.body.hodCMS;
    var password = req.body.hodpassword;
    console.log("Hod CMS "+hodcms+" Password "+password)
    con.query("SELECT * FROM hod_authentication WHERE hodcms=? AND password=?;", [hodcms, password], (error, row, column) => {
        if (error)
            console.log("ERROR OCCURED"+error.message);
         console.log(row[0]);
        if (row.length > 0) {
            res.send({success:true,message:"login Successfull"})
        }
        else {
            res.send({success:false,message:"Invalide credential"})
        }
    })
})

module.exports = route